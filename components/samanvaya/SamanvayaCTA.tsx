import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function SamanvayaCTA() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
      <SectionHeading
        eyebrow="Answer the Call"
        heading="Reserve Your Space"
        description="Due to the intimate and intensive nature of the Samanvaya immersion, spaces are strictly limited. Register your interest to be notified of upcoming retreat dates."
        align="center"
      />

      <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
        <Button href="/contact" variant="primary">Register Interest</Button>
        <Button href="/" variant="ghost">Return Home</Button>
      </RevealOnScroll>
    </section>
  );
}
