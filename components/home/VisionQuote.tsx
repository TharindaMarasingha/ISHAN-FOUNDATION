import React from "react";
import Image from "next/image";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function VisionQuote() {
  return (
    <section className="py-32 px-6 md:px-12 bg-surface border-y border-divider relative overflow-hidden flex items-center justify-center">
      
      {/* Top-Left Decorative SVG */}
      <img 
        src="/b1.svg" 
        alt="" 
        className="absolute top-0 left-0 w-[180px] md:w-[280px] opacity-[0.15] mix-blend-multiply pointer-events-none select-none z-0"
        aria-hidden="true"
      />

      {/* Bottom-Right Decorative SVG */}
      <img 
        src="/b2.svg" 
        alt="" 
        className="absolute bottom-0 right-0 w-[180px] md:w-[280px] opacity-[0.15] mix-blend-multiply pointer-events-none select-none z-0"
        aria-hidden="true"
      />

      {/* Huge Decorative Quote Mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[25rem] text-primary opacity-[0.03] pointer-events-none select-none leading-none">
        &ldquo;
      </div>

      <RevealOnScroll className="relative z-10 max-w-4xl mx-auto text-center">
        <blockquote className="font-display italic text-3xl md:text-4xl lg:text-5xl text-heading leading-snug md:leading-snug mb-10">
          &quot;To cultivate a world where humanity and nature exist in conscious harmony — through wisdom, wellness, compassion, responsibility, and sustainable living.&quot;
        </blockquote>
        <div className="text-[0.65rem] md:text-xs uppercase tracking-widest text-primary">
          ISHAN — Vision Statement
        </div>
      </RevealOnScroll>
    </section>
  );
}
