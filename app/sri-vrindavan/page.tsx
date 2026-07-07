import { Hero } from "@/components/sri-vrindavan/Hero";
import { Vision } from "@/components/sri-vrindavan/Vision";
import { Zones } from "@/components/sri-vrindavan/Zones";
import { StatsScale } from "@/components/sri-vrindavan/StatsScale";
import { Partnership } from "@/components/sri-vrindavan/Partnership";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata = {
  title: "Sri Vrindavan Project — ISHAN",
  description: "Sri Lanka's First Conscious Living Township—a 150-acre integrated settlement for spiritual and ecological harmony.",
};

export default function SriVrindavanPage() {
  return (
    <div className="-mt-24">
      <Hero />
      
      <Vision />
      
      <StatsScale />
      
      <Zones />
      <GoldDivider />
      
      <Partnership />
      
      {/* Quote Section */}
      <section className="py-32 px-6 md:px-12 bg-deepAmber/[0.02] border-y border-sacredGold/10 relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[25rem] text-burntOrange opacity-[0.03] pointer-events-none select-none leading-none">
          &ldquo;
        </div>
        <RevealOnScroll className="relative z-10 max-w-4xl mx-auto text-center">
          <blockquote className="font-display italic text-3xl md:text-4xl lg:text-5xl text-deepAmber leading-snug md:leading-snug">
            "More than a physical place, Sri Vrindavan is a vision for the future — a living ecosystem where conscious living becomes a shared way of life."
          </blockquote>
        </RevealOnScroll>
      </section>
      
      {/* Closing CTA */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
        <SectionHeading
          eyebrow="Get Involved"
          heading="Be Part of the Masterplan"
          description="Whether you are looking to invest in a conscious future, contribute your expertise to our ecological infrastructure, or secure your place as a founding resident—reach out to our development team."
          align="center"
        />
        <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <Button href="/contact" variant="primary">
            Contact Development Team
          </Button>
          <Button href="/" variant="ghost">
            Back to Home
          </Button>
        </RevealOnScroll>
      </section>
    </div>
  );
}
