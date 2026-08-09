"use client";
import React from "react";
import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const STEPS = [
  { number: "01", title: "Arrival", desc: "Shedding the outside world." },
  { number: "02", title: "Stillness", desc: "Entering deep silence." },
  { number: "03", title: "Immersion", desc: "Communing with nature." },
  { number: "04", title: "Practice", desc: "Guided inner work." },
  { number: "05", title: "Integration", desc: "Returning renewed." },
];
export function TheExperience() {
  return (
    <section className="bg-white relative w-full border-y border-divider">
      <div className="flex flex-col lg:flex-row">
        {/* Sticky Image Column */}
        <div className="lg:w-1/2 relative h-[50vh] lg:h-screen lg:sticky top-0 flex items-center justify-center p-8 lg:p-16">

          <div 
            className="relative w-full aspect-square max-w-[500px] animate-blob-spin-component"
            style={{ clipPath: "url(#blob-shape-component)" }}
          >
            <Image
              src="/images/samanc.webp"
              alt="A serene stone pathway through a tropical reflection pool"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          <svg className="absolute w-0 h-0">
            <defs>
              <clipPath id="blob-shape-component" clipPathUnits="objectBoundingBox">
                <path
                  d="M0.81,0.56 C0.84,0.73 0.69,0.88 0.52,0.92 C0.35,0.96 0.17,0.85 0.09,0.68 C0.01,0.51 0.07,0.3 0.23,0.19 C0.39,0.08 0.61,0.11 0.72,0.26 C0.8,0.37 0.78,0.47 0.81,0.56 Z"
                  className="animate-blob-path-component"
                ></path>
              </clipPath>
            </defs>
          </svg>
        </div>

        {/* Scrolling Content Column */}
        <div className="lg:w-1/2 py-24 lg:py-32 px-6 md:px-12 lg:px-24 flex flex-col justify-center">
          <div className="max-w-xl mx-auto lg:mx-0 w-full">
            <RevealOnScroll>
              <SectionHeading
                align="left"
                eyebrow="The Journey"
                heading="A Pathway to the Self"
                description="The immersion is meticulously sequenced to gently transition the mind from external turbulence into profound internal clarity."
              />
            </RevealOnScroll>

            <div className="mt-16 md:mt-20 flex flex-col relative pb-12">
              {/* Vertical timeline line */}
              <div className="absolute left-8 top-8 bottom-12 w-px bg-primary/20" />

              {STEPS.map((step, index) => (
                <RevealOnScroll key={step.number} delay={index * 0.15} className="relative z-10 mb-12 md:mb-16 last:mb-0">
                  <div className="flex flex-row items-start gap-6 md:gap-10 group">
                    
                    {/* Number Circle */}
                    <div className="w-16 h-16 shrink-0 rounded-full border border-divider bg-white flex items-center justify-center group-hover:border-primary transition-colors duration-500 relative z-10">
                      <span className="font-display italic text-2xl text-heading">{step.number}</span>
                    </div>

                    {/* Text Content */}
                    <div className="flex flex-col pt-3">
                      <h4 className="font-display uppercase tracking-widest text-heading text-base md:text-xl mb-1 md:mb-2">
                        {step.title}
                      </h4>
                      <p className="font-sans font-light text-sm md:text-base text-heading/80">
                        {step.desc}
                      </p>
                    </div>
                    
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
