import Image from "next/image";
import { Vision } from "@/components/sri-vrindavan/Vision";
import { Zones } from "@/components/sri-vrindavan/Zones";
import { StatsScale } from "@/components/sri-vrindavan/StatsScale";
import { Partnership } from "@/components/sri-vrindavan/Partnership";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sri Vrindavan Project',
  description: 'Sri Vrindavan — ISHAN\'s vision for Sri Lanka\'s first sacred conscious living township. A 150-acre integrated spiritual wellness community in harmony with nature.',
  alternates: {
    canonical: 'https://ishanfoundation.lk/sri-vrindavan',
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
        <div className="absolute inset-0 bg-[rgba(10,4,2,0.55)]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,4,2,0.80)] via-[rgba(10,4,2,0.45)] to-transparent" />
        
        <div className="relative z-10 flex flex-col justify-end pb-16 pl-12 md:pb-20 md:pl-16" style={{ minHeight: '100vh' }}>
          <span className="inline-flex w-fit border border-[rgba(201,168,76,0.5)] rounded-full px-4 py-1.5 mb-4 text-[#F5D98A] text-xs uppercase tracking-wider">
            A Divine Spiritual Wellness Township
          </span>
          
          <h1>
            <span className="text-white block font-display font-normal leading-tight text-4xl md:text-5xl lg:text-6xl max-w-3xl">
              Sri Vrindavan
            </span>
            <span className="text-[#C9A84C] block font-display font-normal leading-tight text-4xl md:text-5xl lg:text-6xl">
              Project
            </span>
          </h1>

          <p className="font-display italic text-white/80 text-xl md:text-2xl leading-relaxed mt-4 mb-3 max-w-2xl">
            A Vision for Conscious Community Living
          </p>

          <p className="font-sans font-light text-white/65 text-sm md:text-base leading-relaxed max-w-xl mt-2">
            Sri Vrindavan represents ISHAN's long-term vision for creating a living model of conscious and sustainable community life.
          </p>

          <p className="font-sans font-light text-white/65 text-sm md:text-base leading-relaxed max-w-xl mt-2">
            Envisioned as an integrated spiritual wellness township where individuals, families, educators, researchers, practitioners, entrepreneurs, and communities can live, learn, work, and grow in harmony with nature.
          </p>

          <p className="font-sans font-light text-white/65 text-sm md:text-base leading-relaxed max-w-xl mt-2">
            Designed around principles of wisdom, wellness, sustainability, education, ecological responsibility, and community living.
          </p>
        </div>
      </section>
      
      <Vision />
      
      <StatsScale />
      
      <Zones />
      <GoldDivider />
      
      <Partnership />
      
      {/* Quote Section */}
      <section className="py-32 px-6 md:px-12 bg-deepAmber/[0.02] border-y border-sacredGold/10 relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[25rem] text-burntOrange opacity-[0.03] pointer-events-none select-none leading-none">
          &ldquo;
        </div>
        <RevealOnScroll className="relative z-10 max-w-4xl mx-auto text-center">
          <blockquote className="font-display italic text-3xl md:text-4xl lg:text-5xl text-deepAmber leading-snug md:leading-snug">
            "More than a physical place, Sri Vrindavan is a vision for the future — a living ecosystem where conscious living becomes a shared way of life."
          </blockquote>
        </RevealOnScroll>
      </section>
      
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
