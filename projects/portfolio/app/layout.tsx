import type { Metadata, Viewport } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    'https://agathalafaiety.com.br',
  ),
  applicationName: 'Agatha Lafaiety',
  title: 'Agatha Lafaiety',
  description:
    'Engenheira de Software e IA focada na intersecção entre Backend, Cloud e Inteligência Artificial.',
  authors: [{ name: 'Agatha Lafaiety' }],
  creator: 'Agatha Lafaiety',
  category: 'technology',
  icons: {
    icon: [
      { url: '/favicon.svg?v=3', type: 'image/svg+xml' },
      { url: '/icon-192.png?v=3', sizes: '192x192', type: 'image/png' },
    ],
    shortcut: '/favicon.svg?v=3',
    apple: [{ url: '/apple-touch-icon.png?v=3', sizes: '180x180' }],
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
        url: '/og.png?v=3',
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
    images: ['/og.png?v=3'],
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
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
