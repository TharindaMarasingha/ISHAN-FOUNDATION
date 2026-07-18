import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { ClosingBand } from "@/components/contact/ClosingBand";
import Image from "next/image";

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Connect With Us',
  description: 'Connect with ISHAN — reach out for programmes, partnerships, research, volunteering, retreats, or to join the movement for humanity and nature.',
  alternates: {
    canonical: 'https://ishanfoundation.lk/contact',
  },
}

export default function ContactPage() {
  return (
    <>
      <style>{`
        main {
          padding-top: 0 !important;
        }
      `}</style>
      <div className="pt-0">
        <section className="relative w-full overflow-hidden" style={{ minHeight: '100vh' }}>
          <div className="absolute inset-0">
            <Image
              src="/images/contact-hero.webp"
              alt="Connect with ISHAN"
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
              CONNECT WITH US
            </span>
            
            <h1>
              <span className="text-white block font-display font-normal leading-tight text-4xl md:text-5xl lg:text-6xl max-w-4xl">
                Connect With
              </span>
              <span className="text-[#C9A84C] block font-display font-normal leading-tight text-4xl md:text-5xl lg:text-6xl">
                ISHAN
              </span>
            </h1>

            <p className="font-display italic text-white/80 text-xl md:text-2xl leading-relaxed mt-4 mb-3 max-w-2xl">
              Let's Build the Future Together
            </p>

            <p className="font-sans font-light text-white/65 text-sm md:text-base leading-relaxed max-w-xl mt-2">
              Every meaningful journey begins with a conversation. Whether you are an individual seeking personal growth, an institution exploring collaboration, a professional looking to contribute, or an organisation committed to creating positive impact, we welcome the opportunity to connect with you.
            </p>
          </div>
        </section>
        
        <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-16 lg:gap-8">
            <ContactForm />
            <ContactInfo />
          </div>
        </section>

        <ClosingBand />
      </div>
    </>
  );
}
