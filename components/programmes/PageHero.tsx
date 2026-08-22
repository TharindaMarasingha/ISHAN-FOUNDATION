"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ParallaxBackground } from "../ui/ParallaxBackground";

export function PageHero() {
  return (
    <section className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden" style={{ marginTop: '0', paddingTop: '0', top: '0' }}>
      <div className="absolute inset-0" style={{ top: 0, left: 0, right: 0, bottom: 0 }}>
        {/* Desktop Image */}
        <Image
          src="/images/program.webp"
          alt="ISHAN Programmes"
          fill
          priority
          className="object-cover object-center hidden md:block"
          sizes="100vw"
        />
        {/* Mobile Image */}
        <Image
          src="/images/programm.webp"
          alt="ISHAN Programmes Mobile"
          fill
          priority
          className="object-cover object-center block md:hidden"
          sizes="100vw"
        />
      </div>
      
      {/* Mobile Framing Scrim (Adjusted to keep BG visible). Desktop uses original subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent md:bg-gradient-to-b md:from-transparent md:via-transparent md:to-black/40" />
      
      <ParallaxBackground fadeRange={[100, 600]} driftRate={0.1} />
      
      <div className="relative z-10 w-full px-6 pb-24 pt-32 md:pb-20 md:pl-16 md:px-12 max-w-[95%] sm:max-w-sm md:max-w-3xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
          className="font-display font-normal leading-tight text-white text-4xl sm:text-5xl md:text-6xl mb-4 drop-shadow-lg"
        >
          <span className="text-[#F8F7F2] block">
            Transforming <br className="md:hidden" />
            <span className="hidden md:inline"> </span>
            Knowledge <br className="md:hidden" />
          </span>
          <span className="text-[#F3D8DB] [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] block">into Practice</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="font-display italic text-[#F8F7F2]/90 text-base md:text-xl leading-relaxed mb-6 max-w-2xl drop-shadow"
        >
          Practice into Purpose. Purpose into Impact.
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
          At ISHAN, learning is not confined to classrooms, books, or theories. Our programmes are designed to inspire holistic growth across the physical, emotional, intellectual, financial, and spiritual dimensions of human development.
        </motion.p>
      </div>
    </section>
  );
}
