import { SectionHeading } from "../ui/SectionHeading";
import { NumberedCard } from "../ui/NumberedCard";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const IMPACTS = [
  {
    number: "01",
    title: "Restored Vitality",
    description: "Realign the body's natural rhythms to dramatically increase daily energy levels, mental clarity, and physical resilience.",
  },
  {
    number: "02",
    title: "Disease Prevention",
    description: "Identify and correct minor imbalances before they develop into chronic conditions, shifting from reactive to proactive health.",
  },
  {
    number: "03",
    title: "Inner Stillness",
    description: "Develop practical tools to navigate modern stressors, cultivating a profound sense of inner peace and emotional equilibrium.",
  },
  {
    number: "04",
    title: "Lifelong Wisdom",
    description: "Gain self-knowledge and an intuitive understanding of your unique constitution, empowering you to make conscious lifestyle choices.",
  },
];

export function Impact() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="The Impact"
        heading="Benefits of Conscious Healing"
        description="Embracing the Arogya lifestyle yields transformative benefits that extend far beyond physical health, influencing every dimension of your life."
        align="center"
      />

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {IMPACTS.map((impact, index) => (
          <RevealOnScroll key={impact.number} delay={index * 0.1} className="h-full">
            <NumberedCard {...impact} className="h-full" />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
