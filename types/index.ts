// =====================================================
// PUSAT COIN – TypeScript Interfaces
// All props, data shapes, and form inputs are typed here.
// =====================================================

/** Royal Dream pricing item from pricing.json */
export interface PricingItem {
  id: string;
  label: string;       // e.g. "100M", "10B+"
  price: string;       // e.g. "8K", "@64K"
  category: 'regular' | 'special';
}

/** Game type for Wolf or Panda stores */
export type GameType = 'Wolf' | 'Panda';

/** OrderModal form state */
export interface OrderFormData {
  royalDreamId: string;
  phoneNumber: string;
  productSelection: string; // PricingItem.id
}

/** OrderModal validation errors */
export interface OrderFormErrors {
  royalDreamId?: string;
  phoneNumber?: string;
  productSelection?: string;
}

/** StoreCard props */
export interface StoreCardProps {
  title: string;
  description: string;
  iconUrl: string;
  behavior: 'redirect' | 'modal';
  redirectUrl?: string;
  onClick: () => void;
}

/** AccordionItem props */
export interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

/** AdvantageCard props */
export interface AdvantageCardProps {
  icon: string;       // emoji or icon identifier
  title: string;
  description: string;
}

/** Button variant */
export type ButtonVariant = 'primary' | 'secondary' | 'ghost';
export type ButtonSize    = 'sm' | 'md' | 'lg';

/** CountUpText props */
export interface CountUpTextProps {
  targetNumber: number;
  durationSeconds?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/** OrderModal props */
export interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  gameType: GameType;
  pricingData: PricingItem[];
}
