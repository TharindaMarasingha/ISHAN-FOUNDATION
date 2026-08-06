"use client";

import { motion } from "framer-motion";
import { ParallaxBackground } from "../ui/ParallaxBackground";

export function Hero() {
  return (
    <section className="relative min-h-[50vh] md:min-h-[60vh] flex flex-col justify-end pb-24 pt-32 px-6 overflow-hidden bg-surface border-b border-divider">
      <ParallaxBackground fadeRange={[100, 600]} driftRate={0.1} />
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block px-4 py-1.5 border border-primary/30 rounded-full font-sans text-[0.65rem] uppercase tracking-[0.2em] text-primary mb-8"
        >
          The Inner Immersion
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-heading tracking-wide mb-2"
        >
          Antahakarana<br />
          <span className="text-[#F3D8DB] [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">Avalokana</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="font-display italic text-lg md:text-xl text-primary mb-8"
        >
          ISHAN's Signature Immersive Experience
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="font-sans font-light text-heading max-w-2xl leading-relaxed mb-6"
        >
          A signature immersive experience designed for profound self-discovery, inner reflection, holistic wellbeing, and conscious transformation.
        </motion.p>
      </div>
    </section>
  );
}
