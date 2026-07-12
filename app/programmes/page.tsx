import { PageHero } from "@/components/programmes/PageHero";
import { Approach } from "@/components/home/Approach";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { 
  CoreProgrammesSection, 
  ProfessionalDevelopmentSection, 
  TrainingSection, 
  ProgrammesCTASection 
} from "@/components/programmes/ProgrammesSections";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Programmes',
  description: 'ISHAN programmes in preventive wellness, proactive wellbeing, conscious leadership, wisdom education, community development, and nature-based learning.',
  alternates: {
    canonical: 'https://ishanfoundation.lk/programmes',
  },
}

export default function ProgrammesPage() {
  return (
    <div className="-mt-24">
      <PageHero />
      <Approach />
      <CoreProgrammesSection />
      <ProfessionalDevelopmentSection />
      <TrainingSection />
      <WhoWeServe />
      <ProgrammesCTASection />
    </div>
  );
}
