"use client";
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

export function ParallaxGeometry() {
  const { scrollY } = useScroll();
  const prefersReducedMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  // Shift background by up to 150px over 1000px of scroll
  const y = useTransform(scrollY, [0, 1000], [0, 150]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden opacity-[0.15]">
      <motion.div
        className="absolute inset-[-20%] w-[140%] h-[140%]"
        style={{
          y: prefersReducedMotion ? 0 : y,
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23C9A84C' stroke-width='0.5' fill='none' fill-rule='evenodd'%3E%3Ccircle cx='60' cy='60' r='50'/%3E%3Ccircle cx='60' cy='60' r='30'/%3E%3Cpolygon points='60,10 103,35 103,85 60,110 17,85 17,35'/%3E%3Ccircle cx='60' cy='60' r='2' fill='%23C9A84C'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
          backgroundRepeat: "repeat",
        }}
      />
    </div>
  );
}
