import { IntroOverlay } from '@/components/intro/IntroOverlay';
import { INTRO_BOOT_SCRIPT } from '@/components/intro/introPhase';
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
      {/* Must run before the hero is parsed so the intro decision is made before first paint */}
      <script dangerouslySetInnerHTML={{ __html: INTRO_BOOT_SCRIPT }} />
      <IntroOverlay />
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
