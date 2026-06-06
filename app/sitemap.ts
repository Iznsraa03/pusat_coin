import type { MetadataRoute } from 'next';

/**
 * Sitemap dinamis Next.js (App Router).
 * Accessible at: https://pusatcoin.id/sitemap.xml
 *
 * Mendaftarkan seluruh URL halaman agar Googlebot dapat menemukan
 * dan mengindeks semua konten dengan prioritas yang tepat.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://pusatcoin.id';
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/store`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];
}
