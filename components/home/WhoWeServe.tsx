"use client";

import React from "react";
import { motion } from "framer-motion";

const GROUPS = [
  "Individuals", "Families", "Students", "Professionals", "Entrepreneurs", 
  "Educators", "Healthcare Professionals", "Researchers", "Community Leaders", 
  "Corporate Organisations", "Educational Institutions", "Government Bodies", 
  "Non-Governmental Organisations", "Social Enterprises", "Environmental Organisations", 
  "Spiritual Seekers", "International Partners"
];

export function WhoWeServe() {
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
            className="font-display font-light text-heading text-4xl md:text-5xl lg:text-6xl mb-6 text-center mx-auto"
          >
            Who We Serve
          </motion.h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {GROUPS.map((group, index) => {
            const uniformClass = "bg-surface/65 backdrop-blur-[8px] border-primary/25 text-heading hover:bg-softAccent hover:border-primary hover:text-heading";

            return (
              <motion.div
                key={group}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.05, duration: 0.5, ease: "easeOut" }}
                whileHover={{ y: -2 }}
                className={`rounded-full px-[22px] py-[10px] font-sans text-[11px] uppercase tracking-[0.12em] border cursor-default transition-all duration-250 ${uniformClass}`}
              >
                {group}
              </motion.div>
            );
          })}
        </div>
      </div>


    </section>
  );
}
