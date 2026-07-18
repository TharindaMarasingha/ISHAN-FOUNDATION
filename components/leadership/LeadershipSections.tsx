"use client";

import React, { useState, useEffect, useRef } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { motion, AnimatePresence, useInView, useReducedMotion } from "framer-motion";
import Image from "next/image";

export function PhilosophySection() {
  const points = [
    "Humility over ego.",
    "Service over status.",
    "Responsibility over recognition.",
    "Collaboration over competition.",
    "Legacy over short-term success."
  ];

  return (
    <section className="py-24 px-6 max-w-4xl mx-auto text-center">
      <SectionHeading heading="A Philosophy of Stewardship" align="center" />
      
      <RevealOnScroll delay={0.2}>
        <div className="mt-16 mb-16 pt-12 border-t border-burntOrange/20">
          <p className="font-display italic text-3xl md:text-4xl text-burntOrange leading-relaxed max-w-3xl mx-auto">
            &quot;A steward does not ask, What can I gain? A steward asks, What can I preserve, protect, develop, and pass on?&quot;
          </p>
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.4}>
        <ul className="space-y-4 max-w-xl mx-auto text-left md:text-center flex flex-col items-center">
          {points.map((p, i) => (
             <li key={i} className="flex items-center text-xl font-sans font-light text-deepAmber">
               <span className="text-sacredGold mr-4">✦</span> <span>{p}</span>
             </li>
          ))}
        </ul>
      </RevealOnScroll>
    </section>
  );
}

const TEAM = [
  {
    archetype: "The Grandmaster (The Guardian)",
    role: "Purpose & Institutional Integrity",
    name: "Sevakanand Ji 'Buddhu'",
    initials: "SJ",
    description: "Vision · Purpose · Wisdom · Ethics · Institutional Integrity · Research & Development · Leadership Philosophy · Long-term Legacy · Quality & Standards",
    isAnchor: true,
    image: "/images/ima.webp"
  },
  {
    archetype: "Master Mentor",
    role: "Learning & Education",
    name: "Dr. Hon. S. Kobayashi (Yogeshwari)",
    initials: "SK",
    description: "Education · Mentorship · Leadership Development · Research · Curriculum Design · Knowledge Systems · Character Development · Institutional Learning",
    isAnchor: false,
    image: "/images/imb.webp"
  },
  {
    archetype: "Master Coach",
    role: "Transformation & Wellbeing",
    name: "Master Indrani Sharma (Adiyogini)",
    initials: "IS",
    description: "Coaching · Training · Programme Delivery · Retreat Design · Facilitation · Experiential Learning · Holistic Wellbeing · Personal Transformation",
    isAnchor: false,
    image: "/images/imc.webp"
  },
  {
    archetype: "Business Alchemist",
    role: "Institutional Excellence",
    name: "Ranga Soysa",
    initials: "RS",
    description: "Strategic Planning · Institutional Development · Governance · Operations · Systems Management · Financial Planning · Sustainability · International Operations",
    isAnchor: false,
    image: "/images/imd.webp"
  },
  {
    archetype: "Growth Catalyst",
    role: "Growth & Partnerships",
    name: "Mansoor Ali",
    initials: "MA",
    description: "Business Development · Strategic Partnerships · International Collaboration · Community Development · Brand Growth · Resource Mobilisation · Outreach",
    isAnchor: false,
    image: "/images/ime.webp"
  }
];

export function CircleOfStewardsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMember = TEAM[activeIndex];

  return (
    <section 
      className="pt-[100px] pb-24 px-6 md:px-12 relative overflow-hidden"
      style={{
        background: 'linear-gradient(160deg, #FFF8F2 0%, #FDF0E6 40%, #FFF8F2 70%, #FAE8D4 100%)'
      }}
    >
      <motion.img 
        src="/ff.svg"
        alt=""
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 0.08, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute left-[-50px] top-[2%] w-[280px] h-auto pointer-events-none z-0"
      />
      <div className="max-w-screen-xl mx-auto relative z-10">
        <div className="mb-20 max-w-4xl mx-auto text-center relative flex justify-center">
          <SectionHeading
            align="center"
            heading="The Circle of Stewards"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-16 items-start">
          
          {/* LEFT SIDE — FEATURED SPOTLIGHT CARD */}
          <div className="w-full md:w-[55%] relative min-h-[480px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`overflow-hidden relative bg-[rgba(255,255,255,0.75)] border border-[rgba(201,168,76,0.3)] rounded-[24px] px-8 py-10 md:px-[40px] md:py-[48px] min-h-[480px] flex flex-col ${activeMember.isAnchor ? 'border-t-4 border-t-[#C9A84C]' : ''}`}
              >
                {activeMember.image && (
                  <>
                    <Image
                      src={activeMember.image}
                      alt={activeMember.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover object-center z-0"
                    />
                    <div 
                      className="absolute inset-0 z-10"
                      style={{
                        background: 'linear-gradient(to bottom, rgba(0,0,0,0.0) 0%, rgba(0,0,0,0.15) 40%, rgba(20,8,2,0.82) 70%, rgba(20,8,2,0.95) 100%)'
                      }}
                    />
                  </>
                )}
                
                <div className="relative z-20 flex flex-col items-start justify-end flex-grow">
                  <h4 className="font-forum italic text-[16px] text-[#C9A84C] mb-[4px]">
                    {activeMember.archetype}
                  </h4>

                  <p className="font-sans text-[11px] uppercase tracking-[0.15em] text-[rgba(255,255,255,0.6)] mb-[12px]">
                    Stewardship: {activeMember.role}
                  </p>

                  <h3 className="font-forum text-[36px] font-[400] text-white leading-[1.1] mb-[16px]">
                    {activeMember.name}
                  </h3>

                  <div className="w-[40px] h-[1.5px] bg-[#C9A84C] mb-[16px]" />

                  <p className="font-sans font-[300] text-[15px] text-[rgba(255,255,255,0.7)] leading-[1.8]">
                    <span className="font-medium text-[#C9A84C]">Key Areas:</span> {activeMember.description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* RIGHT SIDE — MEMBER SELECTOR LIST */}
          <div className="w-full md:w-[45%] flex flex-row md:flex-col gap-3 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x">
            {TEAM.map((member, index) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`flex items-center gap-3 w-[260px] sm:w-[280px] md:w-full flex-shrink-0 snap-start text-left px-[20px] py-[16px] rounded-[12px] transition-all duration-250 ease-in-out ${
                    isActive
                      ? "bg-[rgba(255,255,255,0.7)] border border-[rgba(201,168,76,0.35)] shadow-[0_2px_12px_rgba(42,20,8,0.08)]"
                      : "bg-transparent border border-[rgba(201,168,76,0.12)] hover:border-[rgba(201,168,76,0.25)]"
                  }`}
                >
                  <div 
                    className={`w-[44px] h-[44px] flex-shrink-0 rounded-full flex items-center justify-center transition-colors duration-250 ${
                      isActive ? "border-2 border-[rgba(201,168,76,0.4)]" : "border-2 border-[rgba(201,168,76,0.15)]"
                    }`}
                    style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.3), rgba(156,63,0,0.2))' }}
                  >
                    <span className="font-forum text-[14px] text-[#2E1A0E]">{member.initials}</span>
                  </div>

                  <div className="flex-grow flex flex-col">
                    <span className="font-sans font-[500] text-[14px] text-[#2E1A0E]">{member.name}</span>
                    <span className="font-sans font-[300] text-[12px] text-[#8a7a6a] line-clamp-1 md:line-clamp-none">{member.role}</span>
                  </div>

                  {isActive && (
                    <div className="w-[6px] h-[6px] rounded-full bg-[#C9A84C] ml-2 flex-shrink-0 hidden md:block" />
                  )}
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}

export function GoldenCircleLeadershipSection() {
  const circles = [
    { title: "WHY", desc: "The Grandmaster — Protects the purpose. Preserves the wisdom. Guards the integrity." },
    { title: "HOW", desc: "The Masters — Develop people. Deliver transformation. Create future leaders." },
    { title: "WHAT", desc: "The Leaders — Build institutions. Expand partnerships. Create sustainable impact." }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading heading="The Golden Circle of Leadership" align="center" />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
        {circles.map((item, index) => (
          <RevealOnScroll key={item.title} delay={index * 0.15}>
            <Card className="h-full flex flex-col p-10 text-center border-t-4 border-t-burntOrange">
              <span className="font-display text-4xl text-burntOrange/30 mb-6">{item.title}</span>
              <p className="font-sans font-light text-deepAmber leading-relaxed text-lg flex-grow">
                {item.desc}
              </p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

function TypewriterQuote({ text, className }: { text: string; className: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    if (shouldReduceMotion) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplayedText(text);
      return;
    }
    if (isInView && !isTyping && displayedText.length === 0) {
      setIsTyping(true);
      let i = 0;
      const intervalId = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i === text.length) {
          clearInterval(intervalId);
          setIsTyping(false);
        }
      }, 35);
      return () => clearInterval(intervalId);
    }
  }, [isInView, text, shouldReduceMotion]);

  return (
    <p ref={ref} className={className}>
      {displayedText}
      <motion.span 
        animate={{ opacity: [1, 0] }} 
        transition={{ repeat: Infinity, duration: 0.7, ease: "linear" }}
        className={isTyping ? "inline-block" : "hidden"}
      >
        |
      </motion.span>
    </p>
  );
}

export function SharedCommitmentSection() {
  const tags = [
    "Preserve Wisdom", "Develop People", "Build Institutions", 
    "Strengthen Communities", "Protect Nature", "Inspire Conscious Leadership", 
    "Serve Humanity", "Create a Legacy for Future Generations"
  ];

  return (
    <section className="py-32 px-6 text-center overflow-hidden relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/leadership-commitment-bg.webp"
          alt="Leadership Commitment Background"
          fill
          className="object-cover"
          unoptimized
        />
      </div>
      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="font-display font-light text-4xl md:text-5xl text-sacredGold mb-16 [text-shadow:0_2px_14px_rgba(0,0,0,0.5),0_1px_4px_rgba(0,0,0,0.4)]">Our Shared Commitment</h2>
        
        <RevealOnScroll delay={0.2}>
          <div className="mt-12 flex flex-wrap justify-center gap-4 mb-20">
            {tags.map((t, i) => (
               <div key={i} className="px-6 py-4 rounded-full bg-[rgba(46,26,14,0.55)] backdrop-blur-sm border border-[rgba(201,168,76,0.3)] text-peach font-sans text-sm uppercase tracking-widest [text-shadow:0_2px_14px_rgba(0,0,0,0.5),0_1px_4px_rgba(0,0,0,0.4)]">
                 {t}
               </div>
            ))}
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <div className="pt-16 border-t border-sacredGold/20 min-h-[140px]">
            <TypewriterQuote 
              text='"This is the spirit of stewardship. This is the leadership philosophy of ISHAN."'
              className="font-display italic text-3xl md:text-4xl text-sacredGold leading-relaxed max-w-3xl mx-auto [text-shadow:0_2px_14px_rgba(0,0,0,0.5),0_1px_4px_rgba(0,0,0,0.4)]"
            />
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.6} className="mt-20 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Button href="/framework" variant="primary">Explore Our Framework</Button>
          <Button href="/contact" variant="ghost" className="!bg-[rgba(46,26,14,0.6)] backdrop-blur-sm !border-[1.5px] !border-solid !border-[rgba(245,217,138,0.7)] !text-[#FFF1E6] hover:!bg-[#F5D98A] hover:!text-[#4A2B18] hover:!border-[#F5D98A] transition-all">Connect With Us</Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
