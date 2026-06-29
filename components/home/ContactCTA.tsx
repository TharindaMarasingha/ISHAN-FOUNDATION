import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function ContactCTA() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
      <SectionHeading
        eyebrow="Get in Touch"
        heading="Join the Ecosystem"
        description="Whether you wish to learn, heal, serve, or partner with us, your journey begins here."
        align="center"
      />

      <RevealOnScroll delay={0.2} className="mt-12 w-full flex flex-col items-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          <a href="https://ishan.global" className="font-sans font-light text-deepAmber hover:text-burntOrange transition-colors border-b border-burntOrange/20 pb-1">
            www.ishan.global
          </a>
          <span className="hidden sm:block text-burntOrange/30">•</span>
          <a href="mailto:contact@ishan.global" className="font-sans font-light text-deepAmber hover:text-burntOrange transition-colors border-b border-burntOrange/20 pb-1">
            contact@ishan.global
          </a>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <Button href="/contact" variant="primary">Register Interest</Button>
          <Button href="/about" variant="ghost">About ISHAN</Button>
        </div>
      </RevealOnScroll>
    </section>
  );
}
