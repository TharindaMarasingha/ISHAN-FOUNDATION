import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function AboutCTA() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
      <SectionHeading
        eyebrow="Take the Next Step"
        heading="Begin Your Journey"
        description="Connect with our global network of seekers, healers, and builders. Join us in shaping a conscious future."
        align="center"
      />

      <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
        <Button href="/contact" variant="primary">Register Interest</Button>
        <Button href="/" variant="ghost">Back to Home</Button>
      </RevealOnScroll>
    </section>
  );
}
