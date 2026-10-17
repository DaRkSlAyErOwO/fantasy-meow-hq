import React from 'react';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ClassesIndexContent } from '@/components/pages/ClassesIndexContent';

import { siteConfig } from '@/config/site.config';

export const metadata: Metadata = {
  title: 'Classes',
  description:
    'Five Classes of Whiskerwild: Knight, Archer, Heavy Knight, Mage and Assassin. Class is what you do on the map and in the game.',
  openGraph: {
    title: 'Classes | Fantasy Meows',
    description:
      'Five Classes of Whiskerwild: Knight, Archer, Heavy Knight, Mage and Assassin.',
    url: `${siteConfig.SITE_URL}/classes/`,
    images: [
      {
        url: '/assets/social/og-1200x630.jpg',
        width: 1200,
        height: 630,
        alt: 'The Five Classes of Whiskerwild',
      },
    ],
  },
};

export default function ClassesIndexPage() {
  return (
    <>
      <Header />
      <ClassesIndexContent />
      <Footer />
    </>
  );
}
