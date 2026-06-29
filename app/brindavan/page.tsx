import { Hero } from "@/components/brindavan/Hero";
import { Vision } from "@/components/brindavan/Vision";
import { Zones } from "@/components/brindavan/Zones";
import { StatsScale } from "@/components/brindavan/StatsScale";
import { Partnership } from "@/components/brindavan/Partnership";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata = {
  title: "The Brindavan Project — ISHAN",
  description: "Sri Lanka's First Conscious Living Township—a 150-acre integrated settlement for spiritual and ecological harmony.",
};

export default function BrindavanPage() {
  return (
    <div className="-mt-24">
      <Hero />
      
      <Vision />
      
      <StatsScale />
      
      <Zones />
      <GoldDivider />
      
      <Partnership />
      
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
