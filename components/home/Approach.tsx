"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { motion } from "framer-motion";

const STEPS = [
  { num: "01", title: "Learn", desc: "Absorb timeless wisdom." },
  { num: "02", title: "Practice", desc: "Integrate into daily life." },
  { num: "03", title: "Transform", desc: "Experience inner shifts." },
  { num: "04", title: "Serve", desc: "Uplift the community." },
  { num: "05", title: "Inspire", desc: "Lead by example." },
];

export function Approach() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="The ISHAN Way"
        heading="Learn · Practice · Transform · Serve · Inspire"
        align="center"
      />

      <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-2">
        {STEPS.map((step, index) => (
          <RevealOnScroll
            key={step.num}
            delay={index * 0.15}
            className="flex flex-col md:flex-row items-center w-full md:w-auto flex-1"
          >
            <div className="flex flex-col items-center text-center group">
              <span className="w-12 h-12 rounded-full border border-burntOrange/30 flex items-center justify-center font-display italic text-xl text-burntOrange mb-4 group-hover:bg-burntOrange group-hover:text-peach transition-colors duration-300">
                {step.num}
              </span>
              <h4 className="font-display uppercase tracking-widest text-deepAmber text-lg mb-2">
                {step.title}
              </h4>
              <p className="font-sans font-light text-sm text-deepAmber/70">
                {step.desc}
              </p>
            </div>
            
            {/* Connector */}
            {index < STEPS.length - 1 && (
              <div className="hidden md:flex flex-1 items-center justify-center mx-4 overflow-hidden h-px bg-burntOrange/10 relative">
                <motion.div
                  initial={{ x: "-100%" }}
                  animate={{ x: "100%" }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear", delay: index * 0.5 }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-burntOrange/50 to-transparent"
                />
              </div>
            )}
            {/* Mobile connector */}
            {index < STEPS.length - 1 && (
              <div className="md:hidden h-8 w-px bg-burntOrange/20 my-4" />
            )}
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
