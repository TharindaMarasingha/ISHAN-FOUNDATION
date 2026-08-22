"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { NumberedCard } from "../ui/NumberedCard";
import Image from "next/image";

export function ThreeErasSection() {
  const eras = [
    {
      numeral: 'I',
      period: '2026–2036',
      title: 'Foundation',
      subtitle: 'Building Strong Foundations',
      items: [
        "Establish strong governance and institutional systems",
        "Build dedicated leadership and stewardship team",
        "Develop high-quality educational and wellness programmes",
        "Launch transformative retreats and immersive experiences",
        "Create sustainable operational and financial models",
      ]
    },
    {
      numeral: 'II',
      period: '2036–2046',
      title: 'Expansion',
      subtitle: 'Scaling With Integrity',
      items: [
        "Establish regional centres and international chapters",
        "Expand leadership development and educational programmes",
        "Strengthen research and innovation",
        "Build global collaborations",
        "Develop multilingual learning resources",
      ]
    },
    {
      numeral: 'III',
      period: '2046–2056',
      title: 'Legacy',
      subtitle: 'Inspiring Future Generations',
      items: [
        "Establish centres of excellence",
        "Develop flagship campuses and learning communities",
        "Expand global educational platforms",
        "Support international research and knowledge exchange",
        "Advise institutions and policymakers",
      ]
    }
  ];

  return (
    <section className="py-32 px-6 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-[#2C3B2E] drop-shadow-sm">
            A Vision in Three Eras
          </h2>
        </div>

        {/* 
          1. The Grid & The Continuous Axis:
          The 'relative' container allows us to draw a single 1px line across all three columns.
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-16 lg:gap-24 relative md:pt-4 border-l border-[#2C3B2E]/15 md:border-l-0 ml-2 md:ml-0">
          
          {/* The Horizontal Desktop Timeline Track */}
          <div className="hidden md:block absolute top-0 left-0 w-full h-px bg-[#2C3B2E]/10"></div>

          {eras.map((era, index) => (
            <div key={index} className="relative md:pt-12 mb-20 md:mb-0 last:mb-0 pl-8 md:pl-0">
              
              {/* 
                2. The Timeline Nodes:
                Desktop node anchors to the horizontal track.
              */}
              <div className="hidden md:block absolute top-[-4px] left-0 w-2 h-2 rounded-full bg-[#D45B7E]"></div>
              
              {/* Mobile Timeline Node anchors to the vertical track */}
              <div className="md:hidden absolute top-1.5 -left-[4.5px] w-2 h-2 rounded-full bg-[#D45B7E]"></div>

              {/* 
                3. The Cinematic Watermark:
                Centered on mobile so it doesn't get chopped off, anchored right on desktop.
              */}
              <div className="absolute top-0 md:top-10 right-0 text-[160px] md:text-[180px] lg:text-[220px] font-display text-[#2C3B2E]/5 leading-none select-none z-0 pointer-events-none transform translate-x-4 md:translate-x-0">
                {era.numeral}
              </div>

              {/* 4. The Content (Z-10 pulls it over the watermark) */}
              <div className="relative z-10 pr-4">
                
                <span className="text-[#4A6741] font-bold tracking-[0.2em] text-[10px] md:text-xs uppercase mb-2 block">
                  Era {era.numeral} — {era.period}
                </span>
                
                <h3 className="text-2xl md:text-3xl font-display text-[#2C3B2E] mb-1 md:mb-2">
                  {era.title}
                </h3>
                
                <p className="text-gray-500 font-sans italic text-sm mb-8 md:mb-10">
                  {era.subtitle}
                </p>

                {/* 
                  5. The Elegant List:
                  Using our signature editorial dash instead of the heavy diamonds.
                */}
                <ul className="space-y-5">
                  {era.items.map((item, i) => (
                    <li key={i} className="flex items-start group">
                      <span className="w-3 h-px bg-[#4A6741]/50 mt-2.5 mr-4 shrink-0 group-hover:bg-[#D45B7E] group-hover:w-5 transition-all duration-300"></span>
                      <span className="text-sm md:text-base text-gray-700 font-light leading-relaxed group-hover:text-[#2C3B2E] transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export function StrategicPrioritiesSection() {
  const priorities = [
    { num: '01', title: 'Pristine Wisdom', desc: 'Preserving and applying timeless knowledge for modern life.' },
    { num: '02', title: 'Preventive Wellness', desc: 'Encouraging healthy lifestyles before illness develops.' },
    { num: '03', title: 'Proactive Wellbeing', desc: 'Supporting physical, mental, emotional, social, and spiritual wellbeing.' },
    { num: '04', title: 'Productive Welfare', desc: 'Creating sustainable opportunities that empower people and communities.' },
    { num: '05', title: 'Collective Consciousness', desc: 'Cultivating awareness that individual wellbeing connects to collective wellbeing.' },
    { num: '06', title: 'Shared Responsibilities', desc: 'Encouraging every individual to become an active contributor.' },
    { num: '07', title: 'Coherent Communities', desc: 'Building compassionate, collaborative, and resilient communities.' },
    { num: '08', title: 'Sustainable Systems', desc: 'Designing systems that balance human development with ecological limits.' },
  ];

  return (
    <section className="py-32 px-6 bg-[#F8F7F2]">
      <div className="max-w-7xl mx-auto">
        
        <RevealOnScroll>
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-[#2C3B2E]">
              Strategic Priorities
            </h2>
          </div>
        </RevealOnScroll>

        {/* 
          1. The Ledger Grid: 
          Moving from a cramped 4-column box grid to a spacious 2-column typographic grid.
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-20 gap-y-0 md:gap-y-16 border-t border-[#2C3B2E]/20 md:border-t-0 mt-8 md:mt-0">
          
          {priorities.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div 
                /* 
                  2. The Structure: 
                  Mobile uses a hanging indent with bottom borders. Desktop uses top borders.
                */
                className="group border-b md:border-b-0 md:border-t border-[#2C3B2E]/10 md:border-[#2C3B2E]/20 py-8 md:py-6 flex flex-row items-start gap-4 md:gap-8 last:border-b-0"
              >
                
                {/* 
                  3. The Number Separation: 
                  Fixed width (w-16) on mobile prevents it from crushing the text.
                */}
                <div className="text-5xl md:text-6xl lg:text-7xl font-display text-[#4A6741]/50 group-hover:text-[#4A6741] transition-colors duration-500 italic w-16 md:w-auto shrink-0 mt-1 md:mt-0">
                  {item.num}
                </div>
                
                {/* 4. The Content Block */}
                <div className="flex-1 pr-4 md:pr-0 md:mt-2">
                  <h3 className="text-sm md:text-base font-display tracking-[0.15em] text-[#2C3B2E] uppercase mb-2 md:mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-sans font-light text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>

              </div>
            </RevealOnScroll>
          ))}

        </div>

      </div>
    </section>
  );
}

export function VisionCTASection() {
  return (
    <section className="relative w-full py-32 px-6 flex flex-col items-center justify-center text-center overflow-hidden bg-black">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/vv.webp"
          alt="Vision Background"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      {/* Very light overlay just to maintain text contrast */}
      <div className="absolute inset-0 z-0 bg-black/20 pointer-events-none"></div>

      <div className="relative z-10 w-full max-w-sm md:max-w-4xl mx-auto flex flex-col items-center">
        
        {/* The Manifesto Typography */}
        <RevealOnScroll>
          {/* Desktop Typography */}
          <h2 className="hidden md:block text-4xl lg:text-5xl font-display text-[#F8F7F2] leading-loose italic mb-12 drop-shadow-md text-center">
            &quot;One Humanity <span className="text-[#4A6741] px-2">&middot;</span> One Nature <span className="text-[#4A6741] px-2">&middot;</span> One Conscious Future&quot;
          </h2>
          
          {/* Mobile Poetic Stack */}
          <h2 className="md:hidden text-3xl font-display text-[#F8F7F2] italic mb-10 drop-shadow-md flex flex-col items-center space-y-3 text-center w-full">
            <span>&quot;One Humanity</span>
            <span className="text-[#4A6741] text-xl opacity-80">&middot;</span>
            <span>One Nature</span>
            <span className="text-[#4A6741] text-xl opacity-80">&middot;</span>
            <span>One Conscious Future&quot;</span>
          </h2>
        </RevealOnScroll>

        {/* The High-Contrast Button Stack */}
        <RevealOnScroll delay={0.2} className="w-full">
          <div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 md:gap-5 justify-center">
            
            {/* Primary Button */}
            <Button 
              href="/support"
              className="w-full sm:w-auto !bg-[#D45B7E] hover:!bg-[#b84a68] text-white !px-8 md:!px-10 !py-4 !rounded-full font-medium transition-all shadow-lg text-sm tracking-wide"
            >
              Support Our Mission
            </Button>
            
            {/* 
              Secondary Button Fix: 
              White text and border guarantee it pops against the green.
            */}
            <Button 
              href="/contact"
              className="w-full sm:w-auto border border-white/40 hover:!bg-[#F8F7F2] hover:!text-[#2C3B2E] text-white !px-8 md:!px-10 !py-4 !rounded-full font-medium transition-all text-sm tracking-wide backdrop-blur-sm !bg-black/10 md:!bg-transparent"
            >
              Connect With Us
            </Button>

          </div>
        </RevealOnScroll>
      </div>
      
    </section>
  );
}
