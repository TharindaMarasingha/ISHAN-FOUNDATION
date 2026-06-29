"use client";

import React from "react";
import { motion } from "framer-motion";

interface RevealOnScrollProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function RevealOnScroll({
  children,
  delay = 0,
  className = "",
}: RevealOnScrollProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
