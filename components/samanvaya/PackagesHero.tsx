"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

export function PackagesHero() {
  const prefersReducedMotion = useReducedMotion();
  const shouldReduceMotion = prefersReducedMotion === true;

  const fullQuote = "\"A life becomes timeless when its wisdom continues to live through its contribution.\"";

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1, // Small delay to ensure smooth load
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 12 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Poster Image */}
      <div className="absolute inset-0 z-0">
        {/* Desktop Image */}
        <Image
          src="/images/pak.webp"
          alt="Sri Lanka Journey"
          fill
          priority
          className="object-cover hidden md:block"
        />
        {/* Mobile Image */}
        <Image
          src="/images/pakm.webp"
          alt="Sri Lanka Journey"
          fill
          priority
          className="object-cover block md:hidden"
        />
      </div>



      {/* Gradient Overlay Scrim */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Desktop Scrim */}
        <div 
          className="hidden md:block absolute top-0 left-0 w-[58%] h-full"
          style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.35) 35%, transparent 65%)' }}
        />
        
        {/* Mobile Scrim */}
        <div 
          className="block md:hidden absolute bottom-0 left-0 w-full h-[65%]"
          style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)' }}
        />
      </div>

      {/* Hero Content Container */}
      <div className="absolute inset-0 z-20 flex flex-col justify-end md:justify-center items-start pb-28 md:pb-0 pl-[28px] pr-[28px] md:pr-0 md:pl-[80px] lg:pl-[100px] max-w-full w-full">
        <motion.div 
          className="flex flex-col items-start w-full md:max-w-[480px]"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Kicker */}
          <motion.div variants={itemVariants} className="mb-4 md:mb-5">
            <span className="font-sans text-[#9FBB90] text-[11px] md:text-[12px] uppercase tracking-[0.15em] font-medium drop-shadow-sm">
              A Samanvaya Experience
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div variants={itemVariants} className="mb-1">
            <h1 className="font-display text-white text-5xl md:text-6xl lg:text-7xl tracking-wide drop-shadow-md leading-none">
              SAMANVAYA
            </h1>
          </motion.div>
          
          {/* Subtitle */}
          <motion.div variants={itemVariants} className="mb-6 md:mb-8">
            <h2 className="font-display italic text-[#F5F1E9] font-light text-[40px] md:text-[51px] lg:text-[61px] leading-tight drop-shadow-md">
              The Wellness Odyssey
            </h2>
          </motion.div>

          {/* Quote */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-10">
            <p className="font-display italic text-white/75 drop-shadow-md text-[13px] md:text-[14px] leading-[1.45] max-w-[280px] sm:max-w-[320px]">
              {fullQuote}
            </p>
          </motion.div>

          {/* CTA Button */}
          <motion.div variants={itemVariants}>
            <Link 
              href="/about" 
              className="inline-flex items-center justify-center bg-[#DE5680] text-white px-[28px] py-[12px] rounded-full font-sans text-[14px] font-medium tracking-wide shadow-md hover:scale-[1.02] hover:bg-[#c94a70] focus:outline-none focus:ring-2 focus:ring-[#DE5680] focus:ring-offset-2 focus:ring-offset-black/50 transition-all duration-300 group"
            >
              Begin the Journey
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </motion.div>
      </div>


    </section>
  );
}
