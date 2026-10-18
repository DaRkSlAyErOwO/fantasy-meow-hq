import type { Metadata } from 'next';
import { Pixelify_Sans, Lora, Inter } from 'next/font/google';
import '@/styles/globals.css';
import { siteConfig } from '@/config/site.config';
import { StyledJsxRegistry } from '@/components/common/StyledJsxRegistry';

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
  // Icons come from the file conventions src/app/icon.png and src/app/apple-icon.png
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
    // suppressHydrationWarning: the home page's intro boot script sets data-intro on <html> before hydration
    <html lang="en" className={`${pixelifySans.variable} ${lora.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-body">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <StyledJsxRegistry>
          <div id="root-wrapper" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
            {children}
          </div>
        </StyledJsxRegistry>
      </body>
    </html>
  );
}
