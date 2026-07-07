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

export const metadata = {
  title: "Framework — ISHAN",
  description: "A Unified Framework for Human, Institutional, and Societal Transformation.",
};

export default function FrameworkPage() {
  return (
    <>
      <PageHero />
      <GoldenCircleSection />
      <IkigaiSection />
      <PurusharthaSection />
      <InstitutionalPillarsSection />
      <FiveDimensionsSection />
      <HierarchyOfNeedsSection />
      <FrameworkCTASection />
    </>
  );
}
