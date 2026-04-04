import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // 1. MAIN DOMAIN (Prioritas Tertinggi)
    {
      url: 'https://arpay.my.id',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    
    // 2. HELLO SUBDOMAIN (Halaman About)
    {
      url: 'https://hello.arpay.my.id',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },

    // 3. DOCS SUBDOMAIN (Halaman Dokumentasi)
    {
      url: 'https://docs.arpay.my.id',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://docs.arpay.my.id/architectur', // URL spesifik docs
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://docs.arpay.my.id/developer', // URL spesifik docs
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://docs.arpay.my.id/smart-contract', // URL spesifik docs
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://docs.arpay.my.id/security', // URL spesifik docs
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}