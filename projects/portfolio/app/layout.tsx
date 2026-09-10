import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import { PortfolioAnalytics } from '@/components/analytics/portfolio-analytics';
import { EXTERNAL_LINKS } from '@/features/portfolio/config';
import './globals.css';

const SITE_URL = 'https://agathalafaiety.com.br';
const SITE_DESCRIPTION =
  'Engenheira de Software e IA focada na intersecção entre Backend, Cloud e Inteligência Artificial.';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: 'Agatha Lafaiety',
  title: 'Agatha Lafaiety',
  description: SITE_DESCRIPTION,
  authors: [{ name: 'Agatha Lafaiety' }],
  creator: 'Agatha Lafaiety',
  category: 'technology',
  icons: {
    icon: [
      { url: '/favicon.svg?v=4', type: 'image/svg+xml' },
      { url: '/icon-192.png?v=4', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.svg?v=4',
    apple: [{ url: '/apple-touch-icon.png?v=4', sizes: '180x180' }],
  },
  manifest: '/site.webmanifest',
  formatDetection: { telephone: false, address: false, email: false },
  keywords: [
    'Engenharia de Software',
    'Inteligência Artificial',
    'Backend',
    'Cloud',
    'LLMs',
    'RAG',
    'MLOps',
  ],
  verification: {
    google: 'EWPtGuzCmWvcBLyHjDbm2hmq7qwdfC5xecJq7h0o_So',
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    siteName: 'Agatha Lafaiety',
    title: 'Agatha Lafaiety | Engenheira de Software e IA',
    description:
      'Engenheira de Software e IA focada na intersecção entre Backend, Cloud e Inteligência Artificial.',
    images: [
      {
        url: '/og.png?v=4',
        width: 1672,
        height: 941,
        alt: 'Agatha Lafaiety — Engenheira de Software e IA',
      },
    ],
  },
  alternates: { canonical: '/' },
  twitter: {
    card: 'summary_large_image',
    title: 'Agatha Lafaiety | Engenheira de Software e IA',
    description: 'Backend, Cloud e Inteligência Artificial.',
    images: ['/og.png?v=4'],
  },
};

const profilePageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': `${SITE_URL}/#profile-page`,
  url: `${SITE_URL}/`,
  name: 'Agatha Lafaiety | Engenheira de Software e IA',
  description: SITE_DESCRIPTION,
  inLanguage: ['pt-BR', 'en'],
  mainEntity: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#agatha-lafaiety`,
    name: 'Agatha Lafaiety',
    alternateName: '@agathalafaiety',
    url: `${SITE_URL}/`,
    jobTitle: 'Engenheira de Software e Inteligência Artificial',
    description: SITE_DESCRIPTION,
    sameAs: Object.values(EXTERNAL_LINKS),
    knowsAbout: [
      'Engenharia de Software',
      'Inteligência Artificial',
      'Backend',
      'Cloud Computing',
      'Large Language Models',
      'Retrieval-Augmented Generation',
      'MLOps',
    ],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f4efdc' },
    { media: '(prefers-color-scheme: dark)', color: '#191719' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(profilePageStructuredData).replace(
              /</g,
              '\\u003c',
            ),
          }}
        />
      </head>
      <body className={`${montserrat.variable} antialiased`}>
        {children}
        <PortfolioAnalytics />
      </body>
    </html>
  );
}
