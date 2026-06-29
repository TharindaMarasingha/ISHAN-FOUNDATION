import { Hero } from "@/components/uss/Hero";
import { AreasOfStudy } from "@/components/uss/AreasOfStudy";
import { OurApproach } from "@/components/uss/OurApproach";
import { Programs } from "@/components/uss/Programs";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { RevealOnScroll } from "@/components/ui/RevealOnScroll";

export const metadata = {
  title: "Universal Spiritual Science — ISHAN",
  description: "An international institute dedicated to the empirical exploration of inner development and consciousness.",
};

export default function USSPage() {
  return (
    <div className="-mt-24">
      <Hero />
      
      <AreasOfStudy />
      <GoldDivider />
      
      <OurApproach />
      <GoldDivider />
      
      <Programs />
      
      {/* Vision Quote Section */}
      <section className="py-32 px-6 md:px-12 bg-[#1B4332]/[0.02] border-y border-[#1B4332]/10 relative overflow-hidden flex items-center justify-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[25rem] text-[#1B4332] opacity-[0.03] pointer-events-none select-none leading-none">
          &ldquo;
        </div>
        <RevealOnScroll className="relative z-10 max-w-4xl mx-auto text-center">
          <blockquote className="font-display italic text-3xl md:text-4xl lg:text-5xl text-deepAmber leading-snug md:leading-snug mb-10">
            "We do not seek to invent new spiritual truths, but to build the scientific and ethical architecture necessary for humanity to consciously embody them."
          </blockquote>
          <div className="text-[0.65rem] md:text-xs uppercase tracking-widest text-[#1B4332]">
            Universal Spiritual Science — Core Precept
          </div>
        </RevealOnScroll>
      </section>

      {/* Closing CTA */}
      <section className="py-32 px-6 max-w-4xl mx-auto text-center flex flex-col items-center">
        <SectionHeading
          eyebrow="Collaborate With Us"
          heading="Join the Institute"
          description="We invite researchers, philosophers, philanthropists, and advanced practitioners to collaborate in decoding the mechanics of human consciousness."
          align="center"
        />
        <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
          <Button href="/contact" variant="primary" className="bg-[#1B4332] text-peach hover:bg-[#133224]">
            Research With Us
          </Button>
          <Button href="/" variant="ghost" className="border-[#1B4332] text-[#1B4332] hover:border-[#133224] hover:text-[#133224]">
            Back to Home
          </Button>
        </RevealOnScroll>
      </section>
    </div>
  );
}
