import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionIllustration } from "../ui/SectionIllustration";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";
import Link from "next/link";

const CARDS = [
  { title: "Vision", description: "To cultivate a world where humanity and nature exist in conscious harmony." },
  { title: "Mission", description: "Fostering collective wellbeing through holistic education and sustainable living." },
  { title: "Philosophy", description: "Rooted in timeless spiritual sciences, adapted for the modern planetary citizen." },
  { title: "Approach", description: "Integrating traditional wellness paradigms with proactive social responsibility." },
];

export function WhoWeAre() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16 items-start">
        {/* Left Column */}
        <div className="flex flex-col space-y-8">
          <div className="relative">
            <SectionIllustration
              variant="lotus"
              className="absolute -top-12 -left-8 w-32 h-32 text-burntOrange opacity-10 pointer-events-none"
            />
            <SectionHeading
              eyebrow="Who We Are"
              heading="A global movement for humanity & nature."
            />
          </div>
          <RevealOnScroll delay={0.1}>
            <p className="font-sans font-light text-deepAmber/90 leading-relaxed text-lg">
              ISHAN is a conscious-living organisation dedicated to harmonising the relationship between human beings and the natural world. We believe that true wellbeing extends beyond the individual, encompassing the entire planetary ecosystem.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="font-sans font-light text-deepAmber/80 leading-relaxed">
              Through our global initiatives in preventive wellness, consciousness research, and sustainable community living, we provide pathways for profound inner transformation and collective healing.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <Link
              href="/about"
              className="inline-block mt-4 text-sm font-display italic text-burntOrange tracking-widest hover:text-sacredGold transition-colors duration-300"
            >
              Read More →
            </Link>
          </RevealOnScroll>
        </div>

        {/* Right Column: 2x2 Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {CARDS.map((card, index) => (
            <RevealOnScroll key={card.title} delay={index * 0.08} className="h-full">
              <Card className="h-full flex flex-col justify-center">
                <h3 className="font-display uppercase tracking-widest text-deepAmber text-lg mb-3">
                  {card.title}
                </h3>
                <p className="font-sans font-light text-sm text-deepAmber/80 leading-relaxed">
                  {card.description}
                </p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
