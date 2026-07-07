"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

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

const tickerText =
  "Pristine Wisdom · Preventive Wellness · Proactive Wellbeing · Productive Welfare · Collective Consciousness · Shared Responsibilities · Coherent Communities · Sustainable Systems · ";

export default function Footer() {
  return (
    <footer className="bg-darkBrown border-t border-sacredGold/40 pt-16 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Top Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10 mb-16">
          {/* Logo Lockup */}
          <div className="flex flex-col items-start">
            <h2 className="font-display text-4xl md:text-5xl uppercase tracking-widest text-sacredGold mb-2">
              ISHAN
            </h2>
            <p className="text-softApricot italic opacity-80 text-sm md:text-base">
              International Society of Humanity and Nature
            </p>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap gap-x-6 gap-y-4 lg:justify-end">
            {footerLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-softApricot hover:text-sacredGold transition-colors duration-300 text-sm tracking-wider uppercase"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-sacredGold/20 mb-10" />

        {/* Ticker Line */}
        <div className="relative w-full overflow-hidden mb-10 select-none flex">
          <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30, // Adjust speed as needed
            }}
          >
            <p className="text-xs uppercase tracking-[0.2em] text-softApricot/50 pr-4">
              {tickerText}
            </p>
            <p className="text-xs uppercase tracking-[0.2em] text-softApricot/50 pr-4">
              {tickerText}
            </p>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 pt-6 border-t border-sacredGold/10">
          <p className="text-sacredGold italic text-lg md:text-xl font-display tracking-wide">
            One Humanity · One Nature · One Conscious Future
          </p>
          
          <div className="text-left lg:text-right flex flex-col gap-1">
            <p className="text-softApricot/50 text-[0.65rem] md:text-xs uppercase tracking-widest">
              © 2026 ISHAN – International Society of Humanity and Nature. All Rights Reserved.
            </p>
            <p className="text-softApricot/40 text-[0.6rem] md:text-[0.65rem] uppercase tracking-widest">
              A global movement dedicated to advancing wisdom, wellness, humanity, nature, and sustainable systems for present and future generations.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
