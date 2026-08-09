import Image from "next/image";
import { TheExperience } from "@/components/samanvaya/TheExperience";
import { IncludedPillars } from "@/components/samanvaya/IncludedPillars";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Samanvaya',
  description: 'Samanvaya — ISHAN\'s flagship transformational retreat from Pancha Tattva to Sampurna Sattva. A journey to integrated wellbeing through the wisdom of the five elements.',
  alternates: {
    canonical: 'https://ishanfoundation.lk/samanvaya',
  },
}

export default function SamanvayaPage() {
  return (
    <div className="-mt-24">
      <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="absolute inset-0">
          <Image
            src="/images/saman.webp"
            alt="Samanvaya Transformational Retreat (Desktop)"
            fill
            priority
            className="object-cover object-center hidden md:block"
            sizes="100vw"
          />
          <Image
            src="/images/samanm.webp"
            alt="Samanvaya Transformational Retreat (Mobile)"
            fill
            priority
            className="object-cover object-center block md:hidden"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(10,4,2,0.3)] to-[rgba(10,4,2,0.8)]" />
        
        <div className="relative z-10 flex flex-col justify-end pt-32 pb-16 pl-12 md:pb-20 md:pl-16" style={{ minHeight: '100vh' }}>

          
          <h1>
            <span className="text-[#F5F1E9] block font-display font-normal leading-tight text-3xl md:text-4xl lg:text-5xl max-w-3xl [text-shadow:0_2px_4px_rgba(0,0,0,0.5)]">
              Samanvaya
            </span>
            <span className="text-[#F3D8DB] [text-shadow:0_2px_4px_rgba(0,0,0,0.5)] block font-display font-normal leading-tight text-3xl md:text-4xl lg:text-5xl">
              Transformational Retreat
            </span>
          </h1>

          <p className="font-display italic text-white/90 text-xl md:text-2xl leading-relaxed mt-4 mb-3 max-w-2xl [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
            ISHAN's Flagship Transformational Retreat
          </p>

          <p className="font-sans font-light text-white/80 text-sm md:text-base leading-relaxed max-w-xl mt-2 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
            Inspired by the timeless wisdom of the five elements, Samanvaya guides participants on a journey towards integrated wellbeing and complete human development.
          </p>

          <p className="font-sans font-light text-white/80 text-sm md:text-base leading-relaxed max-w-xl mt-2 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
            Combines yoga, meditation, breathwork, mindful movement, contemplative practices, nature connection, leadership development, experiential learning, and conscious living.
          </p>

          <p className="font-sans font-light text-white/80 text-sm md:text-base leading-relaxed max-w-xl mt-2 [text-shadow:0_1px_2px_rgba(0,0,0,0.5)]">
            Each experience is thoughtfully designed to restore balance across the physical, emotional, intellectual, financial, and spiritual dimensions of life.
          </p>

          <div className="mt-8">
            <Button href="/samanvaya/packages" variant="primary">
              See the Packages
            </Button>
          </div>
        </div>
      </section>
      
      <TheExperience />
      <GoldDivider />
      
      <IncludedPillars />
      
      {/* Vision Quote Section */}
      <section className="py-32 px-6 md:px-12 bg-surface border-y border-divider relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[25rem] text-primary opacity-[0.03] pointer-events-none select-none leading-none">
          &ldquo;
        </div>
        <RevealOnScroll className="relative z-10 max-w-4xl mx-auto text-center">
          <blockquote className="font-display italic text-3xl md:text-4xl lg:text-5xl text-heading leading-snug md:leading-snug mb-10">
            "Samanvaya is not simply a retreat. It is a journey towards harmony within oneself, with others, and with nature. A journey from Pancha Tattva to Sampurna Sattva."
          </blockquote>
          <div className="text-[0.65rem] md:text-xs uppercase tracking-widest text-primary">
            Samanvaya — The Core Realization
          </div>
        </RevealOnScroll>
      </section>

      {/* Closing CTA */}
      <section className="relative w-full py-32 px-6 overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/samand.webp"
            alt="Step Into Stillness Background"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[rgba(10,4,2,0.65)]" />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <SectionHeading
            eyebrow="Answer the Call"
            heading="Step Into Stillness"
            description="Spaces for our upcoming immersions are strictly limited to preserve the intimacy and depth of the experience. Register your interest below to receive details on upcoming dates."
            align="center"
            theme="dark"
          />
          <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <Button href="/contact" variant="primary">
              Register Interest
            </Button>
            <Button href="/" variant="ghost" className="text-white border-white hover:bg-white/10">
              Back to Home
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
