import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function BrindavanCTA() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
      <SectionHeading
        eyebrow="Take the Next Step"
        heading="Become Part of the Vision"
        description="Whether you are interested in exploring investment opportunities, offering your professional expertise, or registering for future residency, we welcome your inquiry."
        align="center"
      />

      <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
        <Button href="/contact" variant="primary">Contact Development Team</Button>
        <Button href="/" variant="ghost">Return Home</Button>
      </RevealOnScroll>
    </section>
  );
}
