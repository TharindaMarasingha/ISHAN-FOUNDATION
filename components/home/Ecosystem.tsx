"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionIllustration } from "../ui/SectionIllustration";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import Link from "next/link";
import Image from "next/image";
import { EcosystemCard as EcosystemCardType } from "@/lib/types";
import { motion, useReducedMotion } from "framer-motion";

type EcosystemData = EcosystemCardType & { image: string, cardBackground: string };

const ECOSYSTEM_CARDS: EcosystemData[] = [
  {
    tag: "FROM PANCHA TATTVA TO SAMPURNA SATTVA",
    title: "Samanvaya",
    subtitle: "ISHAN's Flagship Transformational Retreat",
    description: "ISHAN's flagship transformational retreat inspired by the timeless wisdom of the five elements, guiding participants toward integrated wellbeing and complete human development.",
    href: "/samanvaya",
    accentColor: "#8B4513",
    image: "/images/sn1.webp",
    cardBackground: "rgba(252, 243, 235, 0.85)",
  },
  {
    tag: "PREVENTIVE WELLNESS · PROACTIVE WELLBEING",
    title: "Arogya Ashram International",
    subtitle: "AAI — Holistic Wellness Initiative",
    description: "Dedicated to promoting holistic health through preventive wellness, lifestyle education, yoga, meditation, breathwork, mindful movement, nutrition, stress management, and integrative wellbeing practices.",
    href: "/arogya",
    accentColor: "#C9A84C",
    image: "/images/ecosystem-arogya.webp",
    cardBackground: "rgba(255, 248, 235, 0.85)",
  },
  {
    tag: "THE INNER IMMERSION",
    title: "Antahakarana Avalokana",
    subtitle: "ISHAN's Signature Immersive Experience",
    description: "A signature immersive experience designed for profound self-discovery, inner reflection, holistic wellbeing, and conscious transformation through silence, meditation, and contemplative practice.",
    href: "/avalokana",
    accentColor: "#2C5F4A",
    image: "/images/ecosystem-uss.webp",
    cardBackground: "rgba(240, 248, 244, 0.85)",
  },
  {
    tag: "A DIVINE SPIRITUAL WELLNESS TOWNSHIP",
    title: "Sri Vrindavan",
    subtitle: "A Vision for Conscious Community Living",
    description: "ISHAN's long-term vision for creating a living model of conscious and sustainable community life — an integrated spiritual wellness township where individuals and families can live in harmony with nature.",
    href: "/sri-vrindavan",
    accentColor: "#4A3728",
    image: "/images/ecosystem-vrindavan.webp",
    cardBackground: "rgba(245, 240, 235, 0.85)",
  },
];

function EcosystemCard({ card, index, delay }: { card: EcosystemData; index: number; delay: number }) {
  const imageLeft = index % 2 === 0;
  const shouldReduceMotion = useReducedMotion();

  return (
    <RevealOnScroll delay={delay} viewportAmount={0.05} className="w-full">
      <Link href={card.href} className="group/link block outline-none hover:-translate-y-1 transition-transform duration-300">
        <div 
          className="flex flex-col md:flex-row w-full min-h-[380px] rounded-[20px] overflow-hidden border border-black/8 relative"
          style={{ 
            backgroundColor: card.cardBackground
          }}
        >
          
          {/* IMAGE HALF */}
          <div className={`w-full md:w-1/2 relative h-[250px] md:h-auto overflow-hidden ${imageLeft ? 'md:order-1' : 'md:order-2'}`}>
            <motion.div 
              className="absolute inset-0 w-full h-full"
              initial={{ x: imageLeft ? -40 : 40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
               <Image 
                 src={card.image} 
                 alt={card.title} 
                 fill 
                 sizes="(max-width: 768px) 100vw, 50vw"
                 className="object-cover object-center group-hover/link:scale-105 transition-transform duration-700 ease-out" 
               />
            </motion.div>
            
          </div>

          {/* CONTENT HALF */}
          <div className={`w-full md:w-1/2 py-[48px] px-[40px] flex flex-col justify-start items-start relative ${imageLeft ? 'md:order-2' : 'md:order-1'}`}>
            
            {card.title === "Samanvaya" && (
              <div 
                className="absolute top-[48px] right-[40px] flex items-center gap-[6px] rounded-full border border-[#9C3F00]/20 z-10"
                style={{ 
                  backgroundColor: 'rgba(255,241,230,0.85)',
                  padding: '5px 12px' 
                }}
              >
                <div className="relative flex items-center justify-center w-[9px] h-[9px]">
                  {!shouldReduceMotion && (
                    <span 
                      className="absolute inset-0 rounded-full bg-[#D96C00] opacity-40 animate-ping"
                      style={{ animationDuration: '2s' }}
                    />
                  )}
                  <motion.div 
                    className="relative w-[9px] h-[9px] rounded-full bg-[#D96C00]"
                    animate={shouldReduceMotion ? {} : { 
                      scale: [1, 1.3, 1],
                      opacity: [1, 0.4, 1] 
                    }}
                    transition={shouldReduceMotion ? {} : { 
                      duration: 1.8, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                  />
                </div>
                <span className="text-primary text-[10.5px] uppercase font-sans tracking-[0.05em] font-medium leading-none mt-[1px]">
                  IN PROGRESS
                </span>
              </div>
            )}

            <span 
              className="inline-block border font-sans text-[11px] uppercase tracking-[0.2em] rounded-full px-4 py-1.5"
              style={{ borderColor: card.accentColor, color: card.accentColor }}
            >
              {card.tag}
            </span>

            <h3 className="font-forum text-[32px] text-heading font-normal mt-4">
              {card.title}
            </h3>

            <p className="font-sans italic text-[14px] text-primary mt-1">
              {card.subtitle}
            </p>

            <p className="font-sans font-light text-[15px] text-heading/80 leading-[1.7] mt-5 line-clamp-3">
              {card.description}
            </p>

            <div 
              className="font-sans font-medium text-[13px] mt-auto pt-6 flex items-center"
              style={{ color: card.accentColor }}
            >
              Explore {card.title.split(' ')[0]} 
              <span className="ml-1.5 inline-block transition-transform duration-300 group-hover/link:translate-x-[4px]">→</span>
            </div>

          </div>

        </div>
      </Link>
    </RevealOnScroll>
  );
}

export function Ecosystem() {
  console.log("Total ecosystem cards rendering:", ECOSYSTEM_CARDS.length);
  
  return (
    <section 
      id="ecosystem" 
      className="pt-[100px] pb-20 px-6 md:px-12"
      style={{
        backgroundColor: '#FCF6F0'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 relative flex justify-center text-center">
          <SectionIllustration
            variant="wave"
            className="absolute -top-12 -left-4 w-32 h-32 text-primary opacity-10 pointer-events-none"
          />
          <SectionHeading
            align="center"
            eyebrow="Our Ecosystem"
            heading="One Vision. Multiple Initiatives. Shared Purpose."
            description="ISHAN functions through a growing ecosystem of specialised initiatives, each serving a unique purpose while contributing to a shared mission."
          />
        </div>

        <div className="flex flex-col gap-16">
          {ECOSYSTEM_CARDS.map((card, index) => (
            <EcosystemCard key={card.title} card={card} index={index} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
