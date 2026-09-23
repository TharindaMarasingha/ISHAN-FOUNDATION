"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

export function ArogyaFinalCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, { once: true, amount: 0.25 });

  return (
    <>
      {/* Pulse keyframe injected once */}
      <style>{`
        @keyframes ctaPulse {
          0%   { box-shadow: 0 0 0 0 rgba(212, 116, 138, 0.45); }
          70%  { box-shadow: 0 0 0 14px rgba(212, 116, 138, 0); }
          100% { box-shadow: 0 0 0 0 rgba(212, 116, 138, 0); }
        }
        .cta-pulse { animation: ctaPulse 2.2s ease-out infinite; }
      `}</style>

      {/* Outer wrapper — full-width arch */}
      <div className="w-full px-4 md:px-10 pb-0 pt-4">
        <motion.section
          ref={ref}
          initial={{ opacity: 0, scale: 0.96 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="
            w-full max-w-5xl mx-auto
            bg-[#eee8d8]
            rounded-t-[4rem]
            py-20 px-8 md:px-16
            text-center flex flex-col items-center
            relative overflow-hidden
          "
        >


          {/* Overline */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
            className="text-[0.65rem] uppercase tracking-[0.22em] font-medium text-[#667768] mb-4"
          >
            Take the Next Step
          </motion.p>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.75, ease: "easeOut", delay: 0.18 }}
            className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-[#2C3E2D] mb-5 leading-tight"
          >
            Join the Ecosystem
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.26 }}
            className="font-sans text-base text-[#4A5B4D] leading-relaxed max-w-xl mb-10"
          >
            Whether you are a wellness practitioner, institutional partner, or a seeker—connect
            with AAI and become a part of this planetary transformation.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.36 }}
            className="flex flex-col sm:flex-row gap-4 sm:gap-5 w-full sm:w-auto relative z-10"
          >
            {/* Primary — pulsing */}
            <Link
              href="/contact"
              className="
                cta-pulse
                inline-flex items-center justify-center
                px-8 py-3.5 rounded-full
                bg-[#d4748a] text-white
                font-sans text-sm font-medium tracking-wide
                transition-all duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_8px_24px_rgba(212,116,138,0.40)]
                hover:bg-[#c4647a]
              "
            >
              Register Interest
            </Link>

            {/* Secondary — outlined Deep Forest Olive */}
            <Link
              href="/"
              className="
                inline-flex items-center justify-center
                px-8 py-3.5 rounded-full
                border-2 border-[#2C3E2D] text-[#2C3E2D]
                font-sans text-sm font-medium tracking-wide
                transition-all duration-300
                hover:-translate-y-0.5
                hover:bg-[#2C3E2D] hover:text-[#f5f0e8]
                hover:shadow-[0_8px_20px_rgba(44,62,45,0.20)]
              "
            >
              Back to Home
            </Link>
          </motion.div>
        </motion.section>
      </div>
    </>
  );
}
