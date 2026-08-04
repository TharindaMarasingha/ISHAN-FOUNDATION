"use client";
import React from "react";
import { motion, useReducedMotion, Variants } from "framer-motion";

interface HeroTitleProps {
  text?: string;
  className?: string;
}

export function HeroTitle({ text = "ISHAN", className = "" }: HeroTitleProps) {
  const prefersReducedMotion = useReducedMotion();
  const letters = text.split("");

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const child: Variants = {
    hidden: { opacity: 0, y: 20, rotate: prefersReducedMotion ? 0 : 5 },
    visible: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9] as [number, number, number, number],
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className={`font-display text-8xl md:text-9xl text-heading tracking-widest uppercase flex overflow-hidden ${className}`}
    >
      {letters.map((letter, i) => (
        <motion.span key={i} variants={child} className="inline-block">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
}
