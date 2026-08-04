import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const YOGINIS = [
  {
    symbol: "☽",
    name: "Dr. Hon. S. Kobayashi",
    alias: "Yogeshwari · Sawamini",
    energy: "Mahalaxmi Energy",
    description: "Founder, Visionary & Initiator. RYT 500h, Advanced Yoga Science, Sound Healing, Cognitive Behavioral Therapy, Trauma Informed Coach, EFT Certified. Frequencies: Prosperity · Harmony · Abundance.",
    nationality: "Japan",
  },
  {
    symbol: "☀",
    name: "Master Indrani Sharma",
    alias: "Adiyogini · Rudrakshi",
    energy: "Mahakali Energy",
    description: "Core Member. PhD Scholar in Yogic Science, NLP Master, Akasha Healing, Reiki, Psychosocial Counselling, Sustainable Business Leadership. Frequencies: Transformation · Courage · Protection.",
    nationality: "Nepal",
  },
  {
    symbol: "✦",
    name: "Dr. Pooja Shah",
    alias: "Vedashree",
    energy: "Maha Saraswati Energy",
    description: "Core Member. Certified Naturopath MD, Ayurvedic Herbal Preparations, Marma Chikitsak, EFT Trainer, Crystal Healer, Hypnotherapist, Sound Healing Practitioner. Frequencies: Wisdom · Knowledge · Consciousness.",
    nationality: "India",
  },
];

export function FoundingTrinity() {
  return (
    <section className="py-24 px-6 md:px-12 bg-surface border-y border-divider">
      <div className="max-w-7xl mx-auto">
        <div className="mb-20 max-w-4xl mx-auto text-center">
          <SectionHeading
            align="center"
            eyebrow="The Global Founding Trinity"
            heading="Three Yoginis. Three Nations. One Vision."
            description="The global leadership of Arogya Ashram International is anchored by a trinity of internationally certified Yoginis. Symbolically, they represent the Divine Feminine Trinity Energies — Mahasaraswati, Mahalaxmi, and Mahakali — uniting wisdom, prosperity, and transformative action."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {YOGINIS.map((yogini, index) => (
            <RevealOnScroll key={yogini.name} delay={index * 0.15} className="h-full">
              <div className="h-full flex flex-col items-center text-center p-8 sm:p-10 border border-divider bg-heading/5 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/50 hover:shadow-[0_10px_30px_rgba(46,26,14,0.05)]">
                
                <span className="font-display text-4xl text-secondary mb-6 leading-none">
                  {yogini.symbol}
                </span>

                <h4 className="font-display text-2xl text-heading mb-2">
                  {yogini.name}
                </h4>

                <p className="font-display italic text-lg text-primary mb-6">
                  {yogini.alias}
                </p>

                <div className="mb-6 px-4 py-1.5 rounded-full border border-secondary/40 bg-softAccent text-[0.65rem] uppercase tracking-widest text-secondary">
                  {yogini.energy}
                </div>

                <p className="font-sans font-light text-sm text-heading/80 leading-relaxed flex-grow mb-8">
                  {yogini.description}
                </p>

                <div className="mt-auto px-4 py-1.5 rounded-full border border-primary/30 text-[0.65rem] uppercase tracking-widest text-primary">
                  {yogini.nationality}
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
