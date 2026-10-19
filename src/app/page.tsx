import { IntroOverlay } from '@/components/intro/IntroOverlay';
import { INTRO_BOOT_SCRIPT } from '@/components/intro/introPhase';
import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/HeroSection';
import { WorldChapter } from '@/components/sections/WorldChapter';
import { HouseBannerWall } from '@/components/sections/HouseBannerWall';
import { ClassRoster } from '@/components/sections/ClassRoster';
import { UtilityInventory } from '@/components/sections/UtilityInventory';
import { RoadmapQuestPath } from '@/components/sections/RoadmapQuestPath';
import { MintGate } from '@/components/sections/MintGate';
import { FaqDialogue } from '@/components/sections/FaqDialogue';
import { SafetyNotice } from '@/components/sections/SafetyNotice';
import { PixelFooter } from '@/components/layout/PixelFooter';
import { PixelRevealRoot } from '@/components/pixel/PixelRevealRoot';
import '@/styles/pixel-sections.css';

export default function HomePage() {
  return (
    <>
      {/* Must run before the hero is parsed so the intro decision is made before first paint */}
      <script dangerouslySetInnerHTML={{ __html: INTRO_BOOT_SCRIPT }} />
      <IntroOverlay />
      <Header />
      <main id="main-content">
        {/* Intro storyboard: untouched */}
        <HeroSection />
        {/* Pixel rebuild: everything below the intro */}
        <WorldChapter />
        <HouseBannerWall />
        <ClassRoster />
        <UtilityInventory />
        <RoadmapQuestPath />
        <MintGate />
        <FaqDialogue />
        <SafetyNotice />
      </main>
      <PixelFooter />
      <PixelRevealRoot />
    </>
  );
}
