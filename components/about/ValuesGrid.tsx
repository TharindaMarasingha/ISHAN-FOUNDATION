import { SectionHeading } from "../ui/SectionHeading";
import { NumberedCard } from "../ui/NumberedCard";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const VALUES = [
  { number: "01", title: "Pristine Wisdom", description: "Honoring and applying the uncorrupted teachings of ancient sages to foster clarity and insight." },
  { number: "02", title: "Preventive Wellness", description: "Empowering individuals to proactively manage their health rather than merely reacting to illness." },
  { number: "03", title: "Proactive Wellbeing", description: "Designing environments, relationships, and routines that actively support joy and equilibrium." },
  { number: "04", title: "Productive Welfare", description: "Creating systems of support that elevate communities toward self-sufficiency and dignity." },
  { number: "05", title: "Collective Consciousness", description: "Fostering an awareness that every action ripples through the entire fabric of existence." },
  { number: "06", title: "Shared Responsibilities", description: "Embracing the duty we owe to one another and to the Earth, recognizing no division between self and other." },
  { number: "07", title: "Coherent Communities", description: "Building deeply connected networks of individuals living in mutual support and harmony." },
  { number: "08", title: "Sustainable Systems", description: "Developing infrastructure and practices that ensure planetary health for millennia to come." },
];

export function ValuesGrid() {
  return (
    <section className="bg-surface py-24 px-6 border-y border-divider">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Our Principles"
          heading="The Eight Core Values"
          description="These foundational tenets inform every decision we make, guiding our internal culture and our external global initiatives."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((val, index) => (
            <RevealOnScroll key={val.number} delay={index * 0.1} className="h-full">
              <NumberedCard {...val} className="h-full" />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
