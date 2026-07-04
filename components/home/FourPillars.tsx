import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionIllustration } from "../ui/SectionIllustration";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { TopLeftCorner, BottomRightCorner } from "../ui/CornerOrnaments";

const PILLARS = [
  { 
    number: "01", 
    title: "Wisdom", 
    description: "Preserving and disseminating timeless spiritual and practical knowledge. Cultivating timeless knowledge and profound understanding of the self and the universe.",
    image: "/images/wisdom.jpg"
  },
  { 
    number: "02", 
    title: "Wellness", 
    description: "Promoting holistic health—physical, mental, and spiritual. Integrating physical health, mental clarity, and energetic balance.",
    image: "/images/wellness.jpg"
  },
  { 
    number: "03", 
    title: "Humanity", 
    description: "Fostering compassionate communities and collective social responsibility. Fostering compassion, ethical living, and collective social responsibility.",
    image: "/images/humanity.jpg"
  },
  { 
    number: "04", 
    title: "Nature", 
    description: "Cultivating sustainable ecosystems and deep ecological awareness. Restoring ecological harmony and living in sustainable alignment with the Earth.",
    image: "/images/nature.jpg"
  },
];

export function FourPillars() {
  return (
    <section 
      className="py-24 px-6 md:px-12 border-t border-sacredGold/10 overflow-hidden relative z-20 bg-[#FFF7F0] group"
    >
      {/* Left-side radial glow mimicking the hero section */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(255, 160, 100, 0.25) 0%, rgba(255, 200, 150, 0.12) 40%, transparent 70%)'
        }}
      />

      {/* Decorative Ornaments */}
      <TopLeftCorner className="top-0 left-0 w-[50%] sm:w-[35%] md:w-[30%] lg:w-[24%] xl:w-[20%] -translate-x-[20%] -translate-y-[20%] origin-top-left -rotate-6" />
      <BottomRightCorner className="bottom-0 right-0 w-[50%] sm:w-[35%] md:w-[30%] lg:w-[24%] xl:w-[20%] translate-x-[20%] translate-y-[20%] origin-bottom-right -rotate-6" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 relative flex flex-col items-center justify-center">
          <span className="font-display italic text-[#C77738] tracking-[0.2em] text-sm uppercase mb-4 text-center">
            Our Foundation
          </span>
          <h2 className="text-5xl md:text-6xl font-display font-light text-[#3C2A21] text-center mb-6">
            Four core pillars
          </h2>
        </div>

        <div className="flex flex-col gap-12 md:gap-16 relative py-12">
          {PILLARS.map((pillar, index) => {
            const isEven = index % 2 !== 0;
            return (
              <RevealOnScroll key={pillar.number} delay={0.1}>
                <div className={`flex flex-col md:flex-row items-center gap-12 lg:gap-24 ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Text Content */}
                  <div className="flex-1 flex flex-col justify-center w-full">
                    <h3 className="text-3xl md:text-4xl font-display font-light text-[#3C2A21]">
                      {pillar.title}
                    </h3>
                    {/* Decorative Divider */}
                    <div className="w-12 h-[1px] bg-[#D4C4A8] my-6"></div>
                    <p className="font-sans font-light text-sm md:text-base leading-[2.0] max-w-md text-[#858079]">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Image Mask Number */}
                  <div className={`flex-1 flex w-full justify-center ${isEven ? 'md:justify-start' : 'md:justify-end'} items-center`}>
                    <div 
                      className="text-[12rem] md:text-[15rem] font-sans font-bold leading-[0.8] tracking-tighter"
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
