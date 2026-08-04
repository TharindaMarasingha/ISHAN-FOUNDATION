"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { motion } from "framer-motion";

export function Approach() {
  return (
    <section className="bg-surface py-24 px-6 border-y border-divider">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col">
          <SectionHeading
            eyebrow="Our Approach"
            heading="Wisdom Meets Modern Science"
          />
          <RevealOnScroll delay={0.2} className="mt-8">
            <p className="font-sans font-light text-heading leading-relaxed mb-6">
              For thousands of years, traditional wellness systems like Ayurveda have understood that health is not merely the absence of disease, but a vibrant state of equilibrium between the individual and their environment.
            </p>
            <p className="font-sans font-light text-heading leading-relaxed mb-6">
              At Arogya Ashram International, we do not reject modern health science; rather, we integrate it. We utilize contemporary preventive health screening to validate and direct traditional healing protocols. This synthesis provides a robust, evidence-based approach to holistic living.
            </p>
            <p className="font-sans font-light text-heading leading-relaxed">
              By harmonizing the intuitive, natural rhythms of ancient healing with the analytical precision of today's medical understanding, we offer a truly integrative path to lifelong vitality.
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.4} className="flex justify-center lg:justify-end relative h-96">
          {/* Decorative geometric SVG representing integration of two elements */}
          <div className="relative w-full max-w-md h-full flex items-center justify-center opacity-80">
            <motion.svg
              viewBox="0 0 200 200"
              className="w-full h-full text-primary"
              animate={{ rotate: 360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
              <circle cx="100" cy="100" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-20" />
              <circle cx="100" cy="100" r="70" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />
              <path d="M 100 10 A 90 90 0 0 1 190 100 A 90 90 0 0 1 100 190 A 90 90 0 0 1 10 100 A 90 90 0 0 1 100 10 Z" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-60" />
              <polygon points="100,30 160,135 40,135" fill="none" stroke="currentColor" strokeWidth="1" />
              <polygon points="100,170 40,65 160,65" fill="none" stroke="currentColor" strokeWidth="1" />
            </motion.svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-display italic text-4xl text-secondary">Integration</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
