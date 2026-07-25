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
    <div className="-mt-24 bg-white">
      <PageHero />
      
      {/* Wrapper to isolate the sticky parallax effect between Philosophy and Circle of Stewards */}
      <div className="relative w-full">
        <div className="sticky top-0 z-0">
          <PhilosophySection />
        </div>
        <div className="relative z-10 shadow-[0_-15px_40px_rgba(0,0,0,0.1)] rounded-t-3xl">
          <CircleOfStewardsSection />
        </div>
      </div>

      <div className="relative z-20 bg-white">
        <GoldenCircleLeadershipSection />
        <SharedCommitmentSection />
      </div>
    </div>
  );
}
