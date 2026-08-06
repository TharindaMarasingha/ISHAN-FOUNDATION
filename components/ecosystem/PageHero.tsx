"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxBackground } from "../ui/ParallaxBackground";

export function PageHero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh', marginTop: '0', paddingTop: '0', top: '0' }}>
      <div className="absolute inset-0" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
        <Image
          src="/images/ecosystem-hero.webp"
          alt="ISHAN Ecosystem"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,4,2,0.3)] via-[rgba(10,4,2,0.45)] to-[rgba(10,4,2,0.75)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,4,2,0.7)] via-[rgba(10,4,2,0.3)] to-transparent" />
      <ParallaxBackground fadeRange={[100, 600]} driftRate={0.1} />
      <div className="relative z-10 flex flex-col justify-end pb-16 pl-12 md:pb-20 md:pl-16" style={{ minHeight: '100vh' }}>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex w-fit border border-primary rounded-full px-4 py-1.5 text-primary text-xs uppercase tracking-[0.18em] font-sans mb-4"
        >
          Our Ecosystem
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-display font-normal leading-tight text-white text-4xl md:text-5xl lg:text-6xl max-w-3xl mb-4"
        >
          <span className="text-[#F5F1E9] block">One Vision. Multiple Initiatives.</span>
          <span className="text-[#F3D8DB] [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] block">Shared Purpose.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="font-display italic text-white/80 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl"
        >
          A Growing Ecosystem of Specialised Initiatives
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="font-sans font-light text-white/65 text-sm md:text-base leading-relaxed max-w-xl"
        >
          ISHAN is more than a single institution. It is a growing ecosystem of specialised initiatives working together to advance a common vision: harmonising humanity and nature through wisdom, wellness, ethical leadership, sustainability, and conscious community development.
        </motion.p>
      </div>
    </section>
  );
}
