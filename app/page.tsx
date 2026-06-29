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

export const metadata = {
  title: "Home — ISHAN",
  description: "International Society of Humanity and Nature. Harmonising Humanity with Nature through Wisdom, Wellbeing, and Conscious Action.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      
      <WhoWeAre />
      <GoldDivider />
      
      <FourPillars />
      <GoldDivider />
      
      <EightObjectives />
      <GoldDivider />
      
      <Ecosystem />
      <GoldDivider />
      
      <Approach />
      <GoldDivider />
      
      <Team />
      <GoldDivider />
      
      <WhoWeServe />
      <GoldDivider />
      
      <Partnerships />
      
      <VisionQuote />
      
      <ContactCTA />
    </>
  );
}
