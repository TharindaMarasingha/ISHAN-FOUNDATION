"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export function WaysToContributeSection() {
  const contributions = [
    { title: "Volunteer", desc: "Share time, skills, and enthusiasm through programmes, events, community projects, and environmental initiatives." },
    { title: "Professional Expertise", desc: "Contribute specialised knowledge, mentoring, consulting, teaching, or supporting strategic initiatives." },
    { title: "Teach & Facilitate", desc: "Share knowledge through workshops, courses, retreats, and learning experiences." },
    { title: "Research & Knowledge", desc: "Contribute to research, publications, educational resources, case studies, and policy development." },
    { title: "Community Projects", desc: "Support or initiate local projects through education, wellbeing, environmental stewardship, and social innovation." },
    { title: "Environmental Initiatives", desc: "Tree plantation, ecological restoration, water conservation, sustainable living, biodiversity awareness, and climate responsibility." },
    { title: "Strategic Partnerships", desc: "Collaborate through institutional partnerships, educational initiatives, research collaborations, and community development." },
    { title: "Philanthropic Support", desc: "Financial contributions that expand programmes, strengthen infrastructure, develop learning resources, and support research." }
  ];

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto bg-white">
      <SectionHeading heading="Ways to Contribute" align="center" />
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contributions.map((item, index) => (
          <RevealOnScroll key={item.title} delay={index * 0.1}>
            <Card className="h-full flex flex-col p-8">
              <h3 className="font-display uppercase tracking-widest text-lg text-primary mb-4 border-b border-divider pb-2 inline-block">
                {item.title}
              </h3>
              <p className="font-sans font-light text-heading leading-relaxed text-sm flex-grow">
                {item.desc}
              </p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}

export function JoinCommunitySection() {
  return (
    <section className="py-24 px-6 bg-surface border-y border-divider">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading heading="A Shared Responsibility" align="center" />
        <RevealOnScroll delay={0.2}>
          <div className="mt-16 flex flex-col gap-12 text-center px-4 md:px-8">
            <p className="font-display italic text-2xl md:text-3xl text-primary leading-relaxed">
              &quot;The future is not created by a few extraordinary individuals. It is created by ordinary people choosing to take extraordinary responsibility.&quot;
            </p>
            <p className="font-display italic text-2xl md:text-3xl text-primary leading-relaxed">
              &quot;At ISHAN, we believe that every individual has the capacity to become a steward of positive change.&quot;
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function SupportCTASection() {
  return (
    <section className="py-32 px-6 bg-heading text-center overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/who-we-serve-bg.webp')" }} />
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <SectionHeading
          eyebrow="Take the Next Step"
          heading="Ready to Contribute?"
          description="Whether through time, expertise, or resources, your contribution helps build a conscious and sustainable future."
          align="center"
          theme="dark"
        />
        <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <Button href="/contact" variant="primary">Join Us</Button>
          <Button href="/partnerships" variant="ghost">Explore Partnerships</Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
