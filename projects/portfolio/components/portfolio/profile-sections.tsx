import { copy, toolGroups } from '@/content/portfolio';
import type { Locale } from '@/features/portfolio/domain/types';

export function AboutSection({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section id="sobre" className="section-dark" data-reveal>
      <div className="about-layout">
        <div className="about-heading">
          <p className="eyebrow">01 · {locale === 'pt' ? 'Sobre' : 'About'}</p>
          <h2>{t.aboutTitle}</h2>
        </div>
        <div className="about-copy">
          <p className="section-lead">{t.aboutBody}</p>
          <p className="section-secondary">{t.aboutPersonal}</p>
        </div>
      </div>
    </section>
  );
}

export function ToolsSection({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section id="ferramentas" className="section-light" data-reveal>
      <div className="section-heading-row">
        <div>
          <p className="eyebrow">
            02 · {locale === 'pt' ? 'Ferramentas' : 'Stack'}
          </p>
          <h2>{t.toolsTitle}</h2>
        </div>
        <p>{t.toolsBody}</p>
      </div>
      <div className="tool-grid">
        {toolGroups.map((group, index) => (
          <article className="tool-group" key={group.title.pt}>
            <span className="tool-number">0{index + 1}</span>
            <h3>{group.title[locale]}</h3>
            <ul>
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
