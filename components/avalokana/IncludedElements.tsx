"use client";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";

const ELEMENTS = [
  {
    title: "Silence & Stillness",
    description: "Dedicated periods of silence for deep inner reflection and self-inquiry.",
  },
  {
    title: "Meditation & Contemplation",
    description: "Guided meditation and contemplative practices drawn from timeless traditions.",
  },
  {
    title: "Mindful Movement",
    description: "Yoga, breathwork, and mindful movement to restore physical balance and vitality.",
  },
  {
    title: "Nature Immersion",
    description: "Reconnecting with the natural world through mindful nature walks and ecological awareness.",
  },
  {
    title: "Experiential Learning",
    description: "Creative expression, community living, and shared learning experiences.",
  },
  {
    title: "Service & Integration",
    description: "Grounding insights through acts of service and intentional re-entry into daily life.",
  },
];

export function IncludedElements() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <SectionHeading
          align="center"
          heading="Elements of the Immersion"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {ELEMENTS.map((element, index) => (
          <RevealOnScroll key={element.title} delay={index * 0.1} className="h-full">
            <Card className="h-full p-8 border-divider hover:-translate-y-1 hover:border-primary/40 transition-all duration-300">
              <h3 className="font-display font-light text-2xl text-heading mb-4">
                {element.title}
              </h3>
              <p className="font-sans font-light text-sm text-heading/80 leading-relaxed">
                {element.description}
              </p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
