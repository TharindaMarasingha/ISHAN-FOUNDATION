"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X, Expand } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";

// ← Change image paths here
const objectiveImages = [
  'https://images.unsplash.com/photo-1507699622108-4be3abd695ad?q=70&w=800&auto=format',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=70&w=800&auto=format',
  'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=70&w=800&auto=format',
  'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?q=70&w=800&auto=format',
  'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=70&w=800&auto=format',
  'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=70&w=800&auto=format',
  '/images/objective-07-communities.jpg', // Local image exists
  'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=70&w=800&auto=format',
];

const OBJECTIVES = [
  { 
    id: 1, 
    type: "image",
    title: "Pristine Wisdom", 
    desc: "Preserving and applying timeless knowledge for modern life",
    url: objectiveImages[0],
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
  },
  { 
    id: 2, 
    type: "image",
    title: "Preventive Wellness", 
    desc: "Encouraging healthy lifestyles before illness develops",
    url: objectiveImages[1],
    span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  { 
    id: 3, 
    type: "image",
    title: "Proactive Wellbeing", 
    desc: "Supporting physical, mental, emotional, social, and spiritual wellbeing",
    url: objectiveImages[2],
    span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  { 
    id: 4, 
    type: "image",
    title: "Productive Welfare", 
    desc: "Creating sustainable opportunities that empower people and communities",
    url: objectiveImages[3],
    span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  { 
    id: 5, 
    type: "image",
    title: "Collective Consciousness", 
    desc: "Cultivating awareness that individual wellbeing connects to collective wellbeing",
    url: objectiveImages[4],
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
  },
  { 
    id: 6, 
    type: "image",
    title: "Shared Responsibilities", 
    desc: "Encouraging every individual to become an active contributor to societal progress",
    url: objectiveImages[5],
    span: "md:col-span-1 md:row-span-2 sm:col-span-1 sm:row-span-2",
  },
  { 
    id: 7, 
    type: "image",
    title: "Coherent Communities", 
    desc: "Building compassionate, collaborative, and resilient communities",
    url: objectiveImages[6],
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
  },
  { 
    id: 8, 
    type: "image",
    title: "Sustainable Systems", 
    desc: "Designing long-term systems that balance human development with environmental responsibility",
    url: objectiveImages[7],
    span: "md:col-span-2 md:row-span-2 sm:col-span-2 sm:row-span-2",
  },
];

export function EightObjectives() {
  const [activeImage, setActiveImage] = useState<{ src: string; title: string } | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize(); // Check on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle ESC key to close modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveImage(null);
    };
    if (activeImage) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeImage]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (activeImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = ""; 
    }
    return () => { document.body.style.overflow = ""; };
  }, [activeImage]);

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

        {/* Gallery Grid */}
        <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-3 auto-rows-[200px]"
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: { staggerChildren: 0.1 }
                }
            }}
        >
            {OBJECTIVES.map((item, index) => (
                <motion.div
                    key={item.id}
                    className={`relative overflow-hidden rounded-2xl cursor-pointer group ${item.span}`}
                    style={{ willChange: "transform, opacity" }}
                    onClick={() => setActiveImage({ src: item.url, title: item.title })}
                    variants={{
                        hidden: { y: 50, scale: 0.9, opacity: 0 },
                        visible: {
                            y: 0,
                            scale: 1,
                            opacity: 1,
                            transition: {
                                type: "spring",
                                stiffness: 350,
                                damping: 25,
                                delay: index * 0.05
                            }
                        }
                    }}
                    whileHover={{ scale: 1.02 }}
                >
                    <Image 
                      src={item.url} 
                      fill 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                      alt={item.title} 
                    />

                    {/* Visual Hint (Expand Icon) */}
                    <div className="absolute top-4 left-4 z-20">
                        <Expand className={`w-5 h-5 text-white transition-opacity duration-300 ${isMobile ? 'opacity-60' : 'opacity-0 group-hover:opacity-100'}`} />
                    </div>

                    <div
                        className="absolute inset-0 flex flex-col justify-between p-5 pointer-events-none"
                    >
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />
                        
                        {/* Number / Top Right */}
                        <div className="relative z-10 self-end">
                          <span className="font-forum text-5xl text-white/50">{String(item.id).padStart(2, '0')}</span>
                        </div>
                        
                        {/* Text Bottom */}
                        <div className="relative z-10 mt-auto">
                            <h3 className="text-white text-lg sm:text-xl font-display uppercase tracking-widest font-medium mb-1 line-clamp-2">
                                {item.title}
                            </h3>
                            <p className="text-white/80 font-light text-sm sm:text-base mt-1 line-clamp-3">
                                {item.desc}
                            </p>
                        </div>
                    </div>
                </motion.div>
            ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ 
              backgroundColor: "rgba(0,0,0,0.92)",
              backdropFilter: "blur(8px)"
            }}
            onClick={() => setActiveImage(null)}
          >
            {/* Close Button */}
            <button
                className="absolute top-4 right-4 md:top-8 md:right-8 z-[60] flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-200"
                style={{ backgroundColor: "rgba(255,255,255,0.15)" }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.25)"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.15)"}
                onClick={(e) => { e.stopPropagation(); setActiveImage(null); }}
            >
                <X className="w-5 h-5 text-white" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full max-w-3xl mx-auto flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image Container */}
              <div 
                className="relative w-full overflow-hidden rounded-lg shadow-2xl bg-black/50"
                style={{ height: isMobile ? "50vh" : "70vh" }}
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
                
                {/* Title Bar at bottom */}
                <div 
                  className="absolute bottom-0 left-0 right-0 px-[20px] py-[16px]"
                  style={{ background: "linear-gradient(transparent, rgba(0,0,0,0.8))" }}
                >
                  <h3 className="font-forum text-white text-[18px]">
                    {activeImage.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
