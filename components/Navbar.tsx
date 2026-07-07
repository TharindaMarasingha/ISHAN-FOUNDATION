"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";

const allLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "FRAMEWORK", href: "/framework" },
  { label: "LEADERSHIP", href: "/leadership" },
  { label: "ECOSYSTEM", href: "/ecosystem" },
  { label: "PROGRAMMES", href: "/programmes" },
  { label: "RESEARCH", href: "/research" },
  { label: "PARTNERSHIPS", href: "/partnerships" },
  { label: "VISION", href: "/vision" },
  { label: "SUPPORT", href: "/support" },
];

const primaryLinks = allLinks.slice(0, 6);
const moreLinks = allLinks.slice(6);

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const { scrollY } = useScroll();
  
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const moreDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = (latest: number) => {
      setIsScrolled(latest > 40);
    };
    
    handleScroll(scrollY.get());
    const unsubscribe = scrollY.on("change", handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  // Close dropdown on outside click or escape
  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (moreDropdownRef.current && !moreDropdownRef.current.contains(e.target as Node)) {
        setIsMoreOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsMoreOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setIsMoreOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isMoreActive = moreLinks.some(link => pathname === link.href);

  return (
    <>
      <div 
        className="fixed top-3 md:top-4 left-[12px] md:left-1/2 md:transform md:-translate-x-1/2 w-[calc(100vw-24px)] md:w-[920px] z-50 pointer-events-none"
      >
        <motion.nav
          id="main-nav"
          initial={false}
          animate={{
            backgroundColor: isScrolled 
              ? 'rgba(30,15,5,0.96)'
              : (isMounted && isMobile)
                ? 'rgba(30,15,5,0.65)'
                : 'rgba(30,15,5,0)',
            borderColor: isScrolled
              ? 'rgba(201,168,76,0.35)'
              : (isMounted && isMobile)
                ? 'rgba(201,168,76,0.30)'
                : 'rgba(201,168,76,0)',
            backdropFilter: isScrolled ? "blur(20px) saturate(160%)" : "blur(16px) saturate(160%)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="rounded-full w-full pointer-events-auto border border-[rgba(201,168,76,0.25)] md:border-none px-4 py-2.5 md:py-2 shadow-[0_4px_24px_rgba(0,0,0,0.18)] flex items-center justify-between transition-all duration-500"
        style={{
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      >
        <div className="flex items-center justify-between w-full">
          
          {/* Left: Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image 
              src="/images/lg-icon.png"
              alt="ISHAN Logo"
              width={150}
              height={150}
              className="h-10 w-auto object-contain brightness-0 invert opacity-90 hidden md:block"
              priority
            />
            <span className="md:hidden font-forum text-[#C9A84C] text-[14px] tracking-[0.15em]">
              ISHAN
            </span>
          </Link>

          {/* Center: Desktop Nav Links */}
          <div className="hidden md:flex items-center justify-center flex-grow gap-4 mx-4">
            {primaryLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-sans font-normal text-[10px] uppercase tracking-[0.06em] transition-colors duration-300 ${
                    isActive ? "text-[#F7BE43]" : "text-white/75 hover:text-[#F5A85C]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            
            {/* More Dropdown */}
            <div className="relative flex items-center" ref={moreDropdownRef}>
              <button
                onClick={() => setIsMoreOpen(!isMoreOpen)}
                className={`flex items-center gap-1 font-sans font-normal text-[10px] uppercase tracking-[0.06em] transition-colors duration-300 outline-none ${
                  isMoreActive || isMoreOpen ? "text-[#F7BE43]" : "text-white/75 hover:text-[#F5A85C]"
                }`}
              >
                MORE <ChevronDown size={12} className={`transition-transform duration-300 ${isMoreOpen ? 'rotate-180' : ''}`} />
              </button>
              
              <AnimatePresence>
                {isMoreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-[calc(100%+8px)] left-1/2 -translate-x-1/2 min-w-[180px] p-2 rounded-[16px] z-[100]"
                    style={{
                      background: "rgba(30,15,5,0.95)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid rgba(201,168,76,0.25)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
                    }}
                  >
                    {moreLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.label}
                          href={link.href}
                          className={`block px-4 py-2.5 font-sans uppercase tracking-[0.1em] text-[11px] rounded-[8px] transition-all duration-200 ${
                            isActive ? "text-[#C9A84C] bg-[rgba(201,168,76,0.08)]" : "text-white/75 hover:text-[#C9A84C] hover:bg-[rgba(201,168,76,0.08)]"
                          }`}
                        >
                          {link.label}
                        </Link>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right: CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <MagneticButton>
                <div className="px-4 py-[7px] rounded-full bg-gradient-to-r from-[#F7BE43] via-[#F5A85C] to-[#F39A8A] text-[#2E1A0E] font-sans font-semibold text-[11px] uppercase tracking-[0.1em] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  Connect
                </div>
              </MagneticButton>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="flex md:hidden text-[#C9A84C] p-1"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={20} />
            </button>
          </div>
          </div>
        </motion.nav>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[90] md:hidden"
              style={{ background: "rgba(0,0,0,0.5)" }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-[75vw] max-w-[300px] z-[100] flex flex-col md:hidden overflow-y-auto"
              style={{
                background: "rgba(20,10,4,0.97)",
                backdropFilter: "blur(20px)",
                borderLeft: "1px solid rgba(201,168,76,0.2)"
              }}
            >
              <div className="flex justify-end p-6">
                <button
                  className="text-[#C9A84C]"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close Menu"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="flex flex-col">
                {allLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className={`font-forum text-[22px] px-6 py-[14px] border-b border-white/5 transition-colors duration-300 ${
                        isActive ? "text-[#C9A84C]" : "text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-auto p-6">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-[#9C3F00] text-white rounded-xl py-3 uppercase tracking-widest font-sans font-semibold text-sm hover:shadow-lg transition-all duration-300"
                >
                  Connect
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
