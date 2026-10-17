import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';
import { content } from '@/config/content';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.SITE_URL;

  const houseRoutes = content.houses.map((house) => ({
    url: `${baseUrl}/houses/${house.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  const classRoutes = content.classes.map((c) => ({
    url: `${baseUrl}/classes/${c.slug}/`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/houses/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...houseRoutes,
    {
      url: `${baseUrl}/classes/`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...classRoutes,
    {
      url: `${baseUrl}/disclosures/`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ];
}
