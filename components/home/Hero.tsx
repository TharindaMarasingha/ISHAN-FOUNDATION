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
  const images = ["/images/h1.webp", "/images/h2.webp", "/images/h3.webp", "/images/h4.webp", "/images/h5.webp"];

  useEffect(() => {
    if (prefersReducedMotion || isHoveredOrDragged) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds per slide for a visible slideshow pace
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

      {/* MOBILE HERO (Strictly Mobile) */}
      <div className="md:hidden absolute inset-0 z-20 flex flex-col w-full h-full bg-[#F5F1E9] overflow-hidden">
        
        {/* Top Text Content Area */}
        <div className="flex flex-col items-center text-center px-6 pt-[120px] pb-4 z-20 flex-shrink-0">
          <h1 
            style={{
              letterSpacing: '0em',
              fontWeight: 400,
            }}
            className={`${greatVibes.className} leading-none text-[84px] text-[#294A32] mb-3`}
          >
            Ishan
          </h1>
          <p className="font-sans text-[#8A8A8A] text-[9px] tracking-[0.15em] uppercase mb-5 max-w-[280px]">
            INTERNATIONAL SOCIETY FOR SELF AWARENESS & WELL BEING
          </p>
          <p className="font-sans font-light text-[13px] text-[#8A8A8A] leading-[1.6] mb-8 max-w-[300px]">
            ISHAN is a global meditation community dedicated to awakening humanity and nature through wisdom, education, ethical leadership, sustainability, and conscious community development.
          </p>
          
          <div className="flex flex-col w-full gap-5 max-w-[280px]">
            <Link 
              href="#ecosystem" 
              className="w-full text-center text-white px-8 py-3.5 rounded-full font-sans font-bold tracking-[0.1em] uppercase text-[12px] shadow-md hover:brightness-105 transition-all"
              style={{ background: 'linear-gradient(135deg, #D94F9D 0%, #E8A56F 50%, #F4C6A1 100%)' }}
            >
              EXPLORE OUR WORK
            </Link>
            <Link 
              href="/about" 
              className="w-full text-center text-white px-8 py-3.5 rounded-full font-sans font-bold tracking-[0.1em] uppercase text-[12px] shadow-md hover:brightness-105 transition-all"
              style={{ background: 'linear-gradient(135deg, #D94F9D 0%, #E8A56F 50%, #F4C6A1 100%)' }}
            >
              ABOUT ISHAN
            </Link>
          </div>
        </div>
        
        {/* Curved Shape */}
        <div className="relative z-10 w-full flex-shrink-0 -mb-[1px]">
          <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-20 md:h-24 block">
            <path d="M0,0 L100,0 Q50,20 0,0 Z" fill="#F5F1E9" />
          </svg>
        </div>

        {/* Background Image Slideshow at the bottom */}
        <div className="relative w-full flex-grow z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2 }}
              className="absolute inset-0"
            >
              <Image
                src={images[currentImageIndex]}
                alt={`Hero Background ${currentImageIndex + 1}`}
                fill
                sizes="100vw"
                className="object-cover object-[75%_center]"
                priority
                unoptimized
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1E9]/20 to-transparent pointer-events-none" />
        </div>
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
                unoptimized
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

      {/* Main Content Grid (Desktop only) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 hidden md:grid grid-cols-2 pt-32 lg:pt-40 pb-20">
        
        {/* Left Column: Text Content */}
        <div 
          className="flex flex-col items-start justify-center text-left md:pl-0 lg:-ml-8 w-full max-w-2xl mx-auto md:mr-auto"
          style={{
            '--hero-gradient': 'linear-gradient(135deg, #D94F9D 0%, #E8A56F 50%, #F4C6A1 100%)',
            '--hero-heading-color': '#294A32',
            '--hero-eyebrow-color': 'rgba(41, 74, 50, 0.85)',
            '--hero-subtitle-color': 'rgba(41, 74, 50, 0.85)',
          } as React.CSSProperties}
        >
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1, ease: "easeOut" }}
            className="p-2 md:p-0 mb-8 mt-6 md:mt-0 md:mb-0 relative z-20 w-full"
          >
            <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="flex flex-col items-start mb-2 md:mb-1 max-w-full"
          >
            <h1 
              style={{
                letterSpacing: '0em',
                fontWeight: 400,
                paddingRight: '0.2em'
              }}
              className={`${greatVibes.className} leading-none text-[56px] text-white md:text-[color:var(--hero-heading-color)] md:text-[clamp(6rem,15vw,12rem)] drop-shadow-md md:drop-shadow-none`}
            >
              Ishan
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-sans text-[8px] md:font-light text-white/70 md:text-[color:var(--hero-eyebrow-color)] md:text-[10px] tracking-[0.18em] md:tracking-[0.3em] uppercase mb-[14px] md:mb-5 max-w-full"
          >
            International Society of Holistic Awareness & Naturology
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-sans font-light text-[13px] text-white/90 md:text-[#8A8A8A] md:text-base max-w-[280px] md:max-w-lg leading-[1.7] md:leading-snug mb-7 md:mb-8 drop-shadow-sm md:drop-shadow-none"
          >
            ISHAN is a global institution committed to advancing humanity and nature through wisdom, wellness, education, ethical leadership, sustainability, and conscious community development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full mt-8 md:mt-6"
          >


            {/* DESKTOP BUTTONS */}
            <div className="hidden md:flex flex-row items-center justify-start gap-4">
              <Link href="#ecosystem" className="w-auto text-center min-w-[180px] bg-[image:var(--hero-gradient)] text-white border-none px-8 py-3.5 rounded-full hover:[box-shadow:0_0_20px_rgba(217,79,157,0.4)] hover:-translate-y-0.5 hover:brightness-105 transition-all duration-300 font-sans font-bold tracking-wide uppercase text-[13px] flex items-center justify-center [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
                Explore Our Work
              </Link>
              <Link href="/about" className="w-auto text-center min-w-[180px] bg-[image:var(--hero-gradient)] text-white border-none px-8 py-3.5 rounded-full hover:[box-shadow:0_0_20px_rgba(217,79,157,0.4)] hover:-translate-y-0.5 hover:brightness-105 transition-all duration-300 font-sans font-bold tracking-wide uppercase text-[13px] flex items-center justify-center [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
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
