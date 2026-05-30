'use client';

import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label?: string;
}

export default function Input({ error, label, className = '', id, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-[#BCA3D0]">
          {label}
        </label>
      )}
      <input
        id={id}
        className={`
          w-full px-4 py-3 rounded-xl
          bg-[#2a1745] text-white placeholder-[#BCA3D0]/60
          border transition-all duration-300 outline-none
          ${error
            ? 'border-[#FF653F] focus:ring-2 focus:ring-[#FF653F]/40'
            : 'border-[#452E5A] focus:border-[#FFC85C] focus:ring-2 focus:ring-[#FFC85C]/30'
          }
          ${className}
        `}
        {...props}
      />
      {error && (
        <span className="text-xs text-[#FF653F] mt-0.5">{error}</span>
      )}
    </div>
  );
}
