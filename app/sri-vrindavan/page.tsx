import Image from "next/image";
import { Vision } from "@/components/sri-vrindavan/Vision";
import { Zones } from "@/components/sri-vrindavan/Zones";
import { StatsScale } from "@/components/sri-vrindavan/StatsScale";
import { Partnership } from "@/components/sri-vrindavan/Partnership";
import { ThematicQuote } from "@/components/sri-vrindavan/ThematicQuote";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sri Vrindavan Project',
  description: 'Sri Vrindavan — ISHAN\'s vision for Sri Lanka\'s first sacred conscious living township. A 150-acre integrated spiritual wellness community in harmony with nature.',
  alternates: {
    canonical: '/sri-vrindavan',
  },
}

export default function SriVrindavanPage() {
  return (
    <div className="-mt-24">
      <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0">
          <Image
            src="/images/vrindavan-hero.webp"
            alt="Sri Vrindavan Project"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        {/* Soft directional scrim: keeps the sunrise, mist, & golden architecture luminous while providing contrast for text */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />
        
        <div className="relative z-10 flex flex-col justify-end pb-16 pl-8 sm:pl-12 md:pb-20 md:pl-16" style={{ minHeight: '100vh' }}>
          <h1 className="leading-tight">
            <span className="text-[#F8F7F2] block font-display font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight">
              Sri Vrindavan
            </span>
            <span className="text-[#F3D8DB] [text-shadow:0_2px_8px_rgba(0,0,0,0.6)] block font-display font-light text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
              Project
            </span>
          </h1>

          <p className="font-display italic text-[#F8F7F2]/90 text-xl md:text-2xl leading-relaxed mt-4 mb-3 max-w-2xl drop-shadow-sm">
            A Vision for Conscious Community Living
          </p>

          <div className="w-12 h-px bg-[#F3D8DB]/50 mb-5" />

          <div className="space-y-3 max-w-xl">
            <p className="font-sans font-light text-[#F8F7F2]/85 text-sm md:text-base leading-relaxed drop-shadow-sm">
              Sri Vrindavan represents ISHAN&apos;s long-term vision for creating a living model of conscious and sustainable community life.
            </p>
            <p className="font-sans font-light text-[#F8F7F2]/80 text-sm md:text-base leading-relaxed drop-shadow-sm">
              Envisioned as an integrated spiritual wellness township where individuals, families, educators, researchers, and communities can live, learn, work, and grow in harmony with nature.
            </p>
          </div>
        </div>
      </section>
      
      <Vision />
      
      <StatsScale />
      
      <Zones />
      
      <Partnership />
      
      {/* Thematic Statement Quote Feature */}
      <ThematicQuote />
      
      {/* Closing CTA */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
        <SectionHeading
          eyebrow="Get Involved"
          heading="Be Part of the Masterplan"
          description="Whether you are looking to invest in a conscious future, contribute your expertise to our ecological infrastructure, or secure your place as a founding resident—reach out to our development team."
          align="center"
        />
        <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <Button href="/contact" variant="primary">
            Contact Development Team
          </Button>
          <Button href="/" variant="ghost">
            Back to Home
          </Button>
        </RevealOnScroll>
      </section>
    </div>
  );
}

