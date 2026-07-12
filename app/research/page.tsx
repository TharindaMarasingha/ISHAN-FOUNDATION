import { PageHero } from "@/components/research/PageHero";
import { 
  AreasOfResearchSection, 
  EducationApproachSection, 
  PublicationsSection, 
  DigitalLearningSection, 
  KnowledgeResourcesSection, 
  ResearchCTASection 
} from "@/components/research/ResearchSections";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Research & Publications',
  description: 'ISHAN research in preventive wellness, yoga, meditation, leadership, education, sustainability, and environmental stewardship. Publications, journals, and digital learning.',
  alternates: {
    canonical: 'https://ishanfoundation.lk/research',
  },
}

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
