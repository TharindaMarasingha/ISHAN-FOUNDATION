import { PageHero } from "@/components/about/PageHero";
import { 
  OurStorySection, 
  VisionMissionSection, 
  OurPurposeSection, 
  OurPhilosophySection, 
  CoreBeliefsSection, 
  CoreValuesSection, 
  OurCommitmentSection 
} from "@/components/about/AboutSections";
import { Approach } from "@/components/home/Approach";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description: 'Learn about ISHAN — our story, vision, mission, philosophy, core beliefs, and commitment to harmonising humanity and nature through wisdom and wellness.',
  alternates: {
    canonical: 'https://ishanfoundation.lk/about',
  },
}

export default function AboutPage() {
  return (
    <div className="-mt-24 w-full min-h-screen bg-white">
      <PageHero />
      
      <div className="relative w-full">
        {/* Sticky background section that acts like a separate page */}
        <div className="sticky top-0 z-0 w-full min-h-screen flex flex-col justify-center bg-[#FAF9F6]">
          <OurStorySection />
        </div>
        
        {/* Foreground section that scrolls up over the sticky one */}
        <div className="relative z-10 bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.05)] rounded-t-[40px]">
          <VisionMissionSection />
          <OurPurposeSection />
          <OurPhilosophySection />
          <CoreBeliefsSection />
          <CoreValuesSection />
          <Approach />
          <OurCommitmentSection />
        </div>
      </div>
    </div>
  );
}
