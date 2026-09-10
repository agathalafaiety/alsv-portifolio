import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://agathalafaiety.com.br/',
      lastModified: new Date('2026-09-09'),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
