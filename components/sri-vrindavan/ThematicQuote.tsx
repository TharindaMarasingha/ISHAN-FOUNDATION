"use client";

import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

const QUOTE_LINES = [
  {
    type: "text",
    content: "More than a physical place, Sri Vrindavan is a vision for the future —",
  },
  {
    type: "composite",
    parts: [
      { text: "a living ecosystem", highlight: "pink" },
      { text: " where " },
      { text: "conscious living", highlight: "bold" },
    ],
  },
  {
    type: "text",
    content: "becomes a shared way of life.",
  },
];

export function ThematicQuote() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.35 });
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="py-32 px-6 md:px-12 bg-[#F7F4EC]/80 border-y border-[#2C3E2D]/10 relative overflow-hidden flex items-center justify-center">
      {/* Soft warm ambient lighting */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#DE5680]/[0.03] via-[#FAF7F2] to-[#2C3E2D]/[0.03] blur-3xl pointer-events-none"
      />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto w-full text-center">
        {/* Top Framing Stage Line: Delicate 1px horizontal line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="w-full h-px bg-gradient-to-r from-transparent via-[#2C3E2D]/25 to-transparent mb-12 sm:mb-16 origin-center"
        />

        {/* Relative Quote Container Framing */}
        <div className="relative px-6 sm:px-12">
          {/* Top-Left Hanging Decorative Opening Quote */}
          <motion.span
            initial={{ opacity: 0, scale: 0.6, y: -10 }}
            animate={isInView ? { opacity: 0.22, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            aria-hidden="true"
            className="font-display text-7xl sm:text-8xl md:text-9xl text-[#DE5680] absolute -top-8 sm:-top-12 -left-2 sm:-left-8 select-none pointer-events-none leading-none"
          >
            &ldquo;
          </motion.span>

          {/* Blockquote with Cinematic Line-by-Line Reveal */}
          <blockquote className="font-display italic text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] text-[#2C3E2D] leading-[1.3] md:leading-[1.35] tracking-tight">
            {QUOTE_LINES.map((line, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 22 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: prefersReducedMotion ? 0.2 : 0.75,
                  delay: prefersReducedMotion ? 0 : 0.2 + i * 0.15,
                  ease: "easeOut",
                }}
                className="block mb-1 sm:mb-2"
              >
                {line.type === "composite" && line.parts ? (
                  line.parts.map((part, pIdx) => {
                    if (part.highlight === "pink") {
                      return (
                        <span
                          key={pIdx}
                          className="text-[#DE5680] not-italic font-normal transition-colors duration-300"
                        >
                          {part.text}
                        </span>
                      );
                    }
                    if (part.highlight === "bold") {
                      return (
                        <span
                          key={pIdx}
                          className="not-italic font-semibold text-[#1F2C1F]"
                        >
                          {part.text}
                        </span>
                      );
                    }
                    return <span key={pIdx}>{part.text}</span>;
                  })
                ) : (
                  line.content
                )}
              </motion.span>
            ))}
          </blockquote>

          {/* Bottom-Right Hanging Decorative Closing Quote */}
          <motion.span
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            animate={isInView ? { opacity: 0.22, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            aria-hidden="true"
            className="font-display text-7xl sm:text-8xl md:text-9xl text-[#DE5680] absolute -bottom-10 sm:-bottom-14 -right-2 sm:-right-6 select-none pointer-events-none leading-none"
          >
            &rdquo;
          </motion.span>
        </div>

        {/* Bottom Framing Stage Line: Delicate 1px horizontal line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.4 }}
          className="w-full h-px bg-gradient-to-r from-transparent via-[#2C3E2D]/25 to-transparent mt-12 sm:mt-16 origin-center"
        />
      </div>
    </section>
  );
}
