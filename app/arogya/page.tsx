import { Hero } from "@/components/arogya/Hero";
import { VisionMission } from "@/components/arogya/VisionMission";
import { FoundingTrinity } from "@/components/arogya/FoundingTrinity";
import { EightPillars } from "@/components/arogya/EightPillars";
import { SriLankaHeritage } from "@/components/arogya/SriLankaHeritage";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata = {
  title: "Arogya Ashram International — ISHAN",
  description: "A globally scalable wellness ecosystem rooted in Sri Lanka's ancient Arogyasala heritage.",
};

export default function ArogyaPage() {
  return (
    <div className="-mt-24">
      <Hero />
      
      <VisionMission />
      <GoldDivider />
      
      <FoundingTrinity />
      <GoldDivider />
      
      <EightPillars />
      
      {/* Vision Quote Section (reusing the pattern directly here for simplicity and isolation) */}
      <section className="py-32 px-6 md:px-12 bg-deepAmber/[0.02] border-y border-sacredGold/10 relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[25rem] text-mandarin opacity-[0.03] pointer-events-none select-none leading-none">
          &ldquo;
        </div>
        <RevealOnScroll className="relative z-10 max-w-4xl mx-auto text-center">
          <blockquote className="font-display italic text-3xl md:text-4xl lg:text-5xl text-deepAmber leading-snug md:leading-snug mb-10">
            "To establish a global humanitarian ecosystem for holistic healing, preventive healthcare, wellness education, sustainable living, integrated healthcare, and conscious human development."
          </blockquote>
          <div className="text-[0.65rem] md:text-xs uppercase tracking-widest text-burntOrange">
            Arogya Ashram International — Vision
          </div>
        </RevealOnScroll>
      </section>

      <SriLankaHeritage />

      {/* Closing CTA */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
        <SectionHeading
          eyebrow="Take the Next Step"
          heading="Join the Ecosystem"
          description="Whether you are a wellness practitioner, institutional partner, or a seeker—connect with AAI and become a part of this planetary transformation."
          align="center"
        />
        <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <Button href="/contact" variant="primary">Register Interest</Button>
          <Button href="/" variant="ghost">Back to Home</Button>
        </RevealOnScroll>
      </section>
    </div>
  );
}
