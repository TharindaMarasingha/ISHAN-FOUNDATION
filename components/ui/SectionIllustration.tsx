"use client";

import React from "react";
import { motion, Variants, useScroll, useTransform, useReducedMotion } from "framer-motion";

export type IllustrationVariant = "lotus" | "sun-rays" | "tree" | "hands" | "wave" | "mandala-seed";

interface Props {
  variant: IllustrationVariant;
  className?: string;
  color?: string;
}

const pathVariants: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1,
    transition: { 
      pathLength: { type: "spring", duration: 2, bounce: 0 },
      opacity: { duration: 0.1 }
    }
  }
};

const drawTransition = (delay: number) => ({
  pathLength: { type: "spring" as const, duration: 1.8, bounce: 0, delay },
  opacity: { duration: 0.1, delay }
});

const elements = {
  lotus: (
    <>
      <motion.path variants={pathVariants} d="M 50 15 C 60 40 80 50 50 90 C 20 50 40 40 50 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <motion.path variants={pathVariants} d="M 30 80 C 10 60 10 40 50 60" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <motion.path variants={pathVariants} d="M 70 80 C 90 60 90 40 50 60" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <motion.path variants={pathVariants} d="M 20 90 L 80 90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  "sun-rays": (
    <>
      <motion.circle variants={pathVariants} cx="50" cy="50" r="18" fill="none" stroke="currentColor" strokeWidth="1.5" />
      {[
        "M 50 10 L 50 20", "M 50 90 L 50 80",
        "M 10 50 L 20 50", "M 90 50 L 80 50",
        "M 22 22 L 30 30", "M 78 78 L 70 70",
        "M 22 78 L 30 70", "M 78 22 L 70 30"
      ].map((d, i) => (
        <motion.path key={i} variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: drawTransition(0.3 + i * 0.05) } }} d={d} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      ))}
    </>
  ),
  tree: (
    <>
      <motion.path variants={pathVariants} d="M 50 85 L 50 50 C 20 50 10 15 50 10 C 90 15 80 50 50 50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <motion.path variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: drawTransition(0.4) } }} d="M 50 50 C 35 40 40 25 50 25 C 60 25 65 40 50 50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <motion.path variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: drawTransition(0.8) } }} d="M 35 90 C 45 95 55 95 65 90" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  hands: (
    <>
      <motion.path variants={pathVariants} d="M 15 45 C 15 65 40 85 50 85 C 60 85 85 65 85 45" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <motion.path variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: drawTransition(0.5) } }} d="M 35 60 C 45 65 55 65 65 60" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <motion.path variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: drawTransition(0.7) } }} d="M 50 85 L 50 95" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  wave: (
    <>
      <motion.path variants={pathVariants} d="M 5 50 C 30 10 70 90 95 50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <motion.path variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: drawTransition(0.4) } }} d="M 5 65 C 30 25 70 105 95 65" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </>
  ),
  "mandala-seed": (
    <>
      {[
        "M 50 50 C 50 15 85 15 50 50",
        "M 50 50 C 85 50 85 85 50 50",
        "M 50 50 C 50 85 15 85 50 50",
        "M 50 50 C 15 50 15 15 50 50"
      ].map((d, i) => (
        <motion.path key={i} variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: drawTransition(i * 0.2) } }} d={d} fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      ))}
      <motion.circle variants={{ hidden: { pathLength: 0, opacity: 0 }, visible: { pathLength: 1, opacity: 1, transition: drawTransition(1) } }} cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </>
  )
};

export function SectionIllustration({ variant, className = "", color = "currentColor" }: Props) {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const y = useTransform(scrollY, (val) => (prefersReducedMotion ? 0 : val * 0.05));

  return (
    <motion.svg
      viewBox="0 0 100 100"
      className={className}
      style={{ color, y, willChange: prefersReducedMotion ? "auto" : "transform" }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {elements[variant]}
    </motion.svg>
  );
}
