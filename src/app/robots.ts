import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site.config';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/404/'],
    },
    sitemap: `${siteConfig.SITE_URL}/sitemap.xml`,
  };
}
