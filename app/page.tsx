'use client';

import { useRouter } from 'next/navigation';
import MainLayout from '@/components/templates/MainLayout';
import HeroSection from '@/components/organisms/HeroSection';
import AboutSection from '@/components/organisms/AboutSection';
import AdvantagesSection from '@/components/organisms/AdvantagesSection';
import FAQSection from '@/components/organisms/FAQSection';
import Footer from '@/components/organisms/Footer';

export default function Home() {
  const router = useRouter();

  const goToStore = () => {
    router.push('/store');
  };

  return (
    <>
      <MainLayout>
        {/* Section 1 – Hero */}
        <HeroSection onCTA={goToStore} />

        {/* Section 2 – About */}
        <AboutSection />

        {/* Section 3 – Advantages */}
        <AdvantagesSection />

        {/* Section 4 – FAQ */}
        <FAQSection />

        {/* Footer */}
        <Footer />
      </MainLayout>
    </>
  );
}
