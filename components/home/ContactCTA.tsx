"use client";
import React from "react";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Button } from "../ui/Button";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";

export function ContactCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="connect" className="relative py-32 px-6 md:px-12 bg-bark overflow-hidden flex flex-col items-center justify-center">
      {/* Decorative Rotating SVG Background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.04]">
        <motion.div
          animate={{ rotate: prefersReducedMotion ? 0 : 360 }}
          transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
          className="absolute w-[800px] h-[800px] rounded-full border-[1px] border-sacredGold flex items-center justify-center"
        >
          <svg width="600" height="600" viewBox="0 0 100 100" className="opacity-50">
            <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="currentColor" strokeWidth="0.2" />
          </svg>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
        <RevealOnScroll className="flex flex-col items-center w-full">
          <span className="font-display italic text-softApricot tracking-[0.2em] text-sm uppercase mb-4 text-center">
            Get in Touch
          </span>
          <h2 className="font-display font-light text-sacredGold text-4xl md:text-5xl lg:text-6xl mb-6 text-center">
            Join the ecosystem
          </h2>
          <p className="font-sans font-light text-softApricot max-w-xl leading-relaxed text-center mb-12">
            Whether you are a wellness practitioner, institutional partner, investor, or a seeker — we welcome you to connect with ISHAN.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Button variant="primary" href="/contact" className="bg-mandarin text-peach hover:bg-burntOrange">
              Register Interest
            </Button>
            <Button variant="ghost" href="/about" className="border-sacredGold text-sacredGold hover:border-softApricot hover:text-softApricot">
              About ISHAN
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-[0.65rem] md:text-xs uppercase tracking-widest text-softApricot">
            <Link href="https://ishanfoundation.lk" className="relative group overflow-hidden">
              <span className="relative z-10">ishanfoundation.lk</span>
              <span className="absolute left-0 bottom-0 w-full h-px bg-sacredGold -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </Link>
            <Link href="mailto:info@ishanfoundation.lk" className="relative group overflow-hidden">
              <span className="relative z-10">info@ishanfoundation.lk</span>
              <span className="absolute left-0 bottom-0 w-full h-px bg-sacredGold -translate-x-[101%] group-hover:translate-x-0 transition-transform duration-500 ease-out" />
            </Link>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
