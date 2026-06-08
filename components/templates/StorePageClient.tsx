'use client';

import { useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import StoreSection from '@/components/organisms/StoreSection';
import Footer from '@/components/organisms/Footer';
import { motion } from 'framer-motion';
import type { GameType, PricingItem } from '@/types';

const OrderModal = dynamic(() => import('@/components/organisms/OrderModal'), {
  ssr: false,
});

interface StorePageClientProps {
  pricingData: PricingItem[];
}

/**
 * StorePageClient – Client Component yang menampung semua state
 * dan interaksi pada halaman /store (modal, routing, form).
 *
 * Dipisahkan dari app/store/page.tsx agar halaman utama dapat menjadi
 * Server Component dan mengekspor metadata statis yang dapat diindeks
 * oleh Googlebot tanpa memerlukan eksekusi JavaScript client-side.
 */
export default function StorePageClient({ pricingData }: StorePageClientProps) {
  // Modal state: menentukan toko mana yang dibuka (Wolf / Panda)
  const [modalOpen, setModalOpen]   = useState(false);
  const [activeGame, setActiveGame] = useState<GameType>('Wolf');

  const openModal = (gameType: GameType) => {
    setActiveGame(gameType);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Premium Header */}
      <header className="sticky top-0 z-50 bg-[#160b3a]/90 backdrop-blur-md border-b border-[#FFC85C]/10 px-5 sm:px-8 py-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl overflow-hidden border border-[#FFC85C]/20 shadow-[0_0_10px_rgba(255,200,92,0.15)]">
              <Image
                src="/logo/logo.jpeg"
                alt="Logo Pusat Coin – Top Up Royal Dream"
                width={40}
                height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <span className="text-white font-bold tracking-wide hidden sm:block">
              Pusat Coin
            </span>
          </div>

          <Link href="/">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="
                inline-flex items-center justify-center gap-2 cursor-pointer
                transition-all duration-300 font-semibold tracking-wide
                bg-transparent text-[#BCA3D0] hover:text-[#FFC85C]
                px-4 py-2 text-sm rounded-lg
                !text-sm border-none shadow-none hover:bg-transparent
              "
            >
              ← Kembali ke Beranda
            </motion.span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <StoreSection onOpenModal={openModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Global Order Modal */}
      <OrderModal
        isOpen={modalOpen}
        onClose={closeModal}
        gameType={activeGame}
        pricingData={pricingData}
      />
    </div>
  );
}
