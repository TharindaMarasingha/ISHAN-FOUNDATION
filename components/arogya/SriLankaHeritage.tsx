"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";

const HERITAGE_CARDS = [
  {
    icon: "✦",
    title: "Dhamma Dweepa",
    description:
      "Island of Wisdom — contributing mindfulness, ethical living, and conscious human development for global well-being.",
  },
  {
    icon: "◎",
    title: "Ancient Arogyasala Heritage",
    description:
      "Drawing upon the legacy of the world's earliest dedicated healing centres in Mihintale and Anuradhapura.",
  },
  {
    icon: "❧",
    title: "Hela Wedakama",
    description:
      "Preserving, modernising, and globally sharing Sri Lanka's indigenous medicine system for the benefit of humanity.",
  },
];

export function SriLankaHeritage() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, { once: true, amount: 0.15 });

  const leftItems = [
    { delay: 0.05 },
    { delay: 0.15 },
    { delay: 0.25 },
    { delay: 0.35 },
  ];

  return (
    <section className="py-28 px-6 max-w-7xl mx-auto" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">

        {/* ── LEFT COLUMN ── */}
        <div className="flex flex-col space-y-8 relative">

          {/* Sri Lanka / mandala watermark */}
          <div
            className="absolute -top-8 -left-6 w-72 h-72 pointer-events-none select-none opacity-[0.04] text-[#2C3E2D]"
            aria-hidden
            style={{
              fontSize: "18rem",
              lineHeight: 1,
              fontFamily: "serif",
              userSelect: "none",
            }}
          >
            ॐ
          </div>

          {/* Overline + heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut", delay: leftItems[0].delay }}
          >
            <SectionHeading
              eyebrow="Sri Lanka Chapter"
              heading="Rooted in the World's Oldest Healing Civilisation"
            />
          </motion.div>

          {/* Para 1 */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: leftItems[1].delay }}
            className="font-sans text-[#4A5B4D] leading-relaxed text-base font-normal"
          >
            Sri Lanka draws inspiration from the Arogyasalas of Anuradhapura—the world's earliest
            known dedicated healing institutions dating back to the 3rd century BC. Our ecosystem is
            deeply rooted in this legacy, combining the ancient Hela Wedakama indigenous medicine
            system and the profound Buddhist mindfulness tradition.
          </motion.p>

          {/* Para 2 */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: leftItems[2].delay }}
            className="font-sans text-[#4A5B4D] leading-relaxed text-base font-normal"
          >
            The AAI Sri Lanka Chapter, led by Country Director Ranga Soysa, is activating this
            heritage as an internationally marketable wellness ecosystem. By connecting sacred
            geography, indigenous healing wisdom, and modern wellness science, we offer a sanctuary
            for planetary healing.
          </motion.p>

          {/* Button with pink glow on hover */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut", delay: leftItems[3].delay }}
            className="w-fit"
          >
            <div className="transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_4px_18px_rgba(212,116,138,0.45)]">
              <Button href="/contact" variant="primary">Connect With Us</Button>
            </div>
          </motion.div>
        </div>

        {/* ── RIGHT COLUMN — staggered cards from right ── */}
        <div className="flex flex-col space-y-5">
          {HERITAGE_CARDS.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, x: 40 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.2 + index * 0.15 }}
              className="group relative"
            >
              <div
                className="
                  relative overflow-hidden rounded-2xl
                  bg-[#f5f0e8] p-7
                  border-l-2 border-[#c8bfaa]
                  transition-all duration-400 ease-out
                  group-hover:translate-x-1.5
                  group-hover:border-l-[#d4748a]
                  group-hover:shadow-[0_8px_28px_rgba(44,62,45,0.10)]
                "
              >
                {/* Icon + title row */}
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[#2C3E2D] text-base leading-none select-none" aria-hidden>
                    {card.icon}
                  </span>
                  <h3 className="font-display font-normal text-xl text-[#2C3E2D] leading-snug">
                    {card.title}
                  </h3>
                </div>

                <p className="font-sans text-sm text-[#4A5B4D] leading-[1.75] font-normal pl-7">
                  {card.description}
                </p>

                {/* Pink arrow — fades in on hover */}
                <span
                  className="
                    absolute right-5 top-1/2 -translate-y-1/2
                    text-[#d4748a] text-lg
                    opacity-0 group-hover:opacity-100
                    translate-x-2 group-hover:translate-x-0
                    transition-all duration-300
                  "
                  aria-hidden
                >
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
