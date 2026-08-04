"use client";

import { motion } from "framer-motion";
import { ParallaxBackground } from "../ui/ParallaxBackground";

export function Hero() {
  return (
    <section className="relative min-h-[50vh] flex flex-col justify-end pb-24 pt-32 px-6 overflow-hidden bg-surface border-b border-divider">
      <ParallaxBackground fadeRange={[100, 500]} driftRate={0.1} />
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
          className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-heading tracking-wide mb-6"
        >
          Connect With <span className="text-primary">ISHAN</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="font-display italic text-2xl md:text-3xl text-secondary mb-8 max-w-3xl leading-relaxed"
        >
          Let's Build the Future Together
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          className="font-sans font-light text-heading max-w-2xl leading-relaxed"
        >
          Every meaningful journey begins with a conversation. Whether you are an individual seeking personal growth, an institution exploring collaboration, a professional looking to contribute, or an organisation committed to creating positive impact, we welcome the opportunity to connect with you.
        </motion.p>
      </div>
    </section>
  );
}
