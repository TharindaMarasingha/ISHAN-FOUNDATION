"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { GoldDivider } from "./ui/GoldDivider";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Framework", href: "/framework" },
  { label: "Leadership", href: "/leadership" },
  { label: "Ecosystem", href: "/ecosystem" },
  { label: "Programmes", href: "/programmes" },
  { label: "Research", href: "/research" },
  { label: "Partnerships", href: "/partnerships" },
  { label: "Vision", href: "/vision" },
  { label: "Support", href: "/support" },
  { label: "Connect", href: "/contact" },
];

const VALUES = [
  "Pristine Wisdom",
  "Preventive Wellness",
  "Proactive Wellbeing",
  "Productive Welfare",
  "Collective Consciousness",
  "Shared Responsibilities",
  "Coherent Communities",
  "Sustainable Systems",
];

export default function Footer() {
  const tickerItems = [...VALUES, ...VALUES];

  return (
    <footer className="relative bg-darkBrown border-t border-sacredGold/40 pt-20 pb-12 overflow-hidden z-0">
      
      {/* Ambient background glow and texture */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.06] z-0">
        <div className="w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,#C9A84C_0%,transparent_70%)] blur-3xl"></div>
        {/* Sacred geometry subtle overlay */}
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at center, rgba(201,168,76,0.1) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">
          {/* Logo Lockup */}
          <div className="flex flex-col items-start">
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-[0.25em] text-sacredGold mb-3 flex items-center gap-3">
              <span className="text-3xl">✧</span> ISHAN
            </h2>
            <p className="text-softApricot italic opacity-80 text-sm md:text-base">
              International Society of Humanity and Nature
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap gap-x-8 gap-y-6 lg:justify-end">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="group relative text-softApricot hover:text-sacredGold transition-colors duration-300 text-sm tracking-[0.15em] uppercase flex flex-col items-center"
              >
                {link.label}
                <span className="absolute -bottom-2 w-1.5 h-1.5 rounded-full bg-sacredGold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
            ))}
          </div>
        </div>

        {/* Top Divider */}
        <GoldDivider />

        {/* Ticker Line */}
        <div className="relative w-full overflow-hidden select-none flex group">
          <motion.div
            className="flex whitespace-nowrap min-w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 40,
            }}
          >
            <div className="flex items-center group-hover:[animation-play-state:paused]">
              {tickerItems.map((val, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-xs uppercase tracking-[0.2em] text-softApricot/60 px-6">
                    {val}
                  </span>
                  <span className="text-softApricot/40 text-[10px]">·</span>
                </React.Fragment>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Divider */}
        <GoldDivider />

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <p className="text-sacredGold italic text-lg md:text-xl font-display tracking-wide">
            One Humanity · One Nature · One Conscious Future
          </p>
          
          <div className="text-left lg:text-right flex flex-col gap-2">
            <p className="text-softApricot/50 text-[0.65rem] md:text-xs uppercase tracking-widest">
              © 2026 ISHAN – International Society of Humanity and Nature. All Rights Reserved.
            </p>
            <p className="text-softApricot/40 text-[0.6rem] md:text-[0.65rem] uppercase tracking-widest max-w-xl">
              A global movement dedicated to advancing wisdom, wellness, humanity, nature, and sustainable systems for present and future generations.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
