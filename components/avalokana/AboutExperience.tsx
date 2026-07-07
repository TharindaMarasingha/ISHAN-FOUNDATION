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
          <p className="font-sans font-light text-xl text-deepAmber leading-relaxed">
            Through silence, meditation, contemplative practices, mindful movement, nature immersion, experiential learning, self-inquiry, creative expression, community living, and service, participants reconnect with themselves and discover greater clarity, resilience, and purpose.
          </p>
        </RevealOnScroll>
      </div>

      <section className="py-24 px-6 md:px-12 bg-deepAmber/[0.02] border-y border-mandarin/10 relative overflow-hidden flex items-center justify-center rounded-3xl max-w-5xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[15rem] md:text-[20rem] text-mandarin opacity-[0.03] pointer-events-none select-none leading-none">
          &ldquo;
        </div>
        <RevealOnScroll className="relative z-10 max-w-4xl mx-auto text-center">
          <blockquote className="font-display italic text-2xl md:text-3xl lg:text-4xl text-deepAmber leading-snug md:leading-snug">
            "Rather than offering an escape from everyday life, Antahakarana Avalokana prepares individuals to return to their families, communities, and professions with renewed awareness, responsibility, and compassion."
          </blockquote>
        </RevealOnScroll>
      </section>
    </section>
  );
}
