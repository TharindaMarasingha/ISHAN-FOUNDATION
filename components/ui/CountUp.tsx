"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface CountUpProps {
  value: number | string;
  suffix?: string;
  label: string;
  duration?: number;
  delay?: number;
  className?: string; // Optional wrapper class
  valueClassName?: string; // Optional class for the value text
  labelClassName?: string; // Optional class for the label text
}

export function CountUp({
  value,
  suffix = "",
  label,
  duration = 1.6,
  delay = 0,
  className = "flex flex-col items-start",
  valueClassName = "font-display text-3xl md:text-4xl text-deepAmber mb-2 block leading-none",
  labelClassName = "font-sans text-[0.6rem] md:text-xs uppercase tracking-widest text-mandarin",
}: CountUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [displayValue, setDisplayValue] = useState<number | string>(
    typeof value === "number" ? 0 : value
  );

  useEffect(() => {
    if (isInView && typeof value === "number") {
      let startTime: number | null = null;
      
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        
        // Ease-out cubic formula
        const easeOut = 1 - Math.pow(1 - progress, 3);
        
        setDisplayValue(Math.floor(easeOut * value));
        
        if (progress < 1) {
          window.requestAnimationFrame(step);
        } else {
          setDisplayValue(value);
        }
      };
      
      // Delay the count-up start to match the motion div delay
      const timeoutId = setTimeout(() => {
        window.requestAnimationFrame(step);
      }, delay * 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [isInView, value, duration, delay]);

  // For string values, we just do a normal fade up.
  // We'll wrap the entire component in a motion.div anyway for entry.
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 15 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      <span className={valueClassName}>
        {displayValue}
        {suffix && <span className="ml-0.5">{suffix}</span>}
      </span>
      <span className={labelClassName}>{label}</span>
    </motion.div>
  );
}
