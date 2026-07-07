"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export function GoldenCircleSection() {
  const circles = [
    { title: "WHY", subtitle: "Our Purpose", desc: "To harmonise humanity and nature through wisdom, wellness, ethical leadership, sustainability, and conscious community development." },
    { title: "HOW", subtitle: "Our Approach", desc: "Timeless Wisdom · Preventive Wellness · Holistic Wellbeing · Ethical Leadership · Research & Education · Sustainable Systems · Community Development · Environmental Stewardship · International Collaboration" },
    { title: "WHAT", subtitle: "Our Work", desc: "Educational Programmes · Retreats & Immersions · Leadership Development · Research & Publications · Community Initiatives · Environmental Projects · Institutional Partnerships · Conscious Living Experiences" }
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
            <Card className="h-full flex flex-col p-10 text-center border-t-4 border-t-burntOrange">
              <span className="font-display text-4xl text-burntOrange/30 mb-2">{item.title}</span>
              <h3 className="font-display uppercase tracking-widest text-xl text-deepAmber mb-6 border-b border-burntOrange/20 pb-4 inline-block mx-auto">
                {item.subtitle}
              </h3>
              <p className="font-sans font-light text-deepAmber leading-relaxed text-base flex-grow">
                {item.desc}
              </p>
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
    <section className="py-24 px-6 bg-deepAmber/[0.02] border-y border-burntOrange/10">
      <div className="max-w-7xl mx-auto">
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
    { title: "Dharma", desc: "Purpose, ethics, integrity, and responsibility. Every decision must be guided by what is right and beneficial for humanity and nature." },
    { title: "Artha", desc: "Sustainable resources and institutional resilience. Financial strength enables long-term service and responsible growth." },
    { title: "Kama", desc: "Meaningful aspiration, creativity, innovation, fulfilment, and human flourishing. Growth should enrich lives while remaining aligned with values." },
    { title: "Moksha", desc: "The highest expression of institutional purpose — creating lasting impact, collective wellbeing, and a legacy that benefits future generations." }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading heading="Four Aims of a Conscious Institution" align="center" />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {aims.map((aim, index) => (
          <RevealOnScroll key={aim.title} delay={index * 0.1}>
            <Card className="h-full flex flex-col p-8">
              <h3 className="font-display uppercase tracking-widest text-xl text-sacredGold mb-4">{aim.title}</h3>
              <p className="font-sans font-light text-deepAmber leading-relaxed text-base">
                {aim.desc}
              </p>
            </Card>
          </RevealOnScroll>
        ))}
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
    <section className="py-24 px-6 bg-deepAmber/[0.02] border-y border-burntOrange/10">
      <div className="max-w-7xl mx-auto">
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
    { title: "Physical", desc: "Health, vitality, lifestyle, movement, nutrition, and preventive wellness." },
    { title: "Emotional", desc: "Relationships, resilience, self-awareness, compassion, emotional balance, and mental wellbeing." },
    { title: "Intellectual", desc: "Knowledge, learning, creativity, critical thinking, innovation, and lifelong education." },
    { title: "Financial", desc: "Livelihood, responsible resource management, economic resilience, entrepreneurship, and sustainable prosperity." },
    { title: "Spiritual", desc: "Purpose, values, ethics, meaning, inner awareness, and conscious living." }
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
        {dimensions.map((dim, index) => (
          <RevealOnScroll key={dim.title} delay={index * 0.1}>
            <Card className="h-full flex flex-col p-8 items-center text-center">
              <h3 className="font-display uppercase tracking-widest text-lg text-burntOrange mb-4 border-b border-burntOrange/20 pb-2 inline-block">
                {dim.title}
              </h3>
              <p className="font-sans font-light text-deepAmber leading-relaxed text-sm">
                {dim.desc}
              </p>
            </Card>
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
    <section className="py-32 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
      <SectionHeading
        eyebrow="Take the Next Step"
        heading="Experience the Framework"
        description="See how our philosophy comes to life across our different initiatives and environments."
        align="center"
      />
      <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
        <Button href="/ecosystem" variant="primary">Explore Our Ecosystem</Button>
        <Button href="/" variant="ghost">Back to Home</Button>
      </RevealOnScroll>
    </section>
  );
}
