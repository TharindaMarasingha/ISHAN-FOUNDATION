"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Youtube = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

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
    <footer className="relative bg-heading border-t border-secondary/30 pt-8 md:pt-12 pb-6 md:pb-8 overflow-hidden z-0">
      
      {/* Ambient background glow and texture */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.03] z-0">
        <div className="w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,var(--color-primary)_0%,transparent_70%)] blur-3xl"></div>
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "radial-gradient(circle at center, var(--color-primary) 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      </div>

      {/* Coral-Orange Ambient Glow (Top Right) */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-r from-softAccent to-background blur-[120px] opacity-25 mix-blend-screen pointer-events-none translate-x-1/3 -translate-y-1/3 rounded-full z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Ticker Line */}
        <div className="relative w-full overflow-hidden select-none group mb-4 md:mb-6">
          <motion.div
            className="flex whitespace-nowrap w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 22,
            }}
          >
            {tickerItems.map((val, idx) => (
              <React.Fragment key={idx}>
                <span className="text-[10px] uppercase tracking-[0.2em] text-surface/70 px-4 md:px-5">
                  {val}
                </span>
                <span className="text-surface/30 text-[8px]">·</span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Divider below ticker */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent mb-8 md:mb-10" />

        {/* Top Row: Logo & Nav */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-center gap-0 lg:gap-8">
          {/* Logo Lockup */}
          <div className="flex flex-col items-center lg:items-start flex-shrink-0 min-w-[280px]">
            <Image 
              src="/images/ishan-logo.png" 
              alt="ISHAN Logo" 
              width={600} 
              height={240} 
              className="object-contain mb-4 h-32 md:h-48 w-auto max-w-full"
              priority
            />
            
            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-3 mt-4">
              <a href="https://www.instagram.com/ishan_retreats/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-secondary/30 flex items-center justify-center text-surface/90 hover:border-[#D94F9D] hover:text-[#D94F9D] hover:scale-105 transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-secondary/30 flex items-center justify-center text-surface/90 hover:border-[#D94F9D] hover:text-[#D94F9D] hover:scale-105 transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-secondary/30 flex items-center justify-center text-surface/90 hover:border-[#D94F9D] hover:text-[#D94F9D] hover:scale-105 transition-all duration-300">
                <Youtube size={18} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-secondary/30 flex items-center justify-center text-surface/90 hover:border-[#D94F9D] hover:text-[#D94F9D] hover:scale-105 transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Mobile-only Divider (Logo -> Nav) */}
          <div className="w-full h-px bg-secondary/30 block lg:hidden my-4" />

          {/* Right Column: Nav & Contact */}
          <div className="flex flex-col items-center lg:items-end gap-0 lg:gap-8 mt-0 w-full lg:w-auto">
            {/* Nav Links */}
            <div className="grid grid-cols-2 gap-x-4 gap-y-3 lg:flex lg:flex-wrap justify-items-center lg:justify-end lg:gap-x-6 lg:gap-y-4 w-full lg:w-auto text-center lg:text-left">
              {footerLinks.map((link) => {
                if (link.label === "Support") {
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-[10px] tracking-[0.15em] uppercase text-surface/90 hover:text-[#D94F9D] transition-colors duration-300 border border-secondary/30 lg:border-none rounded-full px-4 py-1.5 lg:px-0 lg:py-0 flex items-center justify-center lg:block w-fit mx-auto lg:mx-0 col-span-2 lg:col-span-1 mt-1 lg:mt-0"
                    >
                      {link.label}
                    </Link>
                  );
                }
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-[10px] tracking-[0.15em] uppercase text-surface/90 hover:text-[#D94F9D] transition-colors duration-300 py-1 lg:py-0"
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            
            {/* Mobile-only Divider (Nav -> Contact) */}
            <div className="w-full h-px bg-secondary/30 block lg:hidden my-4" />

            {/* Contact Info Block */}
            <div className="flex flex-row justify-between lg:flex-col items-center lg:items-end w-full lg:w-auto lg:gap-1.5">
              <a 
                href="https://ishanfoundation.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] lg:text-[11px] tracking-[0.04em] uppercase text-surface/90 hover:text-[#D94F9D] transition-colors duration-300 hover:underline decoration-[#D94F9D] underline-offset-4"
              >
                ishanfoundation.lk
              </a>
              <a 
                href="mailto:info@ishanfoundation.lk"
                className="text-[10px] lg:text-[11px] tracking-[0.04em] uppercase text-surface/90 hover:text-[#D94F9D] transition-colors duration-300 hover:underline decoration-[#D94F9D] underline-offset-4"
              >
                info@ishanfoundation.lk
              </a>
            </div>
          </div>
        </div>

        {/* Divider between Nav and Copyright */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-secondary/30 to-transparent my-6 md:my-8" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-1.5 md:gap-6 text-center md:text-left">
          {/* Left Side: Tagline and Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1 md:gap-2">
            <p className="text-surface/90 italic text-[15px] md:text-[16px] font-display tracking-wide">
              One Humanity · One Nature · One Conscious Future
            </p>
            <p className="text-surface/70 text-[9px] uppercase tracking-[0.2em]">
              © 2026 ISHAN – International Society of Holistic Awareness & Naturology. All Rights Reserved.
            </p>
          </div>
          
          {/* Right Side: Kaldor Credit */}
          <div className="text-surface/70 text-[10px] md:text-[11px] uppercase tracking-[0.2em] mt-1 md:mt-0">
            Developed by{" "}
            <a 
              href="https://www.kaldor.dev/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#D94F9D] hover:underline decoration-[#D94F9D] underline-offset-4 transition-colors duration-300"
            >
              Kaldor
            </a>
          </div>
        </div>  
      </div>
    </footer>
  );
}
