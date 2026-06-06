/**
 * app/store/page.tsx – Server Component
 *
 * Sebagai Server Component, file ini dapat mengekspor metadata statis yang
 * dibaca oleh Googlebot langsung dari HTML response tanpa menjalankan
 * JavaScript client-side. Ini adalah praktik SEO terbaik untuk Next.js.
 *
 * Semua logika interaktif (useState, useRouter) dipindahkan ke:
 * → components/templates/StorePageClient.tsx
 */

import type { Metadata } from 'next';
import type { PricingItem } from '@/types';
import pricingRaw from '@/src/data/pricing.json';
import StorePageClient from '@/components/templates/StorePageClient';

// --- Metadata khusus halaman Store (untuk indexing yang spesifik oleh Google) ---
export const metadata: Metadata = {
  title: 'Toko Top Up Royal Dream – Wolf & Panda | Pusat Coin',
  description:
    'Pilih paket top up Royal Dream terbaik. Tersedia toko Wolf dan Panda dengan harga spesial mulai 100M hingga 500B+. Proses cepat via WhatsApp, aman, dan terpercaya.',
  alternates: {
    canonical: 'https://pusatcoin.id/store',
  },
  openGraph: {
    title: 'Toko Top Up Royal Dream – Wolf & Panda | Pusat Coin',
    description: 'Beli coin Royal Dream dengan harga termurah. Proses cepat via WhatsApp.',
    url: 'https://pusatcoin.id/store',
    type: 'website',
  },
};

// Baca pricing data server-side lalu teruskan ke Client Component via props
const pricingData = pricingRaw as PricingItem[];

export default function StorePage() {
  return <StorePageClient pricingData={pricingData} />;
}
