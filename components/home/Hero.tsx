"use client";

import React, { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { HeroTitle } from "../ui/HeroTitle";
import { Button } from "../ui/Button";
import { ParallaxBackground } from "../ui/ParallaxBackground";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -30]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col justify-center bg-peach overflow-hidden px-6 pt-24 pb-12">
      {/* Decorative Parallax Background */}
      <ParallaxBackground fadeRange={[300, 1000]} driftRate={0.15} />

      {/* Main Content Grid */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 max-w-7xl mx-auto w-full items-center min-h-[70vh]">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left mt-16 lg:mt-0">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display italic text-burntOrange text-lg md:text-xl tracking-wider mb-6"
          >
            International Society of Humanity & Nature
          </motion.p>
          
          <div className="flex justify-center lg:justify-start w-full mb-6">
            <HeroTitle text="ISHAN" />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="font-display italic text-burntOrange text-xl md:text-2xl max-w-lg leading-relaxed mb-12"
          >
            Harmonising humanity with nature through wisdom, wellness & collective responsibility.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-col sm:flex-row items-center gap-6"
          >
            <Button variant="primary" href="#ecosystem">Explore Our Work</Button>
            <Button variant="ghost" href="/contact">Join the Movement</Button>
          </motion.div>
        </div>

        {/* Right Column: Masked Sacred Geometry Collage */}
        <div className="relative flex justify-center items-center w-full aspect-square max-w-[480px] lg:max-w-[560px] mx-auto">
          
          {/* Floating Accent Dots */}
          <motion.div
            animate={{ y: prefersReducedMotion ? 0 : [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-10 w-3 h-3 bg-mandarin rounded-full z-20"
          />
          <motion.div
            animate={{ y: prefersReducedMotion ? 0 : [-8, 8, -8] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-24 right-4 w-2 h-2 bg-sacredGold rounded-full z-20"
          />
          <motion.div
            animate={{ y: prefersReducedMotion ? 0 : [-12, 12, -12] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute top-1/2 left-4 w-4 h-4 bg-burntOrange rounded-full z-20"
          />
          <motion.div
            animate={{ y: prefersReducedMotion ? 0 : [-15, 15, -15] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute bottom-10 left-16 w-2.5 h-2.5 bg-mandarin rounded-full z-20"
          />

          {/* SVG Clip Path Definition (Lotus Petal Silhouette) */}
          <svg width="0" height="0" className="absolute">
            <defs>
              <clipPath id="sacred-petal" clipPathUnits="objectBoundingBox">
                <path d="M 0.5 0 C 0.9 0.3 1 0.65 1 0.85 C 1 0.95 0.9 1 0.5 1 C 0.1 1 0 0.95 0 0.85 C 0 0.65 0.1 0.3 0.5 0 Z" />
              </clipPath>
            </defs>
          </svg>

          {/* Masked Collage Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
            className="relative w-full h-full"
            style={{ clipPath: "url(#sacred-petal)" }}
          >
            <div className="absolute inset-0 bg-deepAmber/5 border-2 border-sacredGold/20 z-20 pointer-events-none" />
            
            {/* Parallax Image */}
            <motion.div className="absolute -inset-12" style={{ y: prefersReducedMotion ? 0 : y }}>
              <Image
                src="/images/hero-sri-vrindavan.png"
                alt="Sri Vrindavan Project"
                fill
                className="object-cover"
                priority
              />
            </motion.div>
            
            {/* Warm Overlay */}
            <div className="absolute inset-0 bg-deepAmber/10 pointer-events-none z-10" />
          </motion.div>
        </div>
      </div>


    </section>
  );
}
