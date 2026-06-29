import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const GROUPS = [
  "Individuals", "Families", "Students", "Professionals", "Organisations", 
  "Educational Institutions", "Healthcare Professionals", "Governments", 
  "NGOs", "Community Leaders", "Spiritual Seekers", "Social Entrepreneurs", 
  "Environmental Organisations"
];

export function WhoWeServe() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-12">
          <SectionHeading
            align="center"
            eyebrow="Our Reach"
            heading="Who We Serve"
          />
        </div>

        <RevealOnScroll delay={0.2}>
          <div className="flex flex-wrap justify-center gap-4">
            {GROUPS.map((group) => (
              <div
                key={group}
                className="px-6 py-3 rounded-full border border-burntOrange/20 font-sans font-light text-deepAmber text-sm md:text-base transition-colors duration-300 hover:bg-burntOrange/5 hover:border-burntOrange/40 cursor-default"
              >
                {group}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
