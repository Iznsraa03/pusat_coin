import Image from 'next/image';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#160b3a] border-t border-[#FFC85C]/10 py-10 px-5 sm:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Logo & Brand */}
        <div className="flex flex-col items-center text-center gap-4 mb-8">
          <div className="w-16 h-16 rounded-2xl overflow-hidden shadow-[0_0_20px_rgba(255,200,92,0.25)] border border-[#FFC85C]/20">
            <Image
              src="/logo/logo.jpeg"
              alt="Pusat Coin"
              width={64}
              height={64}
              className="object-cover w-full h-full"
            />
          </div>
          <div>
            <h3 className="text-white font-black text-xl">Pusat Coin</h3>
            <p className="text-[#BCA3D0] text-sm mt-1">Platform Top Up Royal Dream Terpercaya</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-[#BCA3D0]">
          {['Hero', 'Tentang Kami', 'Keunggulan', 'FAQ', 'Toko'].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:text-[#FFC85C] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-[#FFC85C]/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#BCA3D0]/60">
          <p>© {year} Pusat Coin. All rights reserved.</p>
          <div className="flex gap-4">
            <span>🎮 Royal Dream Top Up</span>
            <span>🇮🇩 Indonesia</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
