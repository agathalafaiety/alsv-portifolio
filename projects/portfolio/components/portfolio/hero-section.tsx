import { ArrowDown, ArrowUpRight, Mail } from 'lucide-react';
import { copy, expertise } from '@/content/portfolio';
import { CONTACT, SOCIAL_LINKS } from '@/features/portfolio/config';
import type { Locale } from '@/features/portfolio/domain/types';

export function HeroSection({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div aria-hidden="true" className="hero-sun" />
      <div aria-hidden="true" className="hero-orbit hero-orbit-one" />
      <div aria-hidden="true" className="hero-orbit hero-orbit-two" />
      <div className="hero-grid">
        <div className="hero-copy">
          <h1 id="hero-title">
            <span>{t.heroTitleA}</span>
            <strong>{t.heroTitleB}</strong>
          </h1>
          <p className="hero-role">{t.heroLabel}</p>
          <p className="hero-description">{t.heroText}</p>
          <div className="availability-line">
            <span aria-hidden="true" />
            {locale === 'pt'
              ? 'Aberta a oportunidades, parcerias e colaborações'
              : 'Open to opportunities, partnerships and collaborations'}
          </div>
          <div className="hero-buttons">
            <a className="button-primary" href="#sobre">
              {t.heroPrimary}
              <ArrowDown size={16} />
            </a>
            <a className="button-secondary" href={CONTACT.mailto}>
              <Mail size={17} />
              {t.heroSecondary}
            </a>
          </div>
          <div className="hero-socials">
            {SOCIAL_LINKS.slice(0, 4).map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {label}
                <ArrowUpRight size={14} />
              </a>
            ))}
          </div>
        </div>

        <aside
          className="hero-focus"
          aria-label={
            locale === 'pt' ? 'Áreas de atuação' : 'Areas of expertise'
          }
        >
          <p>{locale === 'pt' ? 'Áreas de atuação' : 'Areas of expertise'}</p>
          <ol>
            {expertise.map((item, index) => (
              <li key={item.en}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                {item[locale]}
              </li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  );
}
