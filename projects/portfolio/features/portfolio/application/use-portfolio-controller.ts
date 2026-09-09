'use client';

import { useCallback, useEffect, useMemo, useState } from 'react';
import { copy } from '@/content/portfolio';
import { PORTFOLIO_SECTIONS, SECTION_IDS } from '../config';
import type { Locale, NavItem, SectionId } from '../domain/types';

function useDocumentTheme(dark: boolean) {
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
    document.documentElement.style.colorScheme = dark ? 'dark' : 'light';
  }, [dark]);
}

function useDocumentLocale(locale: Locale) {
  useEffect(() => {
    document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
  }, [locale]);
}

function useMenuBehavior(menuOpen: boolean, closeMenu: () => void) {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    if (!menuOpen) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [closeMenu, menuOpen]);
}

function useActiveSection(): SectionId | 'top' {
  const [activeSection, setActiveSection] = useState<SectionId | 'top'>('top');

  useEffect(() => {
    const sections = SECTION_IDS.map((id) =>
      document.getElementById(id),
    ).filter((section): section is HTMLElement => section !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActiveSection(visible.target.id as SectionId);
        }
      },
      { rootMargin: '-25% 0px -60%', threshold: [0.1, 0.35, 0.65] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeSection;
}

function useRevealOnScroll() {
  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>('[data-reveal]');
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        }),
      { threshold: 0.12 },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);
}

export function usePortfolioController() {
  const [locale, setLocale] = useState<Locale>('pt');
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection();
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useDocumentTheme(dark);
  useDocumentLocale(locale);
  useMenuBehavior(menuOpen, closeMenu);
  useRevealOnScroll();

  const navItems = useMemo<readonly NavItem[]>(() => {
    return PORTFOLIO_SECTIONS.map(({ id, navKey }) => ({
      key: id,
      label: copy[locale].nav[navKey],
      href: `#${id}`,
      sectionId: id,
    }));
  }, [locale]);

  return {
    activeSection,
    dark,
    locale,
    menuOpen,
    navItems,
    closeMenu,
    openMenu: () => setMenuOpen(true),
    toggleLocale: () => setLocale((value) => (value === 'pt' ? 'en' : 'pt')),
    toggleTheme: () => setDark((value) => !value),
  } as const;
}
