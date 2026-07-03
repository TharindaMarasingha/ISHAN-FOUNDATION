import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionIllustration } from "../ui/SectionIllustration";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import Link from "next/link";
import { EcosystemCard as EcosystemCardType } from "@/lib/types";

const ECOSYSTEM_CARDS: EcosystemCardType[] = [
  {
    tag: "Preventive Wellness · Proactive Wellbeing",
    title: "Arogya Ashram International",
    subtitle: "AAI — Sri Lanka Chapter",
    description: "Holistic wellness education, preventive healthcare and integrative wellbeing — rooted in the world's oldest healing heritage.",
    href: "/arogya",
    accentColor: "var(--color-burntOrange)",
  },
  {
    tag: "Research · Consciousness · Ethics",
    title: "Universal Spiritual Science",
    subtitle: "USS — Inner Knowledge Institute",
    description: "Research, education and consciousness studies across contemplative traditions, ethics, philosophy and inner development.",
    href: "/uss",
    accentColor: "#1B4332",
  },
  {
    tag: "The Inner Immersion",
    title: "Samanvaya",
    subtitle: "ISHAN's Flagship Immersive Experience",
    description: "A flagship immersive experience for profound inner exploration through nature, silence, wisdom and experiential learning.",
    href: "/samanvaya",
    accentColor: "var(--color-mandarin)",
  },
  {
    tag: "Divine Spiritual Wellness Township",
    title: "Sri Vrindavan Project",
    subtitle: "Sri Lanka's First Conscious Living Township",
    description: "A 150-acre living community where spirituality, conscious living, holistic wellness, nature and cultural life come together.",
    href: "/brindavan",
    accentColor: "var(--color-deepAmber)",
  },
];

function EcosystemCard({ card, delay }: { card: EcosystemCardType; delay: number }) {
  return (
    <RevealOnScroll delay={delay} className="h-full">
      <Link href={card.href} className="block h-full outline-none group/eco motion-safe:hover:-translate-y-1.5 transition-transform duration-500">
        <div className="h-full flex flex-col bg-darkBrown/5 border border-burntOrange/20 p-8 sm:p-10 relative overflow-hidden transition-all duration-500 ease-out shadow-[0_2px_10px_rgba(46,26,14,0.03)] motion-safe:group-hover/eco:shadow-[0_12px_35px_rgba(46,26,14,0.08)] group-hover/eco:border-burntOrange/50">
          
          {/* Shine sweep */}
          <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/5 to-transparent motion-safe:group-hover/eco:translate-x-[150%] transition-transform duration-[1.5s] ease-in-out pointer-events-none" />

          {/* Top Accent Bar */}
          <div
            className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 group-hover/eco:h-[5px]"
            style={{ backgroundColor: card.accentColor }}
          />
          
          <div className="mb-6 relative z-10">
            <span
              className="inline-block px-3 py-1 rounded-full border border-burntOrange/30 text-[0.65rem] uppercase tracking-widest text-burntOrange"
              style={{ borderColor: `color-mix(in srgb, ${card.accentColor} 40%, transparent)`, color: card.accentColor }}
            >
              {card.tag}
            </span>
          </div>

          <h3 className="font-display font-light text-3xl md:text-4xl text-deepAmber mb-2 relative z-10">
            {card.title}
          </h3>
          <p
            className="font-display italic text-lg tracking-wider mb-6 relative z-10"
            style={{ color: card.accentColor }}
          >
            {card.subtitle}
          </p>

          <p className="font-sans font-light text-deepAmber/80 leading-relaxed mb-10 flex-grow relative z-10">
            {card.description}
          </p>

          <div className="mt-auto flex items-center font-display italic text-lg tracking-widest text-deepAmber group-hover/eco:text-burntOrange transition-colors duration-300 relative z-10">
            <span>Explore {card.title.split(' ')[0]}</span>
            <span className="ml-2 inline-block transition-transform duration-300 motion-safe:group-hover/eco:translate-x-2 motion-safe:group-hover/eco:-rotate-3">
              →
            </span>
          </div>
        </div>
      </Link>
    </RevealOnScroll>
  );
}

export function Ecosystem() {
  return (
    <section 
      id="ecosystem" 
      className="py-24 px-6 md:px-12 border-y border-sacredGold/10"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 200, 150, 0.12) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 220, 180, 0.1) 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 relative flex justify-center text-center">
          <SectionIllustration
            variant="wave"
            className="absolute -top-12 -left-4 w-32 h-32 text-burntOrange opacity-10 pointer-events-none"
          />
          <SectionHeading
            align="center"
            eyebrow="Our Ecosystem"
            heading="Four pathways to conscious living"
            description="ISHAN functions through specialised initiatives that collectively advance its vision of human and ecological wellbeing."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {ECOSYSTEM_CARDS.map((card, index) => (
            <EcosystemCard key={card.title} card={card} delay={index * 0.09} />
          ))}
        </div>
      </div>
    </section>
  );
}
