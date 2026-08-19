"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const trailNodes = [
  {
    id: "mirissa",
    name: "Mirissa",
    element: "WATER",
    descriptor: "Flow",
    description: "Embrace the rhythm of the ocean. Mirissa offers a sanctuary of crashing waves, golden sands, and deep connection to the water element.",
    image: "/images/mirissan.webp",
    // Desktop C-curve positions
    position: { top: "15%", right: "20px" },
  },
  {
    id: "ella",
    name: "Ella",
    element: "AIR",
    descriptor: "Perspective",
    description: "Rise above the clouds in the misty highlands of Ella. Find clarity and new perspectives surrounded by lush tea estates and mountain breezes.",
    image: "/images/ellan.webp",
    position: { top: "32.5%", right: "80px" },
  },
  {
    id: "kandy",
    name: "Kandy",
    element: "EARTH",
    descriptor: "Root",
    description: "Ground yourself in the cultural heart of Sri Lanka. Kandy anchors your journey in ancient wisdom, sacred temples, and the deep roots of the island.",
    image: "/images/kandyn.webp",
    position: { top: "50%", right: "120px" },
  },
  {
    id: "sigiriya",
    name: "Sigiriya",
    element: "FIRE",
    descriptor: "Ascent",
    description: "Ignite your inner fire as you ascend the ancient rock fortress. Sigiriya is a testament to human will, energy, and the drive to rise higher.",
    image: "/images/sigiriyan.webp",
    position: { top: "67.5%", right: "80px" },
  },
  {
    id: "anuradhapura",
    name: "Anuradhapura",
    element: "EARTH",
    descriptor: "Memory",
    description: "Walk among millennia of history. Anuradhapura holds the silent memories of ancient kings, sacred bodhi trees, and a timeless stillness.",
    image: "/images/anun.webp",
    position: { top: "85%", right: "20px" },
  },
];

export function TopographicJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeNode = trailNodes[activeIndex];

  return (
    <section className="relative w-full h-[900px] md:h-screen min-h-[800px] max-h-[1200px] overflow-hidden bg-black text-white">
      
      {/* 1. Dynamic Background Images */}
      {trailNodes.map((node, index) => (
        <div 
          key={`bg-${node.id}`}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === activeIndex ? "opacity-100 z-0" : "opacity-0 -z-10"
          }`}
        >
          <Image
            src={node.image}
            alt={node.name}
            fill
            priority={index === 0}
            className="object-cover"
          />
        </div>
      ))}

      {/* 2. Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/70 via-black/20 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-black/10 z-0"></div>

      <div className="absolute inset-0 max-w-7xl mx-auto px-6 lg:px-12 z-10 flex flex-col md:flex-row h-full">
        
        {/* 3. Left Content Area */}
        <div className="w-full md:w-1/2 lg:w-5/12 h-full flex flex-col justify-end md:justify-center pb-32 md:pb-0 pt-20">
          
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/30 text-xs font-sans uppercase tracking-widest mb-6 w-max backdrop-blur-sm bg-black/20">
            Samanvaya Immersions
          </div>
          
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl leading-tight mb-6 text-white drop-shadow-lg">
            The island becomes part of the journey.
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-white/90 font-light leading-relaxed mb-10 drop-shadow-md min-h-[120px]">
            {activeNode.description}
          </p>
          
          <Link 
            href="#reserve"
            className="group flex items-center gap-3 w-max px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
          >
            <span className="font-sans text-sm uppercase tracking-widest font-medium">Explore Packages</span>
            <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* 4. Right Content Area (Desktop C-Curve) */}
        <div className="hidden md:block w-1/2 lg:w-7/12 h-full relative">
          
          {trailNodes.map((node, index) => {
            const isActive = index === activeIndex;
            return (
              <div 
                key={node.id}
                className="absolute flex items-center gap-4 transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group cursor-pointer"
                style={{
                  top: node.position.top,
                  right: node.position.right,
                  transform: 'translateY(-50%)'
                }}
                onClick={() => setActiveIndex(index)}
              >
                {/* Node Text (Left of Image) */}
                <div className={`text-right transition-all duration-500 ${isActive ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4 pointer-events-none'}`}>
                  <h3 className="font-display text-2xl text-white drop-shadow-md">
                    {node.name}
                  </h3>
                  <div className="font-sans text-[10px] uppercase tracking-widest text-white/70 drop-shadow-md">
                    {node.element} <span className="opacity-50">·</span> {node.descriptor}
                  </div>
                </div>

                {/* Node Image (Circle) */}
                <div className={`relative rounded-full overflow-hidden transition-all duration-500 shadow-2xl ${
                  isActive 
                    ? "w-28 h-28 ring-[6px] ring-white/30 scale-110" 
                    : "w-20 h-20 opacity-70 group-hover:opacity-100 group-hover:scale-110"
                }`}>
                  <Image
                    src={node.image}
                    alt={node.name}
                    fill
                    className="object-cover"
                    sizes="112px"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* 5. Right Edge Dot Navigation (Desktop) */}
      <div className="hidden md:flex absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 flex-col gap-4 z-20">
        {trailNodes.map((_, index) => (
          <button
            key={`dot-${index}`}
            onClick={() => setActiveIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === activeIndex ? "bg-white scale-125" : "bg-white/30 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* 6. Mobile Horizontal Scroll Navigation */}
      <div className="md:hidden absolute bottom-8 left-0 w-full px-6 z-20">
        <div className="flex items-center gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {trailNodes.map((node, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={`mob-${node.id}`}
                onClick={() => setActiveIndex(index)}
                className={`snap-center shrink-0 relative rounded-full overflow-hidden transition-all duration-300 ${
                  isActive ? "w-20 h-20 ring-4 ring-white/40" : "w-16 h-16 opacity-60"
                }`}
              >
                <Image
                  src={node.image}
                  alt={node.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            );
          })}
        </div>
      </div>

    </section>
  );
}
