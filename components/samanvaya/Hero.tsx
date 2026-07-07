"use client";

import { motion } from "framer-motion";
import { CountUp } from "../ui/CountUp";
import { ParallaxBackground } from "../ui/ParallaxBackground";

const STATS = [
  { value: "Silence", label: "The Inner Voice" },
  { value: "Nature", label: "The Greatest Healer" },
  { value: "Wisdom", label: "Ancient Pathways" },
  { value: "Presence", label: "Conscious Being" },
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
          className="inline-block px-4 py-1.5 border border-mandarin/30 rounded-full font-sans text-[0.65rem] uppercase tracking-[0.2em] text-mandarin mb-8"
        >
          From Pancha Tattva to Sampurna Sattva
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-deepAmber tracking-wide mb-2"
        >
          Samanvaya
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="font-display italic text-lg md:text-xl text-mandarin mb-8"
        >
          ISHAN's Flagship Transformational Retreat
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="font-sans font-light text-deepAmber max-w-2xl leading-relaxed mb-16"
        >
          Inspired by the timeless wisdom of the five elements, Samanvaya guides participants on a journey towards integrated wellbeing and complete human development.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.7 }}
          className="font-sans font-light text-deepAmber max-w-2xl leading-relaxed mb-6"
        >
          Combines yoga, meditation, breathwork, mindful movement, contemplative practices, nature connection, leadership development, experiential learning, and conscious living.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
          className="font-sans font-light text-deepAmber max-w-2xl leading-relaxed mb-16"
        >
          Each experience is thoughtfully designed to restore balance across the physical, emotional, intellectual, financial, and spiritual dimensions of life.
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-4xl border-t border-mandarin/20 pt-12">
          {STATS.map((stat, index) => (
            <CountUp
              key={stat.label}
              value={stat.value}
              label={stat.label}
              delay={0.8 + index * 0.15}
              valueClassName="font-display italic text-3xl md:text-4xl text-mandarin mb-2 block leading-none"
              labelClassName="font-sans text-[0.6rem] md:text-xs uppercase tracking-widest text-deepAmber/70"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
