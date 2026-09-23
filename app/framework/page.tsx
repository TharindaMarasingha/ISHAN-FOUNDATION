import { PageHero } from "@/components/framework/PageHero";
import { 
  GoldenCircleSection, 
  IkigaiSection, 
  PurusharthaSection, 
  InstitutionalPillarsSection, 
  FiveDimensionsSection, 
  HierarchyOfNeedsSection, 
  FrameworkCTASection 
} from "@/components/framework/FrameworkSections";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Framework',
  description: 'The ISHAN Framework — a unified model for human, institutional, and societal transformation through purpose, systems, management, and sustainability.',
  alternates: {
    canonical: '/framework',
  },
}

export default function FrameworkPage() {
  return (
    <div className="-mt-24">
      <PageHero />
      <GoldenCircleSection />
      <IkigaiSection />
      <PurusharthaSection />
      <InstitutionalPillarsSection />
      <FiveDimensionsSection />
      <HierarchyOfNeedsSection />
      <FrameworkCTASection />
    </div>
  );
}

