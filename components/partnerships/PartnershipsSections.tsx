"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Button } from "../ui/Button";

export function WhoWePartnerWithSection() {
  const partners = [
    { num: '01', name: 'Governments' },
    { num: '02', name: 'Educational Institutions' },
    { num: '03', name: 'Healthcare Organisations' },
    { num: '04', name: 'Corporate Organisations' },
    { num: '05', name: 'Non-Governmental Orgs' },
    { num: '06', name: 'Research Institutions' },
    { num: '07', name: 'Environmental Organisations' },
    { num: '08', name: 'Community Leaders' },
    { num: '09', name: 'Philanthropic Foundations' },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* 1. Asymmetrical Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#2C3B2E]/20 pb-8 mb-12">
          <div className="max-w-xl">
            <span className="text-[10px] font-bold tracking-[0.2em] text-[#4A6741] uppercase mb-4 block">
              Collaborative Ecosystem
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-[#2C3B2E]">
              Who We Partner With
            </h2>
          </div>
          <p className="text-gray-500 font-light text-sm max-w-sm mt-6 md:mt-0 leading-relaxed text-left md:text-right">
            Forging meaningful alliances across sectors to drive holistic, sustainable, and systemic transformation.
          </p>
        </div>

        {/* 2. The Editorial Grid */}
        <RevealOnScroll>
          {/* Desktop Grid (Hidden on Mobile) */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-0">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="group flex items-center py-6 border-b border-gray-100 hover:border-[#2C3B2E]/40 transition-colors cursor-pointer"
              >
                <span className="text-gray-300 font-display text-sm mr-6 group-hover:text-[#4A6741] transition-colors">
                  {partner.num}
                </span>
                
                <h3 className="text-gray-700 font-medium text-sm md:text-base tracking-wide transform group-hover:translate-x-2 group-hover:text-[#2C3B2E] transition-all duration-300">
                  {partner.name}
                </h3>
                
                {/* Optional: A tiny elegant arrow that fades in on hover */}
                <span className="ml-auto opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 text-[#4A6741]">
                  &rarr;
                </span>
              </div>
            ))}
          </div>

          {/* Mobile List (Hidden on Desktop) */}
          <div className="md:hidden border-t border-[#2C3B2E]/20 pt-2 mt-8">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="flex items-center py-5 border-b border-gray-100 last:border-b-0"
              >
                <span className="text-[#4A6741] font-display text-sm mr-6 opacity-80">
                  {partner.num}
                </span>
                <h3 className="text-gray-800 font-medium text-base tracking-wide">
                  {partner.name}
                </h3>
              </div>
            ))}
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}

export function PartnershipPrinciplesSection() {
  const principles = [
    { num: '01', title: 'Shared Purpose', desc: 'We begin with a common vision and shared values, ensuring alignment at every level.' },
    { num: '02', title: 'Mutual Respect', desc: 'Every partner contributes unique knowledge, experience, and strengths to the ecosystem.' },
    { num: '03', title: 'Integrity', desc: 'Transparency, ethics, and accountability guide every collaboration and decision.' },
    { num: '04', title: 'Long-Term Value', desc: 'We prioritise relationships that create sustainable, generational impact over quick wins.' },
    { num: '05', title: 'Collective Responsibility', desc: 'Success and responsibility are shared, fostering a true sense of community ownership.' },
  ];

  return (
    <section className="py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        
        <div className="text-center mb-20">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#4A6741] uppercase mb-4 block">
            Our Philosophy
          </span>
          <h2 className="text-4xl md:text-5xl font-display text-[#2C3B2E]">
            Partnership Principles
          </h2>
        </div>

        {/* Desktop List (Hidden on Mobile) */}
        <RevealOnScroll className="hidden md:block">
          <div className="border-t border-[#2C3B2E]/20">
            {principles.map((principle, index) => (
              <div 
                key={index} 
                className="group flex flex-row items-center py-12 border-b border-[#2C3B2E]/20 hover:bg-white/40 transition-all duration-500 px-8 -mx-8 rounded-2xl cursor-default"
              >
                
                {/* 1. The Massive Index Number */}
                <div className="w-1/5">
                  <span className="text-7xl font-display text-[#2C3B2E]/10 group-hover:text-[#4A6741] transition-colors duration-500">
                    {principle.num}
                  </span>
                </div>
                
                {/* 2. The Principle Title */}
                <div className="w-1/3">
                  <h3 className="text-3xl font-display text-[#2C3B2E] group-hover:translate-x-3 transition-transform duration-500">
                    {principle.title}
                  </h3>
                </div>
                
                {/* 3. The Description */}
                <div className="w-5/12 ml-auto">
                  <p className="text-gray-500 font-light text-lg leading-relaxed group-hover:text-gray-800 transition-colors duration-500">
                    {principle.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </RevealOnScroll>

        {/* Mobile List (Hidden on Desktop) */}
        <RevealOnScroll className="md:hidden mt-8">
          <div className="flex flex-col border-t border-[#2C3B2E]/20">
            
            {principles.map((principle, index) => (
              <div 
                key={index} 
                className="relative py-12 border-b border-[#2C3B2E]/10 last:border-b-0 overflow-hidden"
              >
                
                {/* The True Watermark */}
                <span className="absolute -top-6 -left-2 text-[140px] leading-none font-display text-[#2C3B2E]/5 select-none pointer-events-none z-0">
                  {principle.num}
                </span>
                
                {/* The Content (Pulled Forward) */}
                <div className="relative z-10 pr-2 pt-4">
                  <h3 className="text-2xl font-display text-[#2C3B2E] mb-3">
                    {principle.title}
                  </h3>
                  <p className="text-gray-500 font-light text-sm leading-relaxed">
                    {principle.desc}
                  </p>
                </div>
                
              </div>
            ))}
            
          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}

export function CollaborationAndContributionSection() {
  const areas = [
    "Preventive Wellness Programmes", "Leadership Development",
    "Educational Initiatives", "Community Development Projects",
    "Environmental Restoration", "Research Collaborations",
    "Institutional Capacity Building", "Training & Certification",
    "Conferences & Knowledge Exchange", "Volunteer Engagement",
    "Strategic Advisory", "Social Innovation",
    "Sustainable Development", "International Collaboration"
  ];

  const contributions = [
    "Volunteering", "Professional Expertise",
    "Teaching & Facilitation", "Research & Knowledge",
    "Community Projects", "Environmental Initiatives",
    "Strategic Partnerships", "Philanthropic Support"
  ];

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        
        {/* Desktop View: Asymmetrical Split */}
        <div className="hidden lg:grid grid-cols-12 gap-24 items-start">
          
          {/* LEFT COLUMN (7 of 12): The Academic Directory */}
          <div className="col-span-7">
            <RevealOnScroll>
              <h2 className="text-4xl font-display text-[#2C3B2E] mb-10">
                Areas of Collaboration
              </h2>
              
              <div className="grid grid-cols-2 gap-x-12">
                {areas.map((area, index) => (
                  <div 
                    key={index} 
                    className="py-4 border-b border-[#2C3B2E]/10 flex items-center group cursor-default"
                  >
                    <span className="w-4 h-px bg-[#4A6741]/50 mr-4 group-hover:bg-[#4A6741] transition-colors group-hover:w-6 duration-300"></span>
                    <span className="text-sm font-medium text-gray-700 tracking-wide uppercase group-hover:text-[#2C3B2E] transition-colors duration-300">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* RIGHT COLUMN (5 of 12): The Action Panel */}
          <div className="col-span-5 relative">
            <RevealOnScroll delay={0.2}>
              <div className="bg-white rounded-3xl p-12 shadow-sm border border-[#2C3B2E]/5">
                
                <h3 className="text-3xl font-display text-[#2C3B2E] mb-8 pb-6 border-b border-[#2C3B2E]/10">
                  You Can Contribute Through
                </h3>
                
                <ul className="space-y-6">
                  {contributions.map((item, index) => (
                    <li key={index} className="flex items-start group cursor-default">
                      <svg className="w-5 h-5 text-[#4A6741]/60 mt-0.5 mr-4 group-hover:text-[#D45B7E] transition-colors transform group-hover:rotate-45 duration-300" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                      </svg>
                      
                      <span className="text-base text-gray-600 font-light group-hover:text-[#2C3B2E] transition-colors duration-300">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                
              </div>
            </RevealOnScroll>
          </div>

        </div>

        {/* MOBILE VIEW: Collaboration & Contribute */}
        <div className="lg:hidden flex flex-col space-y-16 mt-8">
          
          {/* The Directory Stack (Areas of Collaboration) */}
          <RevealOnScroll>
            <div>
              <h2 className="text-3xl font-display text-[#2C3B2E] mb-8 pb-4 border-b border-[#2C3B2E]/20">
                Areas of Collaboration
              </h2>
              <div className="flex flex-col space-y-0 border-t border-[#2C3B2E]/10">
                {areas.map((area, index) => (
                  <div key={index} className="flex items-center py-5 border-b border-[#2C3B2E]/10">
                    {/* Re-using our signature elegant dash */}
                    <span className="w-4 h-px bg-[#4A6741]/60 mr-4 shrink-0"></span>
                    <span className="text-sm font-medium text-gray-700 tracking-wide uppercase">
                      {area}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* The Action Panel Card (Contribute Through) */}
          <RevealOnScroll delay={0.2}>
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-[#2C3B2E]/5">
              <h3 className="text-2xl font-display text-[#2C3B2E] mb-6 pb-4 border-b border-[#2C3B2E]/10">
                Contribute Through
              </h3>
              <ul className="space-y-6">
                {contributions.map((item, index) => (
                  <li key={index} className="flex items-start">
                    {/* Minimalist Diamond Icon (Replaces the heavy chevron) */}
                    <svg className="w-4 h-4 text-[#D45B7E] mt-0.5 mr-4 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                    <span className="text-base text-gray-600 font-light">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </RevealOnScroll>

        </div>
        
      </div>
    </section>
  );
}

export function PartnershipsCTASection() {
  return (
    <section className="relative w-full py-24 md:py-32 px-6 bg-black flex flex-col items-center justify-center text-center overflow-hidden min-h-[80svh] md:min-h-0">
      
      {/* Background Image */}
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40 pointer-events-none" style={{ backgroundImage: "url('/images/pci.webp')" }} />

      {/* 
        1. The Watermark Fix: 
        Changed to 'text-white opacity-10'. 
        Now it looks like a subtle glass overlay instead of a dark smudge.
      */}
      <div className="absolute top-12 md:top-10 left-1/2 -translate-x-1/2 text-[120px] md:text-[250px] leading-none font-display text-white opacity-10 select-none pointer-events-none z-0">
        &ldquo;
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center">
        
        <RevealOnScroll className="w-full max-w-sm sm:max-w-none">
          {/* 2. Typography polish */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-[#F8F7F2] leading-relaxed italic mb-10 drop-shadow-md">
            &quot;Together, we can create healthier individuals, stronger communities, resilient institutions, and a sustainable future.&quot;
          </h2>
        </RevealOnScroll>

        <RevealOnScroll delay={0.2} className="w-full max-w-sm sm:max-w-none">
          {/* 
            3. The Symmetrical Button Stack: 
            Using 'w-full' ensures the buttons match perfectly in width on mobile.
          */}
          <div className="flex flex-col sm:flex-row w-full justify-center gap-4 sm:gap-5">
            
            {/* Primary Button */}
            <Button 
              href="/contact" 
              className="w-full sm:w-auto !bg-[#D45B7E] hover:!bg-[#b84a68] text-white !px-10 !py-4 !rounded-full font-medium transition-all shadow-lg text-sm tracking-wide"
            >
              Become a Partner
            </Button>
            
            {/* Secondary Button: Added backdrop-blur for a premium glass feel */}
            <Button 
              href="/support" 
              className="w-full sm:w-auto border border-white/40 hover:!bg-white hover:!text-gray-900 text-white !px-10 !py-4 !rounded-full font-medium transition-all text-sm tracking-wide backdrop-blur-sm !bg-black/10"
            >
              Support Our Mission
            </Button>

          </div>
        </RevealOnScroll>
      </div>
      
    </section>
  );
}
