"use client";

import React, { useState, useCallback } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const INITIATIVES = [
  {
    tag: "FROM PANCHA TATTVA TO SAMPURNA SATTVA",
    title: "Samanvaya",
    subtitle: "ISHAN's Flagship Transformational Retreat",
    image: "/images/sn1.webp",
    body: "ISHAN's flagship transformational retreat inspired by the timeless wisdom of the five elements, guiding participants on a journey towards integrated wellbeing and complete human development.",
    p2: "Combines yoga, meditation, breathwork, mindful movement, contemplative practices, nature connection, leadership development, experiential learning, and conscious living.",
    quote: "Samanvaya is not simply a retreat. It is a journey towards harmony within oneself, with others, and with nature. A journey from Pancha Tattva to Sampurna Sattva.",
    linkText: "Explore Samanvaya →",
    href: "/samanvaya",
    accentColor: "#8B4513",
    cardBackground: "rgba(252, 243, 235, 0.85)",
  },
  {
    tag: "PREVENTIVE WELLNESS · PROACTIVE WELLBEING",
    title: "Arogya Ashram International",
    subtitle: "AAI — Holistic Wellness Initiative",
    image: "/images/ecosystem-arogya.webp",
    body: "Dedicated to promoting holistic health through preventive wellness, lifestyle education, yoga, meditation, breathwork, mindful movement, nutrition, stress management, and integrative wellbeing practices.",
    p2: "Its programmes empower individuals to take responsibility for their own health, develop sustainable lifestyle habits, and cultivate lifelong wellbeing. By focusing on prevention rather than cure, AAI supports healthier individuals, stronger families, and more resilient communities.",
    linkText: "Explore Arogya →",
    href: "/arogya",
    accentColor: "#C9A84C",
    cardBackground: "rgba(255, 248, 235, 0.85)",
  },
  {
    tag: "THE INNER IMMERSION",
    title: "Antahakarana Avalokana",
    subtitle: "ISHAN's Signature Immersive Experience",
    image: "/images/Avalokana.webp",
    body: "A signature immersive experience designed for profound self-discovery, inner reflection, holistic wellbeing, and conscious transformation.",
    p2: "Through silence, meditation, contemplative practices, mindful movement, nature immersion, experiential learning, self-inquiry, creative expression, community living, and service, participants reconnect with themselves and discover greater clarity, resilience, and purpose.",
    quote: "Rather than offering an escape from everyday life, Antahakarana Avalokana prepares individuals to return to their families, communities, and professions with renewed awareness, responsibility, and compassion.",
    linkText: "Explore Avalokana →",
    href: "/avalokana",
    accentColor: "#2C5F4A",
    cardBackground: "rgba(240, 248, 244, 0.85)",
  },
  {
    tag: "A DIVINE SPIRITUAL WELLNESS TOWNSHIP",
    title: "Sri Vrindavan",
    subtitle: "A Vision for Conscious Community Living",
    image: "/images/ecosystem-vrindavan.webp",
    body: "ISHAN's long-term vision for creating a living model of conscious and sustainable community life — an integrated spiritual wellness township where individuals, families, educators, researchers, practitioners, entrepreneurs, and communities can live, learn, work, and grow in harmony with nature.",
    quote: "More than a physical place, Sri Vrindavan is a vision for the future — a living ecosystem where conscious living becomes a shared way of life.",
    linkText: "Explore Sri Vrindavan →",
    href: "/sri-vrindavan",
    accentColor: "#4A3728",
    cardBackground: "rgba(245, 240, 235, 0.85)",
  },
];

const WHY_ECOSYSTEM = [
  {
    title: "Specialisation",
    body: "Each initiative focuses on a specific domain — wellness, inner transformation, retreat experiences, or conscious community living — allowing for depth and excellence.",
    image: "/images/Specialisation.webp"
  },
  {
    title: "Integration",
    body: "All initiatives share the same philosophy, values, and vision — creating a coherent, unified approach to human and societal transformation.",
    image: "/images/Integration.webp"
  },
  {
    title: "Scalability",
    body: "The ecosystem model allows ISHAN to grow organically, adding new initiatives as the mission expands — without losing focus or integrity.",
    image: "/images/Scalability.webp"
  },
];

export function EcosystemSections() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % INITIATIVES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + INITIATIVES.length) % INITIATIVES.length);
  }, []);

  const activeInitiative = INITIATIVES[currentIndex];

  return (
    <div className="flex flex-col">
      {/* SECTION 1: ISHAN PARENT INSTITUTION */}
      <section className="relative pt-[120px] pb-24 px-5 md:px-12 md:pt-32 bg-[#FFFFFF] overflow-hidden">
        {/* Decorative Lotus */}
        <div className="absolute -right-20 md:right-0 top-12 md:top-24 opacity-[0.04] md:opacity-[0.08] pointer-events-none w-[300px] h-[300px] md:w-[450px] md:h-[450px] z-0">
          <Image
            src="/lotus.svg"
            alt="Decorative Lotus"
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain"
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto flex flex-col items-start w-full">
          <div className="mb-12 md:mb-16 w-full text-left">
            <SectionHeading
              eyebrow="The Foundation"
              heading="ISHAN — The Parent Institution"
            />
          </div>
          <RevealOnScroll className="w-full">
            <div className="relative p-8 md:p-16 rounded-[24px] bg-[#F5F1E9]/80 backdrop-blur-xl border border-[#D4AF37]/30 shadow-xl hover:-translate-y-2 transition-all duration-700 overflow-hidden group w-full">
              
              <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-start">
                <div className="md:pr-8">
                  <p className="font-display font-light text-heading leading-[1.45] md:leading-[1.8] text-[22px] md:text-[28px] tracking-tight">
                    The foundation of the entire ecosystem. Provides vision, governance, philosophy, leadership, institutional systems, strategic direction, partnerships, and long-term stewardship.
                  </p>
                </div>

                <div className="relative">
                  {/* Glowing vertical accent line */}
                  <div className="absolute left-0 top-2 bottom-2 w-[3px] bg-[#2C5F4A] rounded-full shadow-[0_0_15px_rgba(44,95,74,0.5)] group-hover:shadow-[0_0_25px_rgba(44,95,74,0.8)] transition-all duration-700 ease-out" />
                  
                  <div className="pl-8 md:pl-10">
                    <h4 className="font-sans text-[11px] uppercase tracking-[0.25em] text-[#2C5F4A] mb-3 md:mb-4 font-medium">Mission</h4>
                    <p className="font-sans font-light text-heading/80 leading-[1.6] md:leading-relaxed italic text-base md:text-lg">
                      "To advance wisdom, wellness, humanity, nature, ethical leadership, education, sustainability, and conscious community development through integrated programmes, research, collaboration, and service."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 2: THE INITIATIVES CAROUSEL */}
      <section 
        id="initiatives-carousel"
        className="relative w-full min-h-screen overflow-hidden flex flex-col bg-[#1A1A1A] outline-none"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'ArrowRight') handleNext();
          if (e.key === 'ArrowLeft') handlePrev();
        }}
        aria-label="Initiatives Carousel"
        aria-roledescription="carousel"
      >
        {/* Background Images Crossfade */}
        {INITIATIVES.map((initiative, idx) => (
          <div
            key={initiative.title}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: currentIndex === idx ? 1 : 0, zIndex: currentIndex === idx ? 10 : 0 }}
            aria-hidden={currentIndex !== idx}
          >
            <Image
              src={initiative.image}
              alt={initiative.title}
              fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center"
              priority={idx === currentIndex || idx === (currentIndex + 1) % INITIATIVES.length}
            />
            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent md:hidden" />
          </div>
        ))}

        <div className="relative z-20 flex-1 flex flex-col md:flex-row w-full h-full max-w-[1600px] mx-auto pt-32 pb-40 md:py-24 px-6 md:px-12">
          
          {/* Left Content Column */}
          <div className="flex flex-col justify-center w-full md:w-[45%] lg:w-[40%] text-white pt-8 md:pt-0" aria-live="polite" aria-atomic="true">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col"
              >
                <div className="inline-block border border-white/30 rounded-full px-4 py-1.5 mb-6 self-start">
                  <span className="font-sans text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/90">
                    {activeInitiative.tag}
                  </span>
                </div>
                
                <h2 className="font-display font-light text-5xl md:text-6xl lg:text-7xl mb-4 text-white drop-shadow-md">
                  {activeInitiative.title}
                </h2>
                
                <p className="font-sans italic text-lg md:text-xl text-white/70 mb-6">
                  {activeInitiative.subtitle}
                </p>
                
                <p className="font-sans font-light text-white/80 leading-relaxed mb-8 line-clamp-none md:line-clamp-3 max-w-lg text-sm md:text-base">
                  {activeInitiative.body}
                </p>
                
                <div className="self-start mt-6 flex flex-wrap items-center gap-6">
                  <Button 
                    href={activeInitiative.href}
                    className="!bg-white/80 backdrop-blur-lg !text-[#2C5F4A] !font-display !font-medium uppercase tracking-[0.1em] !shadow-[0_15px_30px_rgba(0,0,0,0.3)] hover:!shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_20px_rgba(255,255,255,0.4)] border border-white/60 hover:border-white transition-all duration-500 relative group overflow-hidden !rounded-full px-8 py-3 hover:-translate-y-2"
                  >
                    <span className="relative z-10 transition-all duration-300">{activeInitiative.linkText.toUpperCase()}</span>
                  </Button>
                  
                  {activeInitiative.title === "Samanvaya" && (
                    <div 
                      className="inline-flex items-center gap-[8px] rounded-full border border-white/20 bg-black/40 backdrop-blur-md px-[16px] py-[10px] shadow-[0_10px_20px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-transform duration-500"
                    >
                      <div className="relative flex items-center justify-center w-[8px] h-[8px]">
                        {!shouldReduceMotion && (
                          <span 
                            className="absolute inset-0 rounded-full bg-red-500 opacity-60 animate-ping shadow-[0_0_10px_rgba(239,68,68,0.8)]"
                            style={{ animationDuration: '2s' }}
                          />
                        )}
                        <motion.div 
                          className="relative w-[8px] h-[8px] rounded-full bg-[#ff3333] shadow-[0_0_8px_rgba(255,51,51,0.9)]"
                          animate={shouldReduceMotion ? {} : { 
                            scale: [1, 1.2, 1],
                            opacity: [1, 0.7, 1] 
                          }}
                          transition={shouldReduceMotion ? {} : { 
                            duration: 2, 
                            repeat: Infinity, 
                            ease: "easeInOut" 
                          }}
                        />
                      </div>
                      <span className="text-white/90 text-[10.5px] uppercase font-sans tracking-[0.15em] font-medium leading-none mt-[1px]">
                        IN PROGRESS
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Thumbnail Carousel */}
          <div className="mt-20 md:mt-0 flex-1 flex items-end md:items-center justify-start md:justify-end md:pl-12 overflow-visible">
             <div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory pb-4 md:pb-0 w-full md:w-auto scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
               {INITIATIVES.map((initiative, idx) => {
                 if (idx === currentIndex) return null; // Skip active initiative
                 return (
                   <button
                     key={initiative.title}
                     onClick={() => setCurrentIndex(idx)}
                     className="snap-start shrink-0 relative w-[220px] md:w-[240px] lg:w-[280px] aspect-[3/4] rounded-[20px] overflow-hidden group text-left outline-none focus-visible:ring-4 focus-visible:ring-[var(--color-primary)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] shadow-2xl"
                     aria-label={`View ${initiative.title}`}
                   >
                     <Image
                       src={initiative.image}
                       alt=""
                       fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                       className="object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/50 to-transparent group-hover:from-black/100 transition-colors duration-500" />
                     
                      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 transition-transform duration-500 group-hover:-translate-y-2">
                        <span className="block font-sans text-[11px] md:text-[9px] uppercase tracking-wider text-white/70 mb-2 drop-shadow-md">
                          {initiative.tag.split('·')[0].substring(0, 25) + (initiative.tag.length > 25 ? '...' : '')}
                        </span>
                        <h4 className="font-display text-white text-xl md:text-2xl leading-tight drop-shadow-lg">
                          {initiative.title}
                        </h4>
                      </div>
                   </button>
                 );
               })}
             </div>
          </div>
        </div>

        {/* Bottom Controls */}
        <div className="absolute bottom-0 left-0 right-0 z-30 p-6 md:p-12 md:pb-16 pointer-events-none">
          <div className="max-w-[1600px] mx-auto flex items-center gap-6 md:gap-8 pointer-events-auto">
            
            <div className="flex gap-3 md:gap-2">
              <button 
                onClick={handlePrev}
                className="w-14 h-14 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/80 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] outline-none backdrop-blur-md hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:-translate-y-1 group"
                aria-label="Previous initiative"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-5 md:h-5 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button 
                onClick={handleNext}
                className="w-14 h-14 md:w-12 md:h-12 rounded-full border border-white/30 flex items-center justify-center text-white hover:bg-white/20 hover:border-white/80 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] outline-none backdrop-blur-md hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] hover:-translate-y-1 group"
                aria-label="Next initiative"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 md:w-5 md:h-5 group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>

            <div className="flex-1 h-[2px] bg-white/20 rounded-full overflow-visible max-w-xs relative hidden md:block">
              <motion.div 
                className="absolute top-0 left-0 bottom-0 bg-[#2C5F4A] shadow-[0_0_15px_rgba(44,95,74,1)] rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentIndex + 1) / INITIATIVES.length) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            <div className="font-display text-white text-xl md:text-2xl tracking-widest ml-auto md:ml-0">
              {String(currentIndex + 1).padStart(2, '0')} <span className="text-white/40 text-sm">/ {String(INITIATIVES.length).padStart(2, '0')}</span>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 3: WHY AN ECOSYSTEM */}
      <section className="py-24 px-6 md:px-12 bg-[#FFFFFF] border-t border-divider">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <SectionHeading
              align="center"
              heading="Why an Ecosystem?"
            />
          </div>
          <div className="flex flex-col gap-y-20 md:gap-y-32">
            {WHY_ECOSYSTEM.map((item, i) => {
              const isEven = i % 2 !== 0; // Row 2 is index 1 (even boolean true)
              return (
                <RevealOnScroll key={item.title} delay={0.1} className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
                  {/* Image Container */}
                  <div className={`w-full md:w-5/12 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="relative aspect-[4/3] rounded-[12px] overflow-hidden bg-bark/5">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className="object-cover"
                      />
                      {/* Top Right Corner Cut Overlay */}
                      <div 
                        className="absolute top-0 right-0 w-[50px] h-[50px] bg-[#FFFFFF] z-10" 
                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }} 
                      />
                    </div>
                  </div>
                  
                  {/* Text Container */}
                  <div className={`w-full md:w-[45%] flex flex-col ${isEven ? 'md:order-1' : 'md:order-2'}`}>
                    <span className="font-display italic text-secondary tracking-[0.2em] text-lg md:text-xl mb-4">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h4 className="font-display font-light text-3xl md:text-4xl text-heading mb-6">{item.title}</h4>
                    <p className="font-sans font-light text-base md:text-lg text-heading/80 leading-relaxed">
                      {item.body}
                    </p>
                  </div>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: CLOSING CTA */}
      <section className="relative py-32 px-6 flex flex-col items-center justify-center min-h-[100svh] md:min-h-0 border-t border-divider bg-bark">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/ecocta.webp"
            alt="Contact Background"
            fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
          {/* Dark Gradient Overlay */}
          <div 
            className="absolute inset-0" 
            style={{
              background: "linear-gradient(to bottom, rgba(46, 26, 14, 0.75) 0%, rgba(46, 26, 14, 0.4) 50%, rgba(46, 26, 14, 0.75) 100%)"
            }}
          />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center [&_h2]:drop-shadow-[0_4px_15px_rgba(255,255,255,0.4)] [&_h2]:text-white [&_p]:drop-shadow-md [&_p]:text-white/90">
          <SectionHeading
            theme="dark"
            eyebrow="Take the Next Step"
            heading="Join the Ecosystem"
            description="Whether as a participant, practitioner, partner, volunteer, or supporter — there is a place for you within the ISHAN ecosystem."
            align="center"
          />
          <RevealOnScroll delay={0.2} className="mt-16 md:mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto items-stretch sm:items-center justify-center">
            <Button 
              href="/contact" 
              variant="primary"
              className="w-full flex justify-center text-center !rounded-full px-8 py-3 shadow-[0_10px_20px_rgba(222,86,128,0.3)] hover:shadow-[0_15px_30px_rgba(222,86,128,0.5)] hover:-translate-y-1 transition-all duration-300"
            >
              Connect With Us
            </Button>
            <Button 
              href="/support" 
              className="w-full flex justify-center text-center !bg-white/10 backdrop-blur-md !text-white border border-white/40 hover:!bg-white/20 hover:border-white shadow-[0_0_15px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-all duration-300 !rounded-full px-8 py-3 hover:-translate-y-1"
            >
              SEE ALL OPPORTUNITIES
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}

