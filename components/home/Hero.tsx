"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { HeroTitle } from "../ui/HeroTitle";
import { Button } from "../ui/Button";

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
    <section ref={sectionRef} className="relative min-h-screen flex items-center bg-white overflow-hidden">
      
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
      <div className="absolute inset-0 bg-white/85 md:hidden z-10" />

      {/* Desktop Wave Overlay (creates the split-screen curve) */}
      <div className="hidden md:block absolute top-0 left-0 w-[65%] lg:w-[55%] h-full z-10 pointer-events-none">
        <svg 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none" 
          className="w-full h-full text-white fill-current drop-shadow-[10px_0_15px_rgba(0,0,0,0.05)]"
        >
          <path d="M 0 0 L 100 0 C 100 25, 75 40, 75 50 C 75 60, 100 75, 100 100 L 0 100 Z" />
        </svg>
      </div>

      {/* Main Content Grid */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 pt-24 pb-12">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-center justify-center text-center px-4 md:px-12 w-full max-w-md mx-auto md:mx-0">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center mb-6"
          >
            <h1 className="font-display text-7xl md:text-8xl lg:text-9xl text-[#4A4A4A] leading-tight mb-[-10px] md:mb-[-15px]">
              ISHAN
            </h1>
            <span className="font-sans font-light text-5xl md:text-6xl lg:text-7xl text-[#6B6B6B] tracking-wide">
              society
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-sans font-light text-[#8A8A8A] text-sm md:text-base max-w-sm tracking-wider mb-10"
          >
            The harmony of your body and soul starts here
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="bg-gradient-to-r from-[#ffe4e1] to-[#e0ffff] text-[#6B6B6B] border-none px-10 py-3 rounded-full hover:shadow-lg transition-shadow duration-300 font-sans font-light tracking-wide">
              Get free trial lesson
            </button>
          </motion.div>
        </div>

        {/* Right Column: Empty (allows image to show through) */}
        <div className="hidden md:block" />
        
      </div>
    </section>
  );
}
