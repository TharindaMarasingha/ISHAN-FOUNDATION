"use client";

import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const INITIATIVES = [
  {
    tag: "PREVENTIVE WELLNESS · PROACTIVE WELLBEING",
    title: "Arogya Ashram International",
    subtitle: "AAI — Holistic Wellness Initiative",
    image: "/images/ecosystem-arogya.webp",
    body: "Dedicated to promoting holistic health through preventive wellness, lifestyle education, yoga, meditation, breathwork, mindful movement, nutrition, stress management, and integrative wellbeing practices.",
    p2: "Its programmes empower individuals to take responsibility for their own health, develop sustainable lifestyle habits, and cultivate lifelong wellbeing. By focusing on prevention rather than cure, AAI supports healthier individuals, stronger families, and more resilient communities.",
    linkText: "Explore Arogya →",
    href: "/arogya",
    accentColor: "#C9A84C",
    cardBackground: "rgba(255, 248, 235, 0.85)",
  },
  {
    tag: "THE INNER IMMERSION",
    title: "Antahakarana Avalokana",
    subtitle: "ISHAN's Signature Immersive Experience",
    image: "/images/Avalokana.webp",
    body: "A signature immersive experience designed for profound self-discovery, inner reflection, holistic wellbeing, and conscious transformation.",
    p2: "Through silence, meditation, contemplative practices, mindful movement, nature immersion, experiential learning, self-inquiry, creative expression, community living, and service, participants reconnect with themselves and discover greater clarity, resilience, and purpose.",
    quote: "Rather than offering an escape from everyday life, Antahakarana Avalokana prepares individuals to return to their families, communities, and professions with renewed awareness, responsibility, and compassion.",
    linkText: "Explore Avalokana →",
    href: "/avalokana",
    accentColor: "#2C5F4A",
    cardBackground: "rgba(240, 248, 244, 0.85)",
  },
  {
    tag: "FROM PANCHA TATTVA TO SAMPURNA SATTVA",
    title: "Samanvaya",
    subtitle: "ISHAN's Flagship Transformational Retreat",
    image: "/images/sn1.webp",
    body: "ISHAN's flagship transformational retreat inspired by the timeless wisdom of the five elements, guiding participants on a journey towards integrated wellbeing and complete human development.",
    p2: "Combines yoga, meditation, breathwork, mindful movement, contemplative practices, nature connection, leadership development, experiential learning, and conscious living.",
    quote: "Samanvaya is not simply a retreat. It is a journey towards harmony within oneself, with others, and with nature. A journey from Pancha Tattva to Sampurna Sattva.",
    linkText: "Explore Samanvaya →",
    href: "/samanvaya",
    accentColor: "#8B4513",
    cardBackground: "rgba(252, 243, 235, 0.85)",
  },
  {
    tag: "A DIVINE SPIRITUAL WELLNESS TOWNSHIP",
    title: "Sri Vrindavan",
    subtitle: "A Vision for Conscious Community Living",
    image: "/images/ecosystem-vrindavan.webp",
    body: "ISHAN's long-term vision for creating a living model of conscious and sustainable community life — an integrated spiritual wellness township where individuals, families, educators, researchers, practitioners, entrepreneurs, and communities can live, learn, work, and grow in harmony with nature.",
    quote: "More than a physical place, Sri Vrindavan is a vision for the future — a living ecosystem where conscious living becomes a shared way of life.",
    linkText: "Explore Sri Vrindavan →",
    href: "/sri-vrindavan",
    accentColor: "#4A3728",
    cardBackground: "rgba(245, 240, 235, 0.85)",
  },
];

const WHY_ECOSYSTEM = [
  {
    title: "Specialisation",
    body: "Each initiative focuses on a specific domain — wellness, inner transformation, retreat experiences, or conscious community living — allowing for depth and excellence.",
  },
  {
    title: "Integration",
    body: "All initiatives share the same philosophy, values, and vision — creating a coherent, unified approach to human and societal transformation.",
  },
  {
    title: "Scalability",
    body: "The ecosystem model allows ISHAN to grow organically, adding new initiatives as the mission expands — without losing focus or integrity.",
  },
];

export function EcosystemSections() {
  return (
    <div className="flex flex-col">
      {/* SECTION 1: ISHAN PARENT INSTITUTION */}
      <section className="py-24 px-6 md:px-12 bg-surface">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <SectionHeading
              eyebrow="The Foundation"
              heading="ISHAN — The Parent Institution"
            />
          </div>
          <RevealOnScroll>
            <Card className="p-8 md:p-12 border-t-4 border-t-sacredGold border-divider hover:-translate-y-1 transition-all duration-300">
              <h3 className="font-display font-light text-3xl md:text-4xl text-heading mb-6">
                ISHAN — The Parent Institution
              </h3>
              <p className="font-sans font-light text-heading/80 leading-relaxed text-lg mb-6">
                The foundation of the entire ecosystem. Provides vision, governance, philosophy, leadership, institutional systems, strategic direction, partnerships, and long-term stewardship.
              </p>
              <div className="p-6 bg-softAccent border-l-4 border-primary rounded-r-xl">
                <h4 className="font-sans text-xs uppercase tracking-widest text-primary mb-2">Mission</h4>
                <p className="font-sans font-light text-heading leading-relaxed italic">
                  "To advance wisdom, wellness, humanity, nature, ethical leadership, education, sustainability, and conscious community development through integrated programmes, research, collaboration, and service."
                </p>
              </div>
            </Card>
          </RevealOnScroll>
        </div>
      </section>

      {/* SECTION 2: THE INITIATIVES */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <SectionHeading
              align="center"
              eyebrow="Our Initiatives"
              heading="The Ecosystem"
              description="Each initiative serves a unique purpose while contributing to our shared mission."
            />
          </div>

          <div className="flex flex-col gap-16">
            {INITIATIVES.map((card, index) => {
              const imageLeft = index % 2 === 0;
              return (
                <RevealOnScroll key={card.title} delay={0.1} viewportAmount={0.05} className="w-full">
                  <Link href={card.href} className="group/link block outline-none hover:-translate-y-1 transition-transform duration-300">
                    <div 
                      className="flex flex-col md:flex-row w-full min-h-[380px] rounded-[20px] overflow-hidden border border-black/8 relative"
                      style={{ 
                        backgroundColor: card.cardBackground,
                        borderLeft: `3px solid ${card.accentColor}`
                      }}
                    >
                      {/* Top Accent Bar */}
                      <div 
                        className="absolute top-0 left-0 right-0 h-[4px] z-20"
                        style={{ backgroundColor: card.accentColor }}
                      />
                      
                      {/* IMAGE HALF */}
                      <div className={`w-full md:w-1/2 relative h-[300px] md:h-auto overflow-hidden ${imageLeft ? 'md:order-1' : 'md:order-2'}`}>
                        <motion.div 
                          className="absolute inset-0 w-full h-full"
                          initial={{ x: imageLeft ? -40 : 40, opacity: 0 }}
                          whileInView={{ x: 0, opacity: 1 }}
                          viewport={{ once: true, amount: 0.05 }}
                          transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                           <Image 
                             src={card.image} 
                             alt={card.title} 
                             fill 
                             sizes="(max-width: 768px) 100vw, 50vw"
                             className="object-cover object-center group-hover/link:scale-105 transition-transform duration-700 ease-out" 
                           />
                        </motion.div>
                      </div>

                      {/* CONTENT HALF */}
                      <div className={`w-full md:w-1/2 py-[48px] px-[40px] flex flex-col justify-start items-start ${imageLeft ? 'md:order-2' : 'md:order-1'}`}>
                        <span 
                          className="inline-block border font-sans text-[10px] md:text-[11px] uppercase tracking-[0.2em] rounded-full px-4 py-1.5"
                          style={{ borderColor: card.accentColor, color: card.accentColor }}
                        >
                          {card.tag}
                        </span>

                        <h3 className="font-forum text-[28px] md:text-[32px] text-heading font-normal mt-4">
                          {card.title}
                        </h3>

                        <p className="font-sans italic text-[14px] text-primary mt-1 mb-5">
                          {card.subtitle}
                        </p>

                        <p className="font-sans font-light text-[14px] md:text-[15px] text-heading/80 leading-[1.7] mb-4">
                          {card.body}
                        </p>
                        
                        {card.p2 && (
                          <p className="font-sans font-light text-[14px] md:text-[15px] text-heading/80 leading-[1.7] mb-4">
                            {card.p2}
                          </p>
                        )}

                        {card.quote && (
                          <blockquote className="border-l-2 border-primary/30 pl-4 py-1 my-2 font-display italic text-heading/80 text-lg leading-relaxed">
                            "{card.quote}"
                          </blockquote>
                        )}

                        <div 
                          className="font-sans font-medium text-[13px] mt-auto pt-6 flex items-center"
                          style={{ color: card.accentColor }}
                        >
                          {card.linkText}
                        </div>
                      </div>
                    </div>
                  </Link>
                </RevealOnScroll>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 3: WHY AN ECOSYSTEM */}
      <section className="py-24 px-6 md:px-12 bg-surface border-t border-divider">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <SectionHeading
              align="center"
              heading="Why an Ecosystem?"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {WHY_ECOSYSTEM.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 0.1} className="h-full">
                <Card className="h-full p-8 border-divider hover:-translate-y-1 transition-all duration-300">
                  <h4 className="font-display font-light text-2xl text-heading mb-4">{item.title}</h4>
                  <p className="font-sans font-light text-sm text-heading/80 leading-relaxed">
                    {item.body}
                  </p>
                </Card>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: CLOSING CTA */}
      <section className="relative py-32 px-6 overflow-hidden flex flex-col items-center border-t border-divider bg-bark">
        {/* Background Image Layer */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contact-cta-bg.webp"
            alt="Contact Background"
            fill
            className="object-cover"
          />
          {/* Dark Gradient Overlay */}
          <div 
            className="absolute inset-0" 
            style={{
              background: "linear-gradient(to bottom, rgba(46, 26, 14, 0.75) 0%, rgba(46, 26, 14, 0.4) 50%, rgba(46, 26, 14, 0.75) 100%)"
            }}
          />
        </div>

        {/* Decorative Rotating SVG Background */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 opacity-[0.04]">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 160, repeat: Infinity, ease: "linear" }}
            className="absolute w-[800px] h-[800px] rounded-full border-[1px] border-secondary flex items-center justify-center"
          >
            <svg width="600" height="600" viewBox="0 0 100 100" className="opacity-50">
              <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="currentColor" strokeWidth="0.2" />
            </svg>
          </motion.div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <SectionHeading
            theme="dark"
            eyebrow="Take the Next Step"
            heading={<span className="text-secondary">Join the Ecosystem</span>}
            description="Whether as a participant, practitioner, partner, volunteer, or supporter — there is a place for you within the ISHAN ecosystem."
            align="center"
          />
          <RevealOnScroll delay={0.2} className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto">
            <Button href="/contact" variant="primary" className="bg-cta text-white hover:bg-cta/90">
              Connect With Us
            </Button>
            <Button href="/support" variant="ghost" className="border-secondary text-secondary hover:border-softApricot hover:text-white">
              Support Our Mission
            </Button>
          </RevealOnScroll>
        </div>
      </section>
    </div>
  );
}
