"use client";

import { motion } from "framer-motion";

export function PageHero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-end pb-24 pt-32 px-6 overflow-hidden border-b border-burntOrange/10">
      {/* Left-side radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(255, 160, 100, 0.25) 0%, rgba(255, 200, 150, 0.12) 40%, transparent 70%)'
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block px-4 py-1.5 border border-burntOrange/30 rounded-full font-sans text-[0.65rem] uppercase tracking-[0.2em] text-burntOrange mb-8"
        >
          The Inner Immersion
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-display font-light text-5xl md:text-6xl lg:text-7xl text-deepAmber tracking-wide mb-4"
        >
          Samanvaya
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="font-display italic text-lg md:text-2xl text-sacredGold mb-8"
        >
          ISHAN's Flagship Immersive Experience
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="font-display italic text-xl md:text-2xl text-burntOrange max-w-3xl mb-8 leading-relaxed"
        >
          A sacred pause in the rhythm of daily life, designed for profound inner exploration and conscious transformation.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="font-sans font-light text-deepAmber max-w-2xl leading-relaxed"
        >
          Samanvaya is an invitation to step out of the relentless momentum of the modern world and into the quiet sanctuary of your own being. Through an orchestration of silence, deep immersion in untamed nature, and the subtle transmission of ancient wisdom, this retreat strips away the superficial, leaving only the profound stillness of the true self.
        </motion.p>
      </div>
    </section>
  );
}
