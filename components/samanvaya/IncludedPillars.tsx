import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";

const PILLARS = [
  {
    title: "Guided Meditation & Breathwork",
    description: "Daily sessions drawing from ancient yogic sciences to regulate the nervous system, clear mental fog, and access deeper states of awareness.",
  },
  {
    title: "Nature Immersion",
    description: "Extended periods spent walking, sitting, and observing in untouched natural environments, restoring our primal connection to the Earth.",
  },
  {
    title: "Vow of Silence (Mauna)",
    description: "Dedicated spans of complete vocal and digital silence, allowing the internal dialogue to settle and profound insights to surface.",
  },
  {
    title: "Mindful Communal Nourishment",
    description: "Plant-based, locally sourced meals eaten in mindful gratitude, transforming the simple act of eating into a contemplative practice.",
  },
  {
    title: "Reflective Journaling",
    description: "Guided prompts and unstructured time for written self-inquiry, serving as a mirror to map the internal landscape as it shifts.",
  },
  {
    title: "Wisdom Transmissions",
    description: "Evening discourses and gentle guidance from experienced facilitators, offering ancient philosophical frameworks to integrate the day's experiences.",
  },
];

export function IncludedPillars() {
  return (
    <section className="pt-12 pb-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <SectionHeading
          align="center"
          eyebrow="Elements of Immersion"
          heading="Pillars of the Retreat"
          description="Every aspect of Samanvaya is intentionally designed to strip away distractions and cultivate an environment where true transformation can unfold."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PILLARS.map((pillar, index) => (
          <RevealOnScroll key={pillar.title} delay={index * 0.1} className="h-full">
            <div className="group relative h-full flex flex-col p-10 bg-[#FAFAFA] hover:bg-white transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(46,26,14,0.08)] overflow-hidden">
              {/* Ghost Number */}
              <div className="absolute -bottom-4 right-2 font-display text-[8rem] leading-none text-primary opacity-[0.02] group-hover:opacity-[0.04] transition-opacity duration-500 pointer-events-none select-none z-0">
                {String(index + 1).padStart(2, '0')}
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="font-display font-light text-2xl text-heading mb-4">
                  {pillar.title}
                </h3>
                <p className="font-sans font-light text-sm text-heading/80 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
