"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const VALUES = [
  "Pristine Wisdom",
  "Preventive Wellness",
  "Proactive Wellbeing",
  "Productive Welfare",
  "Collective Consciousness",
  "Shared Responsibilities",
  "Coherent Communities",
  "Sustainable Systems",
];

export function Ticker() {
  const prefersReducedMotion = useReducedMotion();
  
  // Create a seamless loop array
  const tickerItems = [...VALUES, ...VALUES];

  return (
    <div className="w-full bg-darkBrown/5 border-y border-sacredGold/20 py-4 overflow-hidden flex items-center group relative z-10">
      <motion.div
        className="flex whitespace-nowrap items-center"
        animate={{ x: prefersReducedMotion ? 0 : ["0%", "-50%"] }}
        transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        style={{
          // Pause on hover
          animationPlayState: 'paused'
        }}
      >
        <div className="flex items-center group-hover:[animation-play-state:paused]">
          {tickerItems.map((val, idx) => (
            <React.Fragment key={idx}>
              <span className="font-display uppercase tracking-widest text-sacredGold text-sm md:text-base px-6">
                {val}
              </span>
              <span className="text-mandarin opacity-40 text-xs">✦</span>
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
