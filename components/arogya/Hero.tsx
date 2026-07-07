"use client";

import { motion } from "framer-motion";
import { CountUp } from "../ui/CountUp";
import { ParallaxBackground } from "../ui/ParallaxBackground";

const STATS = [
  { value: 8, label: "Strategic Pillars" },
  { value: 3, label: "Founding Nations" },
  { value: "Global", label: "Humanitarian Reach" },
  { value: "∞", label: "Scalable Model" },
];

export function Hero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex flex-col justify-end pb-24 pt-32 px-6 overflow-hidden bg-deepAmber/[0.03] border-b border-burntOrange/10">
      <ParallaxBackground fadeRange={[100, 600]} driftRate={0.1} />
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block px-4 py-1.5 border border-burntOrange/30 rounded-full font-sans text-[0.65rem] uppercase tracking-[0.2em] text-burntOrange mb-8"
        >
          Preventive Wellness · Proactive Wellbeing
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-deepAmber tracking-wide mb-2"
        >
          Arogya Ashram<br />
          <span className="text-mandarin">International</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="font-display italic text-lg md:text-xl text-sacredGold mb-8"
        >
          AAI — Holistic Wellness Initiative
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="font-sans font-light text-deepAmber max-w-2xl leading-relaxed mb-16"
        >
          Dedicated to promoting holistic health through preventive wellness, lifestyle education, yoga, meditation, breathwork, mindful movement, nutrition, stress management, and integrative wellbeing practices.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-4xl border-t border-burntOrange/20 pt-12">
          {STATS.map((stat, index) => (
            <CountUp
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={0.8 + index * 0.15}
              valueClassName="font-display text-4xl md:text-5xl text-sacredGold mb-2 block leading-none"
              labelClassName="font-sans text-[0.6rem] md:text-xs uppercase tracking-widest text-deepAmber/70"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
