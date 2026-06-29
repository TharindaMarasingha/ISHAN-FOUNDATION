"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { motion } from "framer-motion";

export function Approach() {
  return (
    <section className="bg-deepAmber/[0.02] py-24 px-6 border-y border-burntOrange/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col">
          <SectionHeading
            eyebrow="Our Approach"
            heading="The Bridge Between Data and the Divine"
          />
          <RevealOnScroll delay={0.2} className="mt-8">
            <p className="font-sans font-light text-deepAmber leading-relaxed mb-6">
              For centuries, science and spirituality have often been viewed as opposing forces. At the Universal Spiritual Science Institute, we recognize them as two distinct methodologies seeking the same truth.
            </p>
            <p className="font-sans font-light text-deepAmber leading-relaxed mb-6">
              Our approach applies the empirical rigor of the scientific method—observation, hypothesis, and peer review—to the subjective, internal experiences traditionally relegated to mysticism. We aim to quantify the qualitative shifts that occur through inner development.
            </p>
            <p className="font-sans font-light text-deepAmber leading-relaxed">
              By translating profound spiritual insights into a grounded, secular language, we make inner transformation accessible, testable, and deeply relevant to resolving the crises of the modern era.
            </p>
          </RevealOnScroll>
        </div>

        <RevealOnScroll delay={0.4} className="flex justify-center lg:justify-end relative h-96">
          {/* Decorative geometric SVG representing the intersection of science and spirit */}
          <div className="relative w-full max-w-md h-full flex items-center justify-center opacity-80">
            <motion.svg
              viewBox="0 0 200 200"
              className="w-full h-full text-burntOrange"
              animate={{ rotate: -360 }}
              transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
            >
              <ellipse cx="100" cy="100" rx="40" ry="90" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-30" />
              <ellipse cx="100" cy="100" rx="90" ry="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-30" />
              <circle cx="100" cy="100" r="40" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-60" />
              <polygon points="100,50 143,125 57,125" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />
              <polygon points="100,150 57,75 143,75" fill="none" stroke="currentColor" strokeWidth="0.5" className="opacity-40" />
            </motion.svg>
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <span className="font-display italic text-2xl text-sacredGold mb-1">Empirical</span>
              <span className="font-display italic text-2xl text-sacredGold">Wisdom</span>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
