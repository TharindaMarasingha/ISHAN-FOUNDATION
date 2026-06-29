import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function ArogyaCTA() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
      <SectionHeading
        eyebrow="Take the Next Step"
        heading="Begin Your Healing Journey"
        description="Whether you are seeking a restorative retreat, preventive health screening, or wish to partner with us to bring wellness to your community, we invite you to connect."
        align="center"
      />

      <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
        <Button href="/contact" variant="primary">Join a Program</Button>
        <Button href="/contact" variant="ghost">Partner With Us</Button>
      </RevealOnScroll>
    </section>
  );
}
