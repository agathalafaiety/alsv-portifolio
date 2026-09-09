export type Locale = 'pt' | 'en';

export type LocalizedText = Readonly<Record<Locale, string>>;

export type SectionId =
  | 'sobre'
  | 'ferramentas'
  | 'experiencia'
  | 'artigos'
  | 'palestras'
  | 'contato';

export type NavItem = Readonly<{
  key: string;
  label: string;
  href: string;
  sectionId?: SectionId;
  external?: boolean;
}>;

export type Experience = Readonly<{
  company: string;
  logo: Readonly<{
    src: string;
    tone?: 'dark' | 'light';
  }>;
  date: LocalizedText;
  role: LocalizedText;
  description: LocalizedText;
  tags: readonly string[];
}>;

export type ToolGroup = Readonly<{
  title: LocalizedText;
  items: readonly string[];
}>;

export type Article = Readonly<{
  title: string;
  description: LocalizedText;
  href: string;
  index: string;
}>;

export type VolunteerWork = Readonly<{
  organization: string;
  role: LocalizedText;
}>;

export type SocialLabel =
  | 'LinkedIn'
  | 'GitHub'
  | 'Medium'
  | 'Instagram'
  | 'YouTube'
  | 'Linktree';

export type SocialLink = Readonly<{
  label: SocialLabel;
  href: string;
}>;
