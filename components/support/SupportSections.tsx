"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { motion } from "framer-motion";
import Image from "next/image";

export function WaysToContributeSection() {
  const ways = [
    { title: 'Volunteer', desc: 'Share time, skills, and enthusiasm through programmes, events, community projects, and environmental initiatives.' },
    { title: 'Professional Expertise', desc: 'Contribute specialised knowledge, mentoring, consulting, teaching, or supporting strategic initiatives.' },
    { title: 'Teach & Facilitate', desc: 'Share knowledge through workshops, courses, retreats, and learning experiences.' },
    { title: 'Research & Knowledge', desc: 'Contribute to research, publications, educational resources, case studies, and policy development.' },
    { title: 'Community Projects', desc: 'Support or initiate local projects through education, wellbeing, environmental stewardship, and civic innovation.' },
    { title: 'Environmental Initiatives', desc: 'Tree plantation, ecological restoration, water conservation, and sustainable farming.' },
    { title: 'Strategic Partnerships', desc: 'Collaborate through institutional partnerships, educational initiatives, and sustainable development.' },
    { title: 'Philanthropic Support', desc: 'Financial contributions that expand programmes, strengthen institutions, and support communities.' },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-xs font-bold tracking-[0.2em] text-[#4A6741] uppercase mb-4 block">
            Make an Impact
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-[#2C3B2E]">
            Ways to Contribute
          </h2>
        </div>

        {/* 
          1. The Flush Architectural Grid: 
          The parent has a dark background (bg-[#2C3B2E]/10) and a 1px gap. 
          When the children are white, the gap creates perfectly sharp 1px grid lines!
        */}
        <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 md:gap-[1px] md:bg-[#2C3B2E]/10 border-t border-[#2C3B2E]/10 md:border md:border-[#2C3B2E]/10 mt-8 md:mt-0">
          
          {ways.map((way, index) => (
            <div 
              key={index} 
              /* 
                2. The Cell: 
                Mobile: Open stack (py-10, border-b). Desktop: Massive padding (p-10), no borders (handled by gap).
              */
              className="group relative bg-white py-10 md:p-10 border-b border-[#2C3B2E]/10 md:border-b-0 last:border-b-0 hover:bg-[#F8F7F2] transition-colors duration-500 cursor-default overflow-hidden"
            >
              
              {/* 
                3. The Micro-Interaction (Top Accent):
                A Deep Green line that sweeps across the top of the cell when hovered.
              */}
              <div className="absolute top-0 left-0 w-0 h-[2px] bg-[#4A6741] group-hover:w-full transition-all duration-700 ease-out"></div>

              {/* Title */}
              <h3 className="text-base font-display tracking-[0.1em] text-[#2C3B2E] mb-4 md:mb-5 uppercase">
                {way.title}
              </h3>
              
              {/* 
                4. The Animated Pink Dash:
                Expands smoothly when the user focuses on this block.
              */}
              <div className="w-8 h-px bg-[#D45B7E]/60 md:bg-[#D45B7E]/40 mb-5 md:mb-6 group-hover:w-16 group-hover:bg-[#D45B7E] transition-all duration-500"></div>
              
              {/* Description */}
              <p className="text-gray-500 font-light text-sm leading-relaxed pr-4 md:pr-0">
                {way.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export function JoinCommunitySection() {
  return (
    <section className="py-32 px-6 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 lg:gap-24 items-start">
        
        {/* 
          =========================================
          LEFT COLUMN: The Anchor
          =========================================
        */}
        <div className="md:w-1/3 shrink-0">
          <RevealOnScroll>
            {/* A thick, elegant top border grounds the title */}
            <div className="border-t-2 border-[#2C3B2E] w-16 mb-8"></div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-[#2C3B2E] leading-tight">
              A Shared <br className="hidden md:block" /> Responsibility
            </h2>
          </RevealOnScroll>
        </div>

        {/* 
          =========================================
          RIGHT COLUMN: The Manifesto Quotes
          =========================================
        */}
        <div className="md:w-2/3 flex flex-col gap-12 pt-4">
          
          <RevealOnScroll delay={0.2}>
            {/* 
              Quote 1: The Core Philosophy
              Massive, italicized, and framed by a subtle background watermark.
            */}
            <div className="relative">
              <span className="absolute -top-12 -left-8 text-8xl md:text-[120px] font-display text-[#2C3B2E]/5 select-none z-0">
                &ldquo;
              </span>
              <motion.div
                className="relative z-10 text-2xl md:text-3xl lg:text-4xl font-display text-[#2C3B2E] italic leading-relaxed flex flex-wrap"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 1 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.02,
                    }
                  }
                }}
              >
                {"The future is not created by a few extraordinary individuals. It is created by ordinary people choosing to take extraordinary responsibility.".split(" ").map((word, wordIndex) => (
                  <span key={wordIndex} className="mr-[0.25em] flex">
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={charIndex}
                        variants={{
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 }
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </motion.div>
            </div>
          </RevealOnScroll>
          
          <RevealOnScroll delay={0.3}>
            {/* 
              Quote 2: The ISHAN Application
              Styled differently and anchored with a brand-colored left border.
            */}
            <div className="pl-6 border-l-2 border-[#D45B7E]/60">
              <p className="text-lg md:text-xl text-gray-600 font-light leading-relaxed">
                At <span className="font-medium text-[#2C3B2E]">ISHAN</span>, we believe that every individual has the capacity to become a steward of positive change.
              </p>
            </div>
          </RevealOnScroll>

        </div>
        
      </div>
    </section>
  );
}

export function SupportCTASection() {
  return (
    <section className="relative w-full py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden bg-black">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/sup.webp"
          alt="Support Background"
          fill
          className="object-cover object-center opacity-60"
          sizes="100vw"
        />
      </div>

      {/* Simple dark overlay for text readability without vignettes */}
      <div className="absolute inset-0 z-0 bg-black/40"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 w-full max-w-2xl mx-auto flex flex-col items-center">
        
        <RevealOnScroll>
          {/* Kicker */}
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#F8F7F2]/60 uppercase mb-4 block">
            Take the Next Step
          </span>
          
          {/* Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display text-[#F8F7F2] leading-tight mb-6 drop-shadow-md">
            Ready to Contribute?
          </h2>
          
          {/* Body Text */}
          <p className="text-[#F8F7F2]/80 font-light text-base md:text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Whether through time, expertise, or resources, your contribution helps build a conscious and sustainable future.
          </p>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2} className="w-full">
          {/* The Button Group Fix */}
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-5 justify-center">
            
            {/* Primary Button */}
            <Button 
              href="/contact" 
              className="w-full sm:w-auto !bg-[#D45B7E] hover:!bg-[#b84a68] text-white !px-10 !py-4 !rounded-full font-medium transition-all shadow-lg text-sm tracking-wide"
            >
              Join Us
            </Button>
            
            {/* Secondary Button Fix */}
            <Button 
              href="/partnerships" 
              className="w-full sm:w-auto border border-white/40 hover:!bg-[#F8F7F2] hover:!text-[#2C3B2E] text-white !px-10 !py-4 !rounded-full font-medium transition-all text-sm tracking-wide !bg-transparent"
            >
              Explore Partnerships
            </Button>

          </div>
        </RevealOnScroll>
      </div>
      
    </section>
  );
}
