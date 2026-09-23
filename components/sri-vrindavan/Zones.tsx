"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const ZONES = [
  {
    number: "01",
    title: "Wellness & Healing Quarter",
    description:
      "Home to the Arogya Ashram, featuring integrative clinics, Ayurvedic centers, and therapeutic botanical gardens.",
  },
  {
    number: "02",
    title: "Spiritual & Temple Precinct",
    description:
      "The silent heart of the township, dedicated to meditation halls, sacred groves, and contemplative spaces.",
  },
  {
    number: "03",
    title: "Residential Conscious-Living",
    description:
      "Eco-friendly, Vastu-compliant homes designed for families and individuals committed to the community ethos.",
  },
  {
    number: "04",
    title: "Cultural & Arts Hub",
    description:
      "An open amphitheater, artisan workshops, and galleries celebrating indigenous crafts and conscious expression.",
  },
  {
    number: "05",
    title: "Organic Farms & Nature Reserve",
    description:
      "Extensive permaculture zones providing farm-to-table nourishment and preserving local biodiversity.",
  },
  {
    number: "06",
    title: "Education & Research Center",
    description:
      "The physical campus for Universal Spiritual Science (USS), fostering learning across all generations.",
  },
];

export function Zones() {
  return (
    <section className="py-28 px-6 md:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20">
          <SectionHeading
            align="center"
            eyebrow="The Ecosystem"
            heading="Township Zones & Quarters"
            description="The 150 acres are meticulously divided into interdependent zones, forming a living organism that sustains and elevates its inhabitants."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ZONES.map((zone, index) => (
            <RevealOnScroll
              key={zone.number}
              delay={index * 0.08}
              className="h-full"
            >
              <div
                className="group relative overflow-hidden h-full p-8 sm:p-10
                           bg-[#FAF7F2]/95 backdrop-blur-sm
                           border border-[#2C3E2D]/12 hover:border-[#DE5680]/50
                           rounded-2xl sm:rounded-3xl
                           shadow-[0_4px_20px_rgba(68,48,32,0.04)]
                           hover:shadow-[0_22px_45px_-10px_rgba(68,48,32,0.12)]
                           hover:-translate-y-2
                           transition-all duration-500 ease-out flex flex-col justify-between"
              >
                {/* Large Background Watermark in Bottom-Right (6-10% opacity) */}
                <span
                  aria-hidden="true"
                  className="font-display italic text-7xl sm:text-8xl absolute bottom-3 right-4 
                             text-[#2C3E2D]/[0.06] group-hover:text-[#DE5680]/[0.10]
                             pointer-events-none select-none transition-all duration-500 
                             group-hover:scale-105 group-hover:-translate-y-1"
                >
                  {zone.number}
                </span>

                {/* Content */}
                <div className="relative z-10 flex flex-col h-full justify-between">
                  <div>
                    {/* Delicate Editorial Overline */}
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DE5680]" />
                      <span className="font-sans text-[11px] font-semibold tracking-[0.24em] uppercase text-[#7A8D75]">
                        Zone {zone.number}
                      </span>
                    </div>

                    {/* Title: Deep Forest Olive (#2C3E2D) -> Brand Pink (#DE5680) on Hover */}
                    <h3 className="font-display uppercase tracking-wider text-lg sm:text-xl font-medium text-[#2C3E2D] group-hover:text-[#DE5680] mb-4 transition-colors duration-300 leading-snug">
                      {zone.title}
                    </h3>

                    {/* Description: Muted Earth (#4A5B4D) font-normal text-[15px] */}
                    <p className="font-sans font-normal text-[15px] text-[#4A5B4D] leading-relaxed">
                      {zone.description}
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
