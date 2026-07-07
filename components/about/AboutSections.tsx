"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";

export function OurStorySection() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto text-center">
      <SectionHeading heading="Our Story" align="center" />
      <RevealOnScroll delay={0.2}>
        <div className="flex flex-col gap-6 text-deepAmber font-sans font-light text-lg leading-relaxed mt-12 text-left md:text-center">
          <p>
            Every generation inherits challenges. Some challenge our bodies. Some challenge our minds. Some challenge our relationships. Some challenge our economies. Some challenge our values.
          </p>
          <p>
            And today, perhaps more than ever, humanity faces the challenge of living in harmony with itself and with nature.
          </p>
          <p>
            ISHAN was founded in response to this need. Not as another organisation. Not as another wellness centre. Not as another educational institution. But as a living ecosystem dedicated to integrating wisdom, wellness, leadership, sustainability, and conscious action into practical solutions that create lasting impact.
          </p>
        </div>
      </RevealOnScroll>
    </section>
  );
}

export function VisionMissionSection() {
  return (
    <section className="py-12 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <RevealOnScroll>
          <Card className="h-full flex flex-col p-10">
            <h3 className="font-display uppercase tracking-widest text-xl text-burntOrange mb-6 border-b border-burntOrange/20 pb-4 inline-block w-full">
              Our Vision
            </h3>
            <p className="font-sans font-light text-deepAmber leading-relaxed text-base flex-grow">
              To cultivate a world where humanity and nature exist in conscious harmony through wisdom, wellness, compassion, responsibility, and sustainable living.
            </p>
          </Card>
        </RevealOnScroll>
        <RevealOnScroll delay={0.15}>
          <Card className="h-full flex flex-col p-10">
            <h3 className="font-display uppercase tracking-widest text-xl text-burntOrange mb-6 border-b border-burntOrange/20 pb-4 inline-block w-full">
              Our Mission
            </h3>
            <p className="font-sans font-light text-deepAmber leading-relaxed text-base flex-grow">
              To inspire, educate, and empower individuals, institutions, organizations, and communities through integrated initiatives that promote holistic wellbeing, ethical leadership, environmental stewardship, conscious living, and sustainable development.
            </p>
          </Card>
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
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <SectionHeading heading="Our Purpose" align="center" />
      <RevealOnScroll delay={0.2}>
        <ul className="mt-12 space-y-4 max-w-2xl mx-auto">
          {purposes.map((p, i) => (
             <li key={i} className="flex items-start text-lg font-sans font-light text-deepAmber">
               <span className="text-sacredGold mr-4 mt-1">✦</span> <span>{p}</span>
             </li>
          ))}
        </ul>
      </RevealOnScroll>
    </section>
  );
}

export function OurPhilosophySection() {
  return (
    <section className="py-24 px-6 mt-12 bg-deepAmber/[0.02] border-y border-burntOrange/10">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading heading="Our Philosophy" align="center" />
        <RevealOnScroll delay={0.2}>
          <div className="flex flex-col gap-6 text-deepAmber font-sans font-light text-lg leading-relaxed mt-12 text-left md:text-center px-4 md:px-8">
            <p>Everything in existence is interconnected. Humanity cannot flourish without nature. Nature cannot be protected without responsible humanity.</p>
            <p>Knowledge becomes valuable only when applied. Leadership becomes meaningful only through service.</p>
            <p>Wellbeing becomes complete only when body, mind, intellect, resources, and consciousness evolve together.</p>
            <p>Institutions become enduring only when built upon purpose, systems, responsible management, and sustainability.</p>
            <p>This philosophy guides every initiative, programme, partnership, and decision within ISHAN.</p>
          </div>
        </RevealOnScroll>
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
        {beliefs.map((b, index) => (
          <RevealOnScroll key={b.number} delay={index * 0.1}>
            <div className="flex items-center gap-6 p-6 rounded-2xl bg-white border border-burntOrange/10 shadow-sm hover:shadow-md transition-shadow">
              <span className="font-display text-4xl text-burntOrange/30">{b.number}</span>
              <span className="font-sans font-light text-lg text-deepAmber">{b.title}</span>
            </div>
          </RevealOnScroll>
        ))}
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

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto text-center">
      <SectionHeading heading="Core Values" align="center" />
      <RevealOnScroll delay={0.2}>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {values.map((v, i) => (
             <div key={i} className="px-6 py-4 rounded-full bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.3)] text-deepAmber font-sans text-sm uppercase tracking-widest hover:bg-[rgba(201,168,76,0.2)] transition-colors">
               {v}
             </div>
          ))}
        </div>
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
    <section className="py-32 px-6 bg-darkBrown text-center overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/who-we-serve-bg.png')" }} />
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-display font-light text-4xl md:text-5xl text-sacredGold mb-16">Our Commitment</h2>
        <RevealOnScroll delay={0.2}>
          <ul className="space-y-6 text-left max-w-2xl mx-auto mb-20">
             {commitments.map((c, i) => (
               <li key={i} className="flex items-start text-lg md:text-xl font-sans font-light text-peach">
                 <span className="text-sacredGold mr-6 mt-1">✦</span> <span>{c}</span>
               </li>
             ))}
          </ul>
        </RevealOnScroll>
        <RevealOnScroll delay={0.4}>
          <div className="pt-16 border-t border-sacredGold/20">
            <p className="font-display italic text-3xl md:text-4xl text-sacredGold leading-relaxed">
              "Because when humanity and nature flourish together, everyone benefits."
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
