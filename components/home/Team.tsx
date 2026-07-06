"use client";

import React, { useState } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { motion, AnimatePresence } from "framer-motion";

import Image from "next/image";

const TEAM = [
  {
    archetype: "The Guru",
    role: "Spiritual Guide & Anchor",
    name: "Sevakanand Ji 'Buddhu'",
    initials: "SJ",
    description: "Ethics, traditional wisdom & consciousness direction for all programmes.",
    nationality: "India",
    isAnchor: true,
    image: "/images/ima.jpg"
  },
  {
    archetype: "Yogeshwari",
    role: "Founder & Visionary — AAI",
    name: "Dr. Hon. S. Kobayashi",
    initials: "SK",
    description: "Japanese wellness traditions, mindful movement & sound healing.",
    nationality: "Japan",
    isAnchor: false,
    image: "/images/imb.jpg"
  },
  {
    archetype: "Adiyogini",
    role: "Core Member — AAI",
    name: "Master Indrani Sharma",
    initials: "IS",
    description: "Himalayan yogic sciences, meditation & energy practices.",
    nationality: "Nepal",
    isAnchor: false,
    image: "/images/imc.jpg"
  },
  {
    archetype: "The Strategist Sage",
    role: "Country Director — Sri Lanka",
    name: "Ranga Soysa",
    initials: "RS",
    description: "Strategic planning, institutional development & governance.",
    nationality: "Sri Lanka",
    isAnchor: false,
    image: "/images/imd.jpg"
  },
  {
    archetype: "The Unity Alchemist",
    role: "Programme Coordination",
    name: "Mansoor Ali",
    initials: "MA",
    description: "Strategic partnerships, community building & international collaboration.",
    nationality: "India",
    isAnchor: false,
    image: "/images/ime.jpg"
  }
];

export function Team() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMember = TEAM[activeIndex];

  return (
    <section 
      className="pt-[100px] pb-24 px-6 md:px-12 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FFF8F2 0%, #FDF0E6 40%, #FFF8F2 70%, #FAE8D4 100%)'
      }}
    >
      <motion.img 
        src="/ff.svg"
        alt=""
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.08, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-[-50px] top-[2%] w-[280px] h-auto pointer-events-none z-0"
      />
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="mb-20 max-w-4xl mx-auto text-center relative flex justify-center">
          <SectionHeading
            align="center"
            eyebrow="Leadership"
            heading="The founding team"
            description="Guided by a visionary core of internationally credentialed practitioners, architects, and humanitarian leaders — united across nations in a shared purpose."
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
                className={`overflow-hidden relative bg-[rgba(255,255,255,0.75)] border border-[rgba(201,168,76,0.3)] rounded-[24px] px-8 py-10 md:px-[40px] md:py-[48px] min-h-[480px] flex flex-col ${activeMember.isAnchor ? 'border-t-4 border-t-[#C9A84C]' : ''}`}
              >
                {/* Background image for spotlight */}
                {activeMember.image && (
                  <>
                    <Image
                      src={activeMember.image}
                      alt={activeMember.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center z-0"
                    />
                    {/* Dark gradient overlay so white text is readable at the bottom */}
                    <div 
                      className="absolute inset-0 z-10"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.15) 40%, rgba(20,8,2,0.82) 70%, rgba(20,8,2,0.95) 100%)'
                      }}
                    />
                  </>
                )}
                
                <div className="relative z-20 flex flex-col items-start justify-end flex-grow">
                  
                  {/* Nationality Pill */}
                  <div className="inline-flex mt-auto mb-[20px] px-[16px] py-[6px] rounded-full bg-[rgba(201,168,76,0.25)] border border-[rgba(201,168,76,0.5)] font-sans text-[11px] uppercase tracking-widest text-[#F5D98A]">
                    {activeMember.nationality}
                  </div>

                  {/* Archetype */}
                  <h4 className="font-forum italic text-[16px] text-[#C9A84C] mb-[4px]">
                    {activeMember.archetype}
                  </h4>

                  {/* Role */}
                  <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-[rgba(255,255,255,0.6)] mb-[12px]">
                    {activeMember.role}
                  </p>

                  {/* Name */}
                  <h3 className="font-forum text-[36px] font-[400] text-white leading-[1.1] mb-[16px]">
                    {activeMember.name}
                  </h3>

                  {/* Gold line */}
                  <div className="w-[40px] h-[1.5px] bg-[#C9A84C] mb-[16px]" />

                  {/* Description */}
                  <p className="font-sans font-[300] text-[15px] text-[rgba(255,255,255,0.7)] leading-[1.8]">
                    {activeMember.description}
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
                  className={`flex items-center gap-3 w-[260px] sm:w-[280px] md:w-full flex-shrink-0 snap-start text-left px-[20px] py-[16px] rounded-[12px] transition-all duration-250 ease-in-out ${
                    isActive
                      ? "bg-[rgba(255,255,255,0.7)] border border-[rgba(201,168,76,0.35)] shadow-[0_2px_12px_rgba(42,20,8,0.08)]"
                      : "bg-transparent border border-[rgba(201,168,76,0.12)] hover:border-[rgba(201,168,76,0.25)]"
                  }`}
                >
                  {/* Small Avatar */}
                  <div 
                    className={`w-[44px] h-[44px] flex-shrink-0 rounded-full flex items-center justify-center transition-colors duration-250 ${
                      isActive ? "border-2 border-[rgba(201,168,76,0.4)]" : "border-2 border-[rgba(201,168,76,0.15)]"
                    }`}
                    style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.3), rgba(156,63,0,0.2))' }}
                  >
                    <span className="font-forum text-[14px] text-[#2E1A0E]">{member.initials}</span>
                  </div>

                  {/* Content Column */}
                  <div className="flex-grow flex flex-col">
                    <span className="font-sans font-[500] text-[14px] text-[#2E1A0E]">{member.name}</span>
                    <span className="font-sans font-[300] text-[12px] text-[#8a7a6a] line-clamp-1 md:line-clamp-none">{member.role}</span>
                  </div>

                  {/* Right side: Nationality */}
                  <div className="flex-shrink-0 hidden sm:block">
                    <div className={`px-2.5 py-1 rounded-[6px] border text-[10px] font-medium uppercase tracking-wider transition-colors duration-250 ${
                      isActive 
                        ? "bg-[rgba(201,168,76,0.2)] border-[rgba(201,168,76,0.5)] text-[#9C3F00]" 
                        : "bg-[rgba(201,168,76,0.08)] border-[rgba(201,168,76,0.25)] text-[#8a7a6a]"
                    }`}>
                      {member.nationality}
                    </div>
                  </div>

                  {/* Active Indicator Chevron/Dot */}
                  {isActive && (
                    <div className="w-[6px] h-[6px] rounded-full bg-[#C9A84C] ml-2 flex-shrink-0 hidden md:block" />
                  )}
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
