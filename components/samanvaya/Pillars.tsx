import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { SunMoon, TreePine, Flame, Utensils, BookHeart, CircleDot } from "lucide-react";

const PILLARS = [
  {
    icon: Flame,
    title: "Guided Meditation",
    description: "Daily structured practice sessions designed to quiet the conscious mind and open access to profound inner spaciousness.",
  },
  {
    icon: TreePine,
    title: "Nature Immersion",
    description: "Silent, meditative walks through ancient forests, allowing the frequency of the natural world to recalibrate your nervous system.",
  },
  {
    icon: SunMoon,
    title: "Silent Practice",
    description: "Dedicated periods of 'Mauna' (noble silence), removing the compulsion to speak and turning the spotlight of awareness entirely inward.",
  },
  {
    icon: Utensils,
    title: "Communal Nourishment",
    description: "Sharing simple, energetically pure, plant-based meals prepared with Ayurvedic principles to gently detoxify and support the physical body.",
  },
  {
    icon: BookHeart,
    title: "Reflective Journaling",
    description: "Supported time for uninhibited self-inquiry, capturing the delicate insights that arise when the mind is finally still.",
  },
  {
    icon: CircleDot,
    title: "Closing Ceremony",
    description: "A sacred gathering to synthesize the retreat experience, ensuring you return to your daily life grounded, open, and permanently shifted.",
  },
];

export function Pillars() {
  return (
    <section className="bg-surface py-24 px-6 border-y border-divider">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="What's Included"
          heading="Elements of the Immersion"
          description="Every detail of Samanvaya is purposefully designed to create a secure, holding container for your inner work."
          align="center"
        />

        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((item, index) => {
            const Icon = item.icon;
            return (
              <RevealOnScroll key={item.title} delay={index * 0.1}>
                <Card className="h-full flex flex-col p-8 group">
                  <div className="w-14 h-14 border border-divider rounded-full flex items-center justify-center mb-6 text-primary group-hover:bg-[image:var(--gradient-cta)] group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" strokeWidth={1.5} />
                  </div>
                  <h3 className="font-display uppercase tracking-widest text-lg text-heading mb-4">
                    {item.title}
                  </h3>
                  <p className="font-sans font-light text-heading text-sm leading-relaxed flex-grow">
                    {item.description}
                  </p>
                </Card>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
