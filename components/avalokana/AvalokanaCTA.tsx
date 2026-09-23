"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { MagneticButton } from "../ui/MagneticButton";

export function AvalokanaCTA() {
  return (
    <section className="relative w-full bg-[#EBE4D8] rounded-t-[4rem] md:rounded-t-[6rem] pt-28 pb-32 px-6 overflow-hidden">
      {/* Soft ethereal ambient background light */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-b from-[#FAF7F2]/50 to-transparent blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <RevealOnScroll className="flex flex-col items-center text-center">
          {/* Eyebrow: Faded Sage with wide letter spacing */}
          <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.28em] uppercase text-[#7A8D75] mb-4 block">
            TAKE THE NEXT STEP
          </span>

          {/* Heading: Deep Forest Olive (#2C3E2D) */}
          <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-[#2C3E2D] mb-6">
            Begin Your Journey
          </h2>

          {/* Description: Muted Earth (#4A5B4D) */}
          <p className="font-sans font-light text-[#4A5B4D] max-w-xl text-base md:text-lg leading-relaxed mb-12 px-4 sm:px-0">
            Ready to embark on this journey of self-discovery? Reach out to us or explore our other transformational experiences.
          </p>
        </RevealOnScroll>

        <RevealOnScroll
          delay={0.2}
          className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-center justify-center w-full sm:w-auto"
        >
          {/* Primary Button: Explore Samanvaya with continuous glowing pulse shadow + scale-105 on hover */}
          <MagneticButton>
            <motion.div
              animate={{
                boxShadow: [
                  "0px 6px 20px rgba(222, 86, 128, 0.35)",
                  "0px 10px 32px rgba(222, 86, 128, 0.65)",
                  "0px 6px 20px rgba(222, 86, 128, 0.35)",
                ],
              }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full"
            >
              <Link
                href="/samanvaya"
                className="inline-block text-xs font-sans font-bold tracking-[0.18em] uppercase px-10 py-4 rounded-full bg-[#DE5680] text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.25)] transition-colors duration-300"
              >
                Explore Samanvaya
              </Link>
            </motion.div>
          </MagneticButton>

          {/* Secondary Button: Register Interest - Deep Forest Olive border & text, fills on hover */}
          <MagneticButton>
            <motion.div
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="rounded-full"
            >
              <Link
                href="/contact"
                className="inline-block text-xs font-sans font-medium tracking-[0.18em] uppercase px-10 py-4 rounded-full border border-[#2C3E2D] text-[#2C3E2D] bg-transparent hover:bg-[#2C3E2D] hover:text-[#FAF7F2] transition-all duration-300 shadow-sm"
              >
                Register Interest
              </Link>
            </motion.div>
          </MagneticButton>
        </RevealOnScroll>
      </div>
    </section>
  );
}
