import { ArrowUpRight, Download, FileText } from 'lucide-react';
import { articles, copy, talkTags } from '@/content/portfolio';
import {
  EXTERNAL_LINKS,
  PUBLIC_ASSETS,
  SOCIAL_LINKS,
} from '@/features/portfolio/config';
import type { Locale } from '@/features/portfolio/domain/types';
import { SocialIcon } from './social-icon';

export function ArticlesSection({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section id="artigos" className="articles-section" data-reveal>
      <div className="section-heading-row">
        <div>
          <p className="eyebrow">
            05 · {locale === 'pt' ? 'Escrita' : 'Writing'}
          </p>
          <h2>{t.articlesTitle}</h2>
        </div>
        <p>{t.articlesBody}</p>
      </div>
      <div className="article-list">
        {articles.map((article) => (
          <a
            key={article.index}
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            className="article-row"
          >
            <span>{article.index}</span>
            <div>
              <h3>{article.title}</h3>
              <p>{article.description[locale]}</p>
            </div>
            <span className="article-action">
              {t.readArticle}
              <ArrowUpRight size={18} />
            </span>
          </a>
        ))}
      </div>
      <a
        className="text-link"
        href={EXTERNAL_LINKS.medium}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.allArticles}
        <ArrowUpRight size={16} />
      </a>
    </section>
  );
}

export function TalksSection({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section id="palestras" className="talks-section" data-reveal>
      <div className="talks-heading">
        <p className="eyebrow">
          06 · {locale === 'pt' ? 'Palestras' : 'Speaking'}
        </p>
        <h2>{t.talksTitle}</h2>
        <p>{t.talksBody}</p>
      </div>
      <article className="talk-card">
        <div className="talk-poster" aria-hidden="true">
          <span>AL.</span>
          <small>{t.talkType}</small>
          <strong>
            {locale === 'pt' ? 'Trajetória' : 'Journey'}
            <br />
            + {locale === 'pt' ? 'IA' : 'AI'}
          </strong>
          <i>→</i>
        </div>
        <div className="talk-copy">
          <div className="talk-meta">
            <span>{t.talkType}</span>
          </div>
          <h3>{t.talkTitle}</h3>
          <p>{t.talkDescription}</p>
          <div className="talk-tags">
            {talkTags.map((tag) => (
              <span key={tag.en}>{tag[locale]}</span>
            ))}
          </div>
          <p className="talk-notice">{t.talkNotice}</p>
          <div className="talk-actions">
            <a
              className="button-primary"
              href={PUBLIC_ASSETS.talkMaterial}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FileText size={17} />
              {t.openMaterial}
            </a>
            <a
              className="button-secondary"
              href={PUBLIC_ASSETS.talkMaterial}
              download
            >
              <Download size={17} />
              {t.downloadPdf}
            </a>
            <a
              className="text-link"
              href={EXTERNAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.inviteTalk}
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export function SocialSection({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className="content-section" data-reveal>
      <div>
        <p className="eyebrow">07 · {locale === 'pt' ? 'Redes' : 'Social'}</p>
        <h2>{t.contentTitle}</h2>
        <p>{t.contentBody}</p>
      </div>
      <div className="social-grid">
        {SOCIAL_LINKS.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noopener noreferrer">
            <SocialIcon label={label} />
            <span>{label}</span>
            <ArrowUpRight size={16} />
          </a>
        ))}
      </div>
    </section>
  );
}
