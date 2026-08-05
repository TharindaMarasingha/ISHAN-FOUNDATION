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
    <div className="relative z-10 p-6 md:p-10 bg-[#F5F1E9] border-[2.5px] border-secondary rounded-[2rem] md:rounded-[2.5rem] shadow-sm flex flex-col justify-center min-h-[30vh] md:min-h-[35vh]">
      
      <div className="relative z-20">
        <h3 className="font-display uppercase tracking-widest text-heading text-lg md:text-xl mb-2 md:mb-4 font-bold">
          {card.title}
        </h3>
        <p className="font-sans font-light text-sm md:text-base text-heading/80 leading-relaxed">
          {card.description}
        </p>
      </div>
    </div>

    {/* Top Left Quote */}
    <div className="absolute -top-6 -left-6 z-20 drop-shadow-md text-[#F5F1E9]">
      <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor" className="stroke-secondary" strokeWidth="4" xmlns="http://www.w3.org/2000/svg">
        <path d="M 35,55 C 48,55 50,35 35,35 C 20,35 20,55 35,55 C 40,55 40,70 25,80" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 75,55 C 88,55 90,35 75,35 C 60,35 60,55 75,55 C 80,55 80,70 65,80" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Shading hashes */}
        <path d="M 28,65 L 34,60 M 32,72 L 36,67 M 68,65 L 74,60 M 72,72 L 76,67" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>

    {/* Bottom Right Quote (Rotated) */}
    <div className="absolute -bottom-6 -right-6 z-20 drop-shadow-md rotate-180 text-[#F5F1E9]">
      <svg width="80" height="80" viewBox="0 0 100 100" fill="currentColor" className="stroke-secondary" strokeWidth="4" xmlns="http://www.w3.org/2000/svg">
        <path d="M 35,55 C 48,55 50,35 35,35 C 20,35 20,55 35,55 C 40,55 40,70 25,80" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M 75,55 C 88,55 90,35 75,35 C 60,35 60,55 75,55 C 80,55 80,70 65,80" strokeLinecap="round" strokeLinejoin="round"/>
        {/* Shading hashes */}
        <path d="M 28,65 L 34,60 M 32,72 L 36,67 M 68,65 L 74,60 M 72,72 L 76,67" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    </div>
  </div>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function CardItem({ card, index, totalCards, smoothProgress }: any) {
  const start = index * 0.2;
  const end = start + 0.2;
  const fadeInStart = start;
  const fadeInEnd = start + 0.05;
  const fadeOutStart = end - 0.05;
  const fadeOutEnd = end;

  const isFirst = index === 0;
  const isLast = index === totalCards - 1;

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
    (v: number) => {
      if (isFirst && v <= fadeOutStart) return "auto";
      if (isLast && v >= fadeInEnd) return "auto";
      return v >= fadeInEnd && v <= fadeOutStart ? "auto" : "none";
    }
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pointerEventsStyle = pointerEvents as any;

  return (
    <motion.div
      style={{ opacity, y, pointerEvents: pointerEventsStyle }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      {renderCardContent(card)}
    </motion.div>
  );
}

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
    <section ref={containerRef} className="relative bg-background h-[500vh] -mb-[100vh]">
      <div className="sticky top-0 h-screen w-full flex flex-col justify-center overflow-hidden py-10 lg:py-0">
        
        {/* Cultural Golden Mandala on the far right edge of the screen */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[20%] md:translate-x-[10%] pointer-events-none z-0">
          <HalfMandala className="h-[90vh] md:h-[110vh] w-auto text-secondary opacity-40 drop-shadow-sm" />
        </div>

        {/* Content Container */}
        <div className="px-6 md:px-12 max-w-7xl mx-auto w-full relative z-10 pt-20 md:pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-4 lg:gap-16 items-center w-full">
          {/* Left Column */}
          <div className="flex flex-col space-y-3 lg:space-y-8">
            <RevealOnScroll className="flex flex-col items-start">
              <span
                className="font-display italic tracking-[0.2em] text-xs lg:text-sm uppercase mb-2 lg:mb-4 text-left text-primary"
              >
                Who We Are
              </span>
              <h2
                className="font-display font-light text-3xl md:text-5xl lg:text-6xl mb-3 lg:mb-6 text-left text-heading"
              >
                Welcome to ISHAN
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <p className="font-sans font-light text-heading/80 leading-relaxed text-sm md:text-base lg:text-lg">
                ISHAN (International Society of Holistic Awareness & Naturology) is a global institution committed to advancing humanity and nature through wisdom, wellness, education, ethical leadership, sustainability, and conscious community development.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.15}>
              <p className="font-sans font-light text-heading/80 leading-relaxed text-sm md:text-base">
                We believe that the wellbeing of humanity and the wellbeing of nature are inseparable. Every individual, every community, and every ecosystem is interconnected, and lasting progress can only be achieved when this interconnectedness is understood, respected, and nurtured.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.2} className="hidden md:block">
              <p className="font-sans font-light text-heading/80 leading-relaxed">
                Rooted in timeless wisdom and enriched by modern knowledge, ISHAN develops transformative programmes, research, educational initiatives, partnerships, and sustainable systems that empower individuals and institutions to create meaningful impact for present and future generations.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={0.3}>
              <Link
                href="/about"
                className="inline-block mt-4 text-sm font-display italic text-primary tracking-widest hover:text-primary/90 transition-colors duration-300"
              >
                Read More →
              </Link>
            </RevealOnScroll>
          </div>

          {/* Right Column: Sticky Card Stack (Desktop & Mobile) */}
          <div className="relative h-[45vh] lg:h-[50vh] w-full mt-4 lg:mt-0">
            {CARDS.map((card, index) => (
              <CardItem
                key={card.title}
                card={card}
                index={index}
                totalCards={CARDS.length}
                smoothProgress={smoothProgress}
              />
            ))}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
