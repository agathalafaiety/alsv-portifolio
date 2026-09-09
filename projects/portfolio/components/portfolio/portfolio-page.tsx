'use client';

import {
  EducationSection,
  ExperienceSection,
} from '@/components/portfolio/career-sections';
import {
  ContactSection,
  SiteFooter,
} from '@/components/portfolio/contact-footer';
import {
  ArticlesSection,
  SocialSection,
  TalksSection,
} from '@/components/portfolio/content-sections';
import { HeroSection } from '@/components/portfolio/hero-section';
import {
  AboutSection,
  ToolsSection,
} from '@/components/portfolio/profile-sections';
import { SiteHeader } from '@/components/portfolio/site-header';
import { usePortfolioController } from '@/features/portfolio/application/use-portfolio-controller';

export function PortfolioPage() {
  const controller = usePortfolioController();

  return (
    <main id="top" className="site-shell">
      <a className="skip-link" href="#conteudo">
        {controller.locale === 'pt'
          ? 'Pular para o conteúdo'
          : 'Skip to content'}
      </a>
      <SiteHeader
        activeSection={controller.activeSection}
        dark={controller.dark}
        locale={controller.locale}
        menuOpen={controller.menuOpen}
        navItems={controller.navItems}
        onCloseMenu={controller.closeMenu}
        onOpenMenu={controller.openMenu}
        onToggleLocale={controller.toggleLocale}
        onToggleTheme={controller.toggleTheme}
      />
      <div id="conteudo">
        <HeroSection locale={controller.locale} />
        <AboutSection locale={controller.locale} />
        <ToolsSection locale={controller.locale} />
        <ExperienceSection locale={controller.locale} />
        <EducationSection locale={controller.locale} />
        <ArticlesSection locale={controller.locale} />
        <TalksSection locale={controller.locale} />
        <SocialSection locale={controller.locale} />
        <ContactSection locale={controller.locale} />
      </div>
      <SiteFooter locale={controller.locale} />
    </main>
  );
}
