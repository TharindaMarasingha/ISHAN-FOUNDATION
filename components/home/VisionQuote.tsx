import React from "react";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function VisionQuote() {
  return (
    <section className="py-32 px-6 md:px-12 bg-deepAmber/[0.02] border-y border-sacredGold/10 relative overflow-hidden flex items-center justify-center">
      {/* Huge Decorative Quote Mark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[25rem] text-mandarin opacity-[0.03] pointer-events-none select-none leading-none">
        &ldquo;
      </div>

      <RevealOnScroll className="relative z-10 max-w-4xl mx-auto text-center">
        <blockquote className="font-display italic text-3xl md:text-4xl lg:text-5xl text-deepAmber leading-snug md:leading-snug mb-10">
          "To cultivate a world where humanity and nature exist in conscious harmony — through wisdom, wellness, compassion, responsibility, and sustainable living."
        </blockquote>
        <div className="text-[0.65rem] md:text-xs uppercase tracking-widest text-burntOrange">
          ISHAN — Vision Statement
        </div>
      </RevealOnScroll>
    </section>
  );
}
