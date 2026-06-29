"use client";

import { motion } from "framer-motion";

export function PageHero() {
  return (
    <section className="relative min-h-[60vh] flex flex-col justify-end pb-24 pt-32 px-6 overflow-hidden bg-deepAmber/[0.03] border-b border-burntOrange/10">
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block px-4 py-1.5 border border-burntOrange/30 rounded-full font-sans text-[0.65rem] uppercase tracking-[0.2em] text-burntOrange mb-8"
        >
          About ISHAN
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-deepAmber tracking-wide mb-6"
        >
          Awakening Global <span className="text-mandarin">Consciousness</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="font-display italic text-lg md:text-xl text-sacredGold mb-2"
        >
          Vasudhaiva Kutumbakam — The World is One Family
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          className="font-display italic text-2xl md:text-3xl text-burntOrange max-w-3xl mb-8 leading-relaxed"
        >
          A collective endeavor to integrate timeless spiritual wisdom with the realities of modern existence.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="font-sans font-light text-deepAmber max-w-2xl leading-relaxed"
        >
          The International Society of Humanity and Nature was born from a profound realization: that human welfare and planetary health are inextricably linked. Our work bridges ancient restorative practices and forward-thinking ecological stewardship, guiding humanity toward an era of conscious co-existence.
        </motion.p>
      </div>
    </section>
  );
}
