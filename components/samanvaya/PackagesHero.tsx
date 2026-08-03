"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export function PackagesHero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [phase, setPhase] = useState(0); 
  const [quoteText, setQuoteText] = useState("");

  const fullQuote = "\"A life becomes timeless when its wisdom continues to live through its contribution.\"";

  useEffect(() => {
    if (prefersReducedMotion) return;

    let timeout: NodeJS.Timeout;

    if (phase === 0) {
      // Start typing shortly after mount
      timeout = setTimeout(() => setPhase(1), 500);
    } else if (phase === 1) {
      if (quoteText.length < fullQuote.length) {
        timeout = setTimeout(() => {
          setQuoteText(fullQuote.slice(0, quoteText.length + 1));
        }, 30);
      } else {
        // Typing done, move to phase 2 (attribution fade in)
        timeout = setTimeout(() => setPhase(2), 300);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, quoteText, prefersReducedMotion]);

  useEffect(() => {
    // Check for prefers-reduced-motion
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return (
    <section className="relative w-full h-[100vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Poster Image (Always visible first) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-poster.jpg"
          alt="Sri Lanka Journey"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Background Video (Fades in when loaded, unless reduced motion) */}
      {!prefersReducedMotion && (
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/hero-poster.jpg"
          onCanPlay={() => setIsVideoLoaded(true)}
          className={`absolute inset-0 w-full h-full object-cover z-0 transition-opacity duration-500 ease-in-out ${
            isVideoLoaded ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src="/videos/hero-bg.webm" type="video/webm" />
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60 z-10" />

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 md:px-12 max-w-4xl mx-auto flex flex-col items-center justify-center h-full pt-16">
        
        {/* Main Heading */}
        <h1 className="font-display font-light text-white text-5xl md:text-6xl lg:text-7xl mb-6 tracking-wide drop-shadow-sm flex flex-col items-center leading-tight">
          <span>SAMANVAYA:</span>
          <span className="italic mt-2">The Wellness Odyssey</span>
        </h1>

        {/* Quote */}
        <div className="max-w-3xl mt-8">
          <p className="font-display italic text-white/95 text-xl md:text-2xl leading-relaxed mb-4 drop-shadow-md min-h-[3em]">
            {prefersReducedMotion ? fullQuote : quoteText}
            {phase === 1 && !prefersReducedMotion && (
              <span className="animate-[pulse_0.7s_infinite]">|</span>
            )}
          </p>
          <p className={`font-sans text-sm md:text-base text-[#C6A87C] tracking-widest uppercase drop-shadow-md transition-opacity duration-1000 ${phase >= 2 || prefersReducedMotion ? 'opacity-100' : 'opacity-0'}`}>
            — Shreeji Sevakanand 'Buddhu'
          </p>
        </div>
      </div>
    </section>
  );
}
