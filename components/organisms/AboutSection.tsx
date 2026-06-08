'use client';

import { motion } from 'framer-motion';
import Logo from '@/components/atoms/Logo';

export default function AboutSection() {
  return (
    <section className="page-section flex items-center justify-center px-5 sm:px-8 py-16 sm:py-24 relative overflow-hidden bg-transparent">

      <div className="relative z-10 max-w-4xl w-full">
        <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">

          {/* Floating Glowing Logo */}
          <div className="flex-shrink-0 flex justify-center">
            <Logo size={160} />
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest
              bg-[#FFC85C]/15 text-[#FFC85C] border border-[#FFC85C]/30 mb-4">
              Tentang Kami
            </span>

            <h2 className="text-3xl sm:text-4xl font-black text-white mb-5 leading-tight">
              Platform Top Up{' '}
              <span className="text-[#FFC85C]">Terpercaya</span>
              <br />
              untuk Gamer Indonesia
            </h2>

            <p className="text-[#BCA3D0] text-sm sm:text-base leading-relaxed mb-4">
              Pusat Coin hadir sebagai solusi top up game Royal Dream yang cepat, murah, dan aman.
              Kami berkomitmen memberikan layanan terbaik kepada seluruh gamer Indonesia dengan
              harga yang kompetitif dan proses transaksi yang transparan.
            </p>
            <p className="text-[#BCA3D0] text-sm sm:text-base leading-relaxed mb-6">
              Dengan pengalaman bertahun-tahun di industri game top-up, ribuan pelanggan telah
              mempercayakan kebutuhan gaming mereka kepada kami. Tersedia 3 toko pilihan:
              Pusat Coin, Wolf, dan Panda untuk kenyamanan Anda.
            </p>

            {/* Stats Row */}
            <div className="flex flex-wrap gap-6">
              {[
                { value: '10.000+', label: 'Transaksi' },
                { value: '99%', label: 'Kepuasan' },
                { value: '24/7', label: 'Support' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-black text-[#FFC85C]">{stat.value}</div>
                  <div className="text-xs text-[#BCA3D0]">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
