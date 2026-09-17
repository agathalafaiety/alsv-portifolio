import type { SectionId, SocialLink } from './domain/types';

export const PORTFOLIO_SECTIONS = [
  { id: 'sobre', navKey: 'about' },
  { id: 'ferramentas', navKey: 'tools' },
  { id: 'experiencia', navKey: 'experience' },
  { id: 'artigos', navKey: 'articles' },
  { id: 'palestras', navKey: 'talks' },
  { id: 'contato', navKey: 'contact' },
] as const satisfies readonly {
  id: SectionId;
  navKey: 'about' | 'tools' | 'experience' | 'articles' | 'talks' | 'contact';
}[];

export const SECTION_IDS = PORTFOLIO_SECTIONS.map(({ id }) => id);

export const EXTERNAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/agathalafaiety/',
  github: 'https://github.com/agathalafaiety',
  medium: 'https://agathalafaiety.medium.com',
  instagram: 'https://www.instagram.com/agathalafaiety/',
  youtube: 'https://www.youtube.com/@agathalafaiety',
} as const;

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: EXTERNAL_LINKS.linkedin },
  { label: 'GitHub', href: EXTERNAL_LINKS.github },
  { label: 'Medium', href: EXTERNAL_LINKS.medium },
  { label: 'Instagram', href: EXTERNAL_LINKS.instagram },
  { label: 'YouTube', href: EXTERNAL_LINKS.youtube },
] as const satisfies readonly SocialLink[];

export const PUBLIC_ASSETS = {
  talkMaterial: '/talks/material-ia-2026.pdf',
} as const;

export const CONTACT = {
  email: 'agatha.lafaietyy@gmail.com',
  mailto:
    'mailto:agatha.lafaietyy@gmail.com?subject=Contato%20pelo%20portfólio',
} as const;
