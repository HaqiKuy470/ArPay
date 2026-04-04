import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Jika ada API internal atau rute yang tidak boleh diindeks, masukkan ke disallow
      // disallow: '/api/', 
    },
    sitemap: 'https://arpay.my.id/sitemap.xml', 
  };
}