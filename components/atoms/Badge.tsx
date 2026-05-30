interface BadgeProps {
  children: React.ReactNode;
  variant?: 'gold' | 'orange' | 'purple';
  className?: string;
}

const variantMap = {
  gold:   'bg-[#FFC85C]/15 text-[#FFC85C] border border-[#FFC85C]/30',
  orange: 'bg-[#FF653F]/15 text-[#FF653F] border border-[#FF653F]/30',
  purple: 'bg-[#452E5A] text-[#BCA3D0] border border-[#BCA3D0]/20',
};

export default function Badge({ children, variant = 'gold', className = '' }: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold
        tracking-wide uppercase
        ${variantMap[variant]} ${className}
      `}
    >
      {children}
    </span>
  );
}
