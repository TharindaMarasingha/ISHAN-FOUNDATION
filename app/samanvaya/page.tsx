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
            src="/images/samanvaya-hero.jpg"
            alt="Samanvaya Transformational Retreat"
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
            From Pancha Tattva to Sampurna Sattva
          </span>
          
          <h1>
            <span className="text-white block font-display font-normal leading-tight text-4xl md:text-5xl lg:text-6xl max-w-3xl">
              Samanvaya
            </span>
            <span className="text-[#C9A84C] block font-display font-normal leading-tight text-4xl md:text-5xl lg:text-6xl">
              Transformational Retreat
            </span>
          </h1>

          <p className="font-display italic text-white/80 text-xl md:text-2xl leading-relaxed mt-4 mb-3 max-w-2xl">
            ISHAN's Flagship Transformational Retreat
          </p>

          <p className="font-sans font-light text-white/65 text-sm md:text-base leading-relaxed max-w-xl mt-2">
            Inspired by the timeless wisdom of the five elements, Samanvaya guides participants on a journey towards integrated wellbeing and complete human development.
          </p>

          <p className="font-sans font-light text-white/65 text-sm md:text-base leading-relaxed max-w-xl mt-2">
            Combines yoga, meditation, breathwork, mindful movement, contemplative practices, nature connection, leadership development, experiential learning, and conscious living.
          </p>

          <p className="font-sans font-light text-white/65 text-sm md:text-base leading-relaxed max-w-xl mt-2">
            Each experience is thoughtfully designed to restore balance across the physical, emotional, intellectual, financial, and spiritual dimensions of life.
          </p>
        </div>
      </section>
      
      <TheExperience />
      <GoldDivider />
      
      <IncludedPillars />
      
      {/* Vision Quote Section */}
      <section className="py-32 px-6 md:px-12 bg-deepAmber/[0.02] border-y border-mandarin/10 relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[25rem] text-mandarin opacity-[0.03] pointer-events-none select-none leading-none">
          &ldquo;
        </div>
        <RevealOnScroll className="relative z-10 max-w-4xl mx-auto text-center">
          <blockquote className="font-display italic text-3xl md:text-4xl lg:text-5xl text-deepAmber leading-snug md:leading-snug mb-10">
            "Samanvaya is not simply a retreat. It is a journey towards harmony within oneself, with others, and with nature. A journey from Pancha Tattva to Sampurna Sattva."
          </blockquote>
          <div className="text-[0.65rem] md:text-xs uppercase tracking-widest text-mandarin">
            Samanvaya — The Core Realization
          </div>
        </RevealOnScroll>
      </section>

      {/* Closing CTA */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
        <SectionHeading
          eyebrow="Answer the Call"
          heading="Step Into Stillness"
          description="Spaces for our upcoming immersions are strictly limited to preserve the intimacy and depth of the experience. Register your interest below to receive details on upcoming dates."
          align="center"
        />
        <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <Button href="/contact" variant="primary" className="bg-mandarin text-peach hover:bg-burntOrange">
            Register Interest
          </Button>
          <Button href="/" variant="ghost" className="border-mandarin text-mandarin hover:border-burntOrange hover:text-burntOrange">
            Back to Home
          </Button>
        </RevealOnScroll>
      </section>
    </div>
  );
}
