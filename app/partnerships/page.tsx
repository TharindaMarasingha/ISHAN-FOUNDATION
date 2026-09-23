import { PageHero } from "@/components/partnerships/PageHero";
import { 
  WhoWePartnerWithSection, 
  PartnershipPrinciplesSection, 
  CollaborationAndContributionSection, 
  PartnershipsCTASection 
} from "@/components/partnerships/PartnershipsSections";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Partnerships',
  description: 'Partner with ISHAN — we collaborate with governments, educational institutions, corporations, NGOs, and organisations committed to conscious and sustainable development.',
  alternates: {
    canonical: '/partnerships',
  },
}

export default function PartnershipsPage() {
  return (
    <div className="-mt-24">
      <PageHero />
      <WhoWePartnerWithSection />
      <PartnershipPrinciplesSection />
      <CollaborationAndContributionSection />
      <PartnershipsCTASection />
    </div>
  );
}

