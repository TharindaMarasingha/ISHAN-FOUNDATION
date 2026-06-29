"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
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
  const isHomepage = pathname === "/";
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    const handleScroll = (latest: number) => {
      setIsScrolled(latest > 60);
    };
    
    // Initial check
    handleScroll(scrollY.get());

    const unsubscribe = scrollY.on("change", handleScroll);
    return () => unsubscribe();
  }, [scrollY]);

  // If not on homepage, navbar is permanently in "scrolled" (solid) state
  const isSolid = !isHomepage || isScrolled;

  const baseTextClass = isSolid ? "text-softApricot" : "text-burntOrange";
  const hoverTextClass = "hover:text-sacredGold";

  return (
    <>
      <motion.nav
        initial={false}
        animate={{
          backgroundColor: isSolid ? "color-mix(in srgb, var(--color-darkBrown) 96%, transparent)" : "transparent",
          borderBottomColor: isSolid ? "color-mix(in srgb, var(--color-sacredGold) 35%, transparent)" : "transparent",
          paddingTop: isSolid ? "1rem" : "1.5rem",
          paddingBottom: isSolid ? "1rem" : "1.5rem",
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={`fixed top-0 left-0 w-full z-50 border-b ${
          isSolid ? "backdrop-blur-md" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Left: Logo Lockup */}
          <Link href="/" className="flex flex-col items-start group">
            <h1 className="font-display text-2xl md:text-3xl uppercase tracking-widest text-sacredGold leading-none mb-1">
              ISHAN
            </h1>
            <p
              className={`text-[0.65rem] md:text-xs uppercase tracking-wider transition-colors duration-500 ${baseTextClass} group-hover:text-sacredGold`}
            >
              Humanity · Nature · Consciousness
            </p>
          </Link>

          {/* Center/Right: Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs uppercase tracking-widest transition-colors duration-300 ${
                    isActive ? "text-sacredGold" : `${baseTextClass} ${hoverTextClass}`
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            {/* Far Right: Connect CTA */}
            <Link href="/contact" className="block">
              <MagneticButton>
                <div className="px-6 py-2 rounded-full border border-sacredGold text-sacredGold text-xs uppercase tracking-widest transition-colors duration-300 hover:bg-sacredGold hover:text-darkBrown">
                  Connect
                </div>
              </MagneticButton>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-sacredGold p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Open Menu"
          >
            <Menu size={24} />
          </button>
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
              className="fixed inset-0 bg-darkBrown/80 backdrop-blur-sm z-50 lg:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", ease: "easeInOut", duration: 0.4 }}
              className="fixed top-0 right-0 w-4/5 max-w-sm h-full bg-darkBrown border-l border-sacredGold/20 z-50 flex flex-col p-8 shadow-2xl lg:hidden"
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
                      className={`text-lg uppercase tracking-widest transition-colors duration-300 ${
                        isActive ? "text-sacredGold" : "text-softApricot hover:text-sacredGold"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <div className="pt-8 border-t border-sacredGold/20">
                  <Link
                    href="/contact"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="inline-block px-8 py-3 rounded-full border border-sacredGold text-sacredGold text-sm uppercase tracking-widest hover:bg-sacredGold hover:text-darkBrown transition-colors duration-300"
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
