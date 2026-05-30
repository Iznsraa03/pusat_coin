// =====================================================
// waHelper.ts – WhatsApp Message Formatter
// Generates wa.me redirect URLs with invoice-style text.
// =====================================================

import type { GameType, OrderFormData, PricingItem } from '@/types';

const WA_NUMBER = '6282111222333'; // Ganti dengan nomor WA Pusat Coin

/**
 * Formats order data into a WhatsApp-ready redirect URL.
 * @param gameType  - 'Wolf' or 'Panda'
 * @param formData  - Filled form fields from OrderModal
 * @param pricing   - Full pricing list to resolve product label
 * @returns Full wa.me URL string with encoded message
 */
export function generateWAUrl(
  gameType: GameType,
  formData: OrderFormData,
  pricing: PricingItem[]
): string {
  const product = pricing.find((p) => p.id === formData.productSelection);
  const productLabel = product
    ? `${product.label} (${product.price})`
    : formData.productSelection;

  const message = [
    `Halo Pusat Coin! 👋`,
    ``,
    `Saya ingin melakukan Top Up Royal Dream:`,
    ``,
    `🎮 Game        : ${gameType}`,
    `🆔 ID Royal Dream : ${formData.royalDreamId}`,
    `📱 No. HP      : ${formData.phoneNumber}`,
    `💰 Produk      : ${productLabel}`,
    ``,
    `Mohon konfirmasi pesanan saya. Terima kasih! 🙏`,
  ].join('\n');

  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WA_NUMBER}?text=${encoded}`;
}
