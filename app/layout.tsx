import type { Metadata } from 'next';
import './globals.css';
import JsonLd from '@/components/atoms/JsonLd';

export const metadata: Metadata = {
  // --- Base URL: semua URL relatif (OG, sitemap, dll) akan di-resolve ke domain ini ---
  metadataBase: new URL('https://pusatcoin.id'),

  title: {
    default: 'Pusat Coin – Top Up Royal Dream Termurah & Terpercaya',
    template: '%s | Pusat Coin',
  },
  description:
    'Platform top up Royal Dream terpercaya dengan harga termurah. Proses instan, aman, dan sudah dipercaya ribuan gamer Indonesia. Tersedia toko Wolf dan Panda.',
  keywords: [
    'top up royal dream',
    'beli diamond royal dream',
    'pusat coin',
    'wolf game',
    'panda game',
    'topup murah',
    'jual coin royal dream',
    'topup royal dream indonesia',
  ],

  // --- Canonical URL: mencegah duplicate content ---
  alternates: {
    canonical: 'https://pusatcoin.id',
  },

  // --- Verifikasi GSC (isi dengan kode dari Google Search Console) ---
  verification: {
    google: 'GANTI_DENGAN_KODE_VERIFIKASI_GSC_ANDA',
  },

  // --- OpenGraph (preview di WhatsApp, Facebook, Telegram) ---
  openGraph: {
    title: 'Pusat Coin – Top Up Royal Dream Termurah & Terpercaya',
    description: 'Platform top up Royal Dream terpercaya. Harga terbaik, proses cepat & aman. Layanan Wolf dan Panda tersedia.',
    url: 'https://pusatcoin.id',
    siteName: 'Pusat Coin',
    locale: 'id_ID',
    type: 'website',
  },

  // --- Twitter / X Card ---
  twitter: {
    card: 'summary_large_image',
    title: 'Pusat Coin – Top Up Royal Dream Termurah',
    description: 'Top up Royal Dream dengan harga terbaik, proses cepat dan aman.',
  },

  // --- Robots: izinkan semua crawler ---
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="theme-color" content="#1E104E" />
      </head>
      <body style={{ fontFamily: "'Inter', sans-serif" }}>
        {/* JSON-LD Structured Data – WebSite & LocalBusiness schema untuk Google */}
        <JsonLd />
        {children}
      </body>

    </html>
  );
}
