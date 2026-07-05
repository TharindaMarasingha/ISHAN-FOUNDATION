import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { InteractiveBentoGallery, MediaItemType } from "../ui/interactive-bento-gallery";

const OBJECTIVES: MediaItemType[] = [
  { 
    id: 1, 
    type: "image",
    title: "Pristine Wisdom", 
    desc: "Disseminating profound spiritual sciences and universal truths.",
    url: "https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=70&w=800&auto=format",
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
  },
  { 
    id: 2, 
    type: "image",
    title: "Preventive Wellness", 
    desc: "Establishing holistic practices for lifelong health.",
    url: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=70&w=800&auto=format",
    span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  { 
    id: 3, 
    type: "image",
    title: "Proactive Wellbeing", 
    desc: "Empowering individuals to take charge of their mental and energetic states.",
    url: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=70&w=800&auto=format",
    span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  { 
    id: 4, 
    type: "image",
    title: "Productive Welfare", 
    desc: "Creating sustainable models for community upliftment.",
    url: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=70&w=800&auto=format",
    span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  { 
    id: 5, 
    type: "image",
    title: "Collective Consciousness", 
    desc: "Raising global awareness through shared contemplative practices.",
    url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=70&w=800&auto=format",
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
  },
  { 
    id: 6, 
    type: "image",
    title: "Shared Responsibilities", 
    desc: "Fostering a culture of duty towards society and the environment.",
    url: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=70&w=800&auto=format",
    span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  { 
    id: 7, 
    type: "image",
    title: "Coherent Communities", 
    desc: "Building harmonious, spiritually-aligned living spaces.",
    url: "/images/objective-07-communities.jpg",
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
  },
  { 
    id: 8, 
    type: "image",
    title: "Sustainable Systems", 
    desc: "Designing ecologically restorative and self-sustaining models.",
    url: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=70&w=800&auto=format",
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
  },
];

export function EightObjectives() {
  return (
    <section 
      className="relative pt-24 pb-20 px-6 md:px-12 overflow-hidden z-20"
      style={{
        background: 'linear-gradient(180deg, #FFF7F0 0%, #FDF7F1 20%, #F5EBE1 100%)' // Warm gradient matching FourPillars
      }}
    >
      {/* Sacred Geometry Background Pattern */}
      <div 
        className="absolute inset-0 z-0 opacity-10 pointer-events-none mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg stroke='%23C9A84C' stroke-width='0.5' fill='none' fill-rule='evenodd'%3E%3Ccircle cx='60' cy='60' r='50'/%3E%3Ccircle cx='60' cy='60' r='30'/%3E%3Cpolygon points='60,10 103,35 103,85 60,110 17,85 17,35'/%3E%3Ccircle cx='60' cy='60' r='2' fill='%23C9A84C'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "120px 120px",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Bottom SVG Layer Break (Inverted) */}
      <div className="absolute bottom-[-1px] left-0 w-full leading-[0] z-10 pointer-events-none rotate-180">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" className="w-full h-[60px] md:h-[80px]">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,0 L0,0 Z" fill="#FCF6F0"/>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-20">
        <div className="mb-12">
          <SectionHeading
            align="center"
            eyebrow="Strategic Framework"
            heading="Eight Objectives"
          />
        </div>

        <InteractiveBentoGallery mediaItems={OBJECTIVES} />
      </div>
    </section>
  );
}
