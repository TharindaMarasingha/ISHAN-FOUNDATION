"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

export function CoreProgrammesSection() {
  const programmes = [
    {
      title: "Preventive Wellness",
      desc: "Yoga · Meditation · Pranayama · Breathwork · Mindful Movement · Nutrition · Stress Management · Sleep Awareness · Lifestyle Education. Practical habits for lifelong health, resilience, and vitality."
    },
    {
      title: "Proactive Wellbeing",
      desc: "Emotional balance · Mental clarity · Intellectual growth · Financial awareness · Purposeful living · Spiritual development. Helping individuals live balanced, meaningful, and fulfilling lives."
    },
    {
      title: "Conscious Leadership",
      desc: "Ethical decision-making · Emotional intelligence · Communication · Systems thinking · Responsibility · Resilience · Servant leadership. Leading self before leading others."
    },
    {
      title: "Wisdom Education",
      desc: "Timeless philosophy + contemporary sciences. Critical thinking · Ethical reasoning · Practical life skills · Conscious decision-making. Knowledge as a tool for transformation."
    },
    {
      title: "Community Development",
      desc: "Collaboration · Volunteerism · Social innovation · Youth development · Women's wellbeing · Environmental responsibility · Local leadership."
    },
    {
      title: "Nature-Based Learning",
      desc: "Nature immersion · Ecological awareness · Forest experiences · Sustainable living practices · Environmental stewardship · Regenerative thinking."
    },
    {
      title: "Retreats & Immersive Experiences",
      desc: "Antahakarana Avalokana (The Inner Immersion) · Samanvaya (From Pancha Tattva to Sampurna Sattva). Reflection, renewal, learning, and personal growth."
    }
  ];

  return (
    <section className="py-24 px-6 bg-deepAmber/[0.02] border-y border-burntOrange/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading heading="Core Programme Areas" align="center" />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programmes.map((prog, index) => (
            <RevealOnScroll key={prog.title} delay={index * 0.1}>
              <Card className="h-full flex flex-col p-8">
                <h3 className="font-display uppercase tracking-widest text-lg text-burntOrange mb-4 border-b border-burntOrange/20 pb-2 inline-block">
                  {prog.title}
                </h3>
                <p className="font-sans font-light text-deepAmber leading-relaxed text-sm flex-grow">
                  {prog.desc}
                </p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ProfessionalDevelopmentSection() {
  const tags = [
    "Educators", "Healthcare professionals", "Corporate leaders", 
    "Entrepreneurs", "Community facilitators", "Institutions", "Organisations"
  ];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto text-center">
      <SectionHeading heading="Professional Development" align="center" />
      
      <RevealOnScroll delay={0.2}>
        <div className="mt-12 flex flex-wrap justify-center gap-3 mb-10">
          {tags.map((t, i) => (
             <div key={i} className="px-5 py-2.5 rounded-full bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.3)] text-deepAmber font-sans text-xs uppercase tracking-widest">
               {t}
             </div>
          ))}
        </div>
      </RevealOnScroll>

      <RevealOnScroll delay={0.4}>
        <p className="font-sans font-light text-xl text-deepAmber leading-relaxed max-w-3xl mx-auto">
          Bridges knowledge with practical implementation, preparing professionals to lead with competence and integrity. Cultivates excellence, innovation, ethical leadership, and sustainable practices.
        </p>
      </RevealOnScroll>
    </section>
  );
}

export function TrainingSection() {
  return (
    <section className="py-24 px-6 bg-darkBrown text-center overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/who-we-serve-bg.png')" }} />
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="font-display font-light text-4xl md:text-5xl text-sacredGold mb-12">Training & Certification</h2>
        
        <RevealOnScroll delay={0.2}>
          <div className="flex flex-col gap-6 text-peach font-sans font-light text-lg leading-relaxed mb-16 text-left md:text-center px-4 md:px-8">
            <p>Structured training and certification pathways for facilitators, educators, wellness practitioners, coaches, leaders, and institutional partners.</p>
            <p>Combines theoretical understanding with practical application, mentorship, experiential learning, and ongoing professional development.</p>
          </div>
        </RevealOnScroll>

        <RevealOnScroll delay={0.4}>
          <div className="pt-16 border-t border-sacredGold/20">
            <p className="font-display italic text-3xl md:text-4xl text-sacredGold leading-relaxed max-w-3xl mx-auto">
              "Our goal is not simply to certify individuals but to develop responsible practitioners who embody the values and philosophy of ISHAN."
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function ProgrammesCTASection() {
  return (
    <section className="py-32 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
      <SectionHeading
        eyebrow="Take the Next Step"
        heading="Begin Your Journey"
        description="Join our programmes and experience the transformative power of practical wisdom."
        align="center"
      />
      <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
        <Button href="/ecosystem" variant="primary">Explore Our Ecosystem</Button>
        <Button href="/contact" variant="ghost">Connect With Us</Button>
      </RevealOnScroll>
    </section>
  );
}
