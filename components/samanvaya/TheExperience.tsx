"use client";
import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { motion, useReducedMotion } from "framer-motion";

const STEPS = [
  { number: "01", title: "Arrival", desc: "Shedding the outside world." },
  { number: "02", title: "Stillness", desc: "Entering deep silence." },
  { number: "03", title: "Immersion", desc: "Communing with nature." },
  { number: "04", title: "Practice", desc: "Guided inner work." },
  { number: "05", title: "Integration", desc: "Returning renewed." },
];

export function TheExperience() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section 
      className="py-24 px-6 md:px-12 border-y border-mandarin/10"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 200, 150, 0.12) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 220, 180, 0.1) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <SectionHeading
            align="center"
            eyebrow="The Journey"
            heading="A Pathway to the Self"
            description="The immersion is meticulously sequenced to gently transition the mind from external turbulence into profound internal clarity."
          />
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative">
          {STEPS.map((step, index) => (
            <React.Fragment key={step.number}>
              <RevealOnScroll delay={index * 0.15} className="flex-1 w-full max-w-[200px] text-center">
                <div className="flex flex-col items-center group">
                  <div className="w-16 h-16 rounded-full border border-mandarin/20 flex items-center justify-center mb-6 group-hover:border-mandarin transition-colors duration-500 bg-peach relative">
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
                  <div className="absolute inset-0 bg-mandarin/10" />
                  <motion.div
                    animate={{ scaleX: prefersReducedMotion ? 1 : [0, 1], opacity: prefersReducedMotion ? 1 : [0, 1, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: index * 0.4 }}
                    className="absolute inset-0 bg-mandarin origin-left"
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
