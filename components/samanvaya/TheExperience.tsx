"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { motion } from "framer-motion";

const PHASES = [
  { num: "01", title: "Arrival", desc: "Shedding external noise." },
  { num: "02", title: "Stillness", desc: "Entering deep silence." },
  { num: "03", title: "Nature", desc: "Merging with the earth." },
  { num: "04", title: "Inquiry", desc: "Guided contemplation." },
  { num: "05", title: "Integration", desc: "Returning renewed." },
];

export function TheExperience() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="The Journey"
        heading="A Sequence of Awakening"
        description="Samanvaya is carefully choreographed to guide you from the turbulence of the mind to the tranquility of the spirit."
        align="center"
      />

      <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2">
        {PHASES.map((phase, index) => (
          <RevealOnScroll
            key={phase.num}
            delay={index * 0.15}
            className="flex flex-col md:flex-row items-center w-full md:w-auto flex-1"
          >
            <div className="flex flex-col items-center text-center group">
              <span className="w-12 h-12 rounded-full border border-burntOrange/30 flex items-center justify-center font-display italic text-xl text-burntOrange mb-4 group-hover:bg-burntOrange group-hover:text-peach transition-colors duration-300">
                {phase.num}
              </span>
              <h4 className="font-display uppercase tracking-widest text-deepAmber text-lg mb-2">
                {phase.title}
              </h4>
              <p className="font-sans font-light text-sm text-deepAmber/70">
                {phase.desc}
              </p>
            </div>
            
            {/* Connector */}
            {index < PHASES.length - 1 && (
              <div className="hidden md:flex flex-1 items-center justify-center mx-4 overflow-hidden h-px bg-burntOrange/10 relative">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear", delay: index * 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-burntOrange/40 to-transparent"
                />
              </div>
            )}
            {/* Mobile connector */}
            {index < PHASES.length - 1 && (
              <div className="md:hidden h-8 w-px bg-burntOrange/20 my-4" />
            )}
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
