'use client';

import { useRef } from 'react';
import { useRouter } from 'next/navigation';
import MainLayout from '@/components/templates/MainLayout';
import HeroSection from '@/components/organisms/HeroSection';
import AboutSection from '@/components/organisms/AboutSection';
import AdvantagesSection from '@/components/organisms/AdvantagesSection';
import FAQSection from '@/components/organisms/FAQSection';
import Footer from '@/components/organisms/Footer';

export default function Home() {
  const router = useRouter();
  // Ref for programmatic scroll-snap navigation
  const snapContainerRef = useRef<HTMLDivElement>(null);

  const goToStore = () => {
    router.push('/store');
  };

  return (
    <>
      <MainLayout snapContainerRef={snapContainerRef}>
        {/* Section 1 – Hero */}
        <HeroSection onCTA={goToStore} />

        {/* Section 2 – About */}
        <AboutSection />

        {/* Section 3 – Advantages */}
        <AdvantagesSection />

        {/* Section 4 – FAQ */}
        <FAQSection />

        {/* Section 5 – Footer (free scroll, no snap) */}
        <div className="snap-section--free">
          <Footer />
        </div>
      </MainLayout>
    </>
  );
}
