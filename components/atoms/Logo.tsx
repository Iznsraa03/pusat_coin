'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface LogoProps {
  src?: string;
  alt?: string;
  size?: number;
  className?: string;
}

export default function Logo({
  src = '/logo/logo.jpeg',
  alt = 'Pusat Coin Logo',
  size = 140,
  className = '',
}: LogoProps) {
  return (
    // Continuous Y-axis float: moves -10px up then back, infinitely
    <motion.div
      animate={{ y: [-8, 8, -8] }}
      transition={{
        duration: 3.5,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      }}
      className={`inline-block ${className}`}
      style={{
        filter: 'drop-shadow(0 0 18px rgba(255, 200, 92, 0.55)) drop-shadow(0 0 40px rgba(255, 200, 92, 0.2))',
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="rounded-2xl object-cover"
        priority
      />
    </motion.div>
  );
}
