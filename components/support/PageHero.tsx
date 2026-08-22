"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxBackground } from "../ui/ParallaxBackground";

export function PageHero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh', marginTop: '0', paddingTop: '0', top: '0' }}>
      <div className="absolute inset-0" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
        <Image
          src="/images/suport.webp"
          alt="ISHAN Support"
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
      <div className="relative z-10 flex flex-col justify-end w-full px-6 pb-24 pt-32 max-w-[95%] sm:max-w-sm md:pb-20 md:px-16 md:max-w-3xl" style={{ minHeight: '100vh' }}>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-display text-[#F8F7F2] leading-tight mb-4 drop-shadow-xl"
        >
          Become a Steward of <br className="hidden md:block" /> Positive Change
        </motion.h1>

        {/* Global Editorial Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="w-12 h-px bg-[#F8F7F2]/40 mb-6 origin-left"
        ></motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-[#F8F7F2]/70 font-light text-sm md:text-base leading-relaxed drop-shadow-sm pr-2 max-w-xl"
        >
          Every meaningful transformation begins with individuals who choose to care, contribute, and take responsibility. ISHAN is more than an institution — it is a global movement.
        </motion.p>
      </div>
    </section>
  );
}
