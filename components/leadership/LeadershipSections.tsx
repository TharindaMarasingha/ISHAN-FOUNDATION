"use client";

import React, { useState, useEffect, useRef } from "react";
import { Scroll01 } from "@/components/ui/scroll-01";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { motion, AnimatePresence, useInView, useReducedMotion, Variants } from "framer-motion";
import Image from "next/image";
import { Leaf, HeartHandshake, Users, Handshake, TreeDeciduous } from "lucide-react";

export function PhilosophySection() {
  const points = [
    { title: "Humility over ego.", icon: Leaf },
    { title: "Service over status.", icon: HeartHandshake },
    { title: "Responsibility over recognition.", icon: Users },
    { title: "Collaboration over competition.", icon: Handshake },
    { title: "Legacy over short-term success.", icon: TreeDeciduous }
  ];

  // --- Sequential Cinematic Reveal Variants ---
  const eyebrowVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut", delay: 0.1 } },
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.21, 0.47, 0.32, 0.98], delay: 0.3 } },
  };

  const quoteVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut", delay: 0.9 } },
  };

  const getIconVariants = (i: number): Variants => ({
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut", delay: 1.1 + (i * 0.15) } }
  });
  
  const getTextVariants = (i: number): Variants => ({
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 1.1 + (i * 0.15) + 0.15 } }
  });

  const getLineVariants = (i: number): Variants => ({
    hidden: { opacity: 0, width: "0%" },
    visible: { opacity: 0.7, width: "100%", transition: { duration: 0.8, ease: "easeInOut", delay: 1.1 + (i * 0.15) + 0.3 } }
  });

  return (
    <section className="relative w-full py-20 md:py-24 lg:py-32 overflow-hidden flex items-center justify-center min-h-[85vh] bg-white">
      {/* Decorative Flower */}
      <motion.img 
        src="/flower.svg"
        alt=""
        initial={{ opacity: 0, x: -30, y: -30 }}
        whileInView={{ opacity: 0.12, x: 0, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute left-[-20px] top-[-20px] w-[200px] md:w-[300px] h-auto pointer-events-none z-0 mix-blend-multiply origin-top-left"
      />

      {/* Background Texture & Shadows */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.03] mix-blend-multiply" 
           style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')" }} 
      />
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-white rounded-full blur-[120px] opacity-50 pointer-events-none z-0" />
      <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-surface rounded-full blur-[120px] opacity-50 pointer-events-none z-0" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 w-full relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-20 items-stretch">
          
          {/* Left Column - Philosophy */}
          <div className="w-full md:w-[45%] flex flex-col justify-center">
            
            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={eyebrowVariants} 
              className="mb-4"
            >
              <span className="text-[11px] font-sans uppercase tracking-[0.25em] text-heading/80 font-semibold">Our Philosophy</span>
            </motion.div>
            
            <motion.h2 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={headingVariants} 
              className="font-display text-[40px] md:text-[48px] lg:text-[56px] text-heading leading-[1.1] mb-6 tracking-tight"
            >
              A Philosophy of <br className="hidden md:block"/> Stewardship
            </motion.h2>

            <div className="flex items-center w-full max-w-[200px] mb-8">
              <motion.div 
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, ease: "easeInOut", delay: 0.7 }}
                className="flex-1 h-[1px] bg-divider origin-right"
              ></motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.4, delay: 1.3 }}
                className="mx-4 w-1.5 h-1.5 rotate-45 bg-secondary shrink-0"
              ></motion.div>
              <motion.div 
                initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.8, ease: "easeInOut", delay: 0.7 }}
                className="flex-1 h-[1px] bg-divider origin-left"
              ></motion.div>
            </div>

            <motion.div 
              initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={quoteVariants} 
              className="relative"
            >
              <span className="absolute -top-10 -left-8 font-display text-[80px] md:text-[100px] text-secondary opacity-25 leading-none select-none">“</span>
              <div className="font-display italic text-[22px] md:text-[24px] lg:text-[26px] text-heading leading-[1.6] relative z-10 tracking-wide">
                <p className="mb-6">
                  A steward does not ask,<br/>
                  <span className="text-heading/80">What can I gain?</span>
                </p>
                <p>
                  A steward asks,<br/>
                  What can I <span className="text-secondary">preserve</span>, <span className="text-secondary">protect</span>,<br/>
                  <span className="text-secondary">develop</span>, and <span className="text-secondary">pass on</span>?
                </p>
              </div>
            </motion.div>
          </div>

          {/* Vertical Divider for Desktop */}
          <div className="hidden md:flex w-[1px] bg-gradient-to-b from-transparent via-divider to-transparent opacity-60 flex-col items-center justify-center">
            <div className="w-1.5 h-1.5 rotate-45 bg-secondary opacity-70"></div>
          </div>

          {/* Right Column - Principles */}
          <div className="w-full md:w-[50%] flex flex-col justify-center">
            <div className="flex flex-col gap-6 lg:gap-8">
              {points.map((point, index) => {
                const Icon = point.icon;
                return (
                  <div key={index} className="flex items-start gap-5 lg:gap-6 group">
                    {/* Icon */}
                    <motion.div 
                      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={getIconVariants(index)}
                      className="w-[44px] h-[44px] shrink-0 rounded-full border border-divider flex items-center justify-center text-secondary mt-1 transition-colors duration-500 group-hover:bg-secondary/5 group-hover:border-primary/50"
                    >
                      <Icon strokeWidth={1.5} size={20} />
                    </motion.div>

                    {/* Text block */}
                    <motion.div 
                      initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={getTextVariants(index)}
                      className="flex flex-col flex-1"
                    >
                      <span className="font-sans text-[11px] font-semibold tracking-[0.2em] text-secondary opacity-80 mb-1">
                        0{index + 1}
                      </span>
                      <span className="font-sans text-[18px] lg:text-[20px] text-heading font-light tracking-wide mb-3">
                        {point.title}
                      </span>
                      
                      {/* Thin Divider under text */}
                      <motion.div 
                        initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={getLineVariants(index)}
                        className="h-[1px] bg-divider relative flex items-center transition-opacity duration-500 group-hover:opacity-100"
                      >
                        <div className="absolute right-0 w-1.5 h-1.5 rotate-45 bg-secondary opacity-60 transition-opacity duration-500 group-hover:opacity-100"></div>
                      </motion.div>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

const TEAM = [
  {
    archetype: "The Grandmaster (The Guardian)",
    role: "Purpose & Institutional Integrity",
    name: "Shreeji Sevakanand 'Buddhu'",
    initials: "SJ",
    description: "Vision · Purpose · Wisdom · Ethics · Institutional Integrity · Research & Development · Leadership Philosophy · Long-term Legacy · Quality & Standards",
    nationality: "India",
    isAnchor: true,
    image: "/images/team-sevakanand.jpg",
    alt: "Shreeji Sevakanand 'Buddhu' — India, Lion Capital of Ashoka emblem"
  },
  {
    archetype: "Master Mentor",
    role: "Learning & Education",
    name: "Dr. Hon. S. Kobayashi (Yogeshwari)",
    initials: "SK",
    description: "Education · Mentorship · Leadership Development · Research · Curriculum Design · Knowledge Systems · Character Development · Institutional Learning",
    nationality: "Japan",
    isAnchor: false,
    image: "/images/imb.webp"
  },
  {
    archetype: "Master Coach",
    role: "Transformation & Wellbeing",
    name: "Master Indrani Sharma (Adiyogini)",
    initials: "IS",
    description: "Coaching · Training · Programme Delivery · Retreat Design · Facilitation · Experiential Learning · Holistic Wellbeing · Personal Transformation",
    nationality: "Nepal",
    isAnchor: false,
    image: "/images/imc.webp"
  },
  {
    archetype: "Business Alchemist",
    role: "Institutional Excellence",
    name: "Ranga Soysa",
    initials: "RS",
    description: "Strategic Planning · Institutional Development · Governance · Operations · Systems Management · Financial Planning · Sustainability · International Operations",
    nationality: "Sri Lanka",
    isAnchor: false,
    image: "/images/imd.webp"
  },
  {
    archetype: "Growth Catalyst",
    role: "Growth & Partnerships",
    name: "Mansoor Ali",
    initials: "MA",
    description: "Business Development · Strategic Partnerships · International Collaboration · Community Development · Brand Growth · Resource Mobilisation · Outreach",
    nationality: "India",
    isAnchor: false,
    image: "/images/ime.webp"
  }
];

export function CircleOfStewardsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMember = TEAM[activeIndex];

  return (
    <section 
      className="pt-[100px] pb-24 px-6 md:px-12 relative overflow-hidden"
      style={{
        background: '#FFFFFF'
      }}
    >
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="mb-20 max-w-4xl mx-auto text-center relative flex justify-center">
          <SectionHeading
            align="center"
            heading="The Circle of Stewards"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-16 items-start">
          
          {/* LEFT SIDE — FEATURED SPOTLIGHT CARD (55%) */}
          <div className="w-full md:w-[55%] relative min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="overflow-hidden relative bg-[rgba(255,255,255,0.75)] rounded-[24px] px-8 py-10 md:px-[40px] md:py-[48px] min-h-[480px] flex flex-col"
              >
                {/* Background image for spotlight */}
                {activeMember.image && (
                  <>
                    <Image
                      src={activeMember.image}
                      alt={activeMember.alt || activeMember.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center z-0"
                    />
                    {/* Dark gradient overlay so white text is readable at the bottom */}
                    <div 
                      className="absolute inset-0 z-10"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 45%, rgba(51,71,44,0.8) 75%, rgba(51,71,44,1) 100%)'
                      }}
                    />
                  </>
                )}
                
                <div className="relative z-20 flex flex-col items-start justify-end flex-grow">
                  
                  {/* Nationality Pill */}
                  <div className="inline-flex mt-auto mb-[20px] px-[16px] py-[6px] rounded-full bg-[rgba(51,71,44,0.6)] backdrop-blur-sm border border-secondary/50 font-sans text-[11px] uppercase tracking-widest text-surface">
                    {activeMember.nationality}
                  </div>

                  {/* Archetype */}
                  <h4 
                    className="font-forum italic text-[16px] text-surface mb-[8px] leading-[1.3]"
                    style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
                  >
                    {activeMember.archetype}
                  </h4>

                  {/* Role */}
                  <p 
                    className="font-sans text-[11px] uppercase tracking-[0.15em] text-white/80 mb-[16px] leading-[1.5]"
                    style={{ textShadow: '0 1px 3px rgba(0,0,0,0.5)' }}
                  >
                    Stewardship: {activeMember.role}
                  </p>

                  {/* Name */}
                  <h3 
                    className="font-forum text-[36px] font-[400] text-white leading-[1.1] mb-[16px]"
                  >
                    {activeMember.name}
                  </h3>

                  {/* Gold line */}
                  <div className="w-[40px] h-[1.5px] bg-secondary mb-[16px]" />

                  {/* Description */}
                  <p className="font-sans font-[300] text-[14px] text-white/90 leading-[1.6]">
                    <span className="font-medium text-white">Key Areas:</span> {activeMember.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE — MEMBER SELECTOR LIST (45%) */}
          <div className="w-full md:w-[45%] flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x">
            {TEAM.map((member, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`group flex items-center gap-4 w-[260px] sm:w-[280px] md:w-full flex-shrink-0 snap-start text-left px-5 py-4 rounded-[12px] transition-all duration-300 ease-out border ${
                    isActive
                      ? "bg-white border-[#9FBB90] shadow-[0_4px_20px_rgba(51,71,44,0.08)] scale-[1.01]"
                      : "bg-transparent border-[#9FBB90]/40 hover:border-[#9FBB90]/80 hover:bg-white/40"
                  }`}
                >
                  {/* Small Avatar */}
                  <div 
                    className={`w-[48px] h-[48px] flex-shrink-0 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive 
                        ? "bg-[#DCE9D7] border border-[#33472C]/20 shadow-sm" 
                        : "bg-[#F5F1E9] border border-[#9FBB90]/30 group-hover:border-[#9FBB90]/60"
                    }`}
                  >
                    <span className={`font-forum text-[15px] transition-colors duration-300 ${isActive ? "text-[#33472C]" : "text-[#33472C]/70"}`}>
                      {member.initials}
                    </span>
                  </div>

                  {/* Content Column */}
                  <div className="flex-grow flex flex-col justify-center">
                    <span className={`font-sans font-[500] text-[15px] transition-colors duration-300 leading-tight mb-1 ${isActive ? "text-[#33472C]" : "text-[#33472C]/80"}`}>
                      {member.name}
                    </span>
                    <span 
                      className="font-sans font-[300] text-[12.5px] text-[#33472C]/70 leading-snug"
                      style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                    >
                      {member.role}
                    </span>
                  </div>

                  {/* Right side: Nationality */}
                  <div className="flex-shrink-0 hidden sm:flex items-center gap-3">
                    <div className={`px-3 py-1.5 rounded-[8px] border text-[9.5px] font-bold uppercase tracking-widest transition-all duration-300 ${
                      isActive 
                        ? "bg-[#F5F1E9] border-[#9FBB90]/50 text-[#33472C]" 
                        : "bg-transparent border-[#9FBB90]/30 text-[#33472C]/60"
                    }`}>
                      {member.nationality}
                    </div>
                    {/* Active Indicator Dot */}
                    <div className={`w-1.5 h-1.5 rounded-full transition-all duration-300 hidden md:block ${isActive ? "bg-[#9FBB90] opacity-100 scale-100" : "bg-transparent opacity-0 scale-50"}`} />
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export function GoldenCircleLeadershipSection() {
  const values = {
    items: [
      {
        title: "WHY",
        description: "The Grandmaster — Protects the purpose. Preserves the wisdom. Guards the integrity.",
        media: "/images/lwhy.webp",
      },
      {
        title: "HOW",
        description: "The Masters — Develop people. Deliver transformation. Create future leaders.",
        media: "/images/lhow.webp",
      },
      {
        title: "WHAT",
        description: "The Leaders — Build institutions. Expand partnerships. Create sustainable impact.",
        media: "/images/lwhat.webp",
      },
    ],
  };

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading heading="The Golden Circle of Leadership" align="center" />
      <div className="mt-16">
        <Scroll01 items={values.items} />
      </div>
    </section>
  );
}

function TypewriterQuote({ text, className }: { text: string; className: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayedText(text);
      return;
    }
    if (isInView && !isTyping && displayedText.length === 0) {
      setIsTyping(true);
      let i = 0;
      const intervalId = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(intervalId);
          setIsTyping(false);
        }
      }, 35);
      return () => clearInterval(intervalId);
    }
  }, [isInView, text, shouldReduceMotion]);

  return (
    <p ref={ref} className={className}>
      {displayedText}
      <motion.span 
        animate={{ opacity: [1, 0] }} 
        transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
        className={isTyping ? "inline-block" : "hidden"}
      >
        |
      </motion.span>
    </p>
  );
}

export function SharedCommitmentSection() {
  const tags = [
    "Preserve Wisdom", "Develop People", "Build Institutions", 
    "Strengthen Communities", "Protect Nature", "Inspire Conscious Leadership", 
    "Serve Humanity", "Create a Legacy for Future Generations"
  ];

  return (
    <section className="py-32 px-6 text-center overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/leadership-commitment-bg.webp"
          alt="Leadership Commitment Background"
          fill
          className="object-cover"
          unoptimized
        />
        {/* Soft dark overlay for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/60 z-10" />
      </div>
      <div className="max-w-5xl mx-auto relative z-20">
        <h2 className="font-display font-light text-4xl md:text-5xl text-white mb-16 drop-shadow-xl translate-z-10 relative">Our Shared Commitment</h2>
        
        <RevealOnScroll delay={0.2}>
          <div className="mt-12 flex flex-wrap justify-center gap-4 mb-20">
            {tags.map((t, i) => (
               <div key={i} className="px-6 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/80 shadow-[0_8px_32px_rgba(0,0,0,0.25)] text-white font-sans text-sm uppercase tracking-widest hover:bg-white/20 transition-all duration-300">
                 {t}
               </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <div className="pt-16 min-h-[140px] relative translate-z-10">
            <TypewriterQuote 
              text='"This is the spirit of stewardship. This is the leadership philosophy of ISHAN."'
              className="font-display italic text-3xl md:text-4xl text-white leading-relaxed max-w-3xl mx-auto drop-shadow-2xl"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.6} className="mt-20 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full sm:w-auto relative translate-z-10">
          <Button href="/framework" variant="primary">Explore Our Framework</Button>
          <a href="/contact" className="inline-flex items-center justify-center h-12 px-8 rounded-full border-2 border-white text-white font-sans uppercase tracking-[0.15em] text-[11px] hover:bg-white hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.3)]">Connect With Us</a>
        </RevealOnScroll>
      </div>
    </section>
  );
}
