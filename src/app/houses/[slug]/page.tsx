import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HouseDetailContent } from '@/components/pages/HouseDetailContent';
import { content } from '@/config/content';
import { siteConfig } from '@/config/site.config';

interface HousePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return content.houses.map((house) => ({
    slug: house.slug,
  }));
}

export async function generateMetadata({ params }: HousePageProps): Promise<Metadata> {
  const { slug } = await params;
  const house = content.houses.find((h) => h.slug === slug);

  if (!house) {
    return {
      title: 'House Not Found | Fantasy Meows',
    };
  }

  return {
    title: `House ${house.name}`,
    description: house.tagline,
    openGraph: {
      title: `House ${house.name} | Fantasy Meows`,
      description: house.tagline,
      url: `${siteConfig.SITE_URL}/houses/${house.slug}/`,
      images: [
        {
          url: house.webArt1000,
          width: 1000,
          height: 1000,
          alt: house.altText,
        },
      ],
    },
  };
}

export default async function HouseDetailPage({ params }: HousePageProps) {
  const { slug } = await params;
  const houses = content.houses;
  const currentIndex = houses.findIndex((h) => h.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const house = houses[currentIndex];
  const prevHouse = houses[(currentIndex - 1 + houses.length) % houses.length];
  const nextHouse = houses[(currentIndex + 1) % houses.length];

  return (
    <>
      <Header />
      <HouseDetailContent house={house} prevHouse={prevHouse} nextHouse={nextHouse} />
      <Footer />
    </>
  );
}
