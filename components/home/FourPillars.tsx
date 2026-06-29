import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionIllustration } from "../ui/SectionIllustration";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { NumberedCard } from "../ui/NumberedCard";

const PILLARS = [
  { number: "01", title: "Wisdom", description: "Cultivating timeless knowledge and profound understanding of the self and the universe." },
  { number: "02", title: "Wellness", description: "Integrating physical health, mental clarity, and energetic balance." },
  { number: "03", title: "Humanity", description: "Fostering compassion, ethical living, and collective social responsibility." },
  { number: "04", title: "Nature", description: "Restoring ecological harmony and living in sustainable alignment with the Earth." },
];

export function FourPillars() {
  return (
    <section className="py-24 px-6 md:px-12 bg-deepAmber/[0.02] border-y border-sacredGold/10">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 relative flex justify-center">
          <SectionIllustration
            variant="mandala-seed"
            className="absolute -top-16 w-40 h-40 text-sacredGold opacity-5 pointer-events-none"
          />
          <SectionHeading
            align="center"
            eyebrow="Our Foundation"
            heading="Four core pillars"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, index) => (
            <RevealOnScroll key={pillar.number} delay={index * 0.1} className="h-full">
              <NumberedCard {...pillar} className="h-full shadow-sm hover:shadow-deepAmber/5" />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
