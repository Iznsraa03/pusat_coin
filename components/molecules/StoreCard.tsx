'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/atoms/Button';
import type { StoreCardProps } from '@/types';

export default function StoreCard({ title, description, iconUrl, onClick }: StoreCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, y: -4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="
        relative flex flex-col items-center gap-4 p-6
        rounded-2xl cursor-pointer
        bg-[#452E5A]/60 backdrop-blur-md
        border border-[#FFC85C]/10
        hover:border-[#FFC85C]/40
        hover:shadow-[0_0_32px_rgba(255,200,92,0.25)]
        transition-all duration-300
      "
      onClick={onClick}
    >
      {/* Store Logo */}
      <div
        className="w-24 h-24 rounded-2xl overflow-hidden
          shadow-[0_0_20px_rgba(255,200,92,0.2)]
          border-2 border-[#FFC85C]/20"
      >
        <Image
          src={iconUrl}
          alt={title}
          width={96}
          height={96}
          className="object-cover w-full h-full"
        />
      </div>

      {/* Info */}
      <div className="text-center">
        <h3 className="text-white font-bold text-lg mb-1">{title}</h3>
        <p className="text-[#BCA3D0] text-sm leading-relaxed">{description}</p>
      </div>

      {/* CTA */}
      <Button variant="primary" size="sm" className="w-full mt-2" onClick={(e) => { e.stopPropagation(); onClick(); }}>
        Beli Sekarang
      </Button>
    </motion.div>
  );
}
