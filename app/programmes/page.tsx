import { PageHero } from "@/components/programmes/PageHero";
import { 
  CoreProgrammesSection, 
  ProfessionalDevelopmentAndCertificationSection, 
  ProgrammesCTASection 
} from "@/components/programmes/ProgrammesSections";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programmes',
  description: 'ISHAN programmes in preventive wellness, proactive wellbeing, conscious leadership, wisdom education, community development, and nature-based learning.',
  alternates: {
    canonical: '/programmes',
  },
}

export default function ProgrammesPage() {
  return (
    <div className="-mt-24">
      <PageHero />
      <CoreProgrammesSection />
      <ProfessionalDevelopmentAndCertificationSection />
      <ProgrammesCTASection />
    </div>
  );
}

