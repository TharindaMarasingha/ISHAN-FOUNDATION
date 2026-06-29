"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { motion } from "framer-motion";

export function Vision() {
  return (
    <section className="bg-deepAmber/[0.02] py-24 px-6 border-y border-burntOrange/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col">
          <SectionHeading
            eyebrow="The Masterplan"
            heading="Engineering a Conscious Society"
          />
          <RevealOnScroll delay={0.2} className="mt-8">
            <p className="font-sans font-light text-deepAmber leading-relaxed mb-6">
              Modern urban planning prioritizes efficiency and commerce, often at the expense of human connection and psychological well-being. The Brindavan Project inverts this paradigm.
            </p>
            <p className="font-sans font-light text-deepAmber leading-relaxed mb-6">
              Our 150-acre masterplan is designed around the natural topography, preserving ancient trees and natural waterways. The architecture draws from sacred geometry and Vastu Shastra principles, ensuring that the built environment harmonizes perfectly with the natural landscape.
            </p>
            <p className="font-sans font-light text-deepAmber leading-relaxed">
              From pedestrian-first greenways to integrated wellness clinics and cultural amphitheatres, every square meter is dedicated to fostering physical vitality, mental clarity, and profound social cohesion.
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.4} className="flex justify-center lg:justify-end relative h-[400px]">
          {/* Decorative abstract site plan SVG */}
          <div className="relative w-full max-w-lg h-full flex items-center justify-center opacity-80">
            <motion.svg
              viewBox="0 0 300 300"
              className="w-full h-full text-burntOrange"
              animate={{ rotate: 360 }}
              transition={{ duration: 180, repeat: Infinity, ease: "linear" }}
            >
              {/* Outer boundary */}
              <circle cx="150" cy="150" r="140" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 4" className="opacity-30" />
              
              {/* Internal zones and pathways */}
              <circle cx="150" cy="150" r="40" fill="none" stroke="currentColor" strokeWidth="1.5" className="opacity-60" />
              <path d="M 150 10 L 150 110" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />
              <path d="M 150 290 L 150 190" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />
              <path d="M 10 150 L 110 150" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />
              <path d="M 290 150 L 190 150" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />
              
              {/* Zone nodes */}
              <circle cx="80" cy="80" r="20" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-50" />
              <circle cx="220" cy="80" r="25" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-50" />
              <circle cx="80" cy="220" r="30" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-50" />
              <circle cx="220" cy="220" r="15" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-50" />
              
              {/* Organic pathways */}
              <path d="M 80 80 Q 150 20 220 80 T 220 220 T 80 220 T 80 80" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-30" />
            </motion.svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display italic text-sm text-sacredGold bg-darkBrown/80 px-4 py-1 rounded-full backdrop-blur-sm">Masterplan Core</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
