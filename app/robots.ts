import type { MetadataRoute } from 'next';

/**
 * Robots.txt dinamis Next.js (App Router).
 * Accessible at: https://pusatcoin.id/robots.txt
 *
 * Mengizinkan semua crawler untuk mengindeks website dan mendaftarkan
 * lokasi sitemap.xml agar Googlebot dapat menemukannya secara otomatis.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        // Blokir endpoint API dan folder internal Next.js dari indexing
        disallow: ['/api/', '/_next/'],
      },
    ],
    sitemap: 'https://pusatcoin.id/sitemap.xml',
    host: 'https://pusatcoin.id',
  };
}
