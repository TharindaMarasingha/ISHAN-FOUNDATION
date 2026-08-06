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
  const [currentMobileIndex, setCurrentMobileIndex] = useState(0);
  const [isHoveredOrDragged, setIsHoveredOrDragged] = useState(false);
  
  const desktopImages = ["/images/h1.webp", "/images/h2.webp", "/images/h3.webp", "/images/h4.webp", "/images/h5.webp"];
  const mobileImages = ["/images/m1.webp", "/images/m2.webp", "/images/m3.webp", "/images/m4.webp", "/images/m5.webp", "/images/m6.webp"];

  useEffect(() => {
    if (prefersReducedMotion || isHoveredOrDragged) return;
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % desktopImages.length);
      setCurrentMobileIndex((prev) => (prev + 1) % mobileImages.length);
    }, 4500); // 4.5 seconds per slide for a visible slideshow pace
    return () => clearInterval(interval);
  }, [desktopImages.length, mobileImages.length, prefersReducedMotion, isHoveredOrDragged]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleDragEnd = (e: any, { offset }: any) => {
    setIsHoveredOrDragged(false);
    const swipe = offset.x;
    if (swipe < -50) {
      setCurrentImageIndex((prev) => (prev + 1) % desktopImages.length);
      setCurrentMobileIndex((prev) => (prev + 1) % mobileImages.length);
    } else if (swipe > 50) {
      setCurrentImageIndex((prev) => (prev - 1 + desktopImages.length) % desktopImages.length);
      setCurrentMobileIndex((prev) => (prev - 1 + mobileImages.length) % mobileImages.length);
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
          background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(159, 187, 144, 0.25) 0%, rgba(220, 233, 215, 0.12) 40%, transparent 70%)'
        }}
      />

      {/* MOBILE HERO (Strictly Mobile) */}
      <div className="md:hidden absolute inset-0 z-20 w-full h-full overflow-hidden">
        
        {/* 1. Bottom Layer: Full Background Image Slideshow */}
        <div className="absolute inset-0 z-0">
          {prefersReducedMotion ? (
            <Image
              src={mobileImages[0]}
              alt="Hero Background"
              fill
              sizes="100vw"
              className="object-cover object-center"
              priority
              unoptimized
            />
          ) : (
            mobileImages.map((src, i) => (
              <Image
                key={src}
                src={src}
                alt={`Hero Background ${i + 1}`}
                fill
                sizes="100vw"
                className="object-cover object-center"
                style={{ 
                  opacity: i === currentMobileIndex ? 1 : 0, 
                  transition: 'opacity 1.5s ease-in-out',
                  zIndex: i === currentMobileIndex ? 10 : 0 
                }}
                priority={i === 0 || i === currentMobileIndex || i === (currentMobileIndex + 1) % mobileImages.length}
                unoptimized
              />
            ))
          )}
        </div>

        {/* 2. Middle Layer: Gradient Overlay Scrim */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none" 
          style={{ 
            background: 'linear-gradient(to bottom, rgba(245, 241, 233, 0.95) 0%, rgba(245, 241, 233, 0.8) 40%, rgba(245, 241, 233, 0.3) 75%, rgba(245, 241, 233, 0) 100%)' 
          }} 
        />
        
        {/* 3. Top Layer: Text & Content Area */}
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-start text-center px-6 pt-[160px] pb-12 overflow-y-auto">
          <h1 
            style={{
              letterSpacing: '0em',
              fontWeight: 400,
            }}
            className={`${greatVibes.className} leading-none text-[84px] text-[#294A32] mb-3`}
          >
            Ishan
          </h1>
          <p className="font-sans text-[#294A32]/80 font-medium text-[9px] tracking-[0.15em] uppercase mb-5 max-w-[280px]">
            INTERNATIONAL SOCIETY FOR SELF AWARENESS & WELL BEING
          </p>
          <p className="font-sans font-medium text-[13px] text-[#294A32]/80 leading-[1.6] mb-8 max-w-[300px]">
            ISHAN is a global meditation community dedicated to awakening humanity and nature through wisdom, education, ethical leadership, sustainability, and conscious community development.
          </p>
          
          <div className="flex flex-col w-full gap-5 max-w-[280px] mt-6">
            <Link 
              href="/about" 
              className="w-full bg-[#DE5680] text-center text-white px-8 py-3.5 rounded-full font-sans font-bold tracking-[0.1em] uppercase text-[12px] shadow-md hover:shadow-[0_8px_20px_rgba(222,86,128,0.25)] hover:-translate-y-0.5 hover:brightness-95 transition-all duration-300"
            >
              ABOUT ISHAN
            </Link>
            <Link 
              href="#ecosystem" 
              className="group relative w-full text-center overflow-hidden rounded-full border border-[#9FBB90] hover:border-[#DE5680] bg-transparent px-8 py-3.5 font-sans font-bold tracking-[0.1em] uppercase text-[12px] text-[#294A32] shadow-sm hover:shadow-[0_8px_20px_rgba(222,86,128,0.25)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
            >
              <span className="relative z-10 inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-8 group-hover:opacity-0">
                EXPLORE OUR WORK
              </span>
              <div className="absolute top-0 z-10 flex h-full w-full translate-x-8 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
                <span>EXPLORE OUR WORK</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </div>
              <div className="absolute left-[8%] top-[50%] h-2 w-2 -translate-y-1/2 rounded-full bg-[#DE5680] transition-all duration-500 ease-out group-hover:left-[-50px] group-hover:top-[-50px] group-hover:h-[400px] group-hover:w-[400px] group-hover:-translate-y-0 z-0"></div>
            </Link>
          </div>
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
                src={desktopImages[currentImageIndex]}
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
            <linearGradient id="brandGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9FBB90" />
              <stop offset="25%" stopColor="#F5F1E9" />
              <stop offset="75%" stopColor="#F5F1E9" />
              <stop offset="100%" stopColor="#9FBB90" />
            </linearGradient>
          </defs>
          <path d="M 0 0 L 100 0 C 100 25, 75 40, 75 50 C 75 60, 100 75, 100 100 L 0 100 Z" fill="url(#brandGradient)" />
        </svg>
      </div>

      {/* Main Content Grid (Desktop only) */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 hidden md:grid grid-cols-2 pt-32 lg:pt-40 pb-20">
        
        {/* Left Column: Text Content */}
        <div 
          className="flex flex-col items-start justify-center text-left md:pl-0 lg:-ml-8 w-full max-w-2xl mx-auto md:mr-auto"
          style={{
            '--hero-gradient': 'linear-gradient(135deg, #9FBB90 0%, #DE5680 100%)',
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
              <Link href="/about" className="w-auto text-center min-w-[180px] bg-[#DE5680] text-white border-none px-8 py-3.5 rounded-full hover:shadow-[0_8px_20px_rgba(222,86,128,0.25)] hover:-translate-y-0.5 hover:brightness-95 transition-all duration-300 font-sans font-bold tracking-wide uppercase text-[13px] flex items-center justify-center [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
                About ISHAN
              </Link>
              <Link href="#ecosystem" className="group relative w-auto min-w-[180px] overflow-hidden rounded-full border border-[#9FBB90] hover:border-[#DE5680] bg-transparent px-8 py-3.5 hover:shadow-[0_8px_20px_rgba(222,86,128,0.25)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center font-sans font-bold tracking-wide uppercase text-[13px] text-[#294A32]">
                <span className="relative z-10 inline-block translate-x-0 transition-all duration-300 group-hover:translate-x-8 group-hover:opacity-0">
                  Explore Our Work
                </span>
                <div className="absolute top-0 z-10 flex h-full w-full translate-x-8 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 [text-shadow:0_1px_3px_rgba(0,0,0,0.3)]">
                  <span>EXPLORE OUR WORK</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                </div>
                <div className="absolute left-[8%] top-[50%] h-2 w-2 -translate-y-1/2 rounded-full bg-[#DE5680] transition-all duration-500 ease-out group-hover:left-[-50px] group-hover:top-[-50px] group-hover:h-[400px] group-hover:w-[400px] group-hover:-translate-y-0 z-0"></div>
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
