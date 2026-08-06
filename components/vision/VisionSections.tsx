"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { NumberedCard } from "../ui/NumberedCard";

export function ThreeErasSection() {
  const eras = [
    {
      title: "ERA I — FOUNDATION (2026–2036)",
      subtitle: "Building Strong Foundations",
      points: [
        "Establish strong governance and institutional systems",
        "Build dedicated leadership and stewardship team",
        "Develop high-quality educational and wellness programmes",
        "Launch transformative retreats and immersive experiences",
        "Create sustainable operational and financial models",
        "Build national and international partnerships",
        "Develop research, publications, and learning resources",
        "Establish regional networks and community initiatives",
        "Strengthen quality assurance and institutional excellence"
      ]
    },
    {
      title: "ERA II — EXPANSION (2036–2046)",
      subtitle: "Scaling with Integrity",
      points: [
        "Establish regional centres and international chapters",
        "Expand leadership development and educational programmes",
        "Strengthen research and innovation",
        "Build global collaborations",
        "Develop multilingual learning resources",
        "Support youth, women, and community leadership",
        "Advance environmental initiatives",
        "Create scalable models for conscious communities",
        "Integrate technology to improve accessibility"
      ]
    },
    {
      title: "ERA III — LEGACY (2046–2056)",
      subtitle: "Inspiring Future Generations",
      points: [
        "Establish centres of excellence",
        "Develop flagship campuses and learning communities",
        "Expand global educational platforms",
        "Support international research and knowledge exchange",
        "Advise institutions and policymakers",
        "Create scholarships and fellowship programmes",
        "Preserve institutional knowledge",
        "Strengthen long-term endowments and sustainability",
        "Develop self-sustaining conscious communities",
        "Prepare next generation of stewards"
      ]
    }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
      <SectionHeading heading="A Vision in Three Eras" align="center" />
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {eras.map((era, index) => (
          <RevealOnScroll key={era.title} delay={index * 0.15}>
            <Card className="h-full flex flex-col p-8 border-t-4 border-t-primary">
              <h3 className="font-display text-xl text-heading mb-2">{era.title}</h3>
              <h4 className="font-sans font-medium text-sm text-primary uppercase tracking-widest mb-6 pb-4 border-b border-divider">{era.subtitle}</h4>
              <ul className="space-y-3 flex-grow">
                {era.points.map((point, i) => (
                  <li key={i} className="flex items-start text-sm font-sans font-light text-heading">
                    <span className="text-secondary mr-3 mt-0.5">✦</span> <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

export function StrategicPrioritiesSection() {
  const OBJECTIVES = [
    { number: "01", title: "Pristine Wisdom", description: "Preserving and applying timeless knowledge for modern life" },
    { number: "02", title: "Preventive Wellness", description: "Encouraging healthy lifestyles before illness develops" },
    { number: "03", title: "Proactive Wellbeing", description: "Supporting physical, mental, emotional, social, and spiritual wellbeing" },
    { number: "04", title: "Productive Welfare", description: "Creating sustainable opportunities that empower people and communities" },
    { number: "05", title: "Collective Consciousness", description: "Cultivating awareness that individual wellbeing connects to collective wellbeing" },
    { number: "06", title: "Shared Responsibilities", description: "Encouraging every individual to become an active contributor to societal progress" },
    { number: "07", title: "Coherent Communities", description: "Building compassionate, collaborative, and resilient communities" },
    { number: "08", title: "Sustainable Systems", description: "Designing long-term systems that balance human development with environmental responsibility" },
  ];

  return (
    <section className="py-24 px-6 bg-surface border-y border-divider">
      <div className="max-w-7xl mx-auto">
        <SectionHeading heading="Strategic Priorities" align="center" />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {OBJECTIVES.map((obj, index) => (
            <RevealOnScroll key={obj.number} delay={index * 0.1} className="h-full">
              <NumberedCard {...obj} className="h-full" />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export function VisionCTASection() {
  return (
    <section className="py-32 px-6 bg-heading text-center overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/who-we-serve-bg.webp')" }} />
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <RevealOnScroll>
          <p className="font-display italic text-3xl md:text-5xl text-secondary leading-relaxed mb-16">
            &quot;One Humanity · One Nature · One Conscious Future&quot;
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2} className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <Button href="/support" variant="primary">Support Our Mission</Button>
          <Button href="/contact" variant="ghost">Connect With Us</Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
