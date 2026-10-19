import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { PixelFooter } from '@/components/layout/PixelFooter';
import { HousesIndexContent } from '@/components/pages/HousesIndexContent';

import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Houses',
  description:
    'Six Houses of Whiskerwild: Circle of Whisk, Pawguard, Rootpads, Emberkin, Rimewhisper and Voidpurr. Pick the one that feels like your cat.',
  openGraph: {
    title: 'Houses | Fantasy Meows',
    description:
      'Six Houses of Whiskerwild: Circle of Whisk, Pawguard, Rootpads, Emberkin, Rimewhisper and Voidpurr.',
    url: `${siteConfig.SITE_URL}/houses/`,
    images: [
      {
        url: '/assets/social/og-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'The Six Houses of Whiskerwild',
      },
    ],
  },
};

export default function HousesIndexPage() {
  return (
    <>
      <Header />
      <HousesIndexContent />
      <PixelFooter />
    </>
  );
}
