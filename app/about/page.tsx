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
    canonical: '/about',
  },
}

export default function AboutPage() {
  return (
    <div className="-mt-24 w-full min-h-screen bg-white">
      <PageHero />
      
      <div className="relative w-full">
        {/* Sticky background section that acts like a separate page */}
        <div className="sticky top-0 z-0 w-full min-h-screen flex flex-col justify-center bg-white">
          <OurStorySection />
        </div>
        
        {/* Middle section (Vision to Core Beliefs) - scrolls normally */}
        <div className="relative z-10 w-full bg-white shadow-[0_-20px_50px_rgba(0,0,0,0.05)] rounded-t-[40px]">
          <VisionMissionSection />
          <OurPurposeSection />
          <OurPhilosophySection />
          <CoreBeliefsSection />
        </div>

        {/* Core Values Section - Occupies full 100vh, scrolls normally, no overlap */}
        <div className="relative z-0 w-full bg-white overflow-hidden pt-[240px] pb-[120px]">
          {/* Top-Left Decorative SVG */}
          <img 
            src="/e1.svg" 
            alt="" 
            className="hidden md:block absolute top-0 left-0 w-[150px] md:w-[250px] opacity-[0.15] mix-blend-multiply pointer-events-none select-none z-0"
            aria-hidden="true"
          />
          {/* Top-Right Decorative SVG */}
          <img 
            src="/e2.svg" 
            alt="" 
            className="hidden md:block absolute top-0 right-0 w-[150px] md:w-[250px] opacity-[0.15] mix-blend-multiply pointer-events-none select-none z-0"
            aria-hidden="true"
          />
          {/* Bottom-Left Decorative SVG */}
          <img 
            src="/e4.svg" 
            alt="" 
            className="hidden md:block absolute bottom-0 left-0 w-[150px] md:w-[250px] opacity-[0.15] mix-blend-multiply pointer-events-none select-none z-0"
            aria-hidden="true"
          />
          {/* Bottom-Right Decorative SVG */}
          <img 
            src="/e3.svg" 
            alt="" 
            className="hidden md:block absolute bottom-0 right-0 w-[150px] md:w-[250px] opacity-[0.15] mix-blend-multiply pointer-events-none select-none z-0"
            aria-hidden="true"
          />
          <CoreValuesSection />
        </div>

        {/* Premium floating animations */}
        {/* Top foreground section (The ISHAN Way & Commitment) */}
        <div className="relative z-10 w-full bg-white overflow-x-hidden">
          <Approach />

          <OurCommitmentSection />
        </div>
      </div>
    </div>
  );
}

