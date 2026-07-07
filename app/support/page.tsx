import { PageHero } from "@/components/support/PageHero";
import { 
  WaysToContributeSection, 
  JoinCommunitySection, 
  SupportCTASection 
} from "@/components/support/SupportSections";

export const metadata = {
  title: "Support — ISHAN",
  description: "Become a Steward of Positive Change.",
};

export default function SupportPage() {
  return (
    <>
      <PageHero />
      <WaysToContributeSection />
      <JoinCommunitySection />
      <SupportCTASection />
    </>
  );
}
