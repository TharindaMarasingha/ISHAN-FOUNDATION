"use client";

import React, { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Button } from "../ui/Button";

const PARTNER_TYPES = ["Institutions", "Corporations", "Governments", "NGOs", "Universities"];
const CONTRIBUTIONS = [
  "Volunteering", "Professional Expertise", "Research", "Teaching", 
  "Mentorship", "Community Projects", "Environmental Initiatives", 
  "Strategic Partnerships", "Philanthropic Support", "Knowledge Sharing"
];

function TypewriterQuote({ text }: { text: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.015, delayChildren: 0.4 },
    },
  };

  const child: Variants = {
    visible: { opacity: 1, display: "inline-block", y: 0 },
    hidden: { opacity: 0, display: "inline-block", y: 2 },
  };

  return (
    <motion.h4
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="font-display italic text-[24px] md:text-[30px] leading-[1.6] text-heading tracking-normal px-4 md:px-0 text-center"
      style={{ letterSpacing: "-0.01em" }}
    >
      {text.split("\n").map((line, lineIndex, lineArr) => (
        <React.Fragment key={`line-${lineIndex}`}>
          {line.split(" ").map((word, wordIndex, wordArr) => (
            <React.Fragment key={`word-${lineIndex}-${wordIndex}`}>
              <span className="inline-block whitespace-nowrap">
                {word.split("").map((char, charIndex) => (
                  <motion.span variants={child} key={`char-${lineIndex}-${wordIndex}-${charIndex}`}>
                    {char}
                  </motion.span>
                ))}
              </span>
              {wordIndex < wordArr.length - 1 && " "}
            </React.Fragment>
          ))}
          {lineIndex < lineArr.length - 1 && <br />}
        </React.Fragment>
      ))}
    </motion.h4>
  );
}

const QUOTE_TEXT = `"We do not merely conduct programmes. We cultivate transformation.\nWe do not simply build organizations. We nurture conscious institutions.\nWe do not pursue growth alone. We pursue meaningful and sustainable impact."`;

export function Partnerships() {
  return (
    <section 
      className="py-24 px-6 md:px-12 bg-background"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-20 md:gap-24">
          
          {/* Left Column */}
          <div className="flex flex-col">
            <RevealOnScroll>
              <h3 className="font-display font-light text-[40px] leading-[1.1] md:text-5xl text-heading mb-6 md:mb-4">
                Join the Movement
              </h3>
              <p className="font-sans font-light text-[16px] leading-[1.65] text-heading/90 md:text-base md:text-heading/80 md:leading-relaxed mb-10 md:mb-6">
                Meaningful change begins with individuals who choose to live consciously and serve selflessly. Whether you are a student, professional, educator, healthcare practitioner, researcher, entrepreneur, policymaker, community leader, organization, or institution, there is a place for you within the ISHAN ecosystem.
              </p>
              <div className="flex flex-wrap gap-2.5 md:gap-3 mb-14 md:mb-10">
                {PARTNER_TYPES.map((pt) => (
                  <span 
                    key={pt} 
                    className="flex items-center justify-center min-h-[44px] md:min-h-0 px-5 md:px-4 py-2 md:py-1.5 rounded-full bg-heading/5 border border-heading/10 md:border-transparent text-[12px] md:text-xs text-heading/90 tracking-widest uppercase shadow-sm md:shadow-none active:scale-[0.98] md:active:scale-100 transition-all duration-300"
                  >
                    {pt}
                  </span>
                ))}
              </div>
              <div className="w-full sm:w-[85%] md:w-auto">
                <Button 
                  variant="primary" 
                  href="/contact"
                  className="w-full md:w-auto text-center py-[17px] md:py-4 text-[13px] md:text-xs shadow-[0_8px_20px_-8px_rgba(241,143,164,0.4)] md:shadow-md active:scale-[0.98] md:active:scale-100"
                >
                  Connect With Us →
                </Button>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            <RevealOnScroll delay={0.2}>
              <h3 className="font-display font-light text-[30px] leading-[1.2] md:text-3xl text-heading mb-8">
                You Can Contribute Through
              </h3>
              <div className="flex flex-col md:grid md:grid-cols-2 gap-y-3 md:gap-y-6 md:gap-x-8">
                {CONTRIBUTIONS.map((item) => (
                  <div 
                    key={item} 
                    className="group flex items-center min-h-[48px] md:min-h-0 py-3 md:py-0 px-4 md:px-0 bg-heading/[0.03] md:bg-transparent rounded-xl md:rounded-none border border-heading/[0.04] md:border-transparent text-[15.5px] md:text-sm font-sans font-light text-heading/90 md:text-heading/80 active:bg-heading/[0.06] md:active:bg-transparent transition-colors cursor-default"
                  >
                    <span className="text-secondary/80 md:text-secondary mr-4 md:mr-3 text-lg md:text-base group-active:scale-110 md:group-active:scale-100 transition-transform">
                      ✦
                    </span>
                    {item}
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>

        </div>

        {/* Quote Block */}
        <div className="hidden md:block mt-28 md:mt-20 pt-16 md:pt-16 border-t border-divider text-center max-w-4xl mx-auto min-h-[160px] px-2 md:px-0">
          <TypewriterQuote text={QUOTE_TEXT} />
        </div>

      </div>
    </section>
  );
}
