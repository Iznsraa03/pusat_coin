'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AccordionItem from '@/components/molecules/AccordionItem';

const faqs = [
  {
    question: 'Berapa lama proses top up berlangsung?',
    answer:
      'Proses top up berlangsung sangat cepat, biasanya dalam 1–5 menit setelah pembayaran dikonfirmasi. Untuk pembelian besar (10B+), proses bisa memakan waktu hingga 15 menit.',
  },
  {
    question: 'Apakah transaksi di Pusat Coin aman?',
    answer:
      'Sangat aman! Seluruh transaksi kami diproses secara manual oleh tim berpengalaman dan dikonfirmasi langsung melalui WhatsApp. Kami telah melayani lebih dari 12.000 transaksi dengan tingkat kepuasan 99%.',
  },
  {
    question: 'Bagaimana cara pembelian untuk Wolf atau Panda?',
    answer:
      'Klik kartu Wolf atau Panda di halaman Store, isi form dengan ID Royal Dream, nomor HP, dan pilihan produk Anda. Sistem kami akan otomatis mengarahkan Anda ke WhatsApp admin yang siap memproses pesanan.',
  },
  {
    question: 'Apakah ada harga khusus untuk pembelian besar?',
    answer:
      'Ya! Kami menyediakan Special Price untuk pembelian 10B+, 30B+, dan 500B+ dengan harga per 100M yang semakin murah. Lihat detail lengkap di tabel harga pada form pembelian.',
  },
  {
    question: 'Apa perbedaan toko Pusat Coin, Wolf, dan Panda?',
    answer:
      'Ketiganya adalah toko kami dengan layanan dan kualitas yang sama. Perbedaan hanya pada nomor WhatsApp admin yang menangani. Pilih sesuai preferensi atau ketersediaan admin.',
  },
  {
    question: 'Metode pembayaran apa yang tersedia?',
    answer:
      'Kami menerima berbagai metode pembayaran termasuk Transfer Bank (BCA, BRI, Mandiri, BNI), GoPay, OVO, DANA, dan QRIS. Admin akan menginformasikan detail pembayaran setelah Anda menghubungi WhatsApp.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="page-section flex items-center justify-center px-5 sm:px-8 py-16 sm:py-24 relative overflow-hidden">
      {/* Decorative blur */}
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FFC85C]/6 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-2xl w-full py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest
            bg-[#FFC85C]/15 text-[#FFC85C] border border-[#FFC85C]/30 mb-4">
            FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Pertanyaan yang{' '}
            <span className="text-[#FFC85C]">Sering Ditanya</span>
          </h2>
        </motion.div>

        {/* Accordion List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col gap-3"
        >
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
