"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
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

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.02, delayChildren: 0.4 },
    },
  };

  const child = {
    visible: { opacity: 1, display: "inline-block", y: 0 },
    hidden: { opacity: 0, display: "inline-block", y: 2 },
  };

  return (
    <motion.h4
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className="font-display italic text-2xl md:text-3xl text-deepAmber leading-relaxed tracking-wide"
    >
      {text.split("").map((char, index) => (
        <motion.span variants={child} key={index}>
          {char === "\n" ? <br /> : char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.h4>
  );
}

const QUOTE_TEXT = `"We do not merely conduct programmes. We cultivate transformation.\nWe do not simply build organizations. We nurture conscious institutions.\nWe do not pursue growth alone. We pursue meaningful and sustainable impact."`;

export function Partnerships() {
  return (
    <section 
      className="py-24 px-6 md:px-12"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 200, 150, 0.12) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 220, 180, 0.1) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          
          {/* Left Column */}
          <div className="flex flex-col space-y-8">
            <RevealOnScroll>
              <h3 className="font-display font-light text-4xl md:text-5xl text-deepAmber mb-4">
                Join the Movement
              </h3>
              <p className="font-sans font-light text-deepAmber/80 leading-relaxed mb-6">
                Meaningful change begins with individuals who choose to live consciously and serve selflessly. Whether you are a student, professional, educator, healthcare practitioner, researcher, entrepreneur, policymaker, community leader, organization, or institution, there is a place for you within the ISHAN ecosystem.
              </p>
              <div className="flex flex-wrap gap-3 mb-10">
                {PARTNER_TYPES.map((pt) => (
                  <span key={pt} className="px-4 py-1.5 rounded-full bg-darkBrown/5 text-xs text-deepAmber tracking-widest uppercase">
                    {pt}
                  </span>
                ))}
              </div>
              <Button variant="primary" href="/contact">Connect With Us →</Button>
            </RevealOnScroll>
          </div>

          {/* Right Column */}
          <div className="flex flex-col space-y-8">
            <RevealOnScroll delay={0.2}>
              <h3 className="font-display font-light text-2xl md:text-3xl text-deepAmber mb-8">
                You Can Contribute Through
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                {CONTRIBUTIONS.map((item) => (
                  <div key={item} className="flex items-center text-sm font-sans font-light text-deepAmber/80">
                    <span className="text-sacredGold mr-3">✦</span>
                    {item}
                  </div>
                ))}
              </div>
              <Button variant="ghost" href="/contact">Connect With Us</Button>
            </RevealOnScroll>
          </div>

        </div>

        {/* Quote Block */}
        <div className="mt-20 pt-16 border-t border-sacredGold/20 text-center max-w-4xl mx-auto min-h-[160px]">
          <TypewriterQuote text={QUOTE_TEXT} />
        </div>

      </div>
    </section>
  );
}
