"use client";
import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionIllustration } from "../ui/SectionIllustration";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { motion, useReducedMotion } from "framer-motion";

const STEPS = [
  { number: "01", title: "Learn", desc: "Gain timeless wisdom." },
  { number: "02", title: "Practice", desc: "Internalise the knowledge." },
  { number: "03", title: "Transform", desc: "Elevate your consciousness." },
  { number: "04", title: "Serve", desc: "Contribute to society." },
  { number: "05", title: "Inspire", desc: "Lead by living example." },
];

export function Approach() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 relative flex justify-center">
          <SectionIllustration
            variant="sun-rays"
            className="absolute -top-14 w-32 h-32 text-burntOrange opacity-10 pointer-events-none"
          />
          <SectionHeading
            align="center"
            eyebrow="The ISHAN Way"
            heading="Learn · Practice · Transform · Serve · Inspire"
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
          {STEPS.map((step, index) => (
            <React.Fragment key={step.number}>
              <RevealOnScroll delay={index * 0.15} className="flex-1 w-full max-w-[200px] text-center">
                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 rounded-full border border-burntOrange/20 flex items-center justify-center mb-6 group-hover:border-sacredGold transition-colors duration-500 bg-peach relative">
                    <span className="font-display italic text-2xl text-deepAmber">{step.number}</span>
                  </div>
                  <h4 className="font-display uppercase tracking-widest text-deepAmber text-lg mb-2">
                    {step.title}
                  </h4>
                  <p className="font-sans font-light text-sm text-deepAmber/70">
                    {step.desc}
                  </p>
                </div>
              </RevealOnScroll>

              {/* Connector */}
              {index < STEPS.length - 1 && (
                <div className="hidden md:block flex-1 max-w-[50px] relative h-px">
                  <div className="absolute inset-0 bg-burntOrange/10" />
                  <motion.div
                    animate={{ scaleX: prefersReducedMotion ? 1 : [0, 1], opacity: prefersReducedMotion ? 1 : [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                    className="absolute inset-0 bg-burntOrange origin-left"
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
