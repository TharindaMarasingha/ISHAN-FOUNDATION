"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export function CoreProgrammesSection() {
  const programmes = [
    {
      title: "Preventive Wellness",
      desc: "Yoga · Meditation · Pranayama · Breathwork · Mindful Movement · Nutrition · Stress Management · Sleep Awareness · Lifestyle Education. Practical habits for lifelong health, resilience, and vitality.",
      image: "/images/p1.webp",
      type: "large"
    },
    {
      title: "Conscious Leadership",
      desc: "Ethical decision-making · Emotional intelligence · Communication · Systems thinking · Responsibility · Resilience · Servant leadership. Leading self before leading others.",
      image: "/images/p2.webp",
      type: "standard"
    },
    {
      title: "Community Development",
      desc: "Collaboration · Volunteerism · Social innovation · Youth development · Women's wellbeing · Environmental responsibility · Local leadership.",
      image: "/images/p3.webp",
      type: "standard"
    },
    {
      title: "Proactive Wellbeing",
      desc: "Emotional balance · Mental clarity · Intellectual growth · Financial awareness · Purposeful living · Spiritual development. Helping individuals live balanced, meaningful, and fulfilling lives.",
      image: "/images/p4.webp",
      type: "small"
    },
    {
      title: "Wisdom Education",
      desc: "Timeless philosophy + contemporary sciences. Critical thinking · Ethical reasoning · Practical life skills · Conscious decision-making. Knowledge as a tool for transformation.",
      image: "/images/p5.webp",
      type: "small"
    },
    {
      title: "Nature-Based Learning",
      desc: "Nature immersion · Ecological awareness · Forest experiences · Sustainable living practices · Environmental stewardship · Regenerative thinking.",
      image: "/images/p6.webp",
      type: "standard-hero"
    },
    {
      title: "Retreats & Immersive Experiences",
      desc: "Antahakarana Avalokana (The Inner Immersion) · Samanvaya (From Pancha Tattva to Sampurna Sattva). Reflection, renewal, learning, and personal growth.",
      image: "/images/p7.webp",
      type: "banner"
    }
  ];

  return (
    <section className="pt-36 pb-40 md:py-32 px-6 bg-white border-b border-divider">
      <div className="max-w-7xl mx-auto">
        <SectionHeading heading="Core Programme Areas" align="center" />
        
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {programmes.map((prog, index) => {
            let gridClass = "lg:col-span-3 lg:row-span-1"; // default small
            if (prog.type === "large") gridClass = "lg:col-span-6 lg:row-span-2";
            else if (prog.type === "standard") gridClass = "lg:col-span-6 lg:row-span-1";
            else if (prog.type === "standard-hero") gridClass = "lg:col-span-6 lg:row-span-1";
            else if (prog.type === "banner") gridClass = "lg:col-span-12 lg:row-span-1";

            const isHero = prog.type === "large" || prog.type === "banner" || prog.type === "standard-hero";

            let minHeightClass = "";
            if (isHero) {
              if (prog.type === "large") minHeightClass = "md:min-h-[500px] lg:min-h-[600px]";
              else if (prog.type === "banner") minHeightClass = "md:min-h-[300px] lg:min-h-[400px]";
              else if (prog.type === "standard-hero") minHeightClass = "md:min-h-[300px] lg:min-h-[400px]";
            }

            return (
              <RevealOnScroll key={prog.title} delay={index * 0.1} className={`${gridClass} h-full`}>
                <Card className={`group/tile relative h-full flex flex-col overflow-hidden ${minHeightClass} ${isHero ? '!p-0 md:border-none' : 'max-md:!p-0 md:border-[0.5px] md:border-divider/50'}`}>
                  {/* Mobile Image (< 768px): visible on all tiles, full bleed, 16:10 aspect ratio */}
                  <div className="relative w-full aspect-[16/10] shrink-0 md:hidden overflow-hidden">
                    <img src={prog.image} alt={prog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/tile:scale-[1.02] object-center" />
                  </div>

                  {/* Desktop Standard Image (>= 768px): visible only for standard/small tiles */}
                  {!isHero && (
                    <div className="hidden md:block mb-6 relative w-full rounded-lg overflow-hidden flex-grow min-h-[200px]">
                      <img src={prog.image} alt={prog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover/tile:scale-[1.02] object-center" />
                    </div>
                  )}

                  {/* Desktop Background Image (>= 768px): visible only for hero tiles */}
                  {isHero && (
                    <>
                      <div className="hidden md:block absolute inset-0 z-0 overflow-hidden">
                        <img src={prog.image} alt={prog.title} className={`w-full h-full object-cover transition-transform duration-700 group-hover/tile:scale-[1.02] object-center`} />
                      </div>
                      <div className="hidden md:block absolute inset-0 z-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />
                    </>
                  )}

                  {prog.type === 'banner' ? (
                    <>
                      {/* Desktop: Quote Banner */}
                      <div className="hidden md:flex relative z-10 flex-col items-center justify-center h-full w-full p-8 md:p-12 mt-auto">
                        <p className="font-display italic text-3xl lg:text-4xl text-white text-center max-w-4xl leading-snug drop-shadow-lg">
                          To cultivate a world where humanity and nature exist in<br className="hidden md:block" /> conscious harmony...
                        </p>
                      </div>
                      {/* Mobile: Standard Title/Desc */}
                      <div className="md:hidden relative z-10 flex flex-col shrink-0 p-8">
                        <h3 className="font-display uppercase tracking-widest text-lg mb-4 border-b pb-2 inline-block self-start text-primary border-divider">
                          {prog.title}
                        </h3>
                        <p className="font-sans font-light leading-relaxed text-sm text-heading">
                          {prog.desc}
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className={`relative z-10 flex flex-col shrink-0 p-8 ${isHero ? 'md:p-12' : 'md:p-0'}`}>
                      <h3 className={`font-display uppercase tracking-widest text-lg mb-4 border-b pb-2 inline-block self-start ${isHero ? 'text-primary border-divider md:text-white md:border-white/30' : 'text-primary border-divider'}`}>
                        {prog.title}
                      </h3>
                      <p className={`font-sans font-light leading-relaxed text-sm ${isHero ? 'text-heading md:text-white/90' : 'text-heading'}`}>
                        {prog.desc}
                      </p>
                    </div>
                  )}
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProfessionalDevelopmentAndCertificationSection() {
  const tags = [
    "Educators", "Healthcare professionals", "Corporate leaders", 
    "Entrepreneurs", "Community facilitators", "Institutions", "Organisations"
  ];

  return (
    <section className="pt-36 pb-36 md:py-32 px-6 bg-white text-center relative overflow-hidden">
      {/* Decorative Flower */}
      <img 
        src="/flower.svg" 
        alt="" 
        className="hidden md:block absolute top-0 left-0 w-64 md:w-96 opacity-20 pointer-events-none"
        aria-hidden="true" 
      />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading heading="Professional Development & Certification" align="center" />
        
        <div className="mt-20 mb-16 md:mt-16 md:mb-12 px-2">
          <TypewriterText 
            text='"Our goal is not simply to certify individuals but to develop responsible practitioners who embody the values and philosophy of ISHAN."'
            className="font-display italic text-[28px] md:text-4xl text-primary leading-relaxed md:leading-relaxed max-w-3xl mx-auto"
          />
        </div>

        <RevealOnScroll delay={0.3}>
          <div className="flex flex-wrap justify-center gap-3 mb-16 md:mb-12">
            {tags.map((t, i) => (
               <div key={i} className="px-5 py-2.5 rounded-full bg-softAccent border border-primary text-heading font-sans text-xs uppercase tracking-widest">
                 {t}
               </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <p className="font-sans font-light text-lg md:text-xl text-heading leading-relaxed max-w-3xl mx-auto">
            We provide structured training pathways that bridge timeless knowledge with practical implementation. By combining theoretical understanding with experiential learning and mentorship, we prepare professionals to lead with competence, integrity, and a commitment to sustainable excellence.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function ProgrammesCTASection() {
  return (
    <section className="py-32 px-6 text-center overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: "url('/images/pd.webp')" }} />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/95 via-white/50 to-transparent" />
      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        <SectionHeading
          eyebrow="Take the Next Step"
          heading="Begin Your Journey"
          description="Join our programmes and experience the transformative power of practical wisdom."
          align="center"
        />
        <RevealOnScroll delay={0.2} className="mt-14 flex flex-col sm:flex-row justify-center gap-5 sm:gap-6 w-full max-w-[280px] sm:max-w-none mx-auto [&>div]:w-full sm:[&>div]:w-auto">
          <Button href="/ecosystem" variant="primary" className="w-full flex justify-center text-center">Explore Our Ecosystem</Button>
          <Button href="/contact" variant="ghost" className="w-full flex justify-center text-center">Connect With Us</Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}

function TypewriterText({ text, className }: { text: string; className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, idx) => (
        <motion.span
          key={idx}
          initial={{ opacity: 0, y: 10, filter: "blur(4px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 10, filter: "blur(4px)" }}
          transition={{ duration: 0.4, delay: idx * 0.08 }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </p>
  );
}
