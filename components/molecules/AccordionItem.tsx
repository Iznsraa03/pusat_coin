'use client';

import { motion, AnimatePresence } from 'framer-motion';
import type { AccordionItemProps } from '@/types';

export default function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border border-[#FFC85C]/10 rounded-2xl overflow-hidden bg-[#452E5A]/40 backdrop-blur-sm">
      {/* Question Toggle */}
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-5 py-4 text-left
          text-white font-semibold text-sm sm:text-base cursor-pointer
          hover:bg-[#FFC85C]/5 transition-colors duration-200"
        aria-expanded={isOpen}
      >
        <span>{question}</span>
        {/* Animated chevron */}
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="flex-shrink-0 ml-4 text-[#FFC85C] text-xl font-light"
        >
          +
        </motion.span>
      </button>

      {/* Animated Answer Panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-[#BCA3D0] text-sm sm:text-base leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
