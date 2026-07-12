import { PageHero } from "@/components/support/PageHero";
import { 
  WaysToContributeSection, 
  JoinCommunitySection, 
  SupportCTASection 
} from "@/components/support/SupportSections";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Support Our Mission',
  description: 'Support ISHAN through volunteering, professional expertise, teaching, research, community projects, environmental initiatives, and philanthropic contributions.',
  alternates: {
    canonical: 'https://ishanfoundation.lk/support',
  },
}

export default function SupportPage() {
  return (
    <div className="-mt-24">
      <PageHero />
      <WaysToContributeSection />
      <JoinCommunitySection />
      <SupportCTASection />
    </div>
  );
}
