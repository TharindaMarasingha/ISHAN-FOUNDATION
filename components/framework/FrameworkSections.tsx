"use client";

import React from "react";
import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export function GoldenCircleSection() {
  const circles = [
    { title: "WHY", subtitle: "Our Purpose", desc: "To harmonise humanity and nature through wisdom, wellness, ethical leadership, sustainability, and conscious community development.", image: "/images/framework-why-bg.jpg" },
    { title: "HOW", subtitle: "Our Approach", desc: "Timeless Wisdom · Preventive Wellness · Holistic Wellbeing · Ethical Leadership · Research & Education · Sustainable Systems · Community Development · Environmental Stewardship · International Collaboration", image: "/images/framework-how-bg.jpg" },
    { title: "WHAT", subtitle: "Our Work", desc: "Educational Programmes · Retreats & Immersions · Leadership Development · Research & Publications · Community Initiatives · Environmental Projects · Institutional Partnerships · Conscious Living Experiences", image: "/images/framework-what-bg.jpg" }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <SectionHeading heading="Purpose Before Process. Meaning Before Method." align="center" />
        <RevealOnScroll delay={0.2}>
          <p className="mt-8 text-deepAmber font-sans font-light text-lg leading-relaxed">
            Every enduring institution begins with purpose. The ISHAN Golden Circle aligns every initiative with a clear sense of purpose before defining methods or programmes.
          </p>
        </RevealOnScroll>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {circles.map((item, index) => (
          <RevealOnScroll key={item.title} delay={index * 0.15}>
            <Card className="h-full !p-0 border-t-4 border-t-burntOrange text-center">
              <div className="absolute inset-0 z-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <div 
                  className="absolute inset-0"
                  style={{ background: 'radial-gradient(ellipse at center, rgba(255, 241, 230, 0.75) 0%, rgba(255, 241, 230, 0.45) 60%)' }}
                />
              </div>
              <div className="relative z-10 flex flex-col h-full p-8 sm:p-10">
                <span className="font-display text-4xl text-burntOrange/30 mb-2">{item.title}</span>
                <h3 className="font-display uppercase tracking-widest text-xl text-deepAmber mb-6 border-b border-burntOrange/20 pb-4 inline-block mx-auto">
                  {item.subtitle}
                </h3>
                <p className="font-sans font-light text-deepAmber leading-relaxed text-base flex-grow">
                  {item.desc}
                </p>
              </div>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

export function IkigaiSection() {
  const qa = [
    { q: "Why do we exist?", a: "To serve humanity and nature through wisdom, wellness, education, sustainability, and conscious leadership." },
    { q: "What does the world need?", a: "Health · Wisdom · Ethical leadership · Responsible institutions · Sustainable communities · Environmental stewardship · Collective responsibility." },
    { q: "What are we uniquely positioned to contribute?", a: "An integrated ecosystem combining ancient wisdom, modern sciences, holistic wellbeing, transformative education, leadership development, and sustainable community initiatives." },
    { q: "How do we sustain our mission?", a: "Through responsible governance, strategic partnerships, education, research, philanthropy, social enterprise, and long-term institutional stewardship." }
  ];

  return (
    <section className="relative py-24 px-6 bg-deepAmber/[0.02] border-y border-burntOrange/10 overflow-hidden">
      {/* Decorative flower SVG at absolute left */}
      <img 
        src="/flower.svg" 
        alt="" 
        className="absolute top-0 left-0 w-32 md:w-48 lg:w-64 opacity-[0.07] pointer-events-none select-none z-0"
        aria-hidden="true"
      />
      <div className="relative max-w-7xl mx-auto z-10">
        <SectionHeading heading="The Purpose of an Institution" align="center" />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {qa.map((item, index) => (
            <RevealOnScroll key={index} delay={index * 0.1}>
              <div className="flex flex-col p-8 bg-white rounded-2xl border border-burntOrange/10 shadow-sm h-full">
                <h4 className="font-display text-2xl text-burntOrange mb-4">{item.q}</h4>
                <p className="font-sans font-light text-lg text-deepAmber leading-relaxed">{item.a}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PurusharthaSection() {
  const aims = [
    { 
      title: "Dharma", 
      desc: "Purpose, ethics, integrity, and responsibility. Every decision must be guided by what is right and beneficial for humanity and nature.",
      image: "/images/framework-dharma-bg.jpg",
      alt: "Dharma — purpose and integrity"
    },
    { 
      title: "Artha", 
      desc: "Sustainable resources and institutional resilience. Financial strength enables long-term service and responsible growth.",
      image: "/images/framework-artha-bg.jpg",
      alt: "Artha — sustainable resources and resilience"
    },
    { 
      title: "Kama", 
      desc: "Meaningful aspiration, creativity, innovation, fulfilment, and human flourishing. Growth should enrich lives while remaining aligned with values.",
      image: "/images/framework-kama-bg.jpg",
      alt: "Kama — meaningful aspiration and human flourishing"
    },
    { 
      title: "Moksha", 
      desc: "The highest expression of institutional purpose — creating lasting impact, collective wellbeing, and a legacy that benefits future generations.",
      image: "/images/framework-moksha-bg.jpg",
      alt: "Moksha — highest expression of institutional purpose"
    }
  ];

  return (
    <section className="py-24 md:py-32 px-6 max-w-7xl mx-auto">
      <SectionHeading heading="Four Aims of a Conscious Institution" align="center" />
      <div className="mt-20 md:mt-32 flex flex-col gap-24 md:gap-32">
        {aims.map((aim, index) => {
          const isImageLeft = index % 2 !== 0; // Alternate: Dharma (img right), Artha (img left), etc.
          return (
            <div key={aim.title} className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 lg:gap-24 ${isImageLeft ? 'md:flex-row-reverse' : ''}`}>
              {/* Text Column */}
              <div className="flex-1 w-full order-2 md:order-none">
                <RevealOnScroll delay={0.1}>
                  <h3 className="font-display uppercase tracking-widest text-xl text-sacredGold mb-6">{aim.title}</h3>
                  <p className="font-sans font-light text-deepAmber leading-relaxed text-[17px] md:text-lg">
                    {aim.desc}
                  </p>
                </RevealOnScroll>
              </div>

              {/* Image Column */}
              <div className="flex-1 w-full order-1 md:order-none">
                <RevealOnScroll delay={0.2}>
                  <div className="w-full aspect-[4/3] relative flex items-center justify-center p-8">
                    <div 
                      className="absolute inset-0 w-full h-full z-0 overflow-hidden group" 
                      style={{ clipPath: `url(#shape-clip-${index})`, WebkitClipPath: `url(#shape-clip-${index})` }}
                    >
                      <Image
                        src={aim.image}
                        alt={aim.alt}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                    </div>
                    {/* SVG for outline and clipPath def */}
                    <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full z-10 pointer-events-none drop-shadow-sm" preserveAspectRatio="none">
                      <defs>
                        <clipPath id={`shape-clip-${index}`} clipPathUnits="objectBoundingBox">
                          <path d="M 0.15 0.1 Q 0.375 0.1 0.5 0 Q 0.625 0.1 0.85 0.1 Q 0.925 0.1 0.925 0.2 Q 0.925 0.4 1 0.5 Q 0.925 0.6 0.925 0.8 Q 0.925 0.9 0.85 0.9 Q 0.625 0.9 0.5 1 Q 0.375 0.9 0.15 0.9 Q 0.075 0.9 0.075 0.8 Q 0.075 0.6 0 0.5 Q 0.075 0.4 0.075 0.2 Q 0.075 0.1 0.15 0.1 Z" />
                        </clipPath>
                      </defs>
                      <path 
                        d="M 60 30 Q 150 30 200 0 Q 250 30 340 30 Q 370 30 370 60 Q 370 120 400 150 Q 370 180 370 240 Q 370 270 340 270 Q 250 270 200 300 Q 150 270 60 270 Q 30 270 30 240 Q 30 180 0 150 Q 30 120 30 60 Q 30 30 60 30 Z" 
                        className="fill-transparent stroke-burntOrange/15" 
                        strokeWidth="1.5" 
                        strokeLinejoin="round" 
                      />
                    </svg>
                  </div>
                </RevealOnScroll>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function InstitutionalPillarsSection() {
  const pillars = [
    { number: "01", title: "Purpose", description: "Why We Exist. Defines mission, vision, and values. Ensures every initiative remains aligned with reason for being." },
    { number: "02", title: "Systems", description: "How We Operate. Establishes processes, standards, governance, and operational excellence for consistency and quality." },
    { number: "03", title: "Management", description: "How We Coordinate. Aligns people, programmes, partnerships, projects, and resources to transform vision into measurable outcomes." },
    { number: "04", title: "Sustainability", description: "How We Build Capacity. Through responsible investment, sound stewardship, strategic partnerships, and resource development." }
  ];

  return (
    <section className="relative py-24 px-6 bg-deepAmber/[0.02] border-y border-burntOrange/10 overflow-hidden">
      {/* Decorative fe.svg at absolute top-left */}
      <img 
        src="/fe.svg" 
        alt="" 
        className="absolute top-0 left-0 w-48 md:w-64 lg:w-80 opacity-[0.15] pointer-events-none select-none z-0"
        aria-hidden="true"
      />
      
      <div className="relative max-w-7xl mx-auto z-10">
        <SectionHeading heading="Four Institutional Pillars" align="center" />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <RevealOnScroll key={pillar.number} delay={index * 0.1} className="h-full">
              <div className="flex items-start flex-col p-8 bg-white border border-burntOrange/10 rounded-2xl h-full shadow-sm hover:shadow-md transition-shadow">
                <span className="font-display text-4xl text-burntOrange/30 mb-4">{pillar.number}</span>
                <h4 className="font-sans font-semibold text-lg text-deepAmber mb-2 uppercase tracking-wide">{pillar.title}</h4>
                <p className="font-sans font-light text-sm text-deepAmber leading-relaxed">{pillar.description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FiveDimensionsSection() {
  const dimensions = [
    { 
      title: "Physical", 
      desc: "Health, vitality, lifestyle, movement, nutrition, and preventive wellness.",
      image: "/images/five-dimensions-physical.jpg",
      alt: "Physical wellness — yoga at sunset",
      className: "md:col-span-1 md:row-span-1"
    },
    { 
      title: "Emotional", 
      desc: "Relationships, resilience, self-awareness, compassion, emotional balance, and mental wellbeing.",
      image: "/images/five-dimensions-emotional.jpg",
      alt: "Emotional wellness — building relationships and emotional balance",
      className: "md:col-span-1 md:row-span-1"
    },
    { 
      title: "Intellectual", 
      desc: "Knowledge, learning, creativity, critical thinking, innovation, and lifelong education.",
      image: "/images/five-dimensions-intellectual.jpg",
      alt: "Intellectual growth — reading books and lifelong learning",
      className: "md:col-span-1 md:row-span-2"
    },
    { 
      title: "Financial", 
      desc: "Livelihood, responsible resource management, economic resilience, entrepreneurship, and sustainable prosperity.",
      image: "/images/five-dimensions-financial.jpg",
      alt: "Financial resilience — managing resources and sustainable prosperity",
      className: "md:col-span-1 md:row-span-1"
    },
    { 
      title: "Spiritual", 
      desc: "Purpose, values, ethics, meaning, inner awareness, and conscious living.",
      image: "/images/five-dimensions-spiritual.jpg",
      alt: "Spiritual awareness — majestic mountain landscape and conscious living",
      className: "md:col-span-1 md:row-span-1"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <SectionHeading heading="Understanding the Whole Human Being" align="center" />
        <RevealOnScroll delay={0.2}>
          <p className="mt-8 text-deepAmber font-sans font-light text-lg leading-relaxed">
            Every challenge faced by an individual, community, or institution can be understood through five interconnected dimensions.
          </p>
        </RevealOnScroll>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[280px] md:auto-rows-[300px]">
        {dimensions.map((dim, index) => (
          <RevealOnScroll 
            key={dim.title} 
            delay={index * 0.1} 
            className={`relative overflow-hidden group ${dim.className} rounded-lg md:rounded-xl cursor-default`}
          >
            {/* Background Image */}
            <Image
              src={dim.image}
              alt={dim.alt}
              fill
              className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            />
            
            {/* Gradient Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col justify-end z-10">
              <h3 className="font-display tracking-widest text-3xl text-white/90 mb-1 drop-shadow-md">
                {dim.title}
              </h3>
              <p className="font-sans font-light text-white/70 text-sm md:text-base leading-snug drop-shadow-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                {dim.desc}
              </p>
            </div>
          </RevealOnScroll>
        ))}
      </div>
      
      <RevealOnScroll delay={0.6}>
        <div className="mt-12 text-center">
          <p className="font-display italic text-xl text-sacredGold">
            No dimension exists in isolation. True wellbeing emerges when all five dimensions are nurtured together.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export function HierarchyOfNeedsSection() {
  const levels = [
    { level: "Level 1", title: "Physical Needs", desc: "Health · Nutrition · Rest · Movement · Vitality" },
    { level: "Level 2", title: "Safety & Security", desc: "Personal safety · Emotional security · Financial stability · Supportive environments" },
    { level: "Level 3", title: "Love & Belonging", desc: "Family · Friendship · Community · Connection · Shared purpose" },
    { level: "Level 4", title: "Growth & Mastery", desc: "Learning · Skills · Character · Leadership · Self-discipline · Excellence" },
    { level: "Level 5", title: "Purpose & Contribution", desc: "Meaningful work · Service · Responsibility · Positive societal impact" },
    { level: "Level 6", title: "Self-Realisation", desc: "Living with authenticity · Aligning actions with values · Realising highest potential" },
    { level: "Level 7", title: "Collective Consciousness", desc: "Recognising that individual wellbeing, community wellbeing, and nature are inseparable." }
  ];

  return (
    <section className="py-24 px-6 bg-deepAmber/[0.02] border-y border-burntOrange/10">
      <div className="max-w-4xl mx-auto">
        <SectionHeading heading="From Survival to Conscious Contribution" align="center" />
        <div className="mt-16 flex flex-col gap-4">
          {levels.map((item, index) => (
            <RevealOnScroll key={item.level} delay={index * 0.1}>
              <div className="flex flex-col md:flex-row items-start md:items-center p-6 bg-white border border-burntOrange/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow gap-4 md:gap-8">
                <div className="flex-shrink-0 text-burntOrange/40 font-display text-2xl w-24">
                  {item.level}
                </div>
                <div className="flex-shrink-0 w-64 font-sans font-semibold text-deepAmber uppercase tracking-wide">
                  {item.title}
                </div>
                <div className="font-sans font-light text-deepAmber leading-relaxed">
                  {item.desc}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FrameworkCTASection() {
  return (
    <section className="relative w-full py-32 px-6 overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/framework-cta-bg.jpg"
          alt="Framework CTA Background"
          fill
          className="object-cover"
          unoptimized
        />
        {/* Localized Subtle Glow Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255, 241, 230, 0.35) 0%, transparent 40%)'
          }}
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <div 
          className="text-center mx-auto"
          style={{ textShadow: '0 2px 12px rgba(46,26,14,0.5), 0 1px 4px rgba(46,26,14,0.4)' }}
        >
          <span className="font-display italic text-[#FFF1E6] tracking-[0.2em] text-sm uppercase mb-4 block">
            Take the Next Step
          </span>
          <h2 className="font-display font-light text-[#F5D98A] text-4xl md:text-5xl lg:text-6xl mb-6">
            Experience the Framework
          </h2>
          <p className="font-sans font-light text-[#FFF1E6] max-w-xl mx-auto leading-relaxed">
            See how our philosophy comes to life across our different initiatives and environments.
          </p>
        </div>
        <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <Button href="/ecosystem" variant="primary">Explore Our Ecosystem</Button>
          <Button 
            href="/" 
            variant="ghost" 
            className="!bg-[#4A2B18]/70 sm:!bg-[rgba(255,241,230,0.15)] !border-[#4A2B18] sm:!border-[rgba(245,217,138,0.7)] !border-[1.5px] !text-[#FFF1E6] hover:!bg-[#F5D98A] hover:!text-[#4A2B18] hover:!border-[#F5D98A] [text-shadow:0_1px_4px_rgba(0,0,0,0.5)] sm:[text-shadow:0_1px_4px_rgba(46,26,14,0.6)] hover:[text-shadow:none]"
          >
            Back to Home
          </Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
