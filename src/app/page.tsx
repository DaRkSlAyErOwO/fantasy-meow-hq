import { LoadingScreen } from '@/components/common/LoadingScreen';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { WhiskerwildSection } from '@/components/sections/WhiskerwildSection';
import { HousesSection } from '@/components/sections/HousesSection';
import { ClassesSection } from '@/components/sections/ClassesSection';
import { UtilitySection } from '@/components/sections/UtilitySection';
import { RoadmapSection } from '@/components/sections/RoadmapSection';
import { MintSection } from '@/components/sections/MintSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { SafetySection } from '@/components/sections/SafetySection';
import { Footer } from '@/components/layout/Footer';

export default function HomePage() {
  return (
    <>
      <LoadingScreen />
      <Header />
      <main id="main-content">
        <HeroSection />
        <WhiskerwildSection />
        <HousesSection />
        <ClassesSection />
        <UtilitySection />
        <RoadmapSection />
        <MintSection />
        <FaqSection />
        <SafetySection />
      </main>
      <Footer />
    </>
  );
}
