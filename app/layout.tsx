import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pusat Coin – Top Up Royal Dream Termurah & Terpercaya',
  description:
    'Platform top up Royal Dream terpercaya dengan harga termurah. Proses instan, aman, dan sudah dipercaya ribuan gamer Indonesia. Tersedia toko Wolf dan Panda.',
  keywords: 'top up royal dream, beli diamond royal dream, pusat coin, wolf, panda, topup murah',
  openGraph: {
    title: 'Pusat Coin – Top Up Royal Dream Termurah',
    description: 'Top up Royal Dream dengan harga terbaik, proses cepat dan aman.',
    type: 'website',
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
        {children}
      </body>
    </html>
  );
}
