import { PageHero } from "@/components/programmes/PageHero";
import { Approach } from "@/components/home/Approach";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { 
  CoreProgrammesSection, 
  ProfessionalDevelopmentSection, 
  TrainingSection, 
  ProgrammesCTASection 
} from "@/components/programmes/ProgrammesSections";

export const metadata = {
  title: "Programmes — ISHAN",
  description: "Transforming Knowledge into Practice.",
};

export default function ProgrammesPage() {
  return (
    <>
      <PageHero />
      <Approach />
      <CoreProgrammesSection />
      <ProfessionalDevelopmentSection />
      <TrainingSection />
      <WhoWeServe />
      <ProgrammesCTASection />
    </>
  );
}
