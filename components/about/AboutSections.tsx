"use client";

import React from "react";
import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";
import { motion, useInView } from "framer-motion";
import { 
  ShieldCheck, 
  BookOpen, 
  Heart, 
  Fingerprint, 
  Users, 
  Hand, 
  Handshake, 
  Leaf, 
  Lightbulb, 
  User, 
  Star 
} from "lucide-react";

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
    <section className="relative w-full overflow-hidden">
      {/* Decorative flower SVG at absolute left of screen */}
      <img 
        src="/flower.svg" 
        alt="" 
        className="absolute top-0 left-0 w-32 md:w-48 lg:w-64 opacity-15 pointer-events-none select-none z-0"
        aria-hidden="true"
      />
      
      <div className="pt-12 pb-8 px-6 max-w-6xl mx-auto relative">
      <SectionHeading heading="Our Story" align="center" />

      <RevealOnScroll delay={0.2}>
        <div className="mt-12 flex flex-col md:flex-row gap-12 items-start justify-between relative z-10">
          
          {/* LEFT COLUMN (55%) */}
          <div className="w-full md:w-[55%] flex flex-col gap-12 relative">
            {/* Pull-quote style for first paragraph */}
            <div className="border-l-[4px] border-[#C9984A] pl-8 max-w-[480px] relative z-10">
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
      </div>
    </section>
  );
}

export function VisionMissionSection() {
  return (
    <section className="pt-8 pb-24 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="flex flex-col gap-12 relative">
        {/* Vertical connector line */}
        <div className="hidden md:block absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[2px] h-[60px] bg-gradient-to-b from-[#D89E4D] via-[#A46A2B] to-[#D89E4D] opacity-50 z-10"></div>

        {/* VISION ROW */}
        <RevealOnScroll>
          <div className="flex flex-col md:flex-row items-center min-h-[300px] gap-12">
            {/* Left side: Content (60%) */}
            <div className="w-full md:w-[60%] relative py-8">

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
            
            {/* Right side: Image (40%) */}
            <div className="w-full md:w-[40%] flex justify-center">
              <div className="relative w-[300px] h-[300px] rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-xl">
                <img 
                  src="/images/vision.jpg" 
                  alt="Vision" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>

        {/* MISSION ROW */}
        <RevealOnScroll delay={0.15}>
          <div className="flex flex-col md:flex-row-reverse items-center min-h-[300px] gap-12">
            {/* Right side: Content (60%) */}
            <div className="w-full md:w-[60%] relative py-8 flex flex-col md:items-end md:text-right">

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
            
            {/* Left side: Image (40%) */}
            <div className="w-full md:w-[40%] flex justify-center">
              <div className="relative w-[300px] h-[300px] rounded-tr-[80px] rounded-bl-[80px] overflow-hidden shadow-xl">
                <img 
                  src="/images/mission.jpg" 
                  alt="Mission" 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
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
    <section className="py-24 px-6 max-w-5xl mx-auto relative overflow-hidden">
      
      {/* Peacock SVG - right side decorative element */}
      <div className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[500px] h-[650px] pointer-events-none select-none z-0 opacity-20">
        <Image
          src="/peacock.svg"
          alt="Peacock decoration"
          fill
          className="object-contain object-right"
        />
      </div>

      <div className="relative z-10">
        <SectionHeading heading="Our Purpose" align="center" />
        <div className="mt-16 flex flex-col gap-6 max-w-3xl mx-auto">
        {purposes.map((p, i) => (
          <RevealOnScroll key={i} delay={i * 0.05}>
            <div className="flex items-start gap-4">
              <span className="text-[#C9984A] text-lg leading-none mt-1">✦</span>
              <p className="font-sans font-light text-[17px] text-[#66594F] leading-[1.8]">
                {p}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
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
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading row with wisdom SVG pinned to the left of it */}
        <div className="relative">
          {/* Wisdom SVG - left side, vertically centered on heading */}
          <div className="absolute left-[-220px] top-1/2 -translate-y-1/2 w-[380px] h-[420px] pointer-events-none select-none z-0 opacity-15">
            <Image
              src="/wisdom.svg"
              alt="Wisdom decoration"
              fill
              className="object-contain object-left"
            />
          </div>
          <SectionHeading heading="Our Philosophy" align="center" />
        </div>
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

// ── Sacred geometry lotus center ─────────────────────────────────────────────
function SacredCenter({ glowing }: { glowing: boolean }) {
  const S = 600, C = 300;
  // A beautiful abstract lotus pattern
  return (
    <div style={{ position: "relative", width: S, height: S, opacity: glowing ? 0.35 : 0.25, transition: 'opacity 0.6s ease' }}>
      <svg width="100%" height="100%" viewBox="0 0 100 100">
        <defs>
          <radialGradient id="lotusGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#C9984A" stopOpacity="0.4" />
            <stop offset="50%" stopColor="#C9984A" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#C9984A" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="45" fill="url(#lotusGrad)" />
        <g stroke="rgba(201,168,76,0.3)" strokeWidth="0.2" fill="none">
          {Array.from({ length: 12 }).map((_, i) => (
            <path key={i}
              d="M50 50 Q 65 30 50 10 Q 35 30 50 50"
              transform={`rotate(${i * 30} 50 50)`}
              fill="rgba(201,168,76,0.03)"
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <path key={i + 12}
              d="M50 50 Q 75 40 85 50 Q 75 60 50 50"
              transform={`rotate(${i * 30 + 15} 50 50)`}
              fill="rgba(201,168,76,0.05)"
            />
          ))}
          {Array.from({ length: 12 }).map((_, i) => (
            <circle key={i + 24} cx="50" cy="15" r="1.5" fill="rgba(201,168,76,0.2)" transform={`rotate(${i * 30} 50 50)`} />
          ))}
        </g>
      </svg>
    </div>
  );
}

// ── Floating golden dust particles ───────────────────────────────────────────
function FloatingParticles() {
  const particles = React.useMemo(() =>
    Array.from({ length: 22 }, (_, i) => {
      const a    = (i / 22) * 2 * Math.PI;
      const dist = 70 + (i % 3) * 58;
      const size = 1.2 + (i % 3) * 0.65;
      return {
        left: 320 + dist * Math.cos(a) - size / 2,
        top:  320 + dist * Math.sin(a) - size / 2,
        dx:   ((i % 5) - 2) * 15,
        dur:  3.6 + (i % 4),
        del:  -(i * 0.38),
        size,
      };
    }), []);

  return (
    <>
      {particles.map((p, i) => (
        <div key={i} className="absolute pointer-events-none rounded-full"
          style={{
            left: p.left, top: p.top,
            width: p.size, height: p.size,
            background: "rgba(201,168,76,0.55)",
            animation: `cvFloat ${p.dur}s ease-in-out ${p.del}s infinite`,
            ["--dx" as string]: `${p.dx}px`,
          }}
        />
      ))}
    </>
  );
}

// ── Core Values Section ───────────────────────────────────────────────────────
export function CoreValuesSection() {
  const values = [
    { label: "Integrity",       Icon: ShieldCheck, color: "rgba(180,150,100,0.5)" },
    { label: "Wisdom",          Icon: BookOpen,    color: "rgba(180,150,100,0.5)" },
    { label: "Compassion",      Icon: Heart,       color: "#FBBF24" }, // orange/gold
    { label: "Authenticity",    Icon: Fingerprint, color: "rgba(180,150,100,0.5)" },
{ label: "Respect",         Icon: Users,       color: "#F87171" }, // red
    { label: "Responsibility",  Icon: Hand,        color: "rgba(180,150,100,0.5)" },
    { label: "Service",         Icon: Handshake,   color: "rgba(180,150,100,0.5)" },
    { label: "Collaboration",   Icon: Users,       color: "rgba(180,150,100,0.5)" }, // using Users again
    { label: "Sustainability",  Icon: Leaf,        color: "#84CC16" }, // green
    { label: "Innovation",      Icon: Lightbulb,   color: "rgba(180,150,100,0.5)" },
    { label: "Humility",        Icon: User,        color: "#60A5FA" }, // blue
    { label: "Excellence",      Icon: Star,        color: "#F59E0B" }, // gold
  ];

  // Colors to outline/glow matching the design
  const defaultShadow = "0 3px 14px rgba(0,0,0,0.06)";

  const SIZE = 580, CX = SIZE/2, CY = SIZE/2, R = 220, INNER = 83;

  const rotRef   = React.useRef(0);
  const pauseRef = React.useRef(false);
  const lastRef  = React.useRef(0);
  const rafRef   = React.useRef(0);
  const [deg, setDeg]       = React.useState(0);
  const [hovered, setHov]   = React.useState<number | null>(null);
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const SPEED = 360 / 150_000; // one full rotation per 150 s
    const tick = (now: number) => {
      if (lastRef.current && !pauseRef.current) {
        rotRef.current = (rotRef.current + SPEED * (now - lastRef.current)) % 360;
        setDeg(rotRef.current);
      }
      lastRef.current = now;
      rafRef.current  = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Mount effect — runs only on client, prevents hydration mismatch
  React.useEffect(() => { setMounted(true); }, []);

  // Server / pre-hydration: render a size-matched placeholder with no dynamic values
  if (!mounted) {
    return (
      <section className="py-10 px-6 relative overflow-hidden flex flex-col justify-center min-h-[100vh]">
        <div className="max-w-5xl mx-auto">
          <SectionHeading heading="Core Values" align="center" />
          <div className="mt-10 flex justify-center">
            <div style={{ width: SIZE, height: SIZE }} />
          </div>
        </div>
      </section>
    );
  }

  const cards = values.map((v, i) => {
    const rad = ((i / 12) * 360 - 90 + deg) * (Math.PI / 180);
    return {
      ...v,
      x: CX + R * Math.cos(rad),
      y: CY + R * Math.sin(rad),
      i,
    };
  });

  return (
    <section className="py-10 px-6 relative overflow-hidden flex flex-col justify-center min-h-[100vh]">
      {/* Soft edge vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse 82% 82% at 50% 50%, transparent 52%, rgba(160,135,90,0.07) 100%)"
      }}/>

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeading heading="Core Values" align="center" />

        <div className="mt-10 flex justify-center">
          <div className="relative" style={{ width: SIZE, height: SIZE, maxWidth: "100%" }}>

            {/* Ambient centre radial glow */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div style={{
                width: 440, height: 440, borderRadius: "50%",
                background: "radial-gradient(circle, rgba(201,168,76,0.10) 0%, rgba(201,168,76,0.03) 52%, transparent 70%)",
                animation: "cvPulse 5s ease-in-out infinite",
              }}/>
            </div>

            {/* SVG — orbit rings + glowing spokes */}
            <svg className="absolute inset-0 w-full h-full"
              viewBox={`0 0 ${SIZE} ${SIZE}`} aria-hidden>
              <defs>
                <radialGradient id="spokeG" cx="50%" cy="50%" r="50%">
                  <stop offset="0%"   stopColor="#C9A84C" stopOpacity="0.58"/>
                  <stop offset="100%" stopColor="#C9A84C" stopOpacity="0.03"/>
                </radialGradient>
                <filter id="spkGlow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1.8" result="b"/>
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              {/* Spokes */}
              {cards.map(({ x, y, i }) => {
                const ra = Math.atan2(y - CY, x - CX);
                const ox = CX + (R - 55) * Math.cos(ra);
                const oy = CY + (R - 55) * Math.sin(ra);
                const isH = hovered === i;
                
                // Add dot along the spoke
                const dotX = CX + 140 * Math.cos(ra);
                const dotY = CY + 140 * Math.sin(ra);

                return (
                  <g key={i}>
                    <line 
                      x1={CX} y1={CY} x2={ox} y2={oy}
                      stroke="rgba(201,168,76,0.12)"
                      strokeWidth={1}
                    />
                    <circle cx={dotX} cy={dotY} r={1.5} fill="rgba(201,168,76,0.6)" />
                    {isH && (
                      <line 
                        x1={CX} y1={CY} x2={ox} y2={oy}
                        stroke="rgba(201,168,76,0.4)"
                        strokeWidth={2}
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Sacred geometry centre — breathes slowly */}
            <div className="absolute" style={{
              left: CX, top: CY,
              transform: "translate(-50%,-50%)",
              zIndex: 20,
            }}>
              <div style={{ animation: "cvBreath 5s ease-in-out infinite" }}>
                <SacredCenter glowing={hovered !== null}/>
              </div>
            </div>

            {/* Floating golden dust */}
            <FloatingParticles/>

            {/* Value glass cards */}
            {cards.map(({ label, Icon, color, x, y, i }) => (
              <div
                key={i}
                className="absolute"
                style={{
                  left: x, top: y,
                  transform: `translate(-50%,-50%)`, // Removing rotation keeps it perfectly upright
                  zIndex: 10,
                  willChange: "transform",
                }}
                onMouseEnter={() => { pauseRef.current = true;  setHov(i); }}
                onMouseLeave={() => { pauseRef.current = false; setHov(null); }}
              >
                {/* Floating breathing animation wrapper */}
                <div style={{
                  animation: hovered !== i ? `cvCardFloat ${4 + (i % 3)}s ease-in-out ${-(i * 0.5)}s infinite` : "none",
                }}>
                {/* Inner wrapper — handles hover lift independently */}
                <div style={{
                  transform: hovered === i ? "translateY(-8px) scale(1.08)" : "translateY(0) scale(1)",
                  transition: "transform 0.38s cubic-bezier(.34,1.56,.64,1)",
                }}>
                  <div
                    className="flex flex-col items-center justify-center gap-1.5 cursor-default select-none bg-white"
                    style={{
                      width: 110,
                      height: 55,
                      borderRadius: 30,
                      backdropFilter: "blur(14px)",
                      WebkitBackdropFilter: "blur(14px)",
                      border: `1px solid ${color}`,
                      boxShadow: hovered === i 
                        ? `0 10px 30px ${color.replace('0.5', '0.2').replace('rgb', 'rgba').replace(')', ', 0.3)')}, 0 0 0 1px ${color}` 
                        : `0 4px 20px ${color.replace('0.5', '0.1').replace('rgb', 'rgba').replace(')', ', 0.1)')}, 0 2px 8px rgba(0,0,0,0.02)`,
                      transition: "all 0.35s ease",
                    }}
                  >
                    {/* Symbol / icon */}
                    <Icon size={16} color={color.startsWith('rgba') ? '#A0720A' : color} strokeWidth={1.5} style={{
                      transform: hovered === i ? "scale(1.15)" : "scale(1)",
                      transition: "transform 0.3s ease",
                    }} />
                    {/* Label */}
                    <span style={{
                      fontSize: 8.5, letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "#3C2114", whiteSpace: "nowrap", fontWeight: 500,
                    }}>
                      {label}
                    </span>
                  </div>
                </div>
                </div>
              </div>
            ))}

            {/* Particles shooting towards hovered card */}
            {hovered !== null && Array.from({ length: 6 }).map((_, pi) => {
              const c = cards[hovered];
              const dx = c.x - CX;
              const dy = c.y - CY;
              return (
                <div key={`hp-${pi}`} className="absolute rounded-full pointer-events-none"
                  style={{
                    left: CX, top: CY,
                    width: 2.5, height: 2.5,
                    background: "rgba(201,168,76,0.9)",
                    boxShadow: "0 0 4px rgba(201,168,76,0.6)",
                    animation: `cvHoverParticle 1.2s ease-out ${pi * 0.15}s infinite`,
                    ["--hdx" as string]: `${dx}px`,
                    ["--hdy" as string]: `${dy}px`,
                    zIndex: 15,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>

      {/* Keyframes — scoped to section */}
      <style>{`
        @keyframes cvPulse  { 0%,100%{transform:scale(1);opacity:1}  50%{transform:scale(1.08);opacity:0.78} }
        @keyframes cvBreath { 0%,100%{transform:scale(1)}            50%{transform:scale(1.03)} }
        @keyframes cvCardFloat { 0%,100%{transform:translateY(0) scale(1)} 50%{transform:translateY(-3px) scale(1.02)} }
        @keyframes cvHoverParticle {
          0%   { transform:translate(0,0) scale(0.5); opacity:0 }
          20%  { opacity:1 }
          100% { transform:translate(var(--hdx),var(--hdy)) scale(0); opacity:0 }
        }
        @keyframes cvFloat  {
          0%   { transform:translateY(0) translateX(0);              opacity:0   }
          15%  { opacity:0.80 }
          80%  { opacity:0.40 }
          100% { transform:translateY(-58px) translateX(var(--dx));  opacity:0   }
        }
      `}</style>
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
