import { Hero } from "@/components/home/Hero";
import { Ticker } from "@/components/home/Ticker";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { FourPillars } from "@/components/home/FourPillars";
import { EightObjectives } from "@/components/home/EightObjectives";
import { Ecosystem } from "@/components/home/Ecosystem";
import { Approach } from "@/components/home/Approach";
import { Team } from "@/components/home/Team";
import { WhoWeServe } from "@/components/home/WhoWeServe";
import { Partnerships } from "@/components/home/Partnerships";
import { VisionQuote } from "@/components/home/VisionQuote";
import { ContactCTA } from "@/components/home/ContactCTA";
import { GoldDivider } from "@/components/ui/GoldDivider";

import { OverlapParallax } from "@/components/ui/OverlapParallax";

export const metadata = {
  title: "Home — ISHAN",
  description: "International Society of Humanity and Nature. Harmonising Humanity with Nature through Wisdom, Wellbeing, and Conscious Action.",
};

export default function Home() {
  return (
    // We add negative margin-top to pull the hero up under the transparent navbar on the homepage
    <div className="-mt-24">
      <Hero />
      <Ticker />
      
      <WhoWeAre />
      
      <OverlapParallax
        baseContent={<FourPillars />}
        overlapContent={
          <EightObjectives />
        }
      />
      
      <OverlapParallax
        baseContent={
          <OverlapParallax
            baseContent={<Ecosystem />}
            overlapContent={<Approach />}
          />
        }
        overlapContent={<Team />}
      />
      
      <OverlapParallax
        baseContent={
          <OverlapParallax
            baseContent={<WhoWeServe />}
            overlapContent={<Partnerships />}
          />
        }
        overlapContent={<VisionQuote />}
      />
      
      <ContactCTA />
    </div>
  );
}
