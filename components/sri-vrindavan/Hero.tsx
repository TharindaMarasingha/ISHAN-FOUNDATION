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
          Sri Vrindavan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="font-display italic text-lg md:text-xl text-sacredGold mb-8"
        >
          A Vision for Conscious Community Living
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="font-sans font-light text-deepAmber max-w-2xl leading-relaxed mb-8"
        >
          Sri Vrindavan represents ISHAN&apos;s long-term vision for creating a living model of conscious and sustainable community life.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          className="font-sans font-light text-deepAmber max-w-2xl leading-relaxed mb-6"
        >
          Envisioned as an integrated spiritual wellness township where individuals, families, educators, researchers, practitioners, entrepreneurs, and communities can live, learn, work, and grow in harmony with nature.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="font-sans font-light text-deepAmber max-w-2xl leading-relaxed mb-8"
        >
          Designed around principles of wisdom, wellness, sustainability, education, ecological responsibility, and community living.
        </motion.p>
      </div>
    </section>
  );
}
