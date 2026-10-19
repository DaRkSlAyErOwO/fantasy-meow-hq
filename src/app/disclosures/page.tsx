import React from 'react';
import { Header } from '@/components/layout/Header';
import { PixelFooter } from '@/components/layout/PixelFooter';
import { DisclosuresContent } from '@/components/pages/DisclosuresContent';

import type { Metadata } from 'next';
import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Risk & Disclosures',
  description: 'Full disclosures, risk statements, Territory fee policy, and community guidelines for Fantasy Meows.',
  openGraph: {
    title: 'Risk & Disclosures | Fantasy Meows',
    description: 'Full disclosures, risk statements, Territory fee policy, and community guidelines for Fantasy Meows.',
    url: `${siteConfig.SITE_URL}/disclosures/`,
    images: [
      {
        url: '/assets/social/og-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'Fantasy Meows Disclosures',
      },
    ],
  },
};

export default function DisclosuresPage() {
  return (
    <>
      <Header />
      <DisclosuresContent />
      <PixelFooter />
    </>
  );
}
