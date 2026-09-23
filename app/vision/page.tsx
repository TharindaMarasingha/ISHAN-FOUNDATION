import { PageHero } from "@/components/vision/PageHero";
import { 
  ThreeErasSection, 
  StrategicPrioritiesSection, 
  VisionCTASection 
} from "@/components/vision/VisionSections";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vision 2026–2056',
  description: 'ISHAN\'s 30-year vision for building a legacy — Foundation (2026–2036), Expansion (2036–2046), and Legacy (2046–2056) eras for humanity and nature.',
  alternates: {
    canonical: '/vision',
  },
}

export default function VisionPage() {
  return (
    <div className="-mt-24">
      <PageHero />
      <ThreeErasSection />
      <StrategicPrioritiesSection />
      <VisionCTASection />
    </div>
  );
}

