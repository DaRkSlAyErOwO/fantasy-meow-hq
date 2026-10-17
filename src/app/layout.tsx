import type { Metadata } from 'next';
import { Pixelify_Sans, Lora, Inter } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig } from '@/config/site.config';

const pixelifySans = Pixelify_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pixelify',
});

const lora = Lora({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lora',
});

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.SITE_NAME} | ${siteConfig.TAGLINE_PRIMARY}`,
    template: `%s | ${siteConfig.SITE_NAME}`,
  },
  description: siteConfig.DESCRIPTION,
  metadataBase: new URL(siteConfig.SITE_URL),
  icons: {
    icon: [
      { url: '/icon.png', sizes: '512x512', type: 'image/png' },
      { url: '/assets/web/brand/logo-crest-square.webp', sizes: '512x512', type: 'image/webp' },
      { url: '/assets/web/icons/icon-256.png', sizes: '256x256', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/assets/web/icons/apple-icon-180.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    title: `${siteConfig.SITE_NAME} | ${siteConfig.TAGLINE_PRIMARY}`,
    description: siteConfig.DESCRIPTION,
    siteName: siteConfig.SITE_NAME,
    url: siteConfig.SITE_URL,
    type: 'website',
    images: [
      {
        url: '/assets/social/og-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Fantasy Meows logo above five pixel-art cat heroes: Knight, Archer, Mage, Heavy Knight and Assassin',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: siteConfig.X_HANDLE,
    title: `${siteConfig.SITE_NAME} | ${siteConfig.TAGLINE_PRIMARY}`,
    description: siteConfig.DESCRIPTION,
    images: ['/assets/social/og-1200x630.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${pixelifySans.variable} ${lora.variable} ${inter.variable}`}>
      <head>
        <link rel="preload" as="image" href="/assets/hero/layer-0-sky.png" fetchPriority="high" />
      </head>
      <body className="font-body">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div id="root-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          {children}
        </div>
      </body>
    </html>
  );
}
