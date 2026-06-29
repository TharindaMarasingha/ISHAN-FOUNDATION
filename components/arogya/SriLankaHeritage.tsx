import { SectionHeading } from "../ui/SectionHeading";
import { SectionIllustration } from "../ui/SectionIllustration";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";

const HERITAGE_CARDS = [
  {
    title: "Dhamma Dweepa",
    description: "Island of Wisdom — contributing mindfulness, ethical living, and conscious human development for global well-being.",
  },
  {
    title: "Ancient Arogyasala Heritage",
    description: "Drawing upon the legacy of the world's earliest dedicated healing centres in Mihintale and Anuradhapura.",
  },
  {
    title: "Hela Wedakama",
    description: "Preserving, modernising, and globally sharing Sri Lanka's indigenous medicine system for the benefit of humanity.",
  },
];

export function SriLankaHeritage() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-16 items-center">
        {/* Left Column */}
        <div className="flex flex-col space-y-8">
          <div className="relative">
            <SectionIllustration
              variant="tree"
              className="absolute -top-12 -left-8 w-32 h-32 text-burntOrange opacity-10 pointer-events-none"
            />
            <SectionHeading
              eyebrow="Sri Lanka Chapter"
              heading="Rooted in the World's Oldest Healing Civilisation"
            />
          </div>
          <RevealOnScroll delay={0.1}>
            <p className="font-sans font-light text-deepAmber/90 leading-relaxed text-lg">
              Sri Lanka draws inspiration from the Arogyasalas of Anuradhapura—the world's earliest known dedicated healing institutions dating back to the 3rd century BC. Our ecosystem is deeply rooted in this legacy, combining the ancient Hela Wedakama indigenous medicine system and the profound Buddhist mindfulness tradition.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="font-sans font-light text-deepAmber/80 leading-relaxed text-lg mb-8">
              The AAI Sri Lanka Chapter, led by Country Director Ranga Soysa, is activating this heritage as an internationally marketable wellness ecosystem. By connecting sacred geography, indigenous healing wisdom, and modern wellness science, we offer a sanctuary for planetary healing.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={0.3}>
            <Button href="/contact" variant="primary">Connect With Us</Button>
          </RevealOnScroll>
        </div>

        {/* Right Column */}
        <div className="flex flex-col space-y-6">
          {HERITAGE_CARDS.map((card, index) => (
            <RevealOnScroll key={card.title} delay={index * 0.1}>
              <Card className="p-8 border-burntOrange/20 hover:-translate-y-1 hover:border-burntOrange/40 transition-all duration-300">
                <h3 className="font-display font-light text-2xl text-deepAmber mb-3">
                  {card.title}
                </h3>
                <p className="font-sans font-light text-sm text-deepAmber/80 leading-relaxed">
                  {card.description}
                </p>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
