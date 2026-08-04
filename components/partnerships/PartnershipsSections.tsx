"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Button } from "../ui/Button";

export function WhoWePartnerWithSection() {
  const partners = [
    "Governments", "Educational Institutions", "Healthcare Organisations", 
    "Corporate Organisations", "Non-Governmental Organisations", "Research Institutions", 
    "Environmental Organisations", "Community Leaders & Social Entrepreneurs", 
    "Philanthropic Foundations & Donors"
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto text-center">
      <SectionHeading heading="Who We Partner With" align="center" />
      <RevealOnScroll delay={0.2}>
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {partners.map((p, i) => (
             <div key={i} className="px-5 py-3 rounded-full bg-softAccent border border-primary text-heading font-sans text-xs uppercase tracking-widest cursor-default hover:bg-softAccent transition-colors">
               {p}
             </div>
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
}

export function PartnershipPrinciplesSection() {
  const principles = [
    { number: "01", title: "Shared Purpose", desc: "We begin with a common vision and shared values." },
    { number: "02", title: "Mutual Respect", desc: "Every partner contributes unique knowledge, experience, and strengths." },
    { number: "03", title: "Integrity", desc: "Transparency, ethics, and accountability guide every collaboration." },
    { number: "04", title: "Long-Term Value", desc: "We prioritise relationships that create sustainable impact." },
    { number: "05", title: "Collective Responsibility", desc: "Success and responsibility are shared." }
  ];

  return (
    <section className="py-24 px-6 bg-surface border-y border-divider">
      <div className="max-w-7xl mx-auto">
        <SectionHeading heading="Partnership Principles" align="center" />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {principles.map((principle, index) => (
            <RevealOnScroll key={principle.number} delay={index * 0.1} className="h-full">
              <div className="flex flex-col p-8 bg-white border border-divider rounded-2xl h-full shadow-sm hover:shadow-md transition-shadow">
                <span className="font-display text-4xl text-primary mb-4">{principle.number}</span>
                <h4 className="font-sans font-semibold text-lg text-heading mb-2 uppercase tracking-wide">{principle.title}</h4>
                <p className="font-sans font-light text-sm text-heading leading-relaxed">{principle.desc}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CollaborationAndContributionSection() {
  const areas = [
    "Preventive Wellness Programmes", "Leadership Development", "Educational Initiatives", 
    "Community Development Projects", "Environmental Restoration", "Research Collaborations", 
    "Institutional Capacity Building", "Training & Certification", "Conferences & Knowledge Exchange", 
    "Volunteer Engagement", "Strategic Advisory", "Social Innovation", 
    "Sustainable Development", "International Collaboration"
  ];

  const contributions = [
    "Volunteering", "Professional Expertise", "Teaching & Facilitation", 
    "Research & Knowledge", "Community Projects", "Environmental Initiatives", 
    "Strategic Partnerships", "Philanthropic Support"
  ];

  return (
    <section 
      className="py-24 px-6 md:px-12"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 200, 150, 0.12) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 220, 180, 0.1) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Left Column: Areas of Collaboration */}
          <div className="flex flex-col space-y-8">
            <RevealOnScroll>
              <h3 className="font-display font-light text-4xl md:text-5xl text-heading mb-8">
                Areas of Collaboration
              </h3>
              <div className="flex flex-wrap gap-3 mb-10">
                {areas.map((area) => (
                  <span key={area} className="px-4 py-2 rounded-full bg-heading/5 border border-heading/10 text-xs text-heading tracking-widest uppercase hover:bg-heading/10 transition-colors">
                    {area}
                  </span>
                ))}
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column: Ways to Contribute */}
          <div className="flex flex-col space-y-8">
            <RevealOnScroll delay={0.2}>
              <h3 className="font-display font-light text-3xl md:text-4xl text-heading mb-8">
                You Can Contribute Through
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-10">
                {contributions.map((item) => (
                  <div key={item} className="flex items-center text-base font-sans font-light text-heading/80">
                    <span className="text-secondary mr-4 text-lg">✦</span>
                    {item}
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </div>
    </section>
  );
}

export function PartnershipsCTASection() {
  return (
    <section className="py-32 px-6 bg-heading text-center overflow-hidden relative">
      <div className="absolute inset-0 z-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('/images/who-we-serve-bg.webp')" }} />
      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <RevealOnScroll>
          <p className="font-display italic text-3xl md:text-4xl text-secondary leading-relaxed mb-16 px-4 md:px-0">
            &quot;Together, we can create healthier individuals, stronger communities, resilient institutions, and a sustainable future.&quot;
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={0.2} className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <Button href="/contact" variant="primary">Become a Partner</Button>
          <Button href="/support" variant="ghost">Support Our Mission</Button>
        </RevealOnScroll>
      </div>
    </section>
  );
}
