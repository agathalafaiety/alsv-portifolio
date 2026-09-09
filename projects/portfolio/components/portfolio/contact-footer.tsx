import { copy } from '@/content/portfolio';
import { EXTERNAL_LINKS } from '@/features/portfolio/config';
import type { Locale } from '@/features/portfolio/domain/types';
import { SocialIcon } from './social-icon';

export function ContactSection({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section id="contato" className="contact-section" data-reveal>
      <div className="contact-orbit" aria-hidden="true" />
      <div className="contact-inner">
        <span className="contact-monogram">AL.</span>
        <h2>{t.contactTitle}</h2>
        <p>{t.contactBody}</p>
        <div className="contact-actions">
          <a
            className="button-yellow"
            href={EXTERNAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            <SocialIcon label="LinkedIn" size={18} />
            {t.linkedin}
          </a>
        </div>
      </div>
    </section>
  );
}

export function SiteFooter({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <footer>
      <p>© 2026 Agatha Lafaiety — {t.footer}</p>
      <a href="#top" className="back-top">
        {locale === 'pt' ? 'Voltar ao topo' : 'Back to top'} ↑
      </a>
    </footer>
  );
}
