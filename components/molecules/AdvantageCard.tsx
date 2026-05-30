import type { AdvantageCardProps } from '@/types';

export default function AdvantageCard({ icon, title, description }: AdvantageCardProps) {
  return (
    <div
      className="
        flex flex-col items-center text-center gap-3 p-5
        rounded-2xl bg-[#452E5A]/40 border border-[#FFC85C]/10
        hover:border-[#FFC85C]/30 hover:bg-[#452E5A]/60
        hover:shadow-[0_0_20px_rgba(255,200,92,0.12)]
        transition-all duration-300
      "
    >
      <span className="text-4xl">{icon}</span>
      <h4 className="text-white font-bold text-sm sm:text-base">{title}</h4>
      <p className="text-[#BCA3D0] text-xs sm:text-sm leading-relaxed">{description}</p>
    </div>
  );
}
