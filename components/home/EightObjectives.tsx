import { SectionHeading } from "../ui/SectionHeading";
import { NumberedCard } from "../ui/NumberedCard";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const OBJECTIVES = [
  { number: "01", title: "Pristine Wisdom", description: "Safeguarding and sharing authentic spiritual and practical knowledge for the benefit of all." },
  { number: "02", title: "Preventive Wellness", description: "Advocating proactive health measures through lifestyle, diet, and spiritual practices." },
  { number: "03", title: "Proactive Wellbeing", description: "Fostering environments that actively support mental, emotional, and physical balance." },
  { number: "04", title: "Productive Welfare", description: "Initiating community projects that create self-sustaining social and economic value." },
  { number: "05", title: "Collective Consciousness", description: "Raising global awareness of our interconnectedness and shared spiritual heritage." },
  { number: "06", title: "Shared Responsibilities", description: "Encouraging accountable actions towards society and the environment." },
  { number: "07", title: "Coherent Communities", description: "Building harmonious societies rooted in mutual respect and understanding." },
  { number: "08", title: "Sustainable Systems", description: "Developing and promoting ecological practices for long-term planetary health." },
];

export function EightObjectives() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Strategic Framework"
        heading="Eight Objectives"
        description="The actionable goals driving ISHAN’s global initiatives, designed to translate our core values into measurable impact."
        align="center"
      />

      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {OBJECTIVES.map((obj, index) => (
          <RevealOnScroll key={obj.number} delay={index * 0.1} className="h-full">
            <NumberedCard {...obj} className="h-full" />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
