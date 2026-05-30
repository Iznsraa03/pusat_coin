'use client';

import { motion } from 'framer-motion';
import type { ButtonHTMLAttributes } from 'react';
import type { ButtonVariant, ButtonSize } from '@/types';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-[#FF653F] text-white font-bold shadow-[0_0_20px_rgba(255,101,63,0.4)] hover:shadow-[0_0_32px_rgba(255,101,63,0.65)]',
  secondary:
    'bg-[#452E5A] text-white border border-[#FFC85C]/30 hover:border-[#FFC85C] hover:shadow-[0_0_16px_rgba(255,200,92,0.35)]',
  ghost:
    'bg-transparent text-[#FFC85C] border border-[#FFC85C]/50 hover:bg-[#FFC85C]/10',
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-base rounded-xl',
  lg: 'px-8 py-4 text-lg rounded-2xl',
};

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      className={`
        inline-flex items-center justify-center gap-2 cursor-pointer
        transition-all duration-300 font-semibold tracking-wide
        ${variantClasses[variant]}
        ${sizeClasses[size]}
        ${className}
      `}
      {...(props as React.ComponentProps<typeof motion.button>)}
    >
      {children}
    </motion.button>
  );
}
