"use client";
import React, { useState, useEffect } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionIllustration } from "../ui/SectionIllustration";
import { motion, useReducedMotion } from "framer-motion";

const STEPS = [
  {
    number: "01",
    title: "Learn",
    desc: "Gain timeless wisdom from ancient and contemporary sources.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[160px] h-[160px] md:w-[220px] md:h-[220px]">
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.5, ease: "easeOut" }} d="M 20,70 Q 50,80 50,50 Q 50,80 80,70 V 30 Q 50,40 50,10 Q 50,40 20,30 Z" />
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.5, ease: "easeOut" }} d="M 50,50 V 90" />
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.5, ease: "easeOut" }} d="M 50,10 V 0 M 35,15 L 25,5 M 65,15 L 75,5" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Practice",
    desc: "Internalise knowledge through daily discipline and conscious living.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[160px] h-[160px] md:w-[220px] md:h-[220px]">
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.5, ease: "easeOut" }} d="M 50,90 Q 20,90 10,70 C 10,50 40,50 50,80 C 60,50 90,50 90,70 Q 80,90 50,90 Z" />
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.5, ease: "easeOut" }} d="M 50,80 Q 30,70 30,40 C 30,20 50,20 50,40 C 50,20 70,20 70,40 Q 70,70 50,80 Z" />
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.5, ease: "easeOut" }} d="M 50,40 Q 40,30 50,10 Q 60,30 50,40 Z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Transform",
    desc: "Elevate consciousness through inner exploration and growth.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[160px] h-[160px] md:w-[220px] md:h-[220px]">
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.5, ease: "easeOut" }} d="M 50,20 V 80" />
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.5, ease: "easeOut" }} d="M 50,30 C 20,10 10,40 40,50 C 20,60 10,90 50,70" />
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.5, ease: "easeOut" }} d="M 50,30 C 80,10 90,40 60,50 C 80,60 90,90 50,70" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Serve",
    desc: "Contribute meaningfully to society, community, and the planet.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[160px] h-[160px] md:w-[220px] md:h-[220px]">
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.5, ease: "easeOut" }} d="M 10,40 Q 30,80 50,80 Q 70,80 90,40" />
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.5, ease: "easeOut" }} d="M 20,30 Q 30,70 50,70 Q 70,70 80,30" />
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.5, ease: "easeOut" }} d="M 30,20 Q 35,60 50,60 Q 65,60 70,20" />
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.5, ease: "easeOut" }} d="M 50,80 V 100" />
      </svg>
    )
  },
  {
    number: "05",
    title: "Inspire",
    desc: "Lead by living example and igniting transformation in others.",
    icon: (
      <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[160px] h-[160px] md:w-[220px] md:h-[220px]">
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.5, ease: "easeOut" }} d="M 50,80 Q 30,80 30,60 C 30,40 50,20 50,20 C 50,20 70,40 70,60 Q 70,80 50,80 Z" />
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.5, ease: "easeOut" }} d="M 50,70 Q 40,70 40,60 C 40,50 50,40 50,40 C 50,40 60,50 60,60 Q 60,70 50,70 Z" />
        <motion.path initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 1.5, ease: "easeOut" }} d="M 50,20 Q 40,10 50,0 Q 60,10 50,20 Z" strokeDasharray="2 2" />
      </svg>
    )
  },
];

export function Approach() {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(true); // default true for SSR safety

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section 
      className="pt-[100px] pb-24 px-6 md:px-12 overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FDF0E6 0%, #FFF8F2 40%, #FEF3E8 70%, #FAE8D4 100%)'
      }}
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-24 relative flex justify-center text-center">
          <SectionIllustration
            variant="sun-rays"
            className="absolute -top-14 w-32 h-32 text-burntOrange opacity-10 pointer-events-none"
          />
          <SectionHeading
            align="center"
            eyebrow="The ISHAN Way"
            heading="Learn · Practice · Transform · Serve · Inspire"
          />
        </div>

        <div className="relative">
          {/* Vertical Timeline Connector (Desktop Only) */}
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px]">
            <motion.div 
              className="w-full h-full bg-gradient-to-b from-transparent via-[#C9A84C] to-transparent origin-top"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>

          <div className="flex flex-col gap-[48px] md:gap-[60px] lg:gap-[80px]">
            {STEPS.map((step, index) => {
              const isEven = index % 2 !== 0; 
              
              return (
                <div key={step.number} className="relative min-h-[200px] flex flex-col md:flex-row items-center justify-between w-full">
                  
                  {/* Timeline Dot (Desktop Only) */}
                  <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[8px] h-[8px] rounded-full bg-[#C9A84C] z-10" />

                  {/* CONTENT HALF */}
                  <motion.div 
                    className={`w-full md:w-[55%] flex flex-col justify-center relative items-center ${isEven ? 'md:order-2 md:pl-16 lg:pl-24 md:items-start' : 'md:order-1 md:pr-16 lg:pr-24 md:items-end'} mb-4 md:mb-0`}
                    initial={{ x: prefersReducedMotion || isMobile ? 0 : (isEven ? 50 : -50), opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: isMobile ? 0 : index * 0.1 }}
                  >
                    <div className="w-full md:max-w-[380px] bg-[rgba(255,255,255,0.82)] border border-[rgba(201,168,76,0.25)] rounded-[16px] pt-[28px] px-[28px] pb-[24px] shadow-[0_2px_12px_rgba(42,20,8,0.07),0_6px_24px_rgba(42,20,8,0.05)] overflow-hidden relative group hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(42,20,8,0.1),0_10px_32px_rgba(42,20,8,0.08)] transition-all duration-300 ease-out">
                      
                      <h4 className="font-sans font-[600] text-[10px] uppercase tracking-[0.18em] text-[#9C3F00] mb-[10px]">
                        STEP {step.number}
                      </h4>
                      
                      <div className="w-[32px] h-[1.5px] bg-[#C9A84C] mb-[10px]" />
                      
                      <h3 className="font-forum text-[28px] font-[400] text-[#2E1A0E] leading-[1.1] mb-[12px]">
                        {step.title}
                      </h3>
                      
                      <p className="font-sans font-[300] text-[13px] text-[#5a4a3a] leading-[1.7]">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>

                  {/* EMPTY HALF (Replaced SVGs) */}
                  <div className={`hidden md:block w-[45%] ${isEven ? 'md:order-1' : 'md:order-2'}`} />

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
