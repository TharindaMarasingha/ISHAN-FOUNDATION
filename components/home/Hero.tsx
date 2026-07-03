"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";
import { HeroTitle } from "../ui/HeroTitle";
import { Button } from "../ui/Button";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = ["/images/h1.jpg", "/images/h2.jpg", "/images/h3.jpg", "/images/h4.jpg"];

  useEffect(() => {
    if (prefersReducedMotion) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 8000); // 8 seconds per slide
    return () => clearInterval(interval);
  }, [images.length, prefersReducedMotion]);

  // Optional: subtle parallax for the background image
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 50]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden">
      {/* Left-side radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(255, 160, 100, 0.25) 0%, rgba(255, 200, 150, 0.12) 40%, transparent 70%)'
        }}
      />
      
      {/* Right Background Image Slideshow */}
      <div className="absolute inset-0 w-full h-full bg-white">
        <motion.div className="absolute inset-0 bg-white" style={{ y: prefersReducedMotion ? 0 : y }}>
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentImageIndex]}
                alt={`Hero Background ${currentImageIndex + 1}`}
                fill
                className="object-cover object-center md:object-right"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Mobile Overlay for text readability (hidden on md and up) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#ffaf80] via-[#fffaf7] to-[#ff9859] opacity-90 md:hidden z-10" />

      {/* Desktop Wave Overlay (creates the split-screen curve) */}
      <div className="hidden md:block absolute top-0 left-0 w-[65%] lg:w-[55%] h-full z-10 pointer-events-none">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-full drop-shadow-[10px_0_15px_rgba(0,0,0,0.05)]"
        >
          <defs>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffb88e" />
              <stop offset="25%" stopColor="#fff8f5" />
              <stop offset="75%" stopColor="#fff8f5" />
              <stop offset="100%" stopColor="#ff9a5e" />
            </linearGradient>
          </defs>
          <path d="M 0 0 L 100 0 C 100 25, 75 40, 75 50 C 75 60, 100 75, 100 100 L 0 100 Z" fill="url(#orangeGradient)" />
        </svg>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 pt-32 lg:pt-40 pb-20">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start justify-center text-left px-4 md:pl-0 lg:-ml-8 w-full max-w-2xl mx-auto md:mr-auto">
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-sans font-light text-[#8A8A8A] text-[9px] md:text-[10px] tracking-[0.3em] uppercase mb-8 -mt-8"
          >
            International Society of Humanity and Nature
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-start mb-4"
          >
            <h1 
              style={{
                fontSize: 'clamp(6rem, 15vw, 12rem)',
                letterSpacing: '0em',
                color: '#2E1A0E',
                fontWeight: 400,
                paddingRight: '0.2em'
              }}
              className={`${greatVibes.className} leading-none`}
            >
              Ishan
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-sans italic text-[#6B6B6B] text-lg md:text-xl max-w-lg tracking-wide mb-3"
          >
            Harmonising Humanity with Nature through Wisdom, Wellness, and Collective Responsibility
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-sans font-light text-[#8A8A8A] text-sm md:text-base max-w-lg leading-snug mb-8"
          >
            ISHAN is an international organisation committed to integrating timeless wisdom, preventive wellness, environmental stewardship, and conscious community development into practical initiatives that benefit individuals, society, and the planet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full mt-6"
          >
            <button className="w-full sm:w-auto min-w-[180px] bg-gradient-to-r from-[#FFC120] to-[#F8A39B] text-[#2E1A0E] border-none px-8 py-3.5 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-sans font-medium tracking-wide uppercase text-[13px]">
              Explore Our Work
            </button>
            <button className="w-full sm:w-auto min-w-[180px] bg-gradient-to-r from-[#FFC120] to-[#F8A39B] text-[#2E1A0E] border-none px-8 py-3.5 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-sans font-medium tracking-wide uppercase text-[13px]">
              About ISHAN
            </button>
          </motion.div>
        </div>

        {/* Right Column: Empty (allows image to show through) */}
        <div className="hidden md:block" />
        
      </div>
    </section>
  );
}
