"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { motion, useReducedMotion } from "framer-motion";

export function Vision() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column: Vision Copy */}
        <div className="flex flex-col space-y-8">
          <SectionHeading
            eyebrow="The Masterplan"
            heading="A Blueprint for the Future of Human Settlement"
          />
          <RevealOnScroll delay={0.1}>
            <p className="font-sans font-light text-heading/80 leading-relaxed text-lg">
              Sri Vrindavan Project is not merely a real estate development; it is an architectural and sociological manifestation of ISHAN&apos;s core philosophies. Designed as a self-sustaining ecosystem, the township integrates advanced ecological infrastructure with ancient spatial design principles (Vastu and Sacred Geometry).
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="font-sans font-light text-heading/80 leading-relaxed text-lg">
              Here, the built environment serves as a conduit for human elevation. From carbon-neutral residential clusters and organic agrarian zones to state-of-the-art integrative medical facilities and silent meditative sanctuaries—every acre is purposefully planned to foster a community living in conscious harmony with nature and one another.
            </p>
          </RevealOnScroll>
        </div>

        {/* Right Column: Abstract SVG Site-Plan Graphic */}
        <RevealOnScroll delay={0.3} className="relative w-full aspect-square max-w-md mx-auto flex items-center justify-center p-8">
          <div className="absolute inset-0 bg-surface border border-divider rounded-full" />
          
          <motion.svg
            viewBox="0 0 100 100"
            className="w-full h-full text-secondary"
            animate={{ rotate: prefersReducedMotion ? 0 : 360 }}
            transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
          >
            {/* Outer Boundary */}
            <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 1" />
            
            {/* Internal Zones (Hexagonal Geometry) */}
            <polygon points="50,10 85,30 85,70 50,90 15,70 15,30" fill="none" stroke="var(--color-burntOrange)" strokeWidth="0.5" className="opacity-30" />
            
            {/* Central Node */}
            <circle cx="50" cy="50" r="15" fill="none" stroke="var(--color-deepAmber)" strokeWidth="0.8" className="opacity-50" />
            <circle cx="50" cy="50" r="5" fill="var(--color-sacredGold)" className="opacity-20" />
            
            {/* Pathways / Radiating Lines */}
            <line x1="50" y1="50" x2="50" y2="10" stroke="currentColor" strokeWidth="0.3" />
            <line x1="50" y1="50" x2="85" y2="70" stroke="currentColor" strokeWidth="0.3" />
            <line x1="50" y1="50" x2="15" y2="70" stroke="currentColor" strokeWidth="0.3" />
            
            {/* Scattered Nodes */}
            <circle cx="35" cy="35" r="3" fill="var(--color-burntOrange)" className="opacity-40" />
            <circle cx="65" cy="35" r="4" fill="currentColor" className="opacity-60" />
            <circle cx="50" cy="75" r="3" fill="var(--color-deepAmber)" className="opacity-40" />
          </motion.svg>
        </RevealOnScroll>
      </div>
    </section>
  );
}
