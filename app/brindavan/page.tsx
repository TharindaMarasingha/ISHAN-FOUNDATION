import { PageHero } from "@/components/brindavan/PageHero";
import { Vision } from "@/components/brindavan/Vision";
import { Zones } from "@/components/brindavan/Zones";
import { ScaleStats } from "@/components/brindavan/ScaleStats";
import { Involvement } from "@/components/brindavan/Involvement";
import { BrindavanCTA } from "@/components/brindavan/BrindavanCTA";
import { GoldDivider } from "@/components/ui/GoldDivider";

export const metadata = {
  title: "The Brindavan Project — ISHAN",
  description: "Sri Lanka's First Conscious Living Township - A 150-acre integrated holistic wellness community.",
};

export default function BrindavanPage() {
  return (
    <>
      <PageHero />
      <Vision />
      <Zones />
      <ScaleStats />
      <Involvement />
      <GoldDivider />
      <BrindavanCTA />
    </>
  );
}
