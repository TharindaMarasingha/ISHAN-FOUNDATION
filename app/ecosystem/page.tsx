import { PageHero } from "@/components/ecosystem/PageHero";
import { EcosystemSections } from "@/components/ecosystem/EcosystemSections";

export const metadata = {
  title: "Ecosystem — ISHAN",
  description: "A growing ecosystem of specialised initiatives working together to advance a common vision.",
};

export default function EcosystemPage() {
  return (
    <div className="-mt-24">
      <PageHero />
      <EcosystemSections />
    </div>
  );
}
