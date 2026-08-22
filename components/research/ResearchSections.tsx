"use client";

import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Button } from "../ui/Button";
import Link from "next/link";

export function AreasOfResearchSection() {
  const pillars = [
    {
      title: "Human Ecosystem",
      description: "Exploring the intersections of physical, mental, and spiritual health.",
      topics: [
        "Preventive Wellness", 
        "Proactive Wellbeing", 
        "Yoga and Meditation", 
        "Lifestyle Management", 
        "Breathwork and Mindful Movement"
      ]
    },
    {
      title: "Conscious Leadership",
      description: "Redefining organizational structures through ethics and awareness.",
      topics: [
        "Leadership and Organisational Development", 
        "Education and Life Skills", 
        "Institutional Systems and Governance", 
        "Ethics and Values-Based Leadership"
      ]
    },
    {
      title: "Earth Stewardship",
      description: "Cultivating sustainable models for ecological and social harmony.",
      topics: [
        "Community Development", 
        "Environmental Stewardship", 
        "Sustainable Living"
      ]
    }
  ];

  return (
    <section className="pt-32 pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <SectionHeading heading="Areas of Research" align="center" />
          <RevealOnScroll delay={0.2}>
            <p className="text-heading/60 font-sans font-light max-w-2xl mx-auto mt-6 text-sm md:text-base leading-relaxed">
              Our inquiries are guided by a holistic approach, breaking down traditional silos to understand the profound connections between self, society, and the natural world.
            </p>
          </RevealOnScroll>
        </div>

        {/* The Editorial Grid */}
        <RevealOnScroll delay={0.3}>
          <div className="flex flex-col space-y-12 md:space-y-0 md:flex-row md:divide-x md:divide-divider">
            
            {pillars.map((pillar, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-1 md:px-12 first:md:pl-0 last:md:pr-0 pt-8 border-t border-divider first:border-t-0 first:pt-0 md:border-t-0 md:pt-0"
              >
                
                {/* Pillar Header */}
                <h3 className="text-2xl font-display text-heading mb-3">
                  {pillar.title}
                </h3>
                <p className="text-sm text-heading/60 font-sans font-light mb-8 h-auto md:h-12">
                  {pillar.description}
                </p>

                {/* The Topics List - Clean and Minimal */}
                <ul className="space-y-5">
                  {pillar.topics.map((topic, tIndex) => (
                    <li key={tIndex} className="flex items-start group cursor-pointer">
                      {/* The Dash Index: Replaces the standard dot with a sharp, sophisticated horizontal line. */}
                      <span className="w-4 h-px bg-heading/30 mt-2.5 mr-4 shrink-0 transition-colors group-hover:bg-primary"></span>
                      <span className="text-sm md:text-base text-heading/80 font-sans font-light transition-colors group-hover:text-heading">
                        {topic}
                      </span>
                    </li>
                  ))}
                </ul>

              </div>
            ))}

          </div>
        </RevealOnScroll>

      </div>
    </section>
  );
}

export function EducationApproachSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div className="lg:col-span-5">
            <RevealOnScroll delay={0.2}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-heading leading-tight mb-6 lg:mb-0">
                Our Education <br /> Approach
              </h2>
            </RevealOnScroll>
          </div>

          <div className="lg:col-span-7 lg:pl-12 lg:border-l border-heading/15">
            <RevealOnScroll delay={0.3}>
              <p className="text-heading/60 font-sans font-light text-sm md:text-lg leading-relaxed border-l-2 border-heading/20 pl-4 lg:border-l-0 lg:pl-0">
                Practical, holistic, and purpose-driven. Our educational initiatives span workshops, seminars, training programmes, leadership development, wellness education, and experiential learning — <span className="font-medium text-heading">designed to inspire lasting transformation.</span>
              </p>
            </RevealOnScroll>
          </div>

        </div>
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
    <div className="bg-white">
      <section className="pt-20 pb-32 px-6 max-w-6xl mx-auto bg-white rounded-t-[3rem] shadow-[0_-10px_40px_rgba(0,0,0,0.02)]">
        
        <div className="text-center mb-16 pt-12">
          <RevealOnScroll delay={0.2}>
            <h2 className="text-4xl md:text-5xl font-display text-heading">
              Publications
            </h2>
          </RevealOnScroll>
        </div>

        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-16 md:gap-y-2 max-w-5xl mx-auto">
          {publications.map((item, index) => (
            <RevealOnScroll key={index} delay={0.1 * (index % 5)}>
              <a 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="group flex items-center justify-between py-4 md:py-5 border-b border-divider active:bg-black/5 md:active:bg-transparent hover:border-heading transition-colors duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <svg className="w-4 h-4 text-primary/60 group-hover:text-primary transition-colors" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                  </svg>
                  <span className="text-sm md:text-lg font-display text-heading/80 group-hover:text-heading transition-colors">
                    {item}
                  </span>
                </div>
                {/* Arrow is always visible on mobile in brand color, but hover-only on desktop */}
                <span className="text-primary md:text-heading text-lg font-light md:opacity-0 md:-translate-x-4 md:group-hover:opacity-100 md:group-hover:translate-x-0 transition-all duration-300">
                  &rarr;
                </span>
              </a>
            </RevealOnScroll>
          ))}
        </div>

      </section>
    </div>
  );
}

export function ResourcesAndCTASection() {
  const knowledgeResources = [
    "Research Archives", "Resource Libraries", "Learning Toolkits", 
    "Practical Frameworks", "Policy Briefs", "Best Practice Guides", 
    "Institutional Templates", "Educational Publications"
  ];

  const digitalLearning = [
    "Online Courses", "Webinars", "Recorded Lectures", 
    "Digital Libraries", "Learning Modules", "Interactive Resources", 
    "Educational Videos", "Downloadable Study Materials"
  ];

  return (
    <div className="w-full">
      
      {/* SECTION 1: THE DUAL LEDGER (Resources) */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            
            {/* Left Column: Knowledge Resources */}
            <div>
              <RevealOnScroll delay={0.2}>
                <h2 className="text-2xl md:text-3xl font-display text-heading mb-6 md:mb-8 pb-4 border-b border-divider">
                  Knowledge Resources
                </h2>
                <ul className="space-y-5">
                  {knowledgeResources.map((item, index) => (
                    <li key={index} className="flex items-start group cursor-pointer">
                      {/* The elegant dash replacing the gray dot */}
                      <span className="w-4 h-px bg-heading/30 mt-2.5 mr-4 shrink-0 transition-colors group-hover:bg-primary"></span>
                      <span className="text-sm md:text-base text-heading/80 font-sans font-light leading-relaxed group-hover:text-heading transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

            {/* Right Column: Digital Learning */}
            <div>
              <RevealOnScroll delay={0.3}>
                <h2 className="text-2xl md:text-3xl font-display text-heading mb-6 md:mb-8 pb-4 border-b border-divider">
                  Digital Learning
                </h2>
                <ul className="space-y-5">
                  {digitalLearning.map((item, index) => (
                    <li key={index} className="flex items-start group cursor-pointer">
                      <span className="w-4 h-px bg-heading/30 mt-2.5 mr-4 shrink-0 transition-colors group-hover:bg-primary"></span>
                      <span className="text-sm md:text-base text-heading/80 font-sans font-light leading-relaxed group-hover:text-heading transition-colors">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2: THE FINAL CTA */}
      <section 
        className="py-32 px-6 text-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/resi.webp')" }}
      >
        {/* Subtle ambient texture/glow for the background */}
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 max-w-2xl mx-auto">
          <RevealOnScroll delay={0.2}>
            <span className="text-xs font-sans font-bold tracking-widest text-white/70 uppercase mb-4 block">
              Join Our Mission
            </span>
            <h2 className="text-4xl md:text-5xl font-display text-white mb-6">
              Get Involved
            </h2>
            <p className="text-white/80 font-sans font-light text-sm md:text-base leading-relaxed mb-10 max-w-lg mx-auto">
              Explore our latest programmes or collaborate with us to advance meaningful research and education.
            </p>

            {/* Button Group */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Primary Action */}
              <Link href="/programmes" className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white px-8 py-3.5 rounded-full font-sans font-medium transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm tracking-wide inline-block">
                Explore Programmes
              </Link>
              
              {/* Secondary Action (Contrast Fixed!) */}
              <Link href="/partnerships" className="w-full sm:w-auto border border-white/50 hover:bg-white hover:text-heading text-white/90 px-8 py-3.5 rounded-full font-sans font-medium transition-all text-sm tracking-wide inline-block">
                Partner With Us
              </Link>
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </div>
  );
}
