"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const GROUPS = [
  "Individuals", "Families", "Students", "Professionals", "Entrepreneurs", 
  "Educators", "Healthcare Professionals", "Researchers", "Community Leaders", 
  "Corporate Organisations", "Educational Institutions", "Government Bodies", 
  "Non-Governmental Organisations", "Social Enterprises", "Environmental Organisations", 
  "Spiritual Seekers", "International Partners"
];

// Pre-calculate mobile row indices for alternating background colors
const GROUP_ROWS = GROUPS.map((group, index) => {
  let row = 0;
  let col = 0;
  for (let i = 0; i < index; i++) {
    if (GROUPS[i].length > 15) {
      if (col > 0) { row++; col = 0; }
      row++;
    } else {
      col++;
      if (col === 2) { row++; col = 0; }
    }
  }
  if (col > 0 && group.length > 15) { row++; }
  return row;
});

export function WhoWeServe() {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <section 
      className="pt-[100px] pb-[100px] px-6 md:px-12 relative overflow-hidden m-0"
      style={{
        WebkitMaskImage: `linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)`,
        maskImage: `linear-gradient(to bottom, transparent 0%, black 8%, black 92%, transparent 100%)`
      }}
    >
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/who-we-serve-bg.webp')" }}
      />
      {/* Readability Overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(255, 248, 240, 0.72) 0%, rgba(255, 240, 225, 0.45) 50%, transparent 100%)'
        }}
      />

      <div className="max-w-5xl mx-auto text-center relative z-20">
        <div className="mb-12 flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="font-display italic text-primary tracking-[0.2em] text-sm uppercase mb-4 text-center mx-auto"
          >
            Our Reach
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-light text-heading text-[42px] leading-tight md:text-5xl lg:text-6xl mb-6 text-center mx-auto"
          >
            Who We Serve
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3.5 md:gap-3">
          {GROUPS.slice(0, 8).map((group, index) => {
            const isLong = group.length > 15;
            const isEvenRow = GROUP_ROWS[index] % 2 === 0;
            const mobileBg = isEvenRow ? "bg-white/40" : "bg-white/30";

            const sizingClass = isLong 
              ? "w-full md:w-auto flex-grow md:flex-grow-0" 
              : "w-[calc(50%-7px)] md:w-auto flex-grow md:flex-grow-0";

            const mobileGlass = `${mobileBg} backdrop-blur-[12px] border-[#E5D5C5]/70 shadow-[0_4px_16px_rgba(0,0,0,0.03)]`;
            const desktopGlass = "md:bg-surface/65 md:backdrop-blur-[8px] md:border-primary/25 md:shadow-none";
            const mobileInteract = "active:border-[#D4AF37]/60 active:shadow-[0_8px_20px_rgba(212,175,55,0.15)] transition-all duration-200 ease-out";
            const desktopInteract = "md:hover:bg-softAccent md:hover:border-primary md:transition-all md:duration-250";
            const textClass = "font-sans text-[13px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.12em] text-heading text-center flex items-center justify-center";
            const shapeClass = "min-h-[54px] md:min-h-0 rounded-full px-5 py-3 md:px-[22px] md:py-[10px]";

            const uniformClass = `${sizingClass} ${mobileGlass} ${desktopGlass} ${mobileInteract} ${desktopInteract} ${textClass} ${shapeClass} border cursor-default`;

            return (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 1.02 }}
                className={uniformClass}
              >
                {group}
              </motion.div>
            );
          })}

          <div className={`flex flex-wrap justify-center gap-3.5 md:gap-3 w-full overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.4,0,0.2,1)] ${isExpanded ? 'max-h-[1500px] opacity-100' : 'max-h-0 opacity-0 md:max-h-none md:opacity-100'}`}>
            {GROUPS.slice(8).map((group, i) => {
              const index = i + 8;
              const isLong = group.length > 15;
              const isEvenRow = GROUP_ROWS[index] % 2 === 0;
              const mobileBg = isEvenRow ? "bg-white/40" : "bg-white/30";

              const sizingClass = isLong 
                ? "w-full md:w-auto flex-grow md:flex-grow-0" 
                : "w-[calc(50%-7px)] md:w-auto flex-grow md:flex-grow-0";

              const mobileGlass = `${mobileBg} backdrop-blur-[12px] border-[#E5D5C5]/70 shadow-[0_4px_16px_rgba(0,0,0,0.03)]`;
              const desktopGlass = "md:bg-surface/65 md:backdrop-blur-[8px] md:border-primary/25 md:shadow-none";
              const mobileInteract = "active:border-[#D4AF37]/60 active:shadow-[0_8px_20px_rgba(212,175,55,0.15)] transition-all duration-200 ease-out";
              const desktopInteract = "md:hover:bg-softAccent md:hover:border-primary md:transition-all md:duration-250";
              const textClass = "font-sans text-[13px] md:text-[11px] uppercase tracking-[0.15em] md:tracking-[0.12em] text-heading text-center flex items-center justify-center";
              const shapeClass = "min-h-[54px] md:min-h-0 rounded-full px-5 py-3 md:px-[22px] md:py-[10px]";

              const uniformClass = `${sizingClass} ${mobileGlass} ${desktopGlass} ${mobileInteract} ${desktopInteract} ${textClass} ${shapeClass} border cursor-default`;

              return (
                <motion.div
                  key={group}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 1.02 }}
                  className={uniformClass}
                >
                  {group}
                </motion.div>
              );
            })}
          </div>
        </div>

        {!isExpanded && (
          <div className="w-full flex justify-center mt-6 md:hidden">
            <button 
              onClick={() => setIsExpanded(true)}
              className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-[#D4AF37]/50 bg-white/40 backdrop-blur-md text-heading text-[12px] uppercase tracking-[0.15em] font-sans shadow-[0_4px_15px_rgba(0,0,0,0.05)] active:scale-[0.98] transition-all duration-300"
            >
              <span>View More</span>
              <svg className="w-4 h-4 text-[#D4AF37]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        )}
      </div>

    </section>
  );
}
