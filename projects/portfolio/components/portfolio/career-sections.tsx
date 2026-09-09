import Image from 'next/image';
import { copy, experiences, volunteerWork } from '@/content/portfolio';
import type { Locale } from '@/features/portfolio/domain/types';

export function ExperienceSection({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section id="experiencia" className="experience-section" data-reveal>
      <div className="experience-intro">
        <div>
          <p className="eyebrow">
            03 · {locale === 'pt' ? 'Trajetória' : 'Journey'}
          </p>
          <h2>{t.experienceTitle}</h2>
        </div>
        <p>{t.experienceBody}</p>
      </div>
      <div className="experience-list">
        {experiences.map((experience, index) => (
          <article
            className={`experience-card ${index === 0 ? 'featured' : ''}`}
            key={experience.company}
          >
            <div
              className="experience-marker"
              data-logo-tone={experience.logo.tone}
              aria-hidden="true"
            >
              <Image src={experience.logo.src} alt="" width={52} height={52} />
            </div>
            <div className="experience-content">
              <div className="experience-card-header">
                <div className="company-line">
                  <p className="company">{experience.company}</p>
                  {index === 0 && (
                    <span className="current-badge">{t.current}</span>
                  )}
                </div>
                <div className="experience-date">{experience.date[locale]}</div>
              </div>
              <h3>{experience.role[locale]}</h3>
              <p>{experience.description[locale]}</p>
              <div className="tag-list">
                {experience.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function EducationSection({ locale }: { locale: Locale }) {
  const t = copy[locale];

  return (
    <section className="education-section" data-reveal>
      <div className="section-heading-row compact">
        <div>
          <p className="eyebrow">
            04 · {locale === 'pt' ? 'Formação' : 'Foundation'}
          </p>
          <h2>{t.educationTitle}</h2>
        </div>
      </div>
      <div className="education-grid">
        <article>
          <span>
            {locale === 'pt' ? 'Formação acadêmica' : 'Academic background'}
          </span>
          <ul className="education-list">
            <li>
              <strong>Big Data e Inteligência Analítica</strong>
              <span>Universidade São Judas Tadeu · 2025</span>
            </li>
            <li>
              <strong>
                {locale === 'pt'
                  ? 'Técnico em Desenvolvimento de Sistemas'
                  : 'Systems Development Technician'}
              </strong>
              <span>ETEC · 2022</span>
            </li>
            <li>
              <strong>
                {locale === 'pt'
                  ? 'Ensino Médio · Escola pública'
                  : 'High School · Public school'}
              </strong>
              <span>E.E. Bertha Corrêa e Castro da Rocha · 2021</span>
            </li>
          </ul>
        </article>
        <article>
          <span>{locale === 'pt' ? 'Certificações' : 'Certifications'}</span>
          <p className="education-source">Itaú Unibanco</p>
          <ul className="certification-list">
            <li>
              <strong>Data Modelling</strong>
              <small>Associate</small>
            </li>
            <li>
              <strong>Generative AI</strong>
              <small>Practitioner</small>
            </li>
            <li>
              <strong>Data & Analytics Foundation</strong>
              <small>Practitioner</small>
            </li>
          </ul>
        </article>
        <article>
          <span>{locale === 'pt' ? 'Voluntariado' : 'Volunteer work'}</span>
          <ul className="community-list">
            {volunteerWork.map(({ organization, role }) => (
              <li key={organization}>
                <strong>{organization}</strong>
                <span>{role[locale]}</span>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  );
}
