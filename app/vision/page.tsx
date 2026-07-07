import { PageHero } from "@/components/vision/PageHero";
import { 
  ThreeErasSection, 
  StrategicPrioritiesSection, 
  VisionCTASection 
} from "@/components/vision/VisionSections";

export const metadata = {
  title: "Vision — ISHAN",
  description: "Building a Legacy for Future Generations. Our 30-Year Vision.",
};

export default function VisionPage() {
  return (
    <>
      <PageHero />
      <ThreeErasSection />
      <StrategicPrioritiesSection />
      <VisionCTASection />
    </>
  );
}
