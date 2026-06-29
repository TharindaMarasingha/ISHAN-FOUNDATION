import { PageHero } from "@/components/about/PageHero";
import { OurStory } from "@/components/about/OurStory";
import { ValuesGrid } from "@/components/about/ValuesGrid";
import { AboutQuote } from "@/components/about/AboutQuote";
import { AboutCTA } from "@/components/about/AboutCTA";
import { GoldDivider } from "@/components/ui/GoldDivider";

export const metadata = {
  title: "About — ISHAN",
  description: "Learn about ISHAN's vision, mission, philosophy, and our core values for conscious living.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero />
      <OurStory />
      <GoldDivider />
      <ValuesGrid />
      <AboutQuote />
      <AboutCTA />
    </>
  );
}
