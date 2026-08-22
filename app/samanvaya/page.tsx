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
        <section className="relative w-full min-h-[100svh] flex flex-col justify-end overflow-hidden" style={{ minHeight: '100vh' }}>
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
              className="object-cover object-top block md:hidden"
              sizes="100vw"
            />
          </div>
          
          {/* Mobile Soft Natural Scrim. Desktop uses original gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:bg-gradient-to-b md:from-transparent md:via-[rgba(10,4,2,0.3)] md:to-[rgba(10,4,2,0.8)]" />
          
          <div className="relative z-10 w-full px-6 pb-24 pt-32 md:pb-20 md:pl-16 md:px-12 max-w-[95%] sm:max-w-sm md:max-w-3xl">

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif text-[#F8F7F2] leading-tight mb-2 drop-shadow-lg font-display">
              Samanvaya
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-serif text-[#F3D8DB] mb-4 drop-shadow-md font-display">
              Transformational Retreat
            </h2>

            <p className="text-[#F8F7F2]/90 font-serif italic text-sm md:text-2xl leading-relaxed mb-6 drop-shadow font-display">
              ISHAN's Flagship Transformational Retreat
            </p>

            {/* The Editorial Divider */}
            <div className="w-12 h-px bg-[#F8F7F2]/40 mb-6"></div>

            {/* The Transparent Text Block */}
            <div className="space-y-4 mb-10 max-w-xl">
              <p className="text-[#F8F7F2]/80 font-light text-[13px] md:text-base leading-relaxed drop-shadow-md font-sans">
                Inspired by the timeless wisdom of the five elements, Samanvaya guides participants on a journey towards integrated wellbeing and complete human development.
              </p>
              <p className="text-[#F8F7F2]/80 font-light text-[13px] md:text-base leading-relaxed drop-shadow-md font-sans">
                Combines yoga, meditation, breathwork, mindful movement, contemplative practices, nature connection, leadership development, experiential learning, and conscious living.
              </p>
              <p className="text-[#F8F7F2]/80 font-light text-[13px] md:text-base leading-relaxed drop-shadow-md font-sans">
                Each experience is thoughtfully designed to restore balance across the physical, emotional, intellectual, financial, and spiritual dimensions of life.
              </p>
            </div>

            <div className="w-full sm:w-auto">
              <Button href="/samanvaya/packages" className="w-full sm:w-auto bg-[#D45B7E] hover:bg-[#b84a68] text-white px-8 py-3.5 rounded-full font-medium transition-all shadow-lg text-sm tracking-wide">
                See the Packages
              </Button>
            </div>
          </div>
        </section>
      
      <TheExperience />
      
      <IncludedPillars />
      
      {/* Vision Quote Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-white border-y border-divider relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[15rem] md:text-[25rem] text-primary opacity-[0.03] pointer-events-none select-none leading-none">
          &ldquo;
        </div>
        <RevealOnScroll className="relative z-10 max-w-4xl mx-auto text-center">
          <blockquote className="font-display italic text-2xl md:text-4xl lg:text-5xl text-heading leading-snug md:leading-snug mb-8 md:mb-10">
            "Samanvaya is not simply a retreat. It is a journey towards harmony within oneself, with others, and with nature. A journey from Pancha Tattva to Sampurna Sattva."
          </blockquote>
          <div className="text-[0.65rem] md:text-xs uppercase tracking-widest text-primary">
            Samanvaya — The Core Realization
          </div>
        </RevealOnScroll>
      </section>

      {/* Closing CTA */}
      <section className="relative w-full py-24 md:py-32 px-4 md:px-6 overflow-hidden flex flex-col items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/images/samand.webp"
            alt="Step Into Stillness Background"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-[rgba(10,4,2,0.35)]" />
        
        <div className="relative z-10 w-full max-w-4xl mx-auto text-center flex flex-col items-center">
          <SectionHeading
            eyebrow="Answer the Call"
            heading="Step Into Stillness"
            description="Spaces for our upcoming immersions are strictly limited to preserve the intimacy and depth of the experience. Register your interest below to receive details on upcoming dates."
            align="center"
            theme="dark"
          />
          <RevealOnScroll delay={0.2} className="mt-10 md:mt-12 flex flex-col sm:flex-row gap-4 w-full px-2 sm:px-0 sm:w-auto">
            <Button href="/contact" variant="primary" className="w-full sm:w-auto text-center">
              Register Interest
            </Button>
            <Button href="/" variant="ghost" className="w-full sm:w-auto text-center text-white border-white hover:bg-white/10">
              Back to Home
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
