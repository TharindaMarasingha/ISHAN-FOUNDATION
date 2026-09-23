import Image from "next/image";
import { AboutExperience } from "@/components/avalokana/AboutExperience";
import { IncludedElements } from "@/components/avalokana/IncludedElements";
import { ClarificationNote } from "@/components/avalokana/ClarificationNote";
import { AvalokanaCTA } from "@/components/avalokana/AvalokanaCTA";
import { GoldDivider } from "@/components/ui/GoldDivider";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Antahakarana Avalokana',
  description: 'Antahakarana Avalokana — ISHAN\'s signature inner immersion experience for self-discovery, meditation, contemplation, and conscious transformation.',
  alternates: {
    canonical: '/avalokana',
  },
}

export default function AvalokanaPage() {
  return (
    <div className="-mt-24">
      <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0">
          <Image
            src="/images/Avalokana.webp"
            alt="Antahakarana Avalokana"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[rgba(10,4,2,0.55)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,4,2,0.80)] via-[rgba(10,4,2,0.45)] to-transparent" />
        
        <div className="relative z-10 flex flex-col justify-end pb-16 pl-12 md:pb-20 md:pl-16" style={{ minHeight: '100vh' }}>


          <h1>
            <span className="text-white block font-display font-normal leading-tight text-4xl md:text-5xl lg:text-6xl max-w-3xl">
              Antahakarana
            </span>
            <span className="text-[#F3D8DB] [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] block font-display font-normal leading-tight text-4xl md:text-5xl lg:text-6xl">
              Avalokana
            </span>
          </h1>

          <p className="font-display italic text-white/80 text-xl md:text-2xl leading-relaxed mt-4 mb-3 max-w-2xl">
            ISHAN's Signature Immersive Experience
          </p>

          <p className="font-sans font-light text-white/65 text-sm md:text-base leading-relaxed max-w-xl mt-2">
            A signature immersive experience designed for profound self-discovery, inner reflection, holistic wellbeing, and conscious transformation.
          </p>
        </div>
      </section>
      <AboutExperience />
      <GoldDivider />
      <IncludedElements />

      {/* Clarification Note Footnote */}
      <ClarificationNote />

      {/* Final Grounding Arch CTA */}
      <AvalokanaCTA />
    </div>
  );
}

