"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Arogya Ashram", href: "/arogya" },
  { label: "Inner Immersion", href: "/samanvaya" },
  { label: "USS", href: "/uss" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-darkBrown shadow-lg shadow-black/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <Link href="/" className="flex flex-col">
            <span className={`font-display text-2xl md:text-3xl uppercase tracking-[0.3em] transition-colors duration-500 ${
              scrolled ? "text-sacredGold" : "text-sacredGold"
            }`}>
              ISHAN
            </span>
            <span className={`text-[0.55rem] md:text-[0.6rem] uppercase tracking-[0.25em] mt-1.5 transition-colors duration-500 ${
              scrolled ? "text-softApricot/70" : "text-burntOrange/80"
            }`}>
              International Society of Humanity and Nature
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`uppercase text-[0.6rem] font-medium tracking-[0.25em] transition-colors duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                    scrolled
                      ? isActive
                        ? "text-sacredGold"
                        : "text-softApricot/80 hover:text-sacredGold"
                      : isActive
                        ? "text-deepAmber"
                        : "text-burntOrange/80 hover:text-deepAmber"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              className={`ml-6 uppercase text-[0.6rem] font-medium tracking-[0.2em] px-8 py-2.5 rounded-full transition-all duration-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${
                scrolled
                  ? "text-sacredGold border border-sacredGold/40 hover:bg-sacredGold hover:text-darkBrown"
                  : "text-deepAmber border border-deepAmber/30 hover:bg-deepAmber hover:text-peach"
              }`}
            >
              Connect
            </Link>
          </nav>

          <button
            className={`lg:hidden p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange rounded-md transition-colors duration-500 ${
              scrolled ? "text-sacredGold" : "text-burntOrange"
            }`}
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Open Menu"
            aria-expanded={mobileMenuOpen}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-50 lg:hidden"
              onClick={() => setMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-0 right-0 bottom-0 w-80 bg-darkBrown border-l border-sacredGold/20 z-50 flex flex-col p-8 lg:hidden"
            >
              <div className="flex justify-end mb-12">
                <button
                  className="text-sacredGold p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange rounded-md"
                  onClick={() => setMobileMenuOpen(false)}
                  aria-label="Close Menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <nav className="flex flex-col gap-6">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`uppercase text-sm tracking-widest transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange focus-visible:ring-offset-2 focus-visible:ring-offset-darkBrown ${
                        isActive
                          ? "text-sacredGold"
                          : "text-softApricot hover:text-sacredGold"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="mt-6 uppercase text-sm tracking-widest text-sacredGold border border-sacredGold px-6 py-3 text-center transition-colors duration-300 hover:bg-sacredGold hover:text-darkBrown focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange focus-visible:ring-offset-2 focus-visible:ring-offset-darkBrown"
                >
                  Connect
                </Link>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
