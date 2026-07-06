"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Great_Vibes } from "next/font/google";

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
    <section ref={sectionRef} className="relative min-h-screen flex flex-col md:flex-row items-center overflow-hidden pt-0">
      
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(255, 160, 100, 0.25) 0%, rgba(255, 200, 150, 0.12) 40%, transparent 70%)'
        }}
      />

      {/* MOBILE BACKGROUND IMAGE SHAPE */}
      <div 
        className="absolute top-0 -right-5 w-[75vw] h-[60vh] overflow-hidden md:hidden z-0"
        style={{ clipPath: "polygon(20% 0%, 100% 0%, 100% 80%, 0% 100%)" }}
      >
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
                sizes="100vw"
                className="object-cover object-center"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        {/* Overlay gradient */}
        <div 
          className="absolute inset-0 z-10"
          style={{ background: "linear-gradient(to bottom left, transparent 30%, rgba(255,210,170,0.75) 80%)" }}
        />
      </div>

      {/* MOBILE FLOATING ACCENT DOTS */}
      <div className="md:hidden absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-[120px] left-[22px] w-2 h-2 bg-sacredGold rounded-full opacity-50" />
        <div className="absolute top-[180px] right-[30px] w-1.5 h-1.5 bg-burntOrange rounded-full opacity-40" />
        <div className="absolute top-[55%] right-[20px] w-2.5 h-2.5 bg-sacredGold rounded-full opacity-30" />
      </div>

      {/* Desktop Right Background Image Slideshow */}
      <div className="hidden md:block absolute inset-0 w-[85vw] h-[55vw] md:w-full md:h-full bg-white mx-auto mt-8 md:mt-0 z-10 md:z-0 overflow-hidden mb-12 md:mb-0">
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
                sizes="100vw"
                className="object-cover object-right"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Desktop Wave Overlay */}
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
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 pt-28 md:pt-32 lg:pt-40 pb-8 md:pb-20">
        
        {/* Left Column: Text Content */}
        <div className="flex flex-col items-start justify-center text-left md:pl-0 lg:-ml-8 w-full max-w-2xl mx-auto md:mr-auto">
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-sans text-[8px] md:font-light md:text-[#8A8A8A] md:text-[10px] text-[rgba(100,40,0,0.65)] tracking-[0.18em] md:tracking-[0.3em] uppercase mb-3 md:mb-8 md:-mt-8 max-w-full"
          >
            International Society of Humanity & Nature
          </motion.p>

          <div className="bg-[rgba(255,245,235,0.70)] backdrop-blur-[4px] p-4 rounded-2xl mb-5 md:bg-transparent md:backdrop-blur-none md:p-0 md:rounded-none md:mb-0">
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-start mb-4 overflow-hidden max-w-full"
          >
            <h1 
              style={{
                letterSpacing: '0em',
                fontWeight: 400,
                paddingRight: '0.2em'
              }}
              className={`${greatVibes.className} leading-none text-[56px] text-deepAmber md:text-[#2E1A0E] md:text-[clamp(6rem,15vw,12rem)]`}
            >
              Ishan
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-sans italic text-[15px] text-burntOrange md:text-[#6B6B6B] md:text-xl max-w-[240px] md:max-w-lg leading-[1.5] md:leading-normal mb-[14px] md:mb-3 tracking-wide"
          >
            Harmonising Humanity with Nature through Wisdom, Wellness, and Collective Responsibility
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-sans font-light text-[11px] text-[#5a3a20] md:text-[#8A8A8A] md:text-base max-w-[230px] md:max-w-lg leading-[1.7] md:leading-snug mb-7 md:mb-8"
          >
            ISHAN is an international organisation committed to integrating timeless wisdom, preventive wellness, environmental stewardship, and conscious community development into practical initiatives that benefit individuals, society, and the planet.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-start md:flex-row md:items-center justify-start gap-3 md:gap-4 w-full mt-6 md:mt-6"
          >
            <button className="w-auto min-w-[180px] bg-gradient-to-r from-[#FFC120] to-[#F8A39B] text-[#2E1A0E] border-none px-8 py-3.5 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-sans font-medium tracking-wide uppercase text-[13px]">
              Explore Our Work
            </button>
            <button className="w-auto min-w-[180px] bg-gradient-to-r from-[#FFC120] to-[#F8A39B] text-[#2E1A0E] border-none px-8 py-3.5 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-sans font-medium tracking-wide uppercase text-[13px]">
              About ISHAN
            </button>
          </motion.div>
          </div>
        </div>

        {/* Right Column: Empty */}
        <div className="hidden md:block" />
        
      </div>

      {/* Mobile Scroll Indicator */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 flex justify-between items-center px-6 py-3.5 rounded-t-[24px] border-t border-white/35 z-20"
           style={{ background: "rgba(255,255,255,0.25)", backdropFilter: "blur(12px)" }}>
        <span className="font-sans text-[8px] uppercase tracking-[0.2em] text-[#3e2312] opacity-80 font-semibold">
          Scroll to explore
        </span>
        <div className="flex items-center gap-2">
          <div className="w-6 h-[1px] bg-[#3e2312] opacity-40" />
          <div className="w-1.5 h-1.5 rounded-full bg-sacredGold" />
        </div>
      </div>

    </section>
  );
}
