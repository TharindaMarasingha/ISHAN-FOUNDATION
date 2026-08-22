"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxBackground } from "../ui/ParallaxBackground";

export function PageHero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden" style={{ marginTop: '0', paddingTop: '0', top: '0' }}>
      <div className="absolute inset-0" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
        <Image
          src="/images/leadership.webp"
          alt="ISHAN Leadership"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>
      
      {/* Mobile Scrim with completely blackout bottom edge fading up. Desktop uses original gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent md:bg-gradient-to-b md:from-[rgba(10,4,2,0.3)] md:via-[rgba(10,4,2,0.45)] md:to-[rgba(10,4,2,0.75)]" />
      <div className="absolute inset-0 hidden md:block md:bg-gradient-to-r md:from-[rgba(10,4,2,0.7)] md:via-[rgba(10,4,2,0.3)] md:to-transparent" />
      
      {/* Left-side radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(255, 160, 100, 0.25) 0%, rgba(255, 200, 150, 0.12) 40%, transparent 70%)'
        }}
      />
      <ParallaxBackground fadeRange={[100, 600]} driftRate={0.1} />
      
      <div className="relative z-10 w-full px-6 pb-24 pt-32 md:pb-20 md:pl-16 md:px-12 max-w-[95%] sm:max-w-sm md:max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-display font-normal leading-tight text-white text-4xl sm:text-5xl md:text-6xl mb-4 drop-shadow-lg"
        >
          <span className="text-[#F8F7F2] block">Leadership</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="font-display italic text-[#F8F7F2]/90 text-base md:text-xl leading-relaxed mb-6 max-w-2xl drop-shadow"
        >
          Guiding the Vision. Preserving the Wisdom. Serving the Future.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
          className="w-12 h-px bg-[#F8F7F2]/40 mb-6 origin-left"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="font-sans font-light text-[#F8F7F2]/70 text-sm md:text-base leading-relaxed max-w-xl drop-shadow-sm pr-2 md:pr-0"
        >
          Leadership at ISHAN is founded on the principle of stewardship. We believe that leadership is not about authority, status, or ownership. It is about accepting responsibility for preserving wisdom, nurturing people, building institutions, and creating a legacy that benefits future generations.
        </motion.p>
      </div>
    </section>
  );
}
