import { PageHero } from "@/components/leadership/PageHero";
import { 
  PhilosophySection, 
  CircleOfStewardsSection, 
  GoldenCircleLeadershipSection, 
  SharedCommitmentSection 
} from "@/components/leadership/LeadershipSections";

export const metadata = {
  title: "Leadership — ISHAN",
  description: "Leadership at ISHAN is founded on the principle of stewardship.",
};

export default function LeadershipPage() {
  return (
    <>
      <PageHero />
      <PhilosophySection />
      <CircleOfStewardsSection />
      <GoldenCircleLeadershipSection />
      <SharedCommitmentSection />
    </>
  );
}
