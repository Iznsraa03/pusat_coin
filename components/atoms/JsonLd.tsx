/**
 * JsonLd – Atom komponen untuk menyuntikkan JSON-LD Structured Data.
 *
 * Mengimplementasikan dua schema Schema.org:
 *  1. WebSite  – membantu Google memahami identitas situs dan Search Action (Sitelinks Searchbox).
 *  2. LocalBusiness / Store – mendeklarasikan detail layanan Pusat Coin ke mesin pencari.
 *
 * Dirender di app/layout.tsx sehingga aktif di setiap halaman.
 */

const SITE_URL = 'https://pusatcoin.id';
const WA_NUMBER = '6281234567890'; // <-- Ganti dengan nomor WhatsApp Pusat Coin yang aktif

const webSiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Pusat Coin',
  alternateName: 'PusatCoin',
  url: SITE_URL,
  description:
    'Platform top up Royal Dream terpercaya dengan harga termurah. Proses instan, aman, dan sudah dipercaya ribuan gamer Indonesia.',
  inLanguage: 'id-ID',
  // Sitelinks Searchbox (opsional – membantu Google menampilkan kotak pencarian di SERP)
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: `${SITE_URL}/store?q={search_term_string}`,
    },
    'query-input': 'required name=search_term_string',
  },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'Pusat Coin',
  description:
    'Toko top up Royal Dream dengan harga terbaik. Layanan tersedia 24 jam melalui WhatsApp.',
  url: SITE_URL,
  logo: `${SITE_URL}/logo/logo.jpeg`,
  image: `${SITE_URL}/logo/logo.jpeg`,
  telephone: `+${WA_NUMBER}`,
  priceRange: '$$',
  currenciesAccepted: 'IDR',
  paymentAccepted: 'Cash, Transfer Bank, E-Wallet',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: `+${WA_NUMBER}`,
    contactType: 'customer service',
    areaServed: 'ID',
    availableLanguage: 'Indonesian',
    contactOption: 'TollFree',
  },
  sameAs: [
    `https://wa.me/${WA_NUMBER}`,
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Royal Dream Top Up Packages',
    itemListElement: [
      {
        '@type': 'Offer',
        name: 'Top Up Royal Dream – Wolf Store',
        description: 'Beli coin Royal Dream melalui toko Wolf dengan harga terbaik.',
        url: `${SITE_URL}/store`,
        seller: { '@type': 'Organization', name: 'Pusat Coin' },
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        name: 'Top Up Royal Dream – Panda Store',
        description: 'Beli coin Royal Dream melalui toko Panda dengan harga spesial.',
        url: `${SITE_URL}/store`,
        seller: { '@type': 'Organization', name: 'Pusat Coin' },
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
      },
    ],
  },
};

export default function JsonLd() {
  return (
    <>
      {/* WebSite Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      {/* LocalBusiness / Store Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
