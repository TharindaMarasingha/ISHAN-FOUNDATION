"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const Youtube = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

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
    <footer className="relative bg-[#33472C] border-t border-[#9FBB90]/20 pt-6 md:pt-10 pb-6 overflow-hidden z-0 font-sans">
      
      {/* Ambient background glow and texture */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-[0.04] z-0">
        <div className="w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,#9FBB90_0%,transparent_70%)] blur-3xl"></div>
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "radial-gradient(circle at center, #9FBB90 1px, transparent 1px)", backgroundSize: "40px 40px" }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Ticker Line */}
        <div className="relative w-full overflow-hidden select-none group mb-8 md:mb-10">
          <motion.div
            className="flex whitespace-nowrap w-max items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 25,
            }}
          >
            {tickerItems.map((val, idx) => (
              <React.Fragment key={idx}>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#F5F1E9]/50 px-4 md:px-5">
                  {val}
                </span>
                <span className="text-[#F5F1E9]/20 text-[8px]">·</span>
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 text-left">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-start pr-0 lg:pr-6">
            <Image 
              src="/images/ishanlogo.png" 
              alt="ISHAN Logo" 
              width={600} 
              height={240} 
              className="object-contain h-40 md:h-56 w-auto -mt-4 -mb-4 md:-mb-8 -ml-4"
              priority
            />
            <p className="text-[#F5F1E9]/80 text-[13px] md:text-[14px] leading-[1.8] max-w-[320px] font-light">
              Harmonising Humanity with Nature through Wisdom, Wellness, and Collective Responsibility.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a href="https://www.instagram.com/ishan_retreats/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[#9FBB90]/30 flex items-center justify-center text-[#F5F1E9]/90 hover:border-[#F5F1E9] hover:bg-[#F5F1E9] hover:text-[#33472C] hover:scale-105 transition-all duration-300">
                <Instagram size={16} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[#9FBB90]/30 flex items-center justify-center text-[#F5F1E9]/90 hover:border-[#F5F1E9] hover:bg-[#F5F1E9] hover:text-[#33472C] hover:scale-105 transition-all duration-300">
                <Facebook size={16} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[#9FBB90]/30 flex items-center justify-center text-[#F5F1E9]/90 hover:border-[#F5F1E9] hover:bg-[#F5F1E9] hover:text-[#33472C] hover:scale-105 transition-all duration-300">
                <Youtube size={16} />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-[#9FBB90]/30 flex items-center justify-center text-[#F5F1E9]/90 hover:border-[#F5F1E9] hover:bg-[#F5F1E9] hover:text-[#33472C] hover:scale-105 transition-all duration-300">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div className="lg:col-span-2 flex flex-col items-start lg:pl-4">
            <h4 className="text-[#9FBB90] text-[11px] font-bold tracking-[0.15em] uppercase mb-4">Explore</h4>
            <ul className="flex flex-col gap-3.5">
              {[
                { label: 'About Ishan', href: '/about' },
                { label: 'Framework', href: '/framework' },
                { label: 'Leadership', href: '/leadership' },
                { label: 'Ecosystem', href: '/ecosystem' },
                { label: 'Programmes', href: '/programmes' }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#F5F1E9]/75 text-[13px] hover:text-[#F5F1E9] hover:translate-x-1 inline-block transition-all duration-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="lg:col-span-2 flex flex-col items-start">
            <h4 className="text-[#9FBB90] text-[11px] font-bold tracking-[0.15em] uppercase mb-4">Resources</h4>
            <ul className="flex flex-col gap-3.5">
              {[
                { label: 'Research', href: '/research' },
                { label: 'Partnerships', href: '/partnerships' },
                { label: 'Vision', href: '/vision' },
                { label: 'Support', href: '/support' }
              ].map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#F5F1E9]/75 text-[13px] hover:text-[#F5F1E9] hover:translate-x-1 inline-block transition-all duration-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter Column */}
          <div className="lg:col-span-4 flex flex-col items-start lg:pl-4">
            <h4 className="text-[#9FBB90] text-[11px] font-bold tracking-[0.15em] uppercase mb-4">Contact</h4>
            <div className="flex flex-col gap-2.5 mb-6">
              <a href="https://ishanfoundation.lk" target="_blank" rel="noopener noreferrer" className="text-[#F5F1E9]/80 text-[12px] tracking-[0.05em] uppercase hover:text-[#F5F1E9] transition-colors duration-300 hover:underline decoration-[#9FBB90]/50 underline-offset-4">
                ishanfoundation.lk
              </a>
              <a href="mailto:info@ishanfoundation.lk" className="text-[#F5F1E9]/80 text-[12px] tracking-[0.05em] uppercase hover:text-[#F5F1E9] transition-colors duration-300 hover:underline decoration-[#9FBB90]/50 underline-offset-4">
                info@ishanfoundation.lk
              </a>
            </div>

            <h4 className="text-[#9FBB90] text-[11px] font-bold tracking-[0.15em] uppercase mb-3">Stay Connected</h4>
            <p className="text-[#F5F1E9]/70 text-[13px] font-light mb-4">
              Receive updates, insights and upcoming programme news.
            </p>
            <div className="flex w-full max-w-sm h-[42px] group">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-white/5 border border-white/10 border-r-0 rounded-l-full px-5 text-[13px] text-[#F5F1E9] placeholder:text-[#F5F1E9]/40 focus:outline-none focus:border-[#9FBB90]/60 focus:bg-white/10 transition-all duration-300"
              />
              <button 
                className="px-6 rounded-r-full text-[11px] font-bold tracking-[0.1em] uppercase text-[#33472C] bg-[#9FBB90] transition-all duration-300 relative overflow-hidden hover:brightness-105 flex items-center justify-center flex-shrink-0 shadow-md"
              >
                <span className="relative z-10">Subscribe</span>
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-[#9FBB90]/10 via-[#9FBB90]/30 to-[#9FBB90]/10 my-8 md:my-10" />

        {/* Bottom Row */}
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end gap-6 lg:gap-4 text-center lg:text-left">
          {/* Left Side: Tagline and Copyright */}
          <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-3">
            <p className="text-[#F5F1E9] italic text-[16px] md:text-[18px] font-display tracking-wide text-center lg:text-left">
              One Humanity · One Nature · One Conscious Future
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-3 xl:gap-4 text-[#F5F1E9]/60 text-[9px] md:text-[10px] uppercase tracking-[0.1em] md:tracking-[0.15em]">
              <span>© 2026 ISHAN – International Society of Holistic Awareness & Natur(al)ogy. All Rights Reserved.</span>
              <span className="hidden xl:inline">|</span>
              <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 mt-1 xl:mt-0">
                <Link href="/privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</Link>
                <span>·</span>
                <Link href="/terms" className="hover:text-white transition-colors duration-300">Terms of Use</Link>
                <span>·</span>
                <Link href="/cookie" className="hover:text-white transition-colors duration-300">Cookie Policy</Link>
              </div>
            </div>
          </div>
          
          {/* Right Side: Kaldor Credit */}
          <div className="text-[#F5F1E9]/60 text-[10px] uppercase tracking-[0.2em] flex-shrink-0 mb-2 lg:mb-0">
            Developed by{" "}
            <a 
              href="https://www.kaldor.dev/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#9FBB90] hover:text-[#F5F1E9] hover:underline decoration-[#9FBB90] underline-offset-4 transition-colors duration-300 font-medium ml-1"
            >
              Kaldor
            </a>
          </div>
        </div>  
      </div>
    </footer>
  );
}
