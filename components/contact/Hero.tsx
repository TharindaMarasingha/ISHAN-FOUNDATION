"use client";

import { motion } from "framer-motion";
import { ParallaxBackground } from "../ui/ParallaxBackground";

export function Hero() {
  return (
    <section className="relative min-h-[50vh] flex flex-col justify-end pb-24 pt-32 px-6 overflow-hidden bg-deepAmber/[0.03] border-b border-burntOrange/10">
      <ParallaxBackground fadeRange={[100, 500]} driftRate={0.1} />
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block px-4 py-1.5 border border-burntOrange/30 rounded-full font-sans text-[0.65rem] uppercase tracking-[0.2em] text-burntOrange mb-8"
        >
          Get in Touch
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-deepAmber tracking-wide mb-6"
        >
          Connect with <span className="text-mandarin">ISHAN</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="font-display italic text-2xl md:text-3xl text-sacredGold mb-8 max-w-3xl leading-relaxed"
        >
          Join a global network of seekers, healers, and builders shaping a conscious future.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="font-sans font-light text-deepAmber max-w-2xl leading-relaxed"
        >
          We welcome inquiries from wellness practitioners, institutional partners, visionary investors, media representatives, and seekers around the world. Reach out to our team to explore collaborations, request information, or express interest in our upcoming programs and ecosystem developments.
        </motion.p>
      </div>
    </section>
  );
}
