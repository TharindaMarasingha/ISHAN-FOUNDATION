import { PageHero } from "@/components/partnerships/PageHero";
import { 
  WhoWePartnerWithSection, 
  PartnershipPrinciplesSection, 
  CollaborationAndContributionSection, 
  PartnershipsCTASection 
} from "@/components/partnerships/PartnershipsSections";

export const metadata = {
  title: "Partnerships — ISHAN",
  description: "Together, We Create Greater Impact.",
};

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
