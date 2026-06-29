import { PageHero } from "@/components/samanvaya/PageHero";
import { TheExperience } from "@/components/samanvaya/TheExperience";
import { Pillars } from "@/components/samanvaya/Pillars";
import { SamanvayaQuote } from "@/components/samanvaya/SamanvayaQuote";
import { SamanvayaCTA } from "@/components/samanvaya/SamanvayaCTA";
import { GoldDivider } from "@/components/ui/GoldDivider";

export const metadata = {
  title: "Samanvaya — ISHAN",
  description: "ISHAN's flagship immersive wellness experience for profound inner exploration.",
};

export default function SamanvayaPage() {
  return (
    <>
      <PageHero />
      <TheExperience />
      <Pillars />
      <SamanvayaQuote />
      <SamanvayaCTA />
    </>
  );
}
