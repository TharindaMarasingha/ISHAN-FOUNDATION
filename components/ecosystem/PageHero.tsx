"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxBackground } from "../ui/ParallaxBackground";

export function PageHero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden" style={{ marginTop: '0', paddingTop: '0', top: '0' }}>
      <div className="absolute inset-0" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
        <div className="hidden md:block absolute inset-0">
          <Image
            src="/images/eco.webp"
            alt="ISHAN Ecosystem"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="block md:hidden absolute inset-0">
          <Image
            src="/images/ecom.webp"
            alt="ISHAN Ecosystem Mobile"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      </div>
      
      {/* Mobile Framing Scrim (Adjusted to keep BG visible). Desktop uses original gradients */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent md:bg-gradient-to-b md:from-transparent md:via-[rgba(10,4,2,0.1)] md:to-[rgba(10,4,2,0.4)]" />
      
      <ParallaxBackground fadeRange={[100, 600]} driftRate={0.1} />
      
      <div className="relative z-10 w-full px-6 pb-24 pt-32 md:pb-20 md:pl-16 md:px-12 max-w-[95%] sm:max-w-sm md:max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-display font-normal leading-tight text-white text-4xl sm:text-5xl md:text-6xl mb-4 drop-shadow-xl"
        >
          <span className="text-[#F8F7F2] block">
            One Vision. <br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            Multiple Initiatives. <br className="md:hidden" />
          </span>
          <span className="text-[#F3D8DB] [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] block">Shared Purpose.</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="font-display italic text-[#F8F7F2]/90 text-base md:text-xl leading-relaxed mb-6 max-w-2xl drop-shadow"
        >
          A Growing Ecosystem of Specialised Initiatives
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
          ISHAN is more than a single institution. It is a growing ecosystem of specialised initiatives working together to advance a common vision: harmonising humanity and nature through wisdom, wellness, ethical leadership, sustainability, and conscious community development.
        </motion.p>
      </div>
    </section>
  );
}
