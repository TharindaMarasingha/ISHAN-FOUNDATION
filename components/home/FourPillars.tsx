import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionIllustration } from "../ui/SectionIllustration";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const PILLARS = [
  { 
    number: "01", 
    title: "Wisdom", 
    description: "Preserving and disseminating timeless spiritual and practical knowledge. Cultivating timeless knowledge and profound understanding of the self and the universe.",
    image: "/images/h1.jpg"
  },
  { 
    number: "02", 
    title: "Wellness", 
    description: "Promoting holistic health—physical, mental, and spiritual. Integrating physical health, mental clarity, and energetic balance.",
    image: "/images/h2.jpg"
  },
  { 
    number: "03", 
    title: "Humanity", 
    description: "Fostering compassionate communities and collective social responsibility. Fostering compassion, ethical living, and collective social responsibility.",
    image: "/images/h3.jpg"
  },
  { 
    number: "04", 
    title: "Nature", 
    description: "Cultivating sustainable ecosystems and deep ecological awareness. Restoring ecological harmony and living in sustainable alignment with the Earth.",
    image: "/images/h4.jpg"
  },
];

export function FourPillars() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#fffcf9] border-y border-sacredGold/10 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 relative flex justify-center">
          <SectionIllustration
            variant="mandala-seed"
            className="absolute -top-16 w-40 h-40 text-sacredGold opacity-5 pointer-events-none"
          />
          <SectionHeading
            align="center"
            eyebrow="Our Foundation"
            heading="Four core pillars"
          />
        </div>

        <div className="flex flex-col gap-24 md:gap-32">
          {PILLARS.map((pillar, index) => {
            const isEven = index % 2 !== 0;
            return (
              <RevealOnScroll key={pillar.number} delay={0.1}>
                <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Text Content */}
                  <div className="flex-1 flex flex-col justify-center w-full">
                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#2E1A0E] mb-6 relative">
                      {pillar.title}
                      {/* Optional subtle accent line under title to match the reference style */}
                      <span className="block h-[2px] w-16 bg-sacredGold mt-4 opacity-50"></span>
                    </h3>
                    <p className="text-lg md:text-xl text-[#6B6B6B] font-light leading-relaxed max-w-xl">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Image Mask Number */}
                  <div className={`flex-1 flex w-full justify-center ${isEven ? 'md:justify-start' : 'md:justify-end'} items-center`}>
                    <div 
                      className="text-[10rem] sm:text-[14rem] md:text-[18rem] lg:text-[22rem] font-sans font-bold leading-[0.8] tracking-tighter"
                      style={{
                        backgroundImage: `url(${pillar.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        WebkitBackgroundClip: 'text',
                        backgroundClip: 'text',
                        color: 'transparent',
                        textShadow: '0px 10px 40px rgba(0,0,0,0.05)'
                      }}
                    >
                      {pillar.number}
                    </div>
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
