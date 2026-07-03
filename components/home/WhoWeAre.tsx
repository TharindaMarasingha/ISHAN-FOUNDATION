"use client";

import React, { useRef } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionIllustration } from "../ui/SectionIllustration";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { HalfMandala } from "../ui/HalfMandala";

const CARDS = [
  { title: "Vision", description: "To cultivate a world where humanity and nature exist in conscious harmony." },
  { title: "Mission", description: "Fostering collective wellbeing through holistic education and sustainable living." },
  { title: "Philosophy", description: "Rooted in timeless spiritual sciences, adapted for the modern planetary citizen." },
  { title: "Approach", description: "Integrating traditional wellness paradigms with proactive social responsibility." },
];

const renderCardContent = (card: { title: string; description: string }) => (
  <div className="relative mx-auto w-full max-w-lg">
    {/* The Beige Card */}
    <div className="relative z-10 p-10 bg-gradient-to-br from-[#FFF8F1] to-[#F8E9D8] border-[2.5px] border-[#4B2D1A] rounded-[2.5rem] shadow-sm flex flex-col justify-center min-h-[35vh]">
      
      {/* Inner dashed decorative border to match the hand-drawn style */}
      <div className="absolute inset-3 border border-[#D9BFA6] border-dashed rounded-[2rem] pointer-events-none" />

      <div className="relative z-20">
        <h3 className="font-display uppercase tracking-widest text-[#5A2E14] text-xl mb-4 font-bold">
          {card.title}
        </h3>
        <p className="font-sans font-light text-base text-[#8A7A70] leading-relaxed">
          {card.description}
        </p>
      </div>
    </div>

    {/* Top Left Quote */}
    <div className="absolute -top-6 -left-6 z-20 drop-shadow-md">
      <svg width="80" height="80" viewBox="0 0 100 100" fill="#FCEBDD" stroke="#6A4024" strokeWidth="4" xmlns="http://www.w3.org/2000/svg">
        <path d="M 35,55 C 48,55 50,35 35,35 C 20,35 20,55 35,55 C 40,55 40,70 25,80" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 75,55 C 88,55 90,35 75,35 C 60,35 60,55 75,55 C 80,55 80,70 65,80" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Shading hashes */}
        <path d="M 28,65 L 34,60 M 32,72 L 36,67 M 68,65 L 74,60 M 72,72 L 76,67" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>

    {/* Bottom Right Quote (Rotated) */}
    <div className="absolute -bottom-6 -right-6 z-20 drop-shadow-md rotate-180">
      <svg width="80" height="80" viewBox="0 0 100 100" fill="#FCEBDD" stroke="#6A4024" strokeWidth="4" xmlns="http://www.w3.org/2000/svg">
        <path d="M 35,55 C 48,55 50,35 35,35 C 20,35 20,55 35,55 C 40,55 40,70 25,80" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 75,55 C 88,55 90,35 75,35 C 60,35 60,55 75,55 C 80,55 80,70 65,80" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Shading hashes */}
        <path d="M 28,65 L 34,60 M 32,72 L 36,67 M 68,65 L 74,60 M 72,72 L 76,67" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  </div>
);

export function WhoWeAre() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Apply a spring for buttery smooth scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 15,
    restDelta: 0.001
  });

  return (
    <section ref={containerRef} className="relative bg-[#FFF7F0] lg:h-[500vh] lg:-mb-[100vh] py-20 lg:py-0">
      <div className="lg:sticky lg:top-0 lg:h-screen w-full flex flex-col justify-center overflow-hidden">
        
        {/* Cultural Golden Mandala on the far right edge of the screen */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[20%] md:translate-x-[10%] pointer-events-none z-0">
          <HalfMandala className="h-[90vh] md:h-[110vh] w-auto text-sacredGold opacity-40 drop-shadow-sm" />
        </div>

        {/* Content Container */}
        <div className="px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-16 items-center w-full">
          {/* Left Column */}
          <div className="flex flex-col space-y-8">
            <RevealOnScroll className="flex flex-col items-start">
              <span
                className="font-display italic tracking-[0.2em] text-sm uppercase mb-4 text-left text-[#C77738]"
              >
                Who We Are
              </span>
              <h2
                className="font-display font-light text-4xl md:text-5xl lg:text-6xl mb-6 text-left text-[#3B1F12]"
              >
                A global movement for humanity & nature.
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="font-sans font-light text-[#6F625A] leading-relaxed text-lg">
                ISHAN is a conscious-living organisation dedicated to harmonising the relationship between human beings and the natural world. We believe that true wellbeing extends beyond the individual, encompassing the entire planetary ecosystem.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2}>
              <p className="font-sans font-light text-[#6F625A] leading-relaxed">
                Through our global initiatives in preventive wellness, consciousness research, and sustainable community living, we provide pathways for profound inner transformation and collective healing.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <Link
                href="/about"
                className="inline-block mt-4 text-sm font-display italic text-[#C77738] tracking-widest hover:text-[#A85B2A] transition-colors duration-300"
              >
                Read More →
              </Link>
            </RevealOnScroll>
          </div>

          {/* Desktop Right Column: Sticky Card Stack */}
          <div className="hidden lg:block relative h-[50vh] w-full">
            {CARDS.map((card, index) => {
              const start = index * 0.2;
              const end = (index + 1) * 0.2;
              
              // No overlap timings:
              // Fade out finishes exactly when the next fade in starts.
              const fadeInStart = start;
              const fadeInEnd = start + 0.05;
              const fadeOutStart = end - 0.05;
              const fadeOutEnd = end;

              const isFirst = index === 0;
              const isLast = index === CARDS.length - 1;

              // Use smoothProgress instead of raw scrollYProgress
              const opacity = useTransform(
                smoothProgress,
                [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
                [isFirst ? 1 : 0, 1, 1, isLast ? 1 : 0]
              );

              const y = useTransform(
                smoothProgress,
                [fadeInStart, fadeInEnd, fadeOutStart, fadeOutEnd],
                [isFirst ? 0 : 60, 0, 0, isLast ? 0 : -60]
              );

              const pointerEvents = useTransform(
                smoothProgress,
                (v) => {
                  if (isFirst && v <= fadeOutStart) return "auto";
                  if (isLast && v >= fadeInEnd) return "auto";
                  return v >= fadeInEnd && v <= fadeOutStart ? "auto" : "none";
                }
              );

              return (
                <motion.div
                  key={card.title}
                  style={{ opacity, y, pointerEvents: pointerEvents as any }}
                  className="absolute inset-0 flex flex-col justify-center"
                >
                  {renderCardContent(card)}
                </motion.div>
              );
            })}
          </div>

          {/* Mobile Right Column: Static List */}
          <div className="lg:hidden flex flex-col gap-12 mt-12 w-full relative z-20">
            {CARDS.map((card) => (
              <div key={card.title} className="w-full">
                {renderCardContent(card)}
              </div>
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
