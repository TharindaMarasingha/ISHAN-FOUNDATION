"use client";

import React from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface ParallaxBackgroundProps {
  className?: string;
  fadeRange?: [number, number]; // Scroll range over which to fade out
  driftRate?: number; // Multiplier for parallax drift (e.g. 0.15)
}

export function ParallaxBackground({
  className = "absolute inset-0 flex items-center justify-center pointer-events-none z-0",
  fadeRange = [300, 1000],
  driftRate = 0.15,
}: ParallaxBackgroundProps) {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();

  // Parallax translation: moves down as you scroll down
  const y = useTransform(scrollY, (val) => (prefersReducedMotion ? 0 : val * driftRate));
  
  // Fade out opacity smoothly over the specified scroll range
  const opacity = useTransform(scrollY, fadeRange, [0.03, 0]);

  return (
    <motion.div
      style={{ y, opacity, willChange: prefersReducedMotion ? "auto" : "transform, opacity" }}
      className={className}
    >
      <motion.div
        animate={{ rotate: prefersReducedMotion ? 0 : 360 }}
        transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
        className="absolute w-[800px] h-[800px] rounded-full border-[1px] border-deepAmber flex items-center justify-center"
      >
        {/* Hexagon Outline */}
        <svg width="600" height="600" viewBox="0 0 100 100" className="opacity-50">
          <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </motion.div>
      
      <motion.div
        animate={{ rotate: prefersReducedMotion ? 0 : -360 }}
        transition={{ duration: 200, repeat: Infinity, ease: "linear" }}
        className="absolute w-[600px] h-[600px] rounded-full border-[0.5px] border-deepAmber flex items-center justify-center"
      >
        {/* Inner Circles */}
        <svg width="400" height="400" viewBox="0 0 100 100" className="opacity-30">
          <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.2" />
          <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.2" />
        </svg>
      </motion.div>

      <motion.div
        animate={{ scale: prefersReducedMotion ? 1 : [1, 1.2, 1], opacity: prefersReducedMotion ? 0.5 : [0.3, 0.8, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-2 h-2 bg-deepAmber rounded-full"
      />
    </motion.div>
  );
}
