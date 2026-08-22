"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxBackground } from "../ui/ParallaxBackground";

export function PageHero() {
  return (
    <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh', marginTop: '0', paddingTop: '0', top: '0' }}>
      <div className="absolute inset-0" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
        <Image
          src="/images/visionn.webp"
          alt="ISHAN Vision"
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
      <div className="relative z-10 w-full px-6 pb-24 pt-32 max-w-[95%] sm:max-w-md md:max-w-none md:pb-20 md:pl-16 md:pt-0 flex flex-col justify-end" style={{ minHeight: '100vh' }}>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-6xl font-display text-[#F8F7F2] leading-tight mb-4 drop-shadow-xl"
        >
          Building a Legacy for <br className="md:hidden" /> <span className="md:text-[#F3D8DB]">Future Generations</span>
        </motion.h1>

        {/* Global Editorial Divider */}
        <motion.div 
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: 48 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="h-px bg-[#F8F7F2]/40 mb-6"
        />

        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="text-[#F8F7F2]/90 font-display italic text-base md:text-xl leading-relaxed mb-6 drop-shadow block"
        >
          2026–2056
        </motion.span>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="text-[#F8F7F2]/70 font-sans font-light text-sm md:text-base leading-relaxed drop-shadow-sm pr-2 max-w-xl"
        >
          To establish ISHAN as a globally respected institution advancing wisdom, wellness, ethical leadership, sustainability, education, community development, and environmental stewardship.
        </motion.p>
      </div>
    </section>
  );
}
