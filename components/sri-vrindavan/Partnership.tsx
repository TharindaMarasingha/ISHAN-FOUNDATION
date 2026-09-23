"use client";

import React, { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion, type Variants } from "framer-motion";

const PARTNER_TYPES = [
  { label: "Investors", role: "investor" },
  { label: "Architects & Eco-Designers", role: "architect" },
  { label: "Wellness Practitioners", role: "practitioner" },
  { label: "Future Residents", role: "resident" },
  { label: "Philanthropists", role: "philanthropist" },
  { label: "Government Entities", role: "government" },
];

export function Partnership() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.25 });
  const prefersReducedMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.94, y: 12 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-28 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Cascade Header Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="mb-14 flex flex-col items-center max-w-3xl"
        >
          {/* Overline: Faded Sage with wide letter spacing */}
          <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.28em] uppercase text-[#7A8D75] mb-4 block">
            CO-CREATION
          </span>

          {/* Heading: Deep Forest Olive (#2C3E2D) */}
          <h2 className="font-display font-light text-4xl sm:text-5xl md:text-6xl text-[#2C3E2D] mb-5 leading-tight">
            Investment & Partnership
          </h2>

          {/* Paragraph: Muted Earth (#4A5B4D) with medium weight & relaxed line-height */}
          <p className="font-sans font-medium text-[#4A5B4D] leading-relaxed text-base md:text-lg max-w-2xl px-4 sm:px-0">
            A project of this scale requires a coalition of the willing. We
            invite visionary investors, conscious creators, and future
            residents to co-create this unprecedented township.
          </p>
        </motion.div>

        {/* Staggered Partnership Pills */}
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-wrap justify-center items-center gap-3.5 sm:gap-4 max-w-4xl mx-auto mb-4"
        >
          {PARTNER_TYPES.map((pt) => (
            <motion.div
              key={pt.label}
              variants={itemVariants}
              whileHover={prefersReducedMotion ? {} : { y: -4, scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full"
            >
              <Link
                href={`/contact?interest=${encodeURIComponent(pt.label)}`}
                className="inline-flex items-center px-6 sm:px-7 py-3 sm:py-3.5 rounded-full 
                           bg-[#2C3E2D]/[0.05] hover:bg-[#2C3E2D]
                           border border-[#2C3E2D]/12 hover:border-[#2C3E2D]
                           text-[#2C3E2D] hover:text-[#FAF7F2]
                           font-sans text-xs sm:text-[13px] font-medium tracking-[0.16em] uppercase
                           shadow-sm hover:shadow-[0_12px_24px_rgba(44,62,45,0.18)]
                           transition-all duration-300 ease-out select-none cursor-pointer"
              >
                {pt.label}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
