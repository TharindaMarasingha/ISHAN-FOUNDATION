import { PageHero } from "@/components/about/PageHero";
import { 
  OurStorySection, 
  VisionMissionSection, 
  OurPurposeSection, 
  OurPhilosophySection, 
  CoreBeliefsSection, 
  CoreValuesSection, 
  IshanWaySection, 
  OurCommitmentSection 
} from "@/components/about/AboutSections";

export const metadata = {
  title: "About — ISHAN",
  description: "Learn about ISHAN's vision, mission, philosophy, and our core values for conscious living.",
};

export default function AboutPage() {
  return (
    <div className="-mt-24">
      <PageHero />
      <OurStorySection />
      <VisionMissionSection />
      <OurPurposeSection />
      <OurPhilosophySection />
      <CoreBeliefsSection />
      <CoreValuesSection />
      <IshanWaySection />
      <OurCommitmentSection />
    </div>
  );
}
