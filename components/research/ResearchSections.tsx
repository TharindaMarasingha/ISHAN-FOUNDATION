"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Button } from "../ui/Button";

export function AreasOfResearchSection() {
  const areas = [
    "Preventive Wellness", "Proactive Wellbeing", "Yoga and Meditation", 
    "Lifestyle Management", "Breathwork and Mindful Movement", "Leadership and Organisational Development", 
    "Education and Life Skills", "Community Development", "Environmental Stewardship", 
    "Sustainable Living", "Institutional Systems and Governance", "Ethics and Values-Based Leadership"
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto text-center">
      <SectionHeading heading="Areas of Research" align="center" />
      <RevealOnScroll delay={0.2}>
        <div className="mt-12 flex flex-wrap justify-center gap-3 md:gap-4">
          {areas.map((area, i) => (
             <div key={i} className="px-5 py-3 rounded-full bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.3)] text-deepAmber font-sans text-sm uppercase tracking-widest hover:bg-[rgba(201,168,76,0.2)] transition-colors cursor-default">
               {area}
             </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}

export function EducationApproachSection() {
  return (
    <section className="py-24 px-6 bg-deepAmber/[0.02] border-y border-burntOrange/10">
      <div className="max-w-4xl mx-auto text-center">
        <SectionHeading heading="Our Education Approach" align="center" />
        <RevealOnScroll delay={0.2}>
          <p className="mt-12 font-sans font-light text-xl text-deepAmber leading-relaxed px-4 md:px-8">
            Practical, holistic, and purpose-driven. Our educational initiatives span workshops, seminars, training programmes, leadership development, wellness education, and experiential learning — designed to inspire lasting transformation.
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function PublicationsSection() {
  const publications = [
    "Books", "Research Papers", "Training Manuals", "Educational Guides", 
    "Practice Handbooks", "Journals", "Case Studies", "White Papers", 
    "Institutional Reports", "Community Resource Materials"
  ];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto text-center">
      <SectionHeading heading="Publications" align="center" />
      <RevealOnScroll delay={0.2}>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
          {publications.map((pub, i) => (
            <div key={i} className="flex items-center p-6 bg-white border border-burntOrange/10 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <span className="text-sacredGold mr-4 text-xl">✦</span>
              <span className="font-sans font-medium text-lg text-deepAmber tracking-wide">{pub}</span>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}

export function DigitalLearningSection() {
  const items = [
    "Online Courses", "Webinars", "Recorded Lectures", "Digital Libraries", 
    "Learning Modules", "Interactive Resources", "Educational Videos", "Downloadable Study Materials"
  ];

  return (
    <section className="py-24 px-6 bg-deepAmber/[0.02] border-y border-burntOrange/10 text-center">
      <div className="max-w-5xl mx-auto">
        <SectionHeading heading="Digital Learning" align="center" />
        <RevealOnScroll delay={0.2}>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {items.map((item, i) => (
               <div key={i} className="px-5 py-2.5 rounded-full bg-white border border-burntOrange/20 text-deepAmber font-sans text-xs uppercase tracking-widest hover:border-burntOrange/40 transition-colors cursor-default shadow-sm">
                 {item}
               </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}

export function KnowledgeResourcesSection() {
  const resources = [
    "Research Archives", "Resource Libraries", "Learning Toolkits", "Practical Frameworks", 
    "Policy Briefs", "Best Practice Guides", "Institutional Templates", "Educational Publications"
  ];

  return (
    <section className="py-24 px-6 max-w-5xl mx-auto text-center">
      <SectionHeading heading="Knowledge Resources" align="center" />
      <RevealOnScroll delay={0.2}>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {resources.map((res, i) => (
             <div key={i} className="px-5 py-2.5 rounded-full bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.3)] text-deepAmber font-sans text-xs uppercase tracking-widest hover:bg-[rgba(201,168,76,0.2)] transition-colors cursor-default">
               {res}
             </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}

export function ResearchCTASection() {
  return (
    <section className="py-32 px-6 bg-darkBrown text-center overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/who-we-serve-bg.png')" }} />
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <SectionHeading
          eyebrow="Join Our Mission"
          heading="Get Involved"
          description="Explore our latest programmes or collaborate with us to advance meaningful research and education."
          align="center"
          theme="dark"
        />
        <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <Button href="/programmes" variant="primary">Explore Programmes</Button>
          <Button href="/partnerships" variant="ghost">Partner With Us</Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
