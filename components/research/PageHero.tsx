"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxBackground } from "../ui/ParallaxBackground";

export function PageHero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden" style={{ marginTop: '0', paddingTop: '0', top: '0' }}>
      <div className="absolute inset-0" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
        <Image
          src="/images/rese.webp"
          alt="ISHAN Research"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      
      {/* 
        The Mobile Scrim (Crucial Contrast Fix):
        Fades from 95% black at the very bottom, up to mostly transparent at the top.
        On desktop (md:), it switches to a left-to-right gradient.
      */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/10 md:bg-gradient-to-r md:from-black/80 md:via-black/50 md:to-transparent" />
      
      {/* Left-side radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(255, 160, 100, 0.25) 0%, rgba(255, 200, 150, 0.12) 40%, transparent 70%)'
        }}
      />
      
      <ParallaxBackground fadeRange={[100, 600]} driftRate={0.1} />
      
      <div className="relative z-10 w-full px-6 pb-16 pt-32 md:px-12 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-display font-normal leading-tight text-white text-4xl sm:text-5xl md:text-6xl mb-6 drop-shadow-md"
        >
          <span className="text-[#F5F1E9] block">Advancing Knowledge.</span>
          <span className="text-[#F5F1E9] block">Inspiring Innovation.</span>
          <span className="text-[#F3D8DB] block">Creating Lasting Impact.</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="font-display italic text-[#F8F7F2]/90 text-base md:text-xl leading-relaxed mb-6 max-w-2xl drop-shadow"
        >
          Guided by curiosity, integrity, interdisciplinary collaboration, and a commitment to serving humanity and nature.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="font-sans font-light text-[#F8F7F2]/70 text-xs md:text-sm leading-relaxed max-w-lg"
        >
          How can knowledge improve quality of life? This question guides every research initiative, educational programme, and publication produced by ISHAN.
        </motion.p>
      </div>
    </section>
  );
}
