"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../ui/SectionHeading";

const YOGINIS = [
  {
    symbol: "☽",
    name: "Dr. Hon. S. Kobayashi",
    alias: "Yogeshwari · Sawamini",
    energy: "Mahalaxmi Energy",
    description:
      "Founder, Visionary & Initiator. RYT 500h, Advanced Yoga Science, Sound Healing, Cognitive Behavioral Therapy, Trauma Informed Coach, EFT Certified. Frequencies: Prosperity · Harmony · Abundance.",
    nationality: "Japan",
    symbolRotate: false,
    symbolPulse: false,
  },
  {
    symbol: "☀",
    name: "Master Indrani Sharma",
    alias: "Adiyogini · Rudrakshi",
    energy: "Mahakali Energy",
    description:
      "Core Member. PhD Scholar in Yogic Science, NLP Master, Akasha Healing, Reiki, Psychosocial Counselling, Sustainable Business Leadership. Frequencies: Transformation · Courage · Protection.",
    nationality: "Nepal",
    symbolRotate: true,
    symbolPulse: false,
  },
  {
    symbol: "✦",
    name: "Dr. Pooja Shah",
    alias: "Vedashree",
    energy: "Maha Saraswati Energy",
    description:
      "Core Member. Certified Naturopath MD, Ayurvedic Herbal Preparations, Marma Chikitsak, EFT Trainer, Crystal Healer, Hypnotherapist, Sound Healing Practitioner. Frequencies: Wisdom · Knowledge · Consciousness.",
    nationality: "India",
    symbolRotate: false,
    symbolPulse: true,
  },
];

function YoginiCard({
  yogini,
  index,
  isVisible,
}: {
  yogini: (typeof YOGINIS)[0];
  index: number;
  isVisible: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 + index * 0.15 }}
      className="h-full group"
    >
      <div
        className="h-full flex flex-col items-center text-center bg-[#f5f0e8] border border-[#c8bfaa]/40 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_20px_48px_rgba(46,38,20,0.13)] hover:border-[#a89f88]/60 overflow-hidden"
        style={{ borderRadius: "120px 120px 12px 12px" }}
      >
        {/* Arched icon area */}
        <div
          className="w-full flex items-center justify-center bg-[#e8e0cf]/70 pt-10 pb-8 mb-6 transition-colors duration-300 group-hover:bg-[#dfd5c0]/80"
          style={{ borderRadius: "110px 110px 0 0" }}
        >
          <motion.div
            className="w-16 h-16 rounded-full flex items-center justify-center bg-[#d8cdb8]/60 text-4xl leading-none select-none"
            whileHover={
              yogini.symbolRotate
                ? { rotate: 360, transition: { duration: 1.2, ease: "easeInOut" } }
                : yogini.symbolPulse
                ? { scale: [1, 1.18, 1], transition: { duration: 0.6, repeat: Infinity } }
                : { scale: 1.12, transition: { duration: 0.3 } }
            }
          >
            <span className="text-[#2C3E2D]">{yogini.symbol}</span>
          </motion.div>
        </div>

        {/* Card body */}
        <div className="flex flex-col items-center flex-grow px-7 pb-8">
          <h4 className="font-display text-xl text-[#2C3E2D] mb-1 leading-snug">
            {yogini.name}
          </h4>

          <p className="font-display italic text-base text-[#667768] mb-5 leading-snug">
            {yogini.alias}
          </p>

          {/* Energy badge — filled, no border, pink on hover */}
          <div className="mb-5 px-4 py-1.5 rounded-full bg-[#667768]/10 text-[0.6rem] font-medium uppercase tracking-widest text-[#667768] transition-colors duration-300 group-hover:bg-[#d4748a]/15 group-hover:text-[#b85570]">
            {yogini.energy}
          </div>

          {/* Subtle separator */}
          <div className="w-12 h-px bg-[#c8bfaa] mb-5" />

          <p className="font-sans font-light text-sm text-[#3F3E3A] leading-[1.8] flex-grow mb-7">
            {yogini.description}
          </p>

          {/* Nationality badge — filled pink */}
          <div className="mt-auto px-5 py-1.5 rounded-full bg-[#F3D8DB]/40 text-[0.6rem] uppercase tracking-widest text-[#b85570] border border-[#F3D8DB]/60 transition-colors duration-300 group-hover:bg-[#F3D8DB]/70">
            {yogini.nationality}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function FoundingTrinity() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-28 px-6 md:px-12 bg-surface" ref={ref}>
      <div className="max-w-7xl mx-auto">
        {/* Heading — staggered reveal */}
        <div className="mb-20 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0 }}
          >
            <SectionHeading
              align="center"
              eyebrow="The Global Founding Trinity"
              heading="Three Yoginis. Three Nations. One Vision."
              description=""
            />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            className="font-sans text-base text-[#4A5B4D] leading-relaxed max-w-3xl mx-auto mt-4"
          >
            The global leadership of Arogya Ashram International is anchored by a trinity of
            internationally certified Yoginis. Symbolically, they represent the Divine Feminine
            Trinity Energies — Mahasaraswati, Mahalaxmi, and Mahakali — uniting wisdom,
            prosperity, and transformative action.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {YOGINIS.map((yogini, index) => (
            <YoginiCard
              key={yogini.name}
              yogini={yogini}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

