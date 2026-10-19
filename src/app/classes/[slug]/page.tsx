import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { Header } from '@/components/layout/Header';
import { PixelFooter } from '@/components/layout/PixelFooter';
import { ClassDetailContent } from '@/components/pages/ClassDetailContent';
import { content } from '@/config/content';
import { siteConfig } from '@/config/site.config';

interface ClassPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return content.classes.map((cls) => ({
    slug: cls.slug,
  }));
}

export async function generateMetadata({ params }: ClassPageProps): Promise<Metadata> {
  const { slug } = await params;
  const cls = content.classes.find((c) => c.slug === slug);

  if (!cls) {
    return {
      title: 'Class Not Found | Fantasy Meows',
    };
  }

  return {
    title: `${cls.name} Class Guide`,
    description: `${cls.loreLine} ${cls.flavor}`,
    openGraph: {
      title: `${cls.name} Class Guide | Fantasy Meows`,
      description: `${cls.loreLine} ${cls.flavor}`,
      url: `${siteConfig.SITE_URL}/classes/${cls.slug}/`,
      images: [
        {
          url: cls.webArt1000,
          width: 1000,
          height: 1000,
          alt: cls.altText,
        },
      ],
    },
  };
}

export default async function ClassDetailPage({ params }: ClassPageProps) {
  const { slug } = await params;
  const classesList = content.classes;
  const currentIndex = classesList.findIndex((c) => c.slug === slug);

  if (currentIndex === -1) {
    notFound();
  }

  const cls = classesList[currentIndex];
  const prevClass = classesList[(currentIndex - 1 + classesList.length) % classesList.length];
  const nextClass = classesList[(currentIndex + 1) % classesList.length];

  return (
    <>
      <Header />
      <ClassDetailContent cls={cls} prevClass={prevClass} nextClass={nextClass} />
      <PixelFooter />
    </>
  );
}
