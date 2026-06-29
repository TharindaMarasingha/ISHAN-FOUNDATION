import { Hero } from "@/components/samanvaya/Hero";
import { TheExperience } from "@/components/samanvaya/TheExperience";
import { IncludedPillars } from "@/components/samanvaya/IncludedPillars";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata = {
  title: "Samanvaya — The Inner Immersion",
  description: "ISHAN's flagship immersive wellness experience for profound inner exploration, holistic wellbeing, and conscious transformation.",
};

export default function SamanvayaPage() {
  return (
    <div className="-mt-24">
      <Hero />
      
      <TheExperience />
      <GoldDivider />
      
      <IncludedPillars />
      
      {/* Vision Quote Section */}
      <section className="py-32 px-6 md:px-12 bg-deepAmber/[0.02] border-y border-mandarin/10 relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[25rem] text-mandarin opacity-[0.03] pointer-events-none select-none leading-none">
          &ldquo;
        </div>
        <RevealOnScroll className="relative z-10 max-w-4xl mx-auto text-center">
          <blockquote className="font-display italic text-3xl md:text-4xl lg:text-5xl text-deepAmber leading-snug md:leading-snug mb-10">
            "In the absolute stillness of nature, the mind finally ceases its restless wandering, and we remember what it means to simply be."
          </blockquote>
          <div className="text-[0.65rem] md:text-xs uppercase tracking-widest text-mandarin">
            Samanvaya — The Core Realization
          </div>
        </RevealOnScroll>
      </section>

      {/* Closing CTA */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
        <SectionHeading
          eyebrow="Answer the Call"
          heading="Step Into Stillness"
          description="Spaces for our upcoming immersions are strictly limited to preserve the intimacy and depth of the experience. Register your interest below to receive details on upcoming dates."
          align="center"
        />
        <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <Button href="/contact" variant="primary" className="bg-mandarin text-peach hover:bg-burntOrange">
            Register Interest
          </Button>
          <Button href="/" variant="ghost" className="border-mandarin text-mandarin hover:border-burntOrange hover:text-burntOrange">
            Back to Home
          </Button>
        </RevealOnScroll>
      </section>
    </div>
  );
}
