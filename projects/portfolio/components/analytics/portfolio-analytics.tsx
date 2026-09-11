'use client';

import { useEffect } from 'react';
import type { Metric } from 'web-vitals';

const MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? 'G-9TYSDTPJQW';

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

function startAnalytics() {
  if (
    process.env.NODE_ENV !== 'production' ||
    !MEASUREMENT_ID ||
    document.querySelector('[data-portfolio-analytics]')
  )
    return;

  window.dataLayer = window.dataLayer ?? [];
  window.gtag =
    window.gtag ??
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    };

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
  useEffect(() => {
    startAnalytics();
    if (process.env.NODE_ENV !== 'production') return;

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

    let cancelled = false;
    void import('web-vitals').then(({ onCLS, onINP, onLCP }) => {
      if (cancelled) return;

      onCLS(sendWebVital);
      onINP(sendWebVital);
      onLCP(sendWebVital);
    });

    return () => {
      cancelled = true;
      document.removeEventListener('click', onClick);
    };
  }, []);

  return null;
}
