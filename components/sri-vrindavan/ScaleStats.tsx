import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const STATS = [
  { value: "150", label: "Acres of Masterplanned Land" },
  { value: "40%", label: "Dedicated to Nature & Agriculture" },
  { value: "3", label: "Primary Healing Precincts" },
  { value: "500+", label: "Conscious Residential Units" },
];

export function ScaleStats() {
  return (
    <section className="bg-heading py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="The Scale"
          heading="A Monumental Undertaking"
          description="Numbers only tell part of the story, but they hint at the sheer magnitude of our commitment to redefining human habitation."
          align="center"
        />

        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {STATS.map((stat, index) => (
            <RevealOnScroll key={stat.label} delay={index * 0.1}>
              <div className="flex flex-col items-center">
                <span className="font-display font-light text-6xl md:text-7xl text-secondary mb-4">
                  {stat.value}
                </span>
                <span className="font-sans font-light text-sm uppercase tracking-widest text-white/80">
                  {stat.label}
                </span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
