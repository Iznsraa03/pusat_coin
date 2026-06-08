'use client';

import { motion } from 'framer-motion';
import StoreCard from '@/components/molecules/StoreCard';
import type { GameType } from '@/types';

interface StoreSectionProps {
  onOpenModal: (gameType: GameType) => void;
}

const stores = [
  {
    id: 'pusat-coin',
    title: 'Pusat Coin',
    description: 'Toko utama kami. Harga terbaik untuk semua tier pembelian Royal Dream.',
    iconUrl: '/store/pusatcoin.jpeg',
    behavior: 'redirect' as const,
    redirectUrl: 'https://topuproyaldream.live/',
  },
  {
    id: 'wolf',
    title: 'Wolf',
    description: 'Toko kedua dengan admin responsif. Proses cepat via WhatsApp langsung.',
    iconUrl: '/store/wolf.jpeg',
    behavior: 'modal' as const,
    gameType: 'Wolf' as GameType,
  },
  {
    id: 'panda',
    title: 'Panda',
    description: 'Toko ketiga pilihan. Layanan ramah dan harga setara untuk top up Anda.',
    iconUrl: '/store/panda.jpeg',
    behavior: 'modal' as const,
    gameType: 'Panda' as GameType,
  },
];

export default function StoreSection({ onOpenModal }: StoreSectionProps) {
  return (
    <section
      id="store-section"
      className="w-full min-h-[calc(100vh-80px)] flex items-center justify-center px-5 sm:px-8 py-12 relative overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#FF653F]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#FFC85C]/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest
            bg-[#FF653F]/15 text-[#FF653F] border border-[#FF653F]/30 mb-4">
            Pilih Toko
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
            3 Toko{' '}
            <span className="text-[#FF653F]">Pilihan</span>{' '}
            Kami
          </h2>
          <p className="text-[#BCA3D0] text-sm sm:text-base max-w-md mx-auto">
            Pilih toko yang tersedia dan lakukan top up Royal Dream dengan mudah dan cepat.
          </p>
        </motion.div>

        {/* Store Grid — 1 col mobile, 3 col desktop */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-5"
        >
          {stores.map((store) => (
            <StoreCard
              key={store.id}
              title={store.title}
              description={store.description}
              iconUrl={store.iconUrl}
              behavior={store.behavior}
              redirectUrl={store.redirectUrl}
              onClick={() => {
                if (store.behavior === 'redirect') {
                  window.open(store.redirectUrl, '_blank');
                } else {
                  onOpenModal(store.gameType!);
                }
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
