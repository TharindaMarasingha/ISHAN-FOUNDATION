"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxBackground } from "../ui/ParallaxBackground";

export function PageHero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh', marginTop: '0', paddingTop: '0', top: '0' }}>
      <div className="absolute inset-0" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
        <Image
          src="/images/research-hero.jpg"
          alt="ISHAN Research"
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
      <div className="relative z-10 flex flex-col justify-end pb-20 pl-16 pr-8 md:pl-20 md:pb-24 max-w-3xl" style={{ minHeight: '100vh' }}>
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex w-fit border border-[rgba(201,168,76,0.5)] rounded-full px-4 py-1.5 text-[#F5D98A] text-xs uppercase tracking-[0.18em] font-sans mb-5"
        >
          Research, Education & Publications
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-display text-white text-5xl md:text-7xl lg:text-8xl font-normal leading-none mb-6 text-left"
        >
          Advancing Knowledge. Inspiring Innovation. Creating Lasting Impact.
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="font-display italic text-white/80 text-xl md:text-2xl leading-relaxed mb-5 max-w-2xl text-left"
        >
          Guided by curiosity, integrity, interdisciplinary collaboration, and a commitment to serving humanity and nature.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="font-sans font-light text-white/65 text-sm md:text-base leading-relaxed max-w-xl text-left"
        >
          How can knowledge improve quality of life? This question guides every research initiative, educational programme, and publication produced by ISHAN.
        </motion.p>
      </div>
    </section>
  );
}
