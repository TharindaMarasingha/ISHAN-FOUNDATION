"use client";

import { motion } from "framer-motion";
import { ParallaxBackground } from "../ui/ParallaxBackground";

export function Hero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col justify-end pb-24 pt-32 px-6 overflow-hidden bg-deepAmber/[0.03] border-b border-deepAmber/10">
      <ParallaxBackground fadeRange={[100, 600]} driftRate={0.1} />
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block px-4 py-1.5 border border-deepAmber/30 rounded-full font-sans text-[0.65rem] uppercase tracking-[0.2em] text-deepAmber mb-8"
        >
          A Divine Spiritual Wellness Township
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-deepAmber tracking-wide mb-2"
        >
          The Brindavan<br />
          <span className="text-burntOrange">Project</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="font-display italic text-lg md:text-xl text-sacredGold mb-8"
        >
          Sri Lanka's First Conscious Living Township
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="font-sans font-light text-deepAmber max-w-2xl leading-relaxed mb-8"
        >
          Spanning 150 acres of pristine geography, The Brindavan Project is a visionary, integrated settlement where spirituality, conscious living, holistic wellness, deep ecological harmony, and vibrant cultural life converge into a single purposeful community.
        </motion.p>
      </div>
    </section>
  );
}
