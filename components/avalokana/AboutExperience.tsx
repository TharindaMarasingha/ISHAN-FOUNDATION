"use client";
import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function AboutExperience() {
  return (
    <section className="py-24 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading
          align="center"
          heading="The Inner Immersion"
        />
        <RevealOnScroll delay={0.2} className="mt-12 mb-20">
          <p className="font-sans font-light text-xl text-heading leading-relaxed">
            Through silence, meditation, contemplative practices, mindful movement, nature immersion, experiential learning, self-inquiry, creative expression, community living, and service, participants reconnect with themselves and discover greater clarity, resilience, and purpose.
          </p>
        </RevealOnScroll>
      </div>

      <div className="px-6 md:px-12 max-w-5xl mx-auto w-full">
        <RevealOnScroll>
          <div className="
            relative
            bg-[#F9F7F1]
            p-12 md:p-16
            rounded-sm
            shadow-[0_8px_40px_rgba(120,100,70,0.15)]
            border-4 border-double border-stone-300/70
          ">
            {/* Top-left decorative quote */}
            <span
              className="absolute top-3 left-5 font-serif leading-none text-[#C49A76]/30 pointer-events-none select-none"
              style={{ fontSize: "7rem" }}
              aria-hidden
            >
              &ldquo;
            </span>

            {/* Bottom-right decorative quote */}
            <span
              className="absolute bottom-0 right-5 font-serif leading-none text-[#C49A76]/30 pointer-events-none select-none"
              style={{ fontSize: "7rem" }}
              aria-hidden
            >
              &rdquo;
            </span>

            <blockquote className="relative z-10 font-display italic text-2xl md:text-3xl text-[#2C3E2D] leading-relaxed text-center">
              &ldquo;Rather than offering an escape from everyday life, Antahakarana Avalokana prepares individuals to return to their families, communities, and professions with renewed awareness, responsibility, and compassion.&rdquo;
            </blockquote>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
