"use client";
import React from "react";
import Image from "next/image";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Button } from "../ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export function ContactCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="connect" className="relative py-32 px-6 md:px-12 bg-bark overflow-hidden flex flex-col items-center justify-center">
      
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact-cta-bg.webp"
          alt="Contact Background"
          fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
        {/* Dark Gradient Overlay */}
        <div 
          className="absolute inset-0" 
          style={{
            background: "linear-gradient(to bottom, rgba(46, 26, 14, 0.75) 0%, rgba(46, 26, 14, 0.4) 50%, rgba(46, 26, 14, 0.75) 100%)"
          }}
        />
      </div>

      {/* Decorative Rotating SVG Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.04]">
        <motion.div
          animate={{ rotate: prefersReducedMotion ? 0 : 360 }}
          transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[800px] rounded-full border-[1px] border-secondary flex items-center justify-center"
        >
          <svg width="600" height="600" viewBox="0 0 100 100" className="opacity-50">
            <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="currentColor" strokeWidth="0.2" />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        <RevealOnScroll className="flex flex-col items-center w-full">
          <span className="font-display italic text-white tracking-[0.2em] text-sm uppercase mb-4 text-center">
            Get in Touch
          </span>
          <h2 className="font-display font-light text-secondary text-4xl md:text-5xl lg:text-6xl mb-6 text-center">
            Join the ecosystem
          </h2>
          <p className="font-sans font-light text-white max-w-xl leading-relaxed text-center mb-12">
            Whether you are a wellness practitioner, institutional partner, investor, or a seeker — we welcome you to connect with ISHAN.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8 md:mb-16">
            <Button variant="primary" href="/contact">
              Register Interest
            </Button>
            <Button variant="ghost" href="/about">
              About ISHAN
            </Button>
          </div>

        </RevealOnScroll>
      </div>
    </section>
  );
}

