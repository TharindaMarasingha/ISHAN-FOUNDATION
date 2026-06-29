"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden">
      {/* Decorative SVG background */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.03] pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-[80vw] max-w-4xl max-h-screen">
          <circle cx="200" cy="200" r="180" fill="none" stroke="currentColor" strokeWidth="1" />
          <polygon points="200,20 355.88,110 355.88,290 200,380 44.12,290 44.12,110" fill="none" stroke="currentColor" strokeWidth="1" />
          <circle cx="200" cy="110" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="277.94" cy="245" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="122.06" cy="245" r="90" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display italic text-burntOrange tracking-[0.2em] text-sm md:text-base uppercase mb-6 block"
        >
          International Society of Humanity and Nature
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="font-display font-light text-7xl sm:text-8xl lg:text-9xl text-deepAmber uppercase tracking-widest mb-8"
        >
          ISHAN
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="font-display italic text-2xl md:text-3xl text-burntOrange max-w-3xl mb-8 leading-relaxed"
        >
          Harmonising Humanity with Nature through Wisdom, Wellness, and Collective Responsibility
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="font-sans font-light text-deepAmber max-w-xl leading-relaxed mb-12"
        >
          A global movement dedicated to nurturing conscious living, ecological balance, and holistic wellbeing across communities worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 sm:gap-6"
        >
          <Button href="#ecosystem" variant="primary">Explore Our Work</Button>
          <Button href="/about" variant="ghost">About ISHAN</Button>
        </motion.div>
      </div>
    </section>
  );
}
