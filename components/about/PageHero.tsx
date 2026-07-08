"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxBackground } from "../ui/ParallaxBackground";

export function PageHero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh', marginTop: '0', paddingTop: '0', top: '0' }}>
      <div className="absolute inset-0" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
        <Image
          src="/images/about-hero.jpg"
          alt="ISHAN About"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(10,4,2,0.3)] via-[rgba(10,4,2,0.45)] to-[rgba(10,4,2,0.75)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,4,2,0.7)] via-[rgba(10,4,2,0.3)] to-transparent" />
      {/* Left-side radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(255, 160, 100, 0.25) 0%, rgba(255, 200, 150, 0.12) 40%, transparent 70%)'
        }}
      />
      <ParallaxBackground fadeRange={[100, 600]} driftRate={0.1} />
      <div className="relative z-10 flex flex-col justify-end pb-16 pl-12 md:pb-20 md:pl-16" style={{ minHeight: '100vh' }}>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex w-fit border border-[rgba(201,168,76,0.5)] rounded-full px-4 py-1.5 text-[#F5D98A] text-xs uppercase tracking-[0.18em] font-sans mb-4"
        >
          About ISHAN
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-display font-normal leading-tight text-white text-4xl md:text-5xl lg:text-6xl max-w-3xl mb-4"
        >
          Who We Are
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="font-display italic text-white/80 text-lg md:text-xl leading-relaxed mb-4 max-w-2xl"
        >
          A Global Institution for Wisdom, Wellness, Humanity, Nature, and Sustainable Development
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="font-sans font-light text-white/65 text-sm md:text-base leading-relaxed max-w-xl"
        >
          ISHAN is an international institution dedicated to harmonising humanity and nature through wisdom, wellness, ethical leadership, education, research, sustainability, and conscious community development.
        </motion.p>
      </div>
    </section>
  );
}
