'use client';

import { motion } from 'framer-motion';
import Button from '@/components/atoms/Button';
import Image from 'next/image';

interface HeroSectionProps {
  onCTA: () => void;
}

export default function HeroSection({ onCTA }: HeroSectionProps) {
  return (
    <section className="snap-section bg-hero-gradient flex items-center justify-center px-5 sm:px-8 relative overflow-hidden">
      {/* Decorative background orbs */}
      <div className="absolute -top-32 -left-32 w-72 h-72 bg-[#FF653F]/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-[#FFC85C]/8 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl w-full text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 flex justify-center"
        >
          <span className="px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest
            bg-[#FFC85C]/15 text-[#FFC85C] border border-[#FFC85C]/30">
            🪙 Top Up Royal Dream Terpercaya
          </span>
        </motion.div>

        {/* Logo on hero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex justify-center mb-6"
        >
          <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl overflow-hidden
            shadow-[0_0_40px_rgba(255,200,92,0.35)] border-2 border-[#FFC85C]/30">
            <Image
              src="/logo/logo.jpeg"
              alt="Pusat Coin"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4"
        >
          Top Up{' '}
          <span className="text-[#FF653F]">Royal Dream</span>
          <br />
          <span className="text-[#FFC85C]">Termurah & Tercepat</span>
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-[#BCA3D0] text-base sm:text-lg mb-8 leading-relaxed max-w-lg mx-auto"
        >
          Dapatkan diamond Royal Dream dengan harga terbaik. Proses instan,
          aman, dan sudah dipercaya ribuan gamer Indonesia.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex justify-center"
        >
          <Button variant="primary" size="lg" onClick={onCTA}>
            🛒 Mulai Top Up
          </Button>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex items-center justify-center gap-6 mt-10 text-xs text-[#BCA3D0]"
        >
          <span>✅ Proses Cepat</span>
          <span>🔒 Aman & Terpercaya</span>
          <span>💬 CS 24 Jam</span>
        </motion.div>
      </div>
    </section>
  );
}
