import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Button } from "../ui/Button";

const PARTNER_TYPES = ["Institutions", "Corporations", "Governments", "NGOs", "Universities"];
const CONTRIBUTIONS = [
  "Volunteering", "Professional Expertise", "Research", "Teaching", 
  "Mentorship", "Community Projects", "Environmental Initiatives", 
  "Strategic Partnerships", "Philanthropic Support", "Knowledge Sharing"
];

export function Partnerships() {
  return (
    <section 
      className="py-24 px-6 md:px-12"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 200, 150, 0.12) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 220, 180, 0.1) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-8">
            <RevealOnScroll>
              <h3 className="font-display font-light text-4xl md:text-5xl text-deepAmber mb-4">
                Partnerships
              </h3>
              <p className="font-sans font-light text-deepAmber/80 leading-relaxed mb-6">
                We actively seek strategic alliances with values-aligned entities to scale our planetary impact.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {PARTNER_TYPES.map((pt) => (
                  <span key={pt} className="px-4 py-1.5 rounded-full bg-darkBrown/5 text-xs text-deepAmber tracking-widest uppercase">
                    {pt}
                  </span>
                ))}
              </div>
              <Button variant="primary" href="/contact">Become a Partner</Button>
            </RevealOnScroll>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-8">
            <RevealOnScroll delay={0.2}>
              <h3 className="font-display font-light text-2xl md:text-3xl text-deepAmber mb-8">
                You Can Contribute Through
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {CONTRIBUTIONS.map((item) => (
                  <div key={item} className="flex items-center text-sm font-sans font-light text-deepAmber/80">
                    <span className="text-sacredGold mr-3">✦</span>
                    {item}
                  </div>
                ))}
              </div>
              <Button variant="ghost" href="/contact">Connect With Us</Button>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}
