import { PageHero } from "@/components/research/PageHero";
import { 
  AreasOfResearchSection, 
  EducationApproachSection, 
  PublicationsSection, 
  DigitalLearningSection, 
  KnowledgeResourcesSection, 
  ResearchCTASection 
} from "@/components/research/ResearchSections";

export const metadata = {
  title: "Research & Education — ISHAN",
  description: "Advancing Knowledge. Inspiring Innovation. Creating Lasting Impact.",
};

export default function ResearchPage() {
  return (
    <div className="-mt-24">
      <PageHero />
      <AreasOfResearchSection />
      <EducationApproachSection />
      <PublicationsSection />
      <DigitalLearningSection />
      <KnowledgeResourcesSection />
      <ResearchCTASection />
    </div>
  );
}
