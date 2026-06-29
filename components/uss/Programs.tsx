import { SectionHeading } from "../ui/SectionHeading";
import { NumberedCard } from "../ui/NumberedCard";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const PROGRAMS = [
  { number: "01", title: "Academic Collaborations", description: "Partnering with global universities to establish accredited programs in consciousness studies and integrative wellness sciences." },
  { number: "02", title: "Practitioner Fellowships", description: "Advanced training for medical and psychological professionals to integrate contemplative ethics into clinical settings." },
  { number: "03", title: "Independent Research Grants", description: "Funding empirical studies on the effects of long-term meditation, bio-field therapies, and indigenous healing modalities." },
  { number: "04", title: "The Ethics Symposia", description: "Annual gatherings of philosophers, scientists, and spiritual leaders to formulate ethical frameworks for the modern age." },
];

export function Programs() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <SectionHeading
            align="center"
            eyebrow="Initiatives & Outreach"
            heading="Programs & Research Fellowships"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {PROGRAMS.map((prog, index) => (
            <RevealOnScroll key={prog.number} delay={index * 0.1} className="h-full">
              <NumberedCard {...prog} className="h-full shadow-sm hover:shadow-[#1B4332]/5 border-[#1B4332]/10" />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
