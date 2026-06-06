'use client';

import { motion } from 'framer-motion';
import CountUpText from '@/components/atoms/CountUpText';
import AdvantageCard from '@/components/molecules/AdvantageCard';

const advantages = [
  { icon: '⚡', title: 'Proses Instan', description: 'Diamond masuk dalam hitungan menit setelah pembayaran dikonfirmasi.' },
  { icon: '💰', title: 'Harga Termurah', description: 'Jaminan harga paling kompetitif di pasaran untuk semua tier produk.' },
  { icon: '🔒', title: 'Transaksi Aman', description: 'Sistem transaksi terenkripsi dan terverifikasi untuk keamanan Anda.' },
  { icon: '🎮', title: 'Multi-Platform', description: 'Tersedia 3 toko: Pusat Coin, Wolf, dan Panda untuk pilihan terbaik.' },
  { icon: '💬', title: 'CS 24 Jam', description: 'Customer service siap membantu Anda kapanpun melalui WhatsApp.' },
  { icon: '⭐', title: 'Rating Tinggi', description: 'Dipercaya oleh ribuan gamer dengan tingkat kepuasan 99%.' },
];

export default function AdvantagesSection() {
  return (
    <section className="page-section bg-section-gradient flex items-center justify-center px-5 sm:px-8 py-16 sm:py-24 overflow-hidden relative">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF653F]/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-4xl w-full py-8">
        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest
            bg-[#FF653F]/15 text-[#FF653F] border border-[#FF653F]/30 mb-4">
            Keunggulan Kami
          </span>

          {/* CountUp Transaction Display */}
          <div className="mb-3">
            <h2 className="text-5xl sm:text-6xl font-black text-white">
              <CountUpText
                targetNumber={12847}
                durationSeconds={2.5}
                suffix="+"
                className="text-[#FFC85C] text-glow-gold"
              />
            </h2>
            <p className="text-[#BCA3D0] text-sm mt-2">Total Transaksi Berhasil</p>
          </div>

          <p className="text-[#BCA3D0] text-sm sm:text-base max-w-lg mx-auto">
            Bergabunglah bersama puluhan ribu gamer yang telah mempercayakan top up mereka kepada kami.
          </p>
        </motion.div>

        {/* Advantage Cards Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
        >
          {advantages.map((adv) => (
            <AdvantageCard key={adv.title} {...adv} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
