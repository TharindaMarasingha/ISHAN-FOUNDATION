"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface StatItem {
  value: number;
  suffix?: string;
  prefix?: string;
  line1: string;
  line2: string;
}

const STATS: StatItem[] = [
  {
    value: 150,
    line1: "Acres of",
    line2: "Pristine Land",
  },
  {
    value: 0,
    line1: "Carbon Footprint",
    line2: "Target (Net-Zero)",
  },
  {
    value: 100,
    suffix: "%",
    line1: "Integrated Wellness",
    line2: "& Living",
  },
  {
    value: 1,
    line1: "Unified Global",
    line2: "Community",
  },
];

function StatCounter({ stat, index }: { stat: StatItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.25 });
  const [currentVal, setCurrentVal] = useState(0);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (prefersReducedMotion) {
      const t = setTimeout(() => setCurrentVal(stat.value), 0);
      return () => clearTimeout(t);
    }

    let startTime: number | null = null;
    const durationMs = 1800; // 1.8 seconds smooth roll

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      // Easing: easeOutExpo
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      const val = Math.round(ease * stat.value);
      setCurrentVal(val);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrentVal(stat.value);
      }
    };

    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, index * 140);

    return () => clearTimeout(timer);
  }, [isInView, stat.value, index, prefersReducedMotion]);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center text-center px-4 py-3 group"
    >
      {/* Crisp warm off-white number (#F9F7F1) with soft pink suffix (#F3D8DB) */}
      <div className="font-display font-light text-5xl sm:text-6xl md:text-7xl lg:text-[4.75rem] text-[#F9F7F1] leading-none mb-3.5 flex items-baseline justify-center tracking-tight transition-transform duration-300 group-hover:scale-105 select-none">
        {stat.prefix && (
          <span className="text-3xl sm:text-4xl text-[#F9F7F1]/80 mr-1">
            {stat.prefix}
          </span>
        )}
        <span>{currentVal}</span>
        {stat.suffix && (
          <span className="text-3xl sm:text-4xl lg:text-5xl text-[#F3D8DB] font-light ml-1">
            {stat.suffix}
          </span>
        )}
      </div>

      {/* Symmetrical 2-line Subtext with 70% off-white opacity */}
      <div className="font-sans text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#F9F7F1]/70 leading-relaxed max-w-[190px] sm:max-w-[210px]">
        <span className="block">{stat.line1}</span>
        <span className="block">{stat.line2}</span>
      </div>
    </div>
  );
}

export function StatsScale() {
  return (
    <section className="relative -mt-10 sm:-mt-14 z-20 overflow-hidden bg-gradient-to-b from-[#223323] via-[#1E2E20] to-[#1A271B] rounded-t-[3.5rem] sm:rounded-t-[5rem] md:rounded-t-[6rem] pt-28 pb-28 md:pt-32 md:pb-32 px-6 md:px-12 border-t border-[#F3D8DB]/10 shadow-[0_-15px_40px_rgba(20,30,20,0.06)]">
      {/* Soft ambient radial glow */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-b from-[#5C8151]/12 via-transparent to-transparent blur-3xl pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-10 lg:gap-0 items-center">
          {STATS.map((stat, index) => (
            <div key={index} className="relative flex flex-col items-center">
              {/* Soft vertical gradient divider (fades to transparent at top & bottom) */}
              {index > 0 && (
                <div
                  aria-hidden="true"
                  className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 w-px h-20 bg-gradient-to-b from-transparent via-[#F9F7F1]/18 to-transparent"
                />
              )}
              <StatCounter stat={stat} index={index} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
