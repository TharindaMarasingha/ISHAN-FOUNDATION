import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { NumberedCard } from "../ui/NumberedCard";

const OBJECTIVES = [
  { number: "01", title: "Pristine Wisdom", description: "Disseminating profound spiritual sciences and universal truths." },
  { number: "02", title: "Preventive Wellness", description: "Establishing holistic practices for lifelong health." },
  { number: "03", title: "Proactive Wellbeing", description: "Empowering individuals to take charge of their mental and energetic states." },
  { number: "04", title: "Productive Welfare", description: "Creating sustainable models for community upliftment." },
  { number: "05", title: "Collective Consciousness", description: "Raising global awareness through shared contemplative practices." },
  { number: "06", title: "Shared Responsibilities", description: "Fostering a culture of duty towards society and the environment." },
  { number: "07", title: "Coherent Communities", description: "Building harmonious, spiritually-aligned living spaces." },
  { number: "08", title: "Sustainable Systems", description: "Designing ecologically restorative and self-sustaining models." },
];

export function EightObjectives() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <SectionHeading
            align="center"
            eyebrow="Strategic Framework"
            heading="Eight Objectives"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {OBJECTIVES.map((obj, index) => (
            <RevealOnScroll key={obj.number} delay={index * 0.05} className="h-full">
              <NumberedCard 
                {...obj} 
                className="h-full bg-white/60 backdrop-blur-md border-[#C79A4B]/20 hover:border-[#C79A4B]/40 shadow-[0_4px_20px_rgba(46,26,14,0.02)] hover:shadow-[0_8px_30px_rgba(46,26,14,0.06)] transition-all duration-300" 
              />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
