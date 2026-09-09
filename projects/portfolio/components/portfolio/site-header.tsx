import { Menu, Moon, Sun, X } from 'lucide-react';
import { copy } from '@/content/portfolio';
import { EXTERNAL_LINKS } from '@/features/portfolio/config';
import type {
  Locale,
  NavItem,
  SectionId,
} from '@/features/portfolio/domain/types';

type SiteHeaderProps = {
  activeSection: SectionId | 'top';
  dark: boolean;
  locale: Locale;
  menuOpen: boolean;
  navItems: readonly NavItem[];
  onCloseMenu: () => void;
  onOpenMenu: () => void;
  onToggleLocale: () => void;
  onToggleTheme: () => void;
};

export function SiteHeader({
  activeSection,
  dark,
  locale,
  menuOpen,
  navItems,
  onCloseMenu,
  onOpenMenu,
  onToggleLocale,
  onToggleTheme,
}: SiteHeaderProps) {
  const t = copy[locale];
  const navigationLabel =
    locale === 'pt' ? 'Navegação principal' : 'Main navigation';

  return (
    <>
      <header className="site-header">
        <div className="scroll-progress" aria-hidden="true">
          <span />
        </div>
        <div className="site-header-inner">
          <a
            href="#top"
            className="brand-mark"
            aria-label="Agatha Lafaiety — início"
          >
            @agathalafaiety
          </a>
          <nav aria-label={navigationLabel} className="desktop-nav">
            {navItems
              .filter(({ sectionId }) => sectionId !== 'contato')
              .map(({ external, href, key, label, sectionId }) => (
                <a
                  key={key}
                  className={`nav-link ${sectionId && activeSection === sectionId ? 'active' : ''}`}
                  href={href}
                  aria-current={
                    sectionId && activeSection === sectionId
                      ? 'location'
                      : undefined
                  }
                  target={external ? '_blank' : undefined}
                  rel={external ? 'noopener noreferrer' : undefined}
                  title={external ? `${label} · GitHub` : undefined}
                >
                  {label}
                </a>
              ))}
          </nav>
          <div className="header-actions">
            <button
              className="icon-button locale-button"
              onClick={onToggleLocale}
              aria-label={
                locale === 'pt' ? 'Switch to English' : 'Mudar para português'
              }
            >
              {locale === 'pt' ? 'EN' : 'PT'}
            </button>
            <button
              className="icon-button"
              onClick={onToggleTheme}
              aria-label={dark ? 'Ativar tema claro' : 'Ativar tema escuro'}
              aria-pressed={dark}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <a
              className="header-cta"
              href={EXTERNAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.contact}
            </a>
            <button
              className="icon-button menu-button"
              onClick={onOpenMenu}
              aria-label={locale === 'pt' ? 'Abrir menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      <dialog
        id="mobile-navigation"
        className={`mobile-menu ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
        aria-modal="true"
        inert={!menuOpen}
        open
      >
        <div className="mobile-menu-top">
          <span className="mobile-monogram">AL.</span>
          <button
            className="icon-button icon-button-light"
            onClick={onCloseMenu}
            aria-label={locale === 'pt' ? 'Fechar menu' : 'Close menu'}
          >
            <X size={22} />
          </button>
        </div>
        <nav aria-label={navigationLabel}>
          {navItems.map(({ external, href, key, label }, index) => (
            <a
              key={key}
              href={href}
              onClick={onCloseMenu}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              title={external ? `${label} · GitHub` : undefined}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {label}
            </a>
          ))}
        </nav>
      </dialog>
    </>
  );
}
