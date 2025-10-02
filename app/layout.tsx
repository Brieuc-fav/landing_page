import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const siteUrl = 'https://www.paroisses.fr';
const siteName = 'Paroisses de France';

export const metadata: Metadata = {
  title: 'Paroisses de France — Créez le site de votre paroisse en quelques minutes',
  description:
    'La plateforme simple pour publier horaires de messes, actualités, projets et dons. Pensée pour les paroisses et diocèses.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: siteUrl,
    siteName,
    title: 'Paroisses de France — Créez le site de votre paroisse en quelques minutes',
    description:
      'La plateforme simple pour publier horaires de messes, actualités, projets et dons. Pensée pour les paroisses et diocèses.',
    images: [
      {
        url: '/hero.jpg',
        width: 1600,
        height: 900,
        alt: 'Vue de la plateforme Paroisses de France',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@paroisses_fr',
    title: 'Paroisses de France — Créez le site de votre paroisse en quelques minutes',
    description:
      'La plateforme simple pour publier horaires de messes, actualités, projets et dons. Pensée pour les paroisses et diocèses.',
    images: ['/hero.jpg'],
  },
  icons: {
    icon: '/favicon.ico',
  },
  alternates: {
    canonical: siteUrl,
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#b8860b',
};

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'contact@paroisses.fr',
    contactType: 'customer support',
    availableLanguage: ['French'],
  },
};

const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteName,
  url: siteUrl,
  potentialAction: {
    '@type': 'SearchAction',
    target: `${siteUrl}/recherche?q={search_term_string}`,
    'query-input': 'required name=search_term_string',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([organizationJsonLd, websiteJsonLd]),
          }}
          suppressHydrationWarning
        />
      </body>
    </html>
  );
}
