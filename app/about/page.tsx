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
      <OurStorySection />
      <VisionMissionSection />
      <OurPurposeSection />
      <OurPhilosophySection />
      <CoreBeliefsSection />
      <CoreValuesSection />
      <Approach />
      <OurCommitmentSection />
    </div>
  );
}
