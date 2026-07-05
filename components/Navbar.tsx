"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";
import { MagneticButton } from "./ui/MagneticButton";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "AROGYA ASHRAM", href: "/arogya" },
  { label: "INNER IMMERSION", href: "/samanvaya" },
  { label: "USS", href: "/uss" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = (latest: number) => {
      setIsScrolled(latest > 40);
    };
    
    handleScroll(scrollY.get());
    const unsubscribe = scrollY.on("change", handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: isScrolled ? "rgba(138, 130, 125, 0.85)" : "rgba(138, 130, 125, 0.45)",
          backdropFilter: isScrolled ? "blur(20px) saturate(160%)" : "blur(16px) saturate(160%)",
          borderColor: isScrolled ? "rgba(247, 190, 67, 0.35)" : "rgba(247, 190, 67, 0.25)",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        style={{
          borderWidth: "1px",
          borderStyle: "solid",
        }}
        className="fixed top-5 left-0 mx-4 w-[calc(100%-32px)] md:left-0 md:right-0 md:mx-auto md:w-full max-w-[840px] z-50 rounded-full px-6 py-2 shadow-[0_4px_24px_rgba(0,0,0,0.18)] flex items-center"
      >
        <div className="flex items-center justify-between w-full">
          
          {/* Left: Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image 
              src="/images/lg-icon.png"
              alt="ISHAN Logo"
              width={150}
              height={150}
              className="h-10 w-auto object-contain brightness-0 invert opacity-90"
              priority
            />
          </Link>

          {/* Center: Desktop Nav Links */}
          <div className="hidden md:flex items-center justify-center flex-grow gap-6 lg:gap-10 mx-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`font-sans font-normal text-[13px] uppercase tracking-[0.08em] transition-colors duration-300 ${
                    isActive ? "text-[#F7BE43]" : "text-white/75 hover:text-[#F5A85C]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right: CTA & Mobile Menu Toggle */}
          <div className="flex items-center gap-4">
            <Link href="/contact" className="hidden md:block">
              <MagneticButton>
                <div className="px-5 py-2 rounded-full bg-gradient-to-r from-[#F7BE43] via-[#F5A85C] to-[#F39A8A] text-[#2E1A0E] font-sans font-semibold text-[12px] uppercase tracking-[0.1em] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                  Connect
                </div>
              </MagneticButton>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className="flex md:hidden text-sacredGold p-1"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
              className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-darkBrown border-l border-sacredGold/20 z-[70] flex flex-col p-8 shadow-2xl md:hidden overflow-y-auto"
            >
              <div className="flex justify-end mb-12">
                <button
                  className="text-sacredGold p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                  aria-label="Close Menu"
                >
                  <X size={28} />
                </button>
              </div>

              <div className="flex flex-col space-y-8">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`font-display text-2xl uppercase tracking-widest transition-colors duration-300 ${
                        isActive ? "text-sacredGold" : "text-softApricot hover:text-sacredGold"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="pt-8 border-t border-sacredGold/20 mt-4">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-[#FFC120] to-[#F8A39B] text-[#2E1A0E] font-medium text-sm uppercase tracking-widest hover:shadow-lg transition-all duration-300 border-none"
                  >
                    Connect
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
