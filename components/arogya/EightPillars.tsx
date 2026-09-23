"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SectionHeading } from "../ui/SectionHeading";

const PILLARS = [
  { number: "01", title: "Holistic Healing & Wellness", description: "Yoga, Ayurveda, Naturopathy, Mental & Emotional well-being." },
  { number: "02", title: "Preventive Healthcare", description: "Wellness awareness, lifestyle disease prevention, integrative systems." },
  { number: "03", title: "Healthcare Infrastructure", description: "Holistic hospitals, integrative clinics, mobile healthcare, rehab facilities." },
  { number: "04", title: "Education & Research", description: "Wellness universities, Yoga/Ayurveda institutes, consciousness studies." },
  { number: "05", title: "Sustainability & Eco Development", description: "Organic farming, sustainable communities, herbal cultivation." },
  { number: "06", title: "Wellness Tourism & Retreats", description: "Ashram/meditation retreats, spiritual tourism, nature healing." },
  { number: "07", title: "Humanitarian & Social Impact", description: "Rural/Youth/Women empowerment, disaster relief, community healthcare." },
  { number: "08", title: "Digital & Global Initiatives", description: "Online platforms, global collaborations, wellness media, research partnerships." },
];

function PillarCard({
  pillar,
  index,
  isVisible,
}: {
  pillar: (typeof PILLARS)[0];
  index: number;
  isVisible: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.55, ease: "easeOut", delay: index * 0.07 }}
      className="group h-full"
    >
      <div
        className="
          relative h-full overflow-hidden rounded-3xl
          bg-[#f5f0e8] border border-[#c8bfaa]/40 p-8 sm:p-9
          flex flex-col justify-end
          transition-all duration-500 ease-out
          hover:-translate-y-1.5
          hover:shadow-[0_16px_40px_rgba(44,62,45,0.12)]
          hover:border-[#F3D8DB]/80
          hover:bg-[#faf7f2]
        "
      >
        {/* Watermark number — top-right, Deep Forest Olive at 7% opacity */}
        <motion.div
          className="
            absolute top-4 right-5
            font-display italic text-[5.5rem] md:text-[6.5rem] leading-none
            select-none pointer-events-none
            text-[#2C3E2D]
          "
          style={{ opacity: 0.07 }}
          whileHover={{ scale: 1.1, x: 6, transition: { duration: 0.4, ease: "easeOut" } }}
        >
          {pillar.number}
        </motion.div>

        {/* Text — bottom-left aligned */}
        <div className="relative z-10 mt-auto">
          <h3
            className="
              font-display uppercase tracking-widest
              text-[#2C3E2D] text-[0.8rem] md:text-[0.85rem]
              font-semibold mb-3 leading-snug
            "
          >
            {pillar.title}
          </h3>
          <p className="font-sans font-light text-sm text-[#4A5B4D] leading-relaxed">
            {pillar.description}
          </p>
        </div>

        {/* Accent pink bottom border glow on hover */}
        <div
          className="
            absolute bottom-0 left-0 right-0 h-[2px]
            bg-gradient-to-r from-[#F3D8DB]/0 via-[#d4748a]/50 to-[#F3D8DB]/0
            opacity-0 group-hover:opacity-100
            transition-opacity duration-500
          "
        />
      </div>
    </motion.div>
  );
}

export function EightPillars() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useInView(ref, { once: true, amount: 0.08 });

  return (
    <section className="py-28 px-6 md:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionHeading
            align="center"
            eyebrow="Strategic Framework"
            heading="The Eight Pillars of the Ecosystem"
          />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {PILLARS.map((pillar, index) => (
            <PillarCard
              key={pillar.number}
              pillar={pillar}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
