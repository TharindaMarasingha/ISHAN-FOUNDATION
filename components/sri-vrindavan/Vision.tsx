"use client";

import React, { useState } from "react";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

interface MasterplanNode {
  id: string;
  x: number;
  y: number;
  radius: number;
  category: string;
  name: string;
  description: string;
  color: string;
}

const MASTERPLAN_NODES: MasterplanNode[] = [
  {
    id: "residential",
    x: 68,
    y: 28,
    radius: 3.5,
    category: "Residential Ecology",
    name: "Carbon-Neutral Residential Clusters",
    description:
      "Bio-architectural dwellings powered by clean solar micro-grids and living materials.",
    color: "#DE5680",
  },
  {
    id: "core",
    x: 50,
    y: 50,
    radius: 4.5,
    category: "Sacred Epicenter",
    name: "Vastu Core & Sacred Stupa",
    description:
      "Cosmologically aligned sanctuary anchored at the geometric heart of the township.",
    color: "#2C3E2D",
  },
  {
    id: "agrarian",
    x: 28,
    y: 66,
    radius: 3.5,
    category: "Regenerative Living",
    name: "Organic Agrarian Zones",
    description:
      "Regenerative permaculture food forests, heirloom crops, and medicinal herb gardens.",
    color: "#5C8151",
  },
  {
    id: "medical",
    x: 72,
    y: 70,
    radius: 3.5,
    category: "Integrative Wellness",
    name: "Integrative Medical Facilities",
    description:
      "Ayurvedic clinics, preventive therapies, and holistic wellbeing pavilions.",
    color: "#DE5680",
  },
  {
    id: "sanctuaries",
    x: 30,
    y: 28,
    radius: 3.5,
    category: "Contemplative Space",
    name: "Silent Meditative Sanctuaries",
    description:
      "Dedicated stillness spaces and reflection waterways for deep inner awakening.",
    color: "#2C3E2D",
  },
];

export function Vision() {
  const prefersReducedMotion = useReducedMotion();
  const [activeNodeIndex, setActiveNodeIndex] = useState<number | null>(null);
  const [isGraphicHovered, setIsGraphicHovered] = useState(false);

  return (
    <section className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        {/* Left Column: Masterplan Copy with High-Contrast Typography */}
        <div className="flex flex-col space-y-8">
          <RevealOnScroll className="flex flex-col items-start">
            <span className="font-sans text-xs md:text-sm font-semibold tracking-[0.28em] uppercase text-[#7A8D75] mb-4 block">
              THE MASTERPLAN
            </span>
            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-[3.25rem] text-[#2C3E2D] leading-[1.18]">
              A Blueprint for the Future of Human Settlement
            </h2>
          </RevealOnScroll>

          <RevealOnScroll delay={0.1}>
            <p className="font-sans font-light text-[#4A5B4D] leading-relaxed text-base md:text-lg">
              Sri Vrindavan Project is not merely a real estate development; it
              is an architectural and sociological manifestation of ISHAN&apos;s
              core philosophies. Designed as a self-sustaining ecosystem, the
              township integrates advanced ecological infrastructure with
              ancient spatial design principles (Vastu and Sacred Geometry).
            </p>
          </RevealOnScroll>

          <RevealOnScroll delay={0.2}>
            <p className="font-sans font-light text-[#4A5B4D] leading-relaxed text-base md:text-lg">
              Here, the built environment serves as a conduit for human
              elevation. From carbon-neutral residential clusters and organic
              agrarian zones to state-of-the-art integrative medical facilities
              and silent meditative sanctuaries—every acre is purposefully
              planned to foster a community living in conscious harmony with
              nature and one another.
            </p>
          </RevealOnScroll>
        </div>

        {/* Right Column: Interactive Sacred Geometry Medallion Graphic */}
        <RevealOnScroll
          delay={0.25}
          className="relative w-full max-w-[460px] mx-auto aspect-square flex items-center justify-center p-4 sm:p-6"
        >
          {/* Medallion Card with Warm Diffuse Drop Shadow */}
          <div
            onMouseEnter={() => setIsGraphicHovered(true)}
            onMouseLeave={() => {
              setIsGraphicHovered(false);
              setActiveNodeIndex(null);
            }}
            className="relative w-full h-full rounded-full bg-gradient-to-b from-[#FAF7F2] via-[#F7F2E9] to-[#F1E9DC] 
                       border border-[#2C3E2D]/12 
                       shadow-[0_24px_60px_-15px_rgba(68,48,32,0.16),0_8px_20px_rgba(68,48,32,0.08)]
                       flex items-center justify-center p-6 sm:p-8 select-none transition-shadow duration-500 hover:shadow-[0_30px_70px_-15px_rgba(68,48,32,0.22)]"
          >
            {/* Subtle inner engraved ring */}
            <div className="absolute inset-3 sm:inset-4 rounded-full border border-[#2C3E2D]/[0.06] pointer-events-none" />

            <svg
              viewBox="0 0 100 100"
              className="w-full h-full relative z-10 overflow-visible"
            >
              {/* 1. Rotating Orbit Ring (Continuous 28s compass rotation) */}
              <motion.g
                animate={prefersReducedMotion ? {} : { rotate: 360 }}
                transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "50px 50px" }}
              >
                <circle
                  cx="50"
                  cy="50"
                  r="44"
                  fill="none"
                  stroke="#2C3E2D"
                  strokeOpacity="0.22"
                  strokeWidth="0.6"
                  strokeDasharray="2.5 3"
                />
                {/* Celestial cardinal tick marks */}
                <circle cx="50" cy="6" r="0.8" fill="#DE5680" opacity="0.7" />
                <circle cx="94" cy="50" r="0.8" fill="#DE5680" opacity="0.7" />
                <circle cx="50" cy="94" r="0.8" fill="#DE5680" opacity="0.7" />
                <circle cx="6" cy="50" r="0.8" fill="#DE5680" opacity="0.7" />
              </motion.g>

              {/* 2. Counter-Rotating Subtle Guide Ring */}
              <motion.circle
                cx="50"
                cy="50"
                r="38"
                fill="none"
                stroke="#7A8D75"
                strokeOpacity="0.2"
                strokeWidth="0.4"
                strokeDasharray="1 4"
                animate={prefersReducedMotion ? {} : { rotate: -360 }}
                transition={{ duration: 42, repeat: Infinity, ease: "linear" }}
                style={{ transformOrigin: "50px 50px" }}
              />

              {/* 3. Sacred Geometry: Central Concentric Rings */}
              <circle
                cx="50"
                cy="50"
                r="18"
                fill="#2C3E2D"
                fillOpacity="0.03"
                stroke="#2C3E2D"
                strokeOpacity="0.18"
                strokeWidth="0.4"
              />
              <circle
                cx="50"
                cy="50"
                r="8"
                fill="#DE5680"
                fillOpacity="0.04"
                stroke="#DE5680"
                strokeOpacity="0.2"
                strokeWidth="0.4"
              />

              {/* 4. Isometric Cube Lines (Line Illumination on hover) */}
              <g
                className="transition-all duration-500"
                stroke={isGraphicHovered ? "#2C3E2D" : "#5C8151"}
                strokeOpacity={isGraphicHovered ? 0.75 : 0.35}
                strokeWidth={isGraphicHovered ? 0.75 : 0.6}
              >
                {/* Outer Hexagon */}
                <polygon
                  points="50,16 79,33 79,67 50,84 21,67 21,33"
                  fill="none"
                />

                {/* Inner 3D Cube Edges (Radiating from center) */}
                <line x1="50" y1="50" x2="50" y2="16" />
                <line x1="50" y1="50" x2="79" y2="67" />
                <line x1="50" y1="50" x2="21" y2="67" />

                {/* Subtle Vastu Geometric Ray Dividers */}
                <line
                  x1="50"
                  y1="50"
                  x2="79"
                  y2="33"
                  strokeDasharray="1.5 2"
                  strokeOpacity={0.25}
                />
                <line
                  x1="50"
                  y1="50"
                  x2="21"
                  y2="33"
                  strokeDasharray="1.5 2"
                  strokeOpacity={0.25}
                />
                <line
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="84"
                  strokeDasharray="1.5 2"
                  strokeOpacity={0.25}
                />
              </g>

              {/* 5. Interactive Pulsing Nodes */}
              {MASTERPLAN_NODES.map((node, index) => {
                const isActive = activeNodeIndex === index;

                return (
                  <g
                    key={node.id}
                    className="cursor-pointer"
                    onMouseEnter={() => setActiveNodeIndex(index)}
                    onClick={() => setActiveNodeIndex(index)}
                  >
                    {/* Breathing / Pulsing Outer Halo */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={node.radius + 3.5}
                      fill="none"
                      stroke={isActive ? "#DE5680" : node.color}
                      strokeWidth="0.6"
                      animate={
                        prefersReducedMotion
                          ? {}
                          : {
                              scale: isActive ? [1, 1.4, 1] : [1, 1.15, 1],
                              opacity: isActive ? [0.6, 1, 0.6] : [0.25, 0.6, 0.25],
                            }
                      }
                      transition={{
                        duration: isActive ? 1.6 : 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: index * 0.35,
                      }}
                      style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                    />

                    {/* Interactive Node Dot */}
                    <motion.circle
                      cx={node.x}
                      cy={node.y}
                      r={node.radius}
                      fill={isActive ? "#DE5680" : node.color}
                      animate={{
                        scale: isActive ? 1.25 : 1,
                      }}
                      transition={{ duration: 0.25 }}
                      style={{ transformOrigin: `${node.x}px ${node.y}px` }}
                      className="drop-shadow-sm"
                    />

                    {/* Inner highlight glint */}
                    <circle
                      cx={node.x - 0.8}
                      cy={node.y - 0.8}
                      r={1.2}
                      fill="#FFFFFF"
                      opacity={0.65}
                    />
                  </g>
                );
              })}
            </svg>

            {/* 6. Interactive Floating Tooltip (Hover Discovery) */}
            <div className="absolute -bottom-5 sm:-bottom-6 left-1/2 -translate-x-1/2 w-full max-w-[320px] px-2 pointer-events-none z-30">
              <AnimatePresence mode="wait">
                {activeNodeIndex !== null ? (
                  <motion.div
                    key={activeNodeIndex}
                    initial={{ opacity: 0, y: 8, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="p-4 rounded-2xl bg-[#FAF7F2] border border-[#2C3E2D]/15 shadow-[0_16px_35px_rgba(68,48,32,0.18)] backdrop-blur-md text-center"
                  >
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DE5680] animate-pulse" />
                      <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-semibold text-[#7A8D75]">
                        {MASTERPLAN_NODES[activeNodeIndex].category}
                      </span>
                    </div>
                    <p className="font-display text-[15px] font-normal text-[#2C3E2D] leading-snug">
                      {MASTERPLAN_NODES[activeNodeIndex].name}
                    </p>
                    <p className="font-sans text-xs text-[#4A5B4D] mt-1 leading-relaxed">
                      {MASTERPLAN_NODES[activeNodeIndex].description}
                    </p>
                  </motion.div>
                ) : (
                  <motion.div
                    key="hint"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="py-1.5 px-4 rounded-full bg-[#FAF7F2]/90 border border-[#2C3E2D]/10 shadow-sm text-center mx-auto w-max"
                  >
                    <span className="font-sans text-[11px] text-[#4A5B4D]/80 tracking-wider flex items-center justify-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#DE5680]" />
                      Hover or tap nodes to explore masterplan zones
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
