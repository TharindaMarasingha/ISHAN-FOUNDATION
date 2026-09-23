"use client";
import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";

interface ElementItem {
  title: string;
  description: string;
  numeral: string;
  icon: React.ReactNode;
}

const ELEMENTS: ElementItem[] = [
  {
    title: "Silence & Stillness",
    description:
      "Dedicated periods of silence for deep inner reflection, spacious presence, and contemplative self-inquiry.",
    numeral: "01",
    icon: (
      <svg
        className="w-6 h-6 stroke-current"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
        <path d="M18 4v4m-2-2h4" />
      </svg>
    ),
  },
  {
    title: "Meditation & Contemplation",
    description:
      "Guided meditation and contemplative practices drawn from timeless wisdom traditions to awaken clarity.",
    numeral: "02",
    icon: (
      <svg
        className="w-6 h-6 stroke-current"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 21c4.5-4 7-8.5 7-12a7 7 0 0 0-14 0c0 3.5 2.5 8 7 12z" />
        <path d="M12 21c-2-3.5-3.5-7-3.5-10a3.5 3.5 0 0 1 7 0c0 3-1.5 6.5-3.5 10z" />
        <path d="M5 14c-1.5 0-3-1-3-3 0-2.5 2.5-4 5.5-4.5" />
        <path d="M19 14c1.5 0 3-1 3-3 0-2.5-2.5-4-5.5-4.5" />
      </svg>
    ),
  },
  {
    title: "Mindful Movement",
    description:
      "Gentle yoga, conscious breathwork, and intuitive movement to restore bodily harmony, grounding, and vital energy.",
    numeral: "03",
    icon: (
      <svg
        className="w-6 h-6 stroke-current"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.5 7A3.5 3.5 0 0 0 14 3.5c-2.5 0-4 2-4 4.5v9a3.5 3.5 0 1 1-7 0c0-1.8 1.2-3.2 2.8-3.5" />
        <path d="M14 11.5a3.5 3.5 0 1 0 3.5-3.5H4" />
        <path d="M9.5 20.5a3.5 3.5 0 0 0 3.5-3.5V8" />
      </svg>
    ),
  },
  {
    title: "Nature Immersion",
    description:
      "Reconnecting with the natural world through mindful forest walks, living earth resonance, and ecological stillness.",
    numeral: "04",
    icon: (
      <svg
        className="w-6 h-6 stroke-current"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11 20A7 7 0 0 1 4 13c0-4.5 3.5-8.5 8-10 4.5 1.5 8 5.5 8 10a7 7 0 0 1-7 7z" />
        <path d="M11 20V10" />
        <path d="M11 14l3.5-3.5" />
        <path d="M11 16.5l-2.5-2.5" />
      </svg>
    ),
  },
  {
    title: "Experiential Learning",
    description:
      "Creative inquiry, expressive dialogue, and shared community insights that illuminate inner transformation.",
    numeral: "05",
    icon: (
      <svg
        className="w-6 h-6 stroke-current"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 3v18" />
        <path d="M3 12h18" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: "Service & Integration",
    description:
      "Grounding spiritual insights into mindful daily action, heartfelt seva, and harmonious re-entry into everyday life.",
    numeral: "06",
    icon: (
      <svg
        className="w-6 h-6 stroke-current"
        viewBox="0 0 24 24"
        fill="none"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="9" cy="12" r="6" />
        <circle cx="15" cy="12" r="6" />
        <path d="M12 8.5v7" />
      </svg>
    ),
  },
];

export function IncludedElements() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-20">
        <SectionHeading
          align="center"
          eyebrow="The Journey Within"
          heading="Elements of the Immersion"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        {ELEMENTS.map((element, index) => {
          // Staggered layout: push the middle column down by 40px (mt-10) on lg screens
          const isMiddleCol = index % 3 === 1;
          const staggerClass = isMiddleCol ? "lg:mt-10" : "";

          return (
            <RevealOnScroll
              key={element.title}
              delay={index * 0.08}
              className={`h-full ${staggerClass}`}
            >
              <div
                className="group relative overflow-hidden h-full p-8 sm:p-10
                           bg-[#FAF7F2]/90 backdrop-blur-sm
                           border border-[#2C3E2D]/12 hover:border-[#DE5680]/60
                           rounded-tl-2xl rounded-tr-[2.5rem] rounded-bl-[2.5rem] rounded-br-2xl
                           shadow-[0_4px_20px_rgba(44,62,45,0.04)]
                           hover:shadow-[0_24px_45px_-12px_rgba(44,62,45,0.12)]
                           hover:-translate-y-2
                           transition-all duration-500 ease-out flex flex-col justify-between"
              >
                {/* Massive ultra-faint background numeral */}
                <span
                  aria-hidden="true"
                  className="absolute right-4 bottom-2 font-display text-7xl sm:text-8xl font-normal text-[#2C3E2D]/[0.04] group-hover:text-[#DE5680]/[0.08] select-none pointer-events-none transition-all duration-500 group-hover:scale-105"
                >
                  {element.numeral}
                </span>

                {/* Subtle sheen highlight on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Visual Anchor: Minimalistic thin-line icon */}
                  <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-[#2C3E2D]/5 text-[#2C3E2D] group-hover:bg-[#DE5680]/10 group-hover:text-[#DE5680] group-hover:scale-110 transition-all duration-500">
                    {element.icon}
                  </div>

                  {/* Title in Deep Forest Olive (#2C3E2D) */}
                  <h3 className="font-display font-normal text-2xl text-[#2C3E2D] mb-3 leading-snug group-hover:text-[#1F2C1F] transition-colors duration-300">
                    {element.title}
                  </h3>

                  {/* Description in Muted Earth tone (#5C5549) with relaxed line-height */}
                  <p className="font-sans font-light text-[15px] text-[#5C5549] leading-relaxed">
                    {element.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
