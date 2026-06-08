'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="page-section flex items-center justify-center px-5 sm:px-8 py-16 sm:py-24 relative overflow-hidden bg-transparent">

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
            Top Up Royal Dream Terpercaya
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
          <Link href="/store" className="inline-block">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className="
                inline-flex items-center justify-center gap-2 cursor-pointer
                transition-all duration-300 font-semibold tracking-wide
                bg-[#FF653F] text-white font-bold
                shadow-[0_0_20px_rgba(255,101,63,0.4)] hover:shadow-[0_0_32px_rgba(255,101,63,0.65)]
                px-8 py-4 text-lg rounded-2xl
              "
            >
              Jelajahi Toko
            </motion.span>
          </Link>
        </motion.div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mt-10 text-xs text-[#BCA3D0]"
        >
          <span className="px-4 py-1.5 rounded-full border border-[#FFC85C]/20 bg-[#452E5A]/15 backdrop-blur-sm shadow-[0_0_12px_rgba(255,200,92,0.15)] transition-all duration-300 hover:border-[#FFC85C]/40 hover:shadow-[0_0_16px_rgba(255,200,92,0.3)] hover:text-white">
            Proses Cepat
          </span>
          <span className="px-4 py-1.5 rounded-full border border-[#FFC85C]/20 bg-[#452E5A]/15 backdrop-blur-sm shadow-[0_0_12px_rgba(255,200,92,0.15)] transition-all duration-300 hover:border-[#FFC85C]/40 hover:shadow-[0_0_16px_rgba(255,200,92,0.3)] hover:text-white">
            Aman & Terpercaya
          </span>
          <span className="px-4 py-1.5 rounded-full border border-[#FFC85C]/20 bg-[#452E5A]/15 backdrop-blur-sm shadow-[0_0_12px_rgba(255,200,92,0.15)] transition-all duration-300 hover:border-[#FFC85C]/40 hover:shadow-[0_0_16px_rgba(255,200,92,0.3)] hover:text-white">
            CS 24 Jam
          </span>
        </motion.div>
      </div>
    </section>
  );
}
