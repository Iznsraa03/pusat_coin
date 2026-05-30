'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from '@/components/atoms/Button';
import Input from '@/components/atoms/Input';
import Badge from '@/components/atoms/Badge';
import { generateWAUrl } from '@/src/lib/waHelper';
import type {
  OrderModalProps,
  OrderFormData,
  OrderFormErrors,
} from '@/types';

export default function OrderModal({ isOpen, onClose, gameType, pricingData }: OrderModalProps) {
  const [form, setForm] = useState<OrderFormData>({
    royalDreamId: '',
    phoneNumber: '',
    productSelection: '',
  });
  const [errors, setErrors] = useState<OrderFormErrors>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: OrderFormErrors = {};
    if (!form.royalDreamId.trim()) newErrors.royalDreamId = 'ID Royal Dream wajib diisi.';
    if (!form.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Nomor HP wajib diisi.';
    } else if (!/^\d{8,15}$/.test(form.phoneNumber.replace(/\s/g, ''))) {
      newErrors.phoneNumber = 'Masukkan nomor HP yang valid (8-15 angka).';
    }
    if (!form.productSelection) newErrors.productSelection = 'Pilihan produk wajib dipilih.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSubmitting(true);
    const url = generateWAUrl(gameType, form, pricingData);
    window.open(url, '_blank');
    setTimeout(() => {
      setSubmitting(false);
      onClose();
      setForm({ royalDreamId: '', phoneNumber: '', productSelection: '' });
      setErrors({});
    }, 800);
  };

  const regularItems = pricingData.filter((p) => p.category === 'regular');
  const specialItems  = pricingData.filter((p) => p.category === 'special');

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="modal-overlay"
            onClick={onClose}
          />

          {/* Modal Panel */}
          <motion.div
            key="modal"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="
              fixed z-[10000] inset-0 flex items-center justify-center p-4
              pointer-events-none
            "
          >
            <div
              className="
                pointer-events-auto
                w-full max-w-md max-h-[90dvh] overflow-y-auto
                bg-[#1E104E] border border-[#FFC85C]/20
                rounded-3xl shadow-[0_0_60px_rgba(255,200,92,0.2)]
                p-6 sm:p-8
              "
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-white text-xl font-black">
                    Top Up{' '}
                    <span className="text-[#FFC85C]">{gameType}</span>
                  </h3>
                  <p className="text-[#BCA3D0] text-sm mt-0.5">Isi form untuk melanjutkan via WhatsApp</p>
                </div>
                <button
                  onClick={onClose}
                  className="w-9 h-9 flex items-center justify-center
                    rounded-full bg-[#452E5A] text-[#BCA3D0]
                    hover:bg-[#FF653F] hover:text-white transition-colors duration-200"
                >
                  ✕
                </button>
              </div>

              {/* Form Fields */}
              <div className="flex flex-col gap-4 mb-6">
                <Input
                  id="royalDreamId"
                  label="ID Royal Dream"
                  placeholder="Masukkan ID Royal Dream kamu"
                  value={form.royalDreamId}
                  onChange={(e) => setForm({ ...form, royalDreamId: e.target.value })}
                  error={errors.royalDreamId}
                />
                <Input
                  id="phoneNumber"
                  label="Nomor HP (WhatsApp)"
                  placeholder="contoh: 08123456789"
                  type="tel"
                  value={form.phoneNumber}
                  onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
                  error={errors.phoneNumber}
                />

                {/* Product Selection */}
                <div className="flex flex-col gap-1">
                  <label className="text-sm font-medium text-[#BCA3D0]">Pilihan Produk</label>

                  {/* Regular List */}
                  <p className="text-xs text-[#FFC85C] font-semibold mt-2 mb-1 uppercase tracking-wide">Regular List</p>
                  <div className="grid grid-cols-2 gap-2">
                    {regularItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setForm({ ...form, productSelection: item.id })}
                        className={`
                          text-left px-3 py-2.5 rounded-xl border text-sm transition-all duration-200
                          ${form.productSelection === item.id
                            ? 'bg-[#FF653F]/20 border-[#FF653F] text-white shadow-[0_0_12px_rgba(255,101,63,0.3)]'
                            : 'bg-[#2a1745] border-[#452E5A] text-[#BCA3D0] hover:border-[#FFC85C]/50'
                          }
                        `}
                      >
                        <span className="font-bold text-white">{item.label}</span>
                        <br />
                        <span className="text-[#FFC85C] text-xs">{item.price}</span>
                      </button>
                    ))}
                  </div>

                  {/* Special Price */}
                  <div className="flex items-center gap-2 mt-3 mb-1">
                    <p className="text-xs text-[#FFC85C] font-semibold uppercase tracking-wide">Special Price</p>
                    <Badge variant="gold">HEMAT</Badge>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {specialItems.map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setForm({ ...form, productSelection: item.id })}
                        className={`
                          text-center px-2 py-2.5 rounded-xl border text-sm transition-all duration-200
                          ${form.productSelection === item.id
                            ? 'bg-[#FFC85C]/20 border-[#FFC85C] text-white shadow-[0_0_12px_rgba(255,200,92,0.3)]'
                            : 'bg-[#2a1745] border-[#452E5A] text-[#BCA3D0] hover:border-[#FFC85C]/50'
                          }
                        `}
                      >
                        <span className="font-bold text-white text-xs">{item.label}</span>
                        <br />
                        <span className="text-[#FFC85C] text-xs">{item.price}</span>
                      </button>
                    ))}
                  </div>

                  {errors.productSelection && (
                    <span className="text-xs text-[#FF653F] mt-1">{errors.productSelection}</span>
                  )}
                </div>
              </div>

              {/* Submit */}
              <Button
                variant="primary"
                size="md"
                className="w-full"
                onClick={handleSubmit}
                disabled={submitting}
              >
                {submitting ? 'Mengarahkan...' : '💬 Lanjut ke WhatsApp'}
              </Button>

              <p className="text-center text-xs text-[#BCA3D0]/70 mt-4">
                Anda akan diarahkan ke WhatsApp admin kami untuk konfirmasi pesanan.
              </p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
