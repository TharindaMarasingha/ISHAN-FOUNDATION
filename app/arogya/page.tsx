import Image from "next/image";
import { VisionMission } from "@/components/arogya/VisionMission";
import { FoundingTrinity } from "@/components/arogya/FoundingTrinity";
import { EightPillars } from "@/components/arogya/EightPillars";
import { SriLankaHeritage } from "@/components/arogya/SriLankaHeritage";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";
import { VisionQuote } from "@/components/arogya/VisionQuote";
import { ArogyaFinalCTA } from "@/components/arogya/ArogyaFinalCTA";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Arogya Ashram International',
  description: 'Arogya Ashram International (AAI) — holistic wellness through yoga, meditation, breathwork, Ayurveda, nutrition, and preventive health education in Sri Lanka.',
  alternates: {
    canonical: '/arogya',
  },
}

export default function ArogyaPage() {
  return (
    <div className="-mt-24">
      <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0">
          <Image
            src="/images/arogya-hero.webp"
            alt="Arogya Ashram"
            fill
            priority
            className="object-cover object-center brightness-[1.08] contrast-[1.05] sepia-[0.05] saturate-[1.06]"
            sizes="100vw"
          />
        </div>
        {/* Base warm vertical gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(35,22,12,0.35)] via-[rgba(35,22,12,0.18)] to-[rgba(35,22,12,0.30)]" />
        
        {/* Soft golden glow from top-left */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,180,100,0.15),transparent_60%)]" />
        
        {/* Localized text protection at bottom-left */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(20,12,6,0.85)_0%,rgba(20,12,6,0.45)_45%,transparent_80%)]" />
        
        <div className="relative z-10 flex flex-col justify-end pb-16 pl-12 md:pb-20 md:pl-16" style={{ minHeight: '100vh' }}>

          <h1>
            <span className="text-white block font-display font-normal leading-tight text-4xl md:text-5xl lg:text-6xl max-w-3xl">
              Arogya Ashram
            </span>
            <span className="text-[#F3D8DB] [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] block font-display font-normal leading-tight text-4xl md:text-5xl lg:text-6xl">
              International
            </span>
          </h1>

          <p className="font-display italic text-white/80 text-xl md:text-2xl leading-relaxed mt-4 mb-3 max-w-2xl">
            AAI — Holistic Wellness Initiative
          </p>

          <p className="font-sans font-light text-white/65 text-sm md:text-base leading-relaxed max-w-xl mt-2">
            Dedicated to promoting holistic health through preventive wellness, lifestyle education, yoga, meditation, breathwork, mindful movement, nutrition, stress management, and integrative wellbeing practices.
          </p>
        </div>
      </section>
      

      <VisionMission />

      <FoundingTrinity />

      <EightPillars />
      
      {/* Vision Quote Section */}
      <VisionQuote />


      <SriLankaHeritage />

      {/* Closing CTA */}
      <ArogyaFinalCTA />
    </div>
  );
}

