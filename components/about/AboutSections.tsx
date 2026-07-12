"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";
import { motion, useInView } from "framer-motion";

function TypewriterText({ text, className }: { text: string; className?: string }) {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block mr-[0.25em]">
          {word.split("").map((char, charIndex) => {
            const absoluteIndex = words.slice(0, wordIndex).join("").length + charIndex;
            return (
              <motion.span
                key={charIndex}
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.1, delay: absoluteIndex * 0.02 + 0.3 }}
              >
                {char}
              </motion.span>
            );
          })}
        </span>
      ))}
    </p>
  );
}

export function OurStorySection() {
  return (
    <section className="py-24 px-6 max-w-6xl mx-auto relative">
      <SectionHeading heading="Our Story" align="center" />

      <RevealOnScroll delay={0.2}>
        <div className="mt-20 flex flex-col md:flex-row gap-12 items-start justify-between relative z-10" style={{ minHeight: "600px" }}>
          
          {/* LEFT COLUMN (55%) */}
          <div className="w-full md:w-[55%] flex flex-col gap-12">
            {/* Pull-quote style for first paragraph */}
            <div className="border-l-[4px] border-[#C9984A] pl-8 max-w-[480px]">
              <TypewriterText 
                text="Every generation inherits challenges. Some challenge our bodies. Some challenge our minds. Some challenge our relationships. Some challenge our economies. Some challenge our values."
                className="font-display italic text-[26px] text-[#3C2114] leading-[1.7]"
              />
            </div>

            {/* Second + third paragraphs */}
            <div className="flex flex-col gap-6 font-sans font-light text-[15px] text-[#66594F] leading-[1.8] max-w-xl">
              <p>
                And today, perhaps more than ever, humanity faces the challenge of living in harmony with itself and with nature.
              </p>
              <p>
                ISHAN was founded in response to this need. Not as another organisation. Not as another wellness centre. Not as another educational institution. But as a living ecosystem dedicated to integrating wisdom, wellness, leadership, sustainability, and conscious action into practical solutions that create lasting impact.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN (45%) */}
          <div className="w-full md:w-[45%] flex justify-center md:justify-start order-first md:order-last mb-12 md:mb-0">
            <div className="relative group cursor-pointer hover:-translate-y-1 hover:translate-x-1 transition-all duration-700">
              {/* Frame outline */}
              <div className="absolute -inset-3 border border-transparent transition-all duration-700 md:-inset-4 group-hover:border-[#C9984A]/30 group-hover:scale-[1.01]" />

              {/* Image container */}
              <div className="relative w-[320px] h-[240px] overflow-hidden md:w-[560px] md:h-[420px] shrink-0 shadow-none group-hover:shadow-[0_24px_64px_rgba(60,33,20,0.15)] transition-all duration-700">
                <img
                  src="/images/about-story.jpg"
                  alt="Our Story"
                  className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                {/* Corner accents */}
                <div className="absolute left-3 top-3 h-6 w-px bg-white/80 opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 origin-top transition-all duration-500 delay-[50ms] pointer-events-none" />
                <div className="absolute left-3 top-3 h-px w-6 bg-white/80 opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 origin-left transition-all duration-500 delay-[100ms] pointer-events-none" />
                <div className="absolute bottom-3 right-3 h-6 w-px bg-white/80 opacity-0 group-hover:opacity-100 scale-y-0 group-hover:scale-y-100 origin-bottom transition-all duration-500 delay-[150ms] pointer-events-none" />
                <div className="absolute bottom-3 right-3 h-px w-6 bg-white/80 opacity-0 group-hover:opacity-100 scale-x-0 group-hover:scale-x-100 origin-right transition-all duration-500 delay-[200ms] pointer-events-none" />
              </div>
            </div>
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
}

export function VisionMissionSection() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col gap-12 relative">
        {/* Vertical connector line */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[2px] h-[60px] bg-gradient-to-b from-[#D89E4D] via-[#A46A2B] to-[#D89E4D] opacity-50 z-10"></div>

        {/* VISION ROW */}
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row items-center min-h-[300px] gap-12">
            {/* Left side: Content (60%) */}
            <div className="w-full md:w-[60%] relative py-8">
              <div className="absolute right-0 top-1/2 -translate-y-1/2 font-display text-[140px] text-[#D89E4D] opacity-10 leading-none select-none">
                01
              </div>
              <div className="relative z-10">
                <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#A46A2B] mb-3">
                  Our Vision
                </div>
                <div className="w-[40px] h-[2px] bg-[#D89E4D] mb-8"></div>
                <h3 className="font-display text-[42px] text-[#3C2114] mb-6">Vision</h3>
                <p className="font-display italic text-[17px] text-[#66594F] leading-[1.8] max-w-lg">
                  To cultivate a world where humanity and nature exist in conscious harmony through wisdom, wellness, compassion, responsibility, and sustainable living.
                </p>
              </div>
            </div>
            
            {/* Right side: Orb (40%) */}
            <div className="w-full md:w-[40%] flex justify-center">
              <div 
                className="flex items-center justify-center rounded-full"
                style={{
                  width: "300px",
                  height: "300px",
                  background: "radial-gradient(circle, rgba(216,158,77,0.15) 0%, rgba(216,158,77,0.05) 50%, transparent 70%)",
                  border: "1px dashed rgba(216,158,77,0.3)"
                }}
              >
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#D89E4D] opacity-80">
                  <path d="M12 2c-3.1 3-5.2 6.5-6.3 10.5-.3 1.2-.5 2.5-.5 3.5 0 3.9 3.1 7 7 7s7-3.1 7-7c0-1-.2-2.3-.5-3.5C17.2 8.5 15.1 5 12 2z"/>
                  <path d="M12 2c-.6 4.3 1.1 8 4 11 1.7 1.8 4 3 6 3-2.6-3.8-5.3-6.5-10-14z"/>
                  <path d="M12 2c.6 4.3-1.1 8-4 11-1.7 1.8-4 3-6 3 2.6-3.8 5.3-6.5 10-14z"/>
                </svg>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* MISSION ROW */}
        <RevealOnScroll delay={0.15}>
          <div className="flex flex-col md:flex-row-reverse items-center min-h-[300px] gap-12">
            {/* Right side: Content (60%) */}
            <div className="w-full md:w-[60%] relative py-8 flex flex-col md:items-end md:text-right">
              <div className="absolute left-0 top-1/2 -translate-y-1/2 font-display text-[140px] text-[#A46A2B] opacity-10 leading-none select-none">
                02
              </div>
              <div className="relative z-10 flex flex-col md:items-end">
                <div className="font-sans text-[10px] uppercase tracking-[0.2em] text-[#D89E4D] mb-3">
                  Our Mission
                </div>
                <div className="w-[40px] h-[2px] bg-[#A46A2B] mb-8"></div>
                <h3 className="font-display text-[42px] text-[#3C2114] mb-6">Mission</h3>
                <p className="font-display italic text-[17px] text-[#66594F] leading-[1.8] max-w-lg">
                  To inspire, educate, and empower individuals, institutions, organizations, and communities through integrated initiatives that promote holistic wellbeing, ethical leadership, environmental stewardship, conscious living, and sustainable development.
                </p>
              </div>
            </div>
            
            {/* Left side: Orb (40%) */}
            <div className="w-full md:w-[40%] flex justify-center">
              <div 
                className="flex items-center justify-center rounded-full"
                style={{
                  width: "300px",
                  height: "300px",
                  background: "radial-gradient(circle, rgba(164,106,43,0.12) 0%, rgba(164,106,43,0.04) 50%, transparent 70%)",
                  border: "1px dashed rgba(164,106,43,0.3)"
                }}
              >
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-[#A46A2B] opacity-80">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  <path d="M2 12h20" />
                </svg>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function OurPurposeSection() {
  const purposes = [
    "To preserve timeless wisdom.",
    "To promote preventive wellness.",
    "To cultivate proactive wellbeing.",
    "To develop conscious leaders.",
    "To strengthen families and communities.",
    "To protect and regenerate nature.",
    "To build resilient institutions.",
    "To inspire collective responsibility.",
    "To create a sustainable future for generations to come."
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading heading="Our Purpose" align="center" />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {purposes.map((p, i) => (
          <RevealOnScroll key={i} delay={i * 0.08}>
            <div 
              className="group flex flex-col transition-all duration-300 ease-in-out transform hover:-translate-y-[5px] h-full"
              style={{
                background: "rgba(248,242,235,0.65)", // Warm Ivory #F8F2EB with opacity
                backdropFilter: "blur(10px)",
                border: "1px solid rgba(216,158,77,0.2)",
                borderTop: "3px solid #D89E4D",
                borderRadius: "16px",
                padding: "28px 24px"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 12px 40px rgba(58,34,21,0.08)";
                e.currentTarget.style.borderTopColor = "#A46A2B";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.borderTopColor = "#D89E4D";
              }}
            >
              <div className="text-[#C9984A] text-[12px] mb-4">◆</div>
              <p className="font-sans font-normal text-[14px] text-[#66594F] leading-[1.6]">
                {p}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

export function OurPhilosophySection() {
  const paragraphs = [
    "Everything in existence is interconnected. Humanity cannot flourish without nature. Nature cannot be protected without responsible humanity.",
    "Knowledge becomes valuable only when applied. Leadership becomes meaningful only through service.",
    "Wellbeing becomes complete only when body, mind, intellect, resources, and consciousness evolve together.",
    "Institutions become enduring only when built upon purpose, systems, responsible management, and sustainability.",
    "This philosophy guides every initiative, programme, partnership, and decision within ISHAN."
  ];

  return (
    <section className="py-24 px-6 mt-12">
      <div className="max-w-5xl mx-auto">
        <SectionHeading heading="Our Philosophy" align="center" />
        <div className="mt-20 flex flex-col">
          {paragraphs.map((text, i) => {
            const number = `0${i + 1}`;
            const isFirst = i === 0;
            const isLast = i === paragraphs.length - 1;

            return (
              <RevealOnScroll key={i} delay={i * 0.1}>
                <div 
                  className="group flex flex-col md:flex-row items-start md:items-center py-[40px] transition-colors duration-300 hover:bg-[rgba(216,158,77,0.04)] px-6 -mx-6 md:px-8 md:-mx-8 rounded-2xl"
                  style={{
                    borderBottom: !isLast ? "1px solid rgba(216,158,77,0.15)" : "none"
                  }}
                >
                  {/* Number (Left, 15%) */}
                  <div className="w-full md:w-[15%] mb-4 md:mb-0">
                    <span className="font-display text-[48px] md:text-[80px] font-normal leading-none transition-colors duration-300 text-[rgba(216,158,77,0.25)] group-hover:text-[#D89E4D]">
                      {number}
                    </span>
                  </div>
                  
                  {/* Content (Right, 85%) */}
                  <div className="w-full md:w-[85%] transition-transform duration-300 ease-in-out group-hover:translate-x-[8px]">
                    {isFirst ? (
                      <div className="font-display italic">
                        <p className="font-sans font-normal text-[18px] text-[#3C2114] leading-[1.85] font-display italic">
                          "{text}"
                        </p>
                      </div>
                    ) : isLast ? (
                      <p className="font-sans font-normal italic text-[16px] text-[#A46A2B] leading-[1.85]">
                        {text}
                      </p>
                    ) : (
                      <p className="font-sans font-light text-[16px] text-[#66594F] leading-[1.85]">
                        {text}
                      </p>
                    )}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CoreBeliefsSection() {
  const beliefs = [
    { number: "01", title: "Humanity and Nature are interconnected." },
    { number: "02", title: "Wisdom becomes meaningful through application." },
    { number: "03", title: "Prevention is more valuable than cure." },
    { number: "04", title: "Wellbeing extends beyond physical health." },
    { number: "05", title: "Leadership begins with self-mastery." },
    { number: "06", title: "Communities flourish through collaboration." },
    { number: "07", title: "Innovation should serve humanity." },
    { number: "08", title: "Sustainability begins with responsibility." },
    { number: "09", title: "Service is the highest expression of wisdom." },
    { number: "10", title: "Every action should contribute to future generations." }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading heading="Core Beliefs" align="center" />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {beliefs.map((b, index) => {
          const isOdd = index % 2 === 0; // index 0 is item 1 (odd)
          const bgDefault = isOdd ? "rgba(255,255,255,0.7)" : "rgba(201,168,76,0.05)";

          return (
            <RevealOnScroll key={b.number} delay={index * 0.05}>
              <div 
                className="group flex flex-col justify-start rounded-[16px] transition-all duration-300 ease-in-out transform hover:-translate-y-[3px]"
                style={{
                  background: bgDefault,
                  border: "1px solid rgba(201,168,76,0.15)",
                  padding: "24px"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.4)";
                  e.currentTarget.style.background = "rgba(201,168,76,0.08)";
                  e.currentTarget.style.boxShadow = "0 8px 24px rgba(42,20,8,0.07)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "rgba(201,168,76,0.15)";
                  e.currentTarget.style.background = bgDefault;
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div className="flex flex-row items-start gap-4">
                  <div className="flex-shrink-0 flex items-center justify-center w-[36px] h-[36px] rounded-full border border-sacredGold/30 bg-sacredGold/10">
                    <span className="font-display text-[14px] text-sacredGold pt-0.5">{b.number}</span>
                  </div>
                  <span className="font-sans font-normal text-[14px] text-deepAmber leading-[1.6] pt-1.5">{b.title}</span>
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}

export function CoreValuesSection() {
  const values = [
    "Integrity", "Wisdom", "Compassion", "Authenticity", "Respect", 
    "Responsibility", "Service", "Collaboration", "Sustainability", 
    "Innovation", "Humility", "Excellence"
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 10 },
    visible: { opacity: 1, scale: 1, y: 0 },
  };

  // Group into 3 rows for the asymmetric layout
  const row1 = values.slice(0, 4);
  const row2 = values.slice(4, 8);
  const row3 = values.slice(8, 12);

  const getPillStyle = (globalIndex: number) => {
    // Alternate styles based on global index (1-based for the math in prompt)
    const pos = globalIndex + 1;
    if ([1, 4, 7, 10].includes(pos)) {
      return { border: "rgba(201,168,76,0.4)", bg: "rgba(201,168,76,0.1)" };
    } else if ([2, 5, 8, 11].includes(pos)) {
      return { border: "rgba(156,63,0,0.3)", bg: "rgba(156,63,0,0.06)" };
    } else {
      return { border: "rgba(46,26,14,0.2)", bg: "rgba(46,26,14,0.04)" };
    }
  };

  const renderPill = (v: string, i: number) => {
    const style = getPillStyle(i);
    return (
      <motion.div 
        variants={itemVariants}
        key={i} 
        className="transition-all duration-300 ease-out transform cursor-default flex items-center justify-center hover:-translate-y-[4px]"
        style={{
          background: style.bg,
          backdropFilter: "blur(8px)",
          border: `1px solid ${style.border}`,
          borderRadius: "9999px",
          padding: "12px 28px",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "#C9A84C"; // brightens
          e.currentTarget.style.boxShadow = "0 8px 20px rgba(201,168,76,0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = style.border;
          e.currentTarget.style.boxShadow = "none";
        }}
      >
        <span className="font-sans font-normal text-[11px] uppercase tracking-[0.15em] text-deepAmber">{v}</span>
      </motion.div>
    );
  };

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <SectionHeading heading="Core Values" align="center" />
      <RevealOnScroll delay={0.2}>
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 flex flex-col gap-6"
        >
          {/* Row 1 - Left */}
          <div className="flex flex-wrap justify-start gap-4">
            {row1.map((v, idx) => renderPill(v, idx))}
          </div>
          {/* Row 2 - Center */}
          <div className="flex flex-wrap justify-center gap-4">
            {row2.map((v, idx) => renderPill(v, idx + 4))}
          </div>
          {/* Row 3 - Right */}
          <div className="flex flex-wrap justify-end gap-4">
            {row3.map((v, idx) => renderPill(v, idx + 8))}
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
}

export function IshanWaySection() {
  const steps = [
    { title: "Learn", desc: "Acquire timeless knowledge and contemporary understanding." },
    { title: "Practice", desc: "Develop disciplines that cultivate health, awareness, character, and resilience." },
    { title: "Transform", desc: "Experience meaningful personal and professional growth through consistent practice." },
    { title: "Serve", desc: "Apply wisdom to benefit families, communities, institutions, humanity, and nature." },
    { title: "Inspire", desc: "Become a catalyst for positive and sustainable change." }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-deepAmber/[0.02] border-y border-burntOrange/10 mb-24">
      <SectionHeading heading="The ISHAN Way" align="center" />
      <div className="mt-16 flex flex-col gap-6 max-w-4xl mx-auto">
        {steps.map((s, i) => (
           <RevealOnScroll key={i} delay={i * 0.1}>
             <div className="flex flex-col md:flex-row gap-6 items-start md:items-center p-8 bg-white border border-burntOrange/20 rounded-2xl shadow-sm">
               <div className="font-display text-2xl text-burntOrange min-w-[140px] uppercase tracking-widest">{s.title}</div>
               <div className="text-deepAmber font-sans font-light text-lg">{s.desc}</div>
             </div>
           </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

export function OurCommitmentSection() {
  const commitments = [
    "We are committed to preserving wisdom.",
    "Promoting wellbeing.",
    "Strengthening communities.",
    "Protecting nature.",
    "Developing conscious leaders.",
    "Building sustainable institutions.",
    "Inspiring collective responsibility.",
    "Serving present and future generations with humility, integrity, and purpose."
  ];

  return (
    <section 
      className="py-32 px-6 bg-darkBrown text-center relative"
      style={{
        WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)",
        maskImage: "linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)"
      }}
    >
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/who-we-serve-bg.png')" }} />
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* TOP: Large centered display text */}
        <h2 className="font-display font-light text-[56px] text-white mb-8">Our Commitment</h2>
        <div className="w-[80px] h-[1px] bg-sacredGold mx-auto mb-16"></div>

        <RevealOnScroll delay={0.2}>
          <ul className="flex flex-col text-left max-w-2xl mx-auto mb-20">
             {commitments.map((c, i) => (
               <li 
                 key={i} 
                 className="group flex items-start py-[16px] border-b border-white/10 last:border-b-0 cursor-default transition-colors duration-250 hover:bg-[rgba(201,168,76,0.04)] px-4 -mx-4 rounded-md"
               >
                 <span className="font-sans text-[12px] text-sacredGold mr-4 mt-1 flex-shrink-0 transition-transform duration-250 group-hover:scale-[1.4]">◆</span> 
                 <span className="font-sans font-light text-[15px] text-white/80 leading-[1.7] transition-colors duration-250 group-hover:text-[#F5D98A]">{c}</span>
               </li>
             ))}
          </ul>
        </RevealOnScroll>
        
        <RevealOnScroll delay={0.4}>
          <div className="relative pt-12 max-w-2xl mx-auto">
            {/* Separator line */}
            <div className="w-full h-[1px] bg-white/10 my-8"></div>
            
            {/* Large decorative quotation mark */}
            <div 
              className="absolute top-8 left-1/2 -translate-x-1/2 font-display text-[180px] text-sacredGold opacity-8 leading-none select-none z-0"
              aria-hidden="true"
            >
              "
            </div>
            
            <p className="relative z-10 font-display italic text-[22px] text-sacredGold leading-[1.7]">
              "Because when humanity and nature flourish together, everyone benefits."
            </p>
            <div className="relative z-10 mt-6 font-sans text-[11px] text-white/45 uppercase tracking-[0.18em]">
              — ISHAN Foundation
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
