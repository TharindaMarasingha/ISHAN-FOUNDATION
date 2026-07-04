"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface OverlapParallaxProps {
  baseContent: React.ReactNode;
  overlapContent: React.ReactNode;
}

export function OverlapParallax({ baseContent, overlapContent }: OverlapParallaxProps) {
  const overlapRef = useRef<HTMLDivElement>(null);
  
  // Track the scroll progress of the overlapping section.
  // "start end": top of overlap section hits bottom of viewport (progress = 0)
  // "start start": top of overlap section hits top of viewport (progress = 1)
  const { scrollYProgress } = useScroll({
    target: overlapRef,
    offset: ["start end", "start start"]
  });

  // To keep the baseContent perfectly frozen on the screen while overlapContent scrolls up,
  // we translate baseContent downwards by the exact same amount the user scrolls.
  // The distance from "start end" to "start start" is exactly 1 viewport height (100vh).
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <div className="relative z-10 bg-[#FFF7F0] overflow-hidden">
      <motion.div 
        style={{ y }} 
        className="relative z-0"
      >
        {baseContent}
      </motion.div>
      
      <div 
        ref={overlapRef} 
        className="relative z-20 shadow-[0_-20px_50px_rgba(42,20,8,0.08)] rounded-t-[40px] overflow-hidden bg-[#FDF7F1]"
      >
        {overlapContent}
      </div>
    </div>
  );
}
