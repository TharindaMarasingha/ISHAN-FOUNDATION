"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useReducedMotion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/Button";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
});

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHoveredOrDragged, setIsHoveredOrDragged] = useState(false);
  const images = ["/images/h1.jpg", "/images/h2.jpg", "/images/h3.jpg", "/images/h4.jpg"];

  useEffect(() => {
    if (prefersReducedMotion || isHoveredOrDragged) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 10000); // 10 seconds per slide for a slower, unhurried pace
    return () => clearInterval(interval);
  }, [images.length, prefersReducedMotion, isHoveredOrDragged]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (e: any, { offset }: any) => {
    setIsHoveredOrDragged(false);
    const swipe = offset.x;
    if (swipe < -50) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    } else if (swipe > 50) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

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

      {/* MOBILE FULL-SCREEN SLIDESHOW */}
      <div className="absolute inset-0 md:hidden z-0 overflow-hidden bg-black">
        <motion.div 
          className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragStart={() => setIsHoveredOrDragged(true)}
          onDragEnd={handleDragEnd}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0, scale: 1 }}
              animate={{ opacity: 1, scale: prefersReducedMotion ? 1 : 1.05 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={images[currentImageIndex]}
                alt={`Hero Background ${currentImageIndex + 1}`}
                fill
                sizes="100vw"
                className="object-cover object-center pointer-events-none"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        {/* Overlay gradient to ensure text readability on mobile */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.2) 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0.85) 100%)" }}
        />
        
        {/* Mobile Pagination Dots */}
        <div className="absolute bottom-[60px] left-0 right-0 flex justify-center items-center gap-3 z-20 pointer-events-none">
          {images.map((_, idx) => (
            <div 
              key={idx}
              className={`h-2 rounded-full transition-all duration-500 ${
                idx === currentImageIndex ? "w-6 bg-sacredGold" : "w-2 bg-white/50"
              }`}
            />
          ))}
        </div>
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
            className="font-sans text-[8px] md:font-light text-white/70 md:text-[#8A8A8A] md:text-[10px] tracking-[0.18em] md:tracking-[0.3em] uppercase mb-3 md:mb-8 md:-mt-8 max-w-full"
          >
            International Society of Humanity and Nature
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="p-2 md:p-0 mb-8 mt-12 md:mt-0 md:mb-0 relative z-20 w-full"
          >
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
              className={`${greatVibes.className} leading-none text-[56px] text-white md:text-[#2E1A0E] md:text-[clamp(6rem,15vw,12rem)] drop-shadow-md md:drop-shadow-none`}
            >
              Ishan
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-sans italic text-[17px] text-[#FFF1E6] md:text-[#6B6B6B] md:text-xl max-w-[280px] md:max-w-lg leading-[1.5] md:leading-normal mb-[14px] md:mb-3 tracking-wide drop-shadow-sm md:drop-shadow-none"
          >
            Harmonising Humanity with Nature through Wisdom, Wellness, and Collective Responsibility
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-sans font-light text-[13px] text-[#FFF1E6]/90 md:text-[#8A8A8A] md:text-base max-w-[280px] md:max-w-lg leading-[1.7] md:leading-snug mb-7 md:mb-8 drop-shadow-sm md:drop-shadow-none"
          >
            ISHAN is a global institution committed to advancing humanity and nature through wisdom, wellness, education, ethical leadership, sustainability, and conscious community development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full mt-8 md:mt-6"
          >
            {/* MOBILE BUTTONS */}
            <div className="flex flex-col items-stretch gap-4 w-full md:hidden">
              <Link href="#ecosystem" className="w-full text-center bg-gradient-to-r from-[#D96C00] to-[#F5D98A] text-[#2E1A0E] px-10 py-4 rounded-full font-sans font-semibold tracking-[0.15em] uppercase text-xs shadow-md">
                EXPLORE OUR WORK &rarr;
              </Link>
              <Link href="/about" className="w-full text-center bg-gradient-to-r from-[#D96C00] to-[#F5D98A] text-[#2E1A0E] px-10 py-4 rounded-full font-sans font-semibold tracking-[0.15em] uppercase text-xs shadow-md">
                ABOUT ISHAN &rarr;
              </Link>
            </div>

            {/* DESKTOP BUTTONS */}
            <div className="hidden md:flex flex-row items-center justify-start gap-4">
              <Link href="#ecosystem" className="w-auto text-center min-w-[180px] bg-gradient-to-r from-[#FFC120] to-[#F8A39B] text-[#2E1A0E] border-none px-8 py-3.5 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-sans font-medium tracking-wide uppercase text-[13px] flex items-center justify-center">
                Explore Our Work
              </Link>
              <Link href="/about" className="w-auto text-center min-w-[180px] bg-gradient-to-r from-[#FFC120] to-[#F8A39B] text-[#2E1A0E] border-none px-8 py-3.5 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-sans font-medium tracking-wide uppercase text-[13px] flex items-center justify-center">
                About ISHAN
              </Link>
            </div>
          </motion.div>
          </motion.div>
        </div>

        {/* Right Column: Empty */}
        <div className="hidden md:block" />
        
      </div>

    </section>
  );
}
