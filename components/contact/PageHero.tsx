"use client";

import { motion } from "framer-motion";

export function PageHero() {
  return (
    <section className="relative min-h-[50vh] flex flex-col justify-end pb-24 pt-32 px-6 overflow-hidden border-b border-divider">
      {/* Left-side radial glow */}
      <div 
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 0% 50%, rgba(255, 160, 100, 0.25) 0%, rgba(255, 200, 150, 0.12) 40%, transparent 70%)'
        }}
      />
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block px-4 py-1.5 border border-primary/30 rounded-full font-sans text-[0.65rem] uppercase tracking-[0.2em] text-primary mb-8"
        >
          Get in Touch
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-display font-light text-5xl md:text-6xl lg:text-7xl text-heading tracking-wide mb-4"
        >
          Connect with ISHAN
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="font-display italic text-xl md:text-2xl text-primary max-w-3xl mb-8 leading-relaxed"
        >
          Join a global network of seekers, healers, and builders shaping a conscious future.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="font-sans font-light text-heading max-w-2xl leading-relaxed"
        >
          We warmly welcome wellness practitioners, institutional partners, visionary investors, the media, and sincere seekers to reach out. Whether you wish to contribute to Sri Vrindavan Project, attend a Samanvaya immersion, or align your organization with our mission, your journey begins here.
        </motion.p>
      </div>
    </section>
  );
}
