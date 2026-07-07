import { Hero } from "@/components/avalokana/Hero";
import { AboutExperience } from "@/components/avalokana/AboutExperience";
import { IncludedElements } from "@/components/avalokana/IncludedElements";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata = {
  title: "Antahakarana Avalokana — ISHAN",
  description: "A signature immersive experience designed for profound self-discovery, inner reflection, holistic wellbeing, and conscious transformation.",
};

export default function AvalokanaPage() {
  return (
    <div className="-mt-24">
      <Hero />
      <AboutExperience />
      <GoldDivider />
      <IncludedElements />

      {/* Note Box Section */}
      <section className="pb-24 px-6 max-w-4xl mx-auto text-center">
        <RevealOnScroll>
          <div className="p-8 bg-mandarin/5 border border-mandarin/20 rounded-2xl inline-block max-w-3xl shadow-sm">
            <p className="font-sans font-light text-deepAmber leading-relaxed md:text-lg">
              <span className="font-medium text-mandarin">Note:</span> Antahakarana Avalokana is ISHAN's inner reflection experience. It is distinct from Samanvaya, which is ISHAN's five-elements transformational retreat.
            </p>
          </div>
        </RevealOnScroll>
      </section>

      {/* Closing CTA */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
        <SectionHeading
          eyebrow="Take the Next Step"
          heading="Begin Your Journey"
          description="Ready to embark on this journey of self-discovery? Reach out to us or explore our other transformational experiences."
          align="center"
        />
        <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <Button href="/samanvaya" variant="primary" className="bg-mandarin text-peach hover:bg-burntOrange">
            Explore Samanvaya
          </Button>
          <Button href="/contact" variant="ghost" className="border-mandarin text-mandarin hover:border-burntOrange hover:text-burntOrange">
            Register Interest
          </Button>
        </RevealOnScroll>
      </section>
    </div>
  );
}
