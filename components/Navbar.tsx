"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMoreOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  const isMoreActive = moreLinks.some(link => pathname === link.href);
  const darkHeroPages = ['/about', '/framework', '/leadership', '/ecosystem', '/programmes', '/research', '/partnerships', '/vision', '/support', '/contact', '/samanvaya', '/samanvaya/packages', '/arogya', '/avalokana', '/sri-vrindavan'];
  const isDarkHeader = darkHeroPages.includes(pathname) && !isScrolled;

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
              ? 'rgba(255,255,255,0.96)'
              : 'rgba(255,255,255,0)',
            borderColor: isScrolled
              ? 'var(--color-divider)'
              : 'rgba(220,233,215,0)',
            backdropFilter: isScrolled ? "blur(20px) saturate(160%)" : "blur(16px) saturate(160%)",
          }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="rounded-full w-full pointer-events-auto border px-4 py-2.5 md:py-2 shadow-[0_4px_24px_rgba(0,0,0,0.06)] flex items-center justify-between transition-all duration-500"
        style={{
          borderWidth: "1px",
          borderStyle: "solid",
        }}
      >
        <div className="flex items-center justify-between w-full">
          
          {/* Left: Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center pl-0 md:pl-2">
            <img 
              src="/images/iln.PNG"
              alt="ISHAN"
              className="h-10 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Center/Left: Desktop Nav Links */}
          <div className="hidden md:flex items-center justify-start flex-grow gap-4 md:gap-6 ml-6 md:ml-10 mr-4">
            {primaryLinks.map((link) => {
              const isActive = pathname === link.href;
              
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-sans font-normal text-[10px] uppercase tracking-[0.06em] transition-colors duration-300 ${
                    isActive 
                      ? "text-primary" 
                      : (isDarkHeader ? "text-white/80 hover:text-white" : "text-heading hover:text-primary")
                  }`}
                  style={isDarkHeader && !isActive ? { textShadow: '0 1px 3px rgba(0,0,0,0.5)' } : {}}
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
                  isMoreActive || isMoreOpen 
                    ? "text-primary"
                    : (isDarkHeader ? "text-white/80 hover:text-white" : "text-heading hover:text-primary")
                }`}
                style={(isDarkHeader && !(isMoreActive || isMoreOpen)) ? { textShadow: '0 1px 3px rgba(0,0,0,0.5)' } : {}}
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
                      background: "rgba(255,255,255,0.95)",
                      backdropFilter: "blur(16px)",
                      border: "1px solid var(--color-divider)",
                      boxShadow: "0 8px 32px rgba(0,0,0,0.08)"
                    }}
                  >
                    {moreLinks.map((link) => {
                      const isActive = pathname === link.href;
                      return (
                        <Link
                          key={link.label}
                          href={link.href}
                          className={`block px-4 py-2.5 font-sans uppercase tracking-[0.1em] text-[11px] rounded-[8px] transition-all duration-200 ${
                            isActive ? "text-primary bg-secondary/10" : "text-heading hover:text-primary hover:bg-secondary/10"
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
                <div className="px-4 py-[7px] rounded-full bg-[#DE5680] text-white font-sans font-semibold text-[11px] uppercase tracking-[0.1em] hover:shadow-lg hover:-translate-y-0.5 hover:brightness-95 transition-all duration-300 [text-shadow:0_1px_2px_rgba(0,0,0,0.3)]">
                  Connect
                </div>
              </MagneticButton>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className={`flex md:hidden p-1 transition-colors ${isDarkHeader ? 'text-white hover:text-white/80' : 'text-heading hover:text-primary'}`}
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
              style={{ background: "rgba(0,0,0,0.2)" }}
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-0 right-0 bottom-0 w-[75vw] max-w-[300px] z-[100] flex flex-col md:hidden overflow-y-auto"
              style={{
                background: "rgba(255,255,255,0.97)",
                backdropFilter: "blur(20px)",
                borderLeft: "1px solid var(--color-divider)"
              }}
            >
              <div className="flex justify-end p-6">
                <button
                  className="text-heading hover:text-primary"
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
                      className={`font-forum text-[16px] px-6 py-3 border-b border-divider transition-colors duration-300 ${
                        isActive ? "text-primary" : "text-heading hover:text-primary"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6 px-6 pb-8">
                <Link
                  href="/contact"
                  className="flex items-center justify-center w-[160px] ml-4 text-white rounded-full py-3.5 uppercase tracking-[0.15em] font-sans font-bold text-[11px] shadow-md hover:shadow-lg hover:brightness-95 bg-[#DE5680] transition-all duration-300"
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
