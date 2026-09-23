"use client";

import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const LINES = [
  { text: "To establish a global humanitarian ecosystem for" },
  {
    parts: [
      { text: "holistic healing", highlight: true },
      { text: ", preventive healthcare," },
    ],
  },
  {
    parts: [
      { text: "wellness education", highlight: true },
      { text: ", sustainable living," },
    ],
  },
  {
    parts: [
      { text: "integrated healthcare, and" },
      { text: " conscious human development.", highlight: true },
    ],
  },
];

export function VisionQuote() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, { once: true, amount: 0.25 });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section className="py-32 px-6 md:px-16 bg-surface border-y border-divider relative overflow-hidden flex items-center justify-center">
      <motion.div
        style={{ y: watermarkY }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[22rem] leading-none pointer-events-none select-none text-[#2C3E2D] opacity-[0.04]"
        aria-hidden
      >
        &ldquo;
      </motion.div>

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={isVisible ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          className="font-display text-[7rem] leading-none text-[#d4748a] opacity-[0.18] -mb-10 -ml-4 text-left select-none pointer-events-none"
          aria-hidden
        >
          &ldquo;
        </motion.div>

        <blockquote className="font-display italic text-3xl md:text-4xl lg:text-[2.8rem] text-[#2C3E2D] leading-loose mb-10">
          {LINES.map((line, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 18 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.75, ease: "easeOut", delay: 0.1 + i * 0.15 }}
              className="block"
            >
              {line.parts ? (
                line.parts.map((part, j) =>
                  part.highlight ? (
                    <span key={j} className="not-italic font-semibold text-[#2C3E2D]" style={{ fontStyle: "normal" }}>
                      {part.text}
                    </span>
                  ) : (
                    <span key={j}>{part.text}</span>
                  )
                )
              ) : (
                line.text
              )}
            </motion.span>
          ))}
        </blockquote>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="text-[0.65rem] md:text-[0.7rem] uppercase tracking-[0.25em] font-medium text-[#667768]"
        >
          Arogya Ashram International — Vision
        </motion.div>
      </div>
    </section>
  );
}
