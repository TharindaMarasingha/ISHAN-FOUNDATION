import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function USSCTA() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
      <SectionHeading
        eyebrow="Get Involved"
        heading="Collaborate With The Institute"
        description="We invite academics, practitioners, researchers, and seekers to join us in mapping the frontiers of human consciousness and ethical development."
        align="center"
      />

      <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
        <Button href="/contact" variant="primary">Submit a Proposal</Button>
        <Button href="/" variant="ghost">Back to Home</Button>
      </RevealOnScroll>
    </section>
  );
}
