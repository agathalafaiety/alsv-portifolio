'use client';

import { useCallback, useEffect, useState, useSyncExternalStore } from 'react';
import type { Metric } from 'web-vitals';

const MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-9TYSDTPJQW';
const CONSENT_STORAGE_KEY = 'agatha-portfolio-analytics-consent';
const CONSENT_CHANGE_EVENT = 'portfolio-analytics-consent-change';

type Consent = 'granted' | 'denied';
type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

function eventForLink(anchor: HTMLAnchorElement) {
  const rawHref = anchor.getAttribute('href') ?? '';

  if (rawHref.startsWith('mailto:')) return 'contact_email_click';

  try {
    const url = new URL(anchor.href, window.location.href);
    const hostname = url.hostname.replace(/^www\./, '');

    if (hostname === 'linkedin.com') return 'linkedin_click';
    if (hostname.endsWith('medium.com')) return 'article_click';
    if (
      url.origin === window.location.origin &&
      url.pathname.startsWith('/talks/')
    ) {
      return 'talk_material_click';
    }
  } catch {
    return null;
  }

  return null;
}

function sendWebVital(metric: Metric) {
  window.gtag?.('event', 'web_vital', {
    metric_name: metric.name,
    metric_id: metric.id,
    metric_rating: metric.rating,
    metric_delta: Math.round(
      metric.name === 'CLS' ? metric.delta * 1000 : metric.delta,
    ),
    value: Math.round(
      metric.name === 'CLS' ? metric.value * 1000 : metric.value,
    ),
    non_interaction: true,
  });
}

function removeAnalyticsCookies() {
  const rootDomain = window.location.hostname.replace(/^www\./, '');

  for (const cookie of document.cookie.split(';')) {
    const name = cookie.split('=')[0]?.trim();
    if (!name?.startsWith('_ga')) continue;

    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.${rootDomain}; SameSite=Lax`;
  }
}

function getConsentSnapshot(): Consent | null {
  if (typeof window === 'undefined') return null;

  const storedConsent = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return storedConsent === 'granted' || storedConsent === 'denied'
    ? storedConsent
    : null;
}

function subscribeToConsent(onStoreChange: () => void) {
  window.addEventListener('storage', onStoreChange);
  window.addEventListener(CONSENT_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener('storage', onStoreChange);
    window.removeEventListener(CONSENT_CHANGE_EVENT, onStoreChange);
  };
}

function startAnalytics() {
  if (!MEASUREMENT_ID || document.querySelector('[data-portfolio-analytics]'))
    return;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

  window.gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
  });
  window.gtag('consent', 'update', { analytics_storage: 'granted' });
  window.gtag('js', new Date());
  window.gtag('config', MEASUREMENT_ID, {
    anonymize_ip: true,
    send_page_view: true,
  });

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(MEASUREMENT_ID)}`;
  script.dataset.portfolioAnalytics = 'true';
  document.head.appendChild(script);
}

export function PortfolioAnalytics() {
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    () => null,
  );

  useEffect(() => {
    if (consent !== 'granted') return;

    startAnalytics();

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest<HTMLAnchorElement>('a[href]');
      if (!anchor) return;

      const eventName = eventForLink(anchor);
      if (!eventName) return;

      window.gtag?.('event', eventName, {
        link_url: anchor.href,
        link_text:
          anchor.textContent?.trim().replace(/\s+/g, ' ').slice(0, 100) ?? '',
        link_location: anchor.closest<HTMLElement>('[id]')?.id ?? 'global',
      });
    };

    document.addEventListener('click', onClick);

    void import('web-vitals').then(({ onCLS, onINP, onLCP }) => {
      onCLS(sendWebVital);
      onINP(sendWebVital);
      onLCP(sendWebVital);
    });

    return () => document.removeEventListener('click', onClick);
  }, [consent]);

  const chooseConsent = useCallback((choice: Consent) => {
    window.localStorage.setItem(CONSENT_STORAGE_KEY, choice);
    window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
    setPreferencesOpen(false);

    if (choice === 'denied') {
      window.gtag?.('consent', 'update', { analytics_storage: 'denied' });
      removeAnalyticsCookies();
    }
  }, []);

  if (!MEASUREMENT_ID) return null;

  return (
    <>
      {preferencesOpen || consent === null ? (
        <dialog
          open
          className="metrics-consent"
          aria-labelledby="metrics-consent-title"
        >
          <div>
            <strong id="metrics-consent-title">Métricas de experiência</strong>
            <p>
              Posso usar o Google Analytics para medir cliques e desempenho. A
              coleta só começa se você aceitar; não uso dados para publicidade.
            </p>
          </div>
          <div className="metrics-consent-actions">
            <button type="button" onClick={() => chooseConsent('denied')}>
              Agora não
            </button>
            <button
              type="button"
              className="accept"
              onClick={() => chooseConsent('granted')}
            >
              Aceitar métricas
            </button>
          </div>
        </dialog>
      ) : (
        <button
          type="button"
          className="metrics-preferences"
          onClick={() => setPreferencesOpen(true)}
          aria-label="Reabrir preferências de métricas"
        >
          Privacidade
        </button>
      )}
    </>
  );
}
