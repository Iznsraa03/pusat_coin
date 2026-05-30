import type { ReactNode } from 'react';

interface CardBaseProps {
  children: ReactNode;
  className?: string;
  glow?: boolean;
}

export default function CardBase({ children, className = '', glow = false }: CardBaseProps) {
  return (
    <div
      className={`
        rounded-2xl p-6 transition-all duration-300
        bg-[#452E5A]/60 backdrop-blur-md
        border border-[#FFC85C]/10
        ${glow ? 'shadow-[0_0_24px_rgba(255,200,92,0.18)] hover:shadow-[0_0_36px_rgba(255,200,92,0.3)]' : ''}
        hover:border-[#FFC85C]/30
        ${className}
      `}
    >
      {children}
    </div>
  );
}
