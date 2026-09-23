"use client";

import React from "react";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function ClarificationNote() {
  return (
    <section className="pb-24 px-6 max-w-7xl mx-auto">
      <RevealOnScroll className="flex justify-center">
        <div className="relative max-w-2xl w-full p-6 sm:p-7 rounded-2xl bg-[#2C3E2D]/[0.035] border-l-2 border-[#2C3E2D]/40 backdrop-blur-xs text-left shadow-[0_2px_12px_rgba(44,62,45,0.03)]">
          <p className="font-sans text-sm md:text-[15px] leading-relaxed text-[#4A5B4D]">
            <strong className="font-semibold text-[#2C3E2D] tracking-wide mr-1.5 inline-block">
              Note:
            </strong>
            Antahakarana Avalokana is ISHAN&apos;s inner reflection experience. It is distinct from Samanvaya, which is ISHAN&apos;s five-elements transformational retreat.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
}
