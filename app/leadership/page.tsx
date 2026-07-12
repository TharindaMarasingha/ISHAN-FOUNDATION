import { PageHero } from "@/components/leadership/PageHero";
import { 
  PhilosophySection, 
  CircleOfStewardsSection, 
  GoldenCircleLeadershipSection, 
  SharedCommitmentSection 
} from "@/components/leadership/LeadershipSections";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Leadership',
  description: 'Meet the Circle of Stewards guiding ISHAN — a team of internationally credentialed practitioners, educators, and leaders united in shared purpose.',
  alternates: {
    canonical: 'https://ishanfoundation.lk/leadership',
  },
}

export default function LeadershipPage() {
  return (
    <div className="-mt-24">
      <PageHero />
      <PhilosophySection />
      <CircleOfStewardsSection />
      <GoldenCircleLeadershipSection />
      <SharedCommitmentSection />
    </div>
  );
}
