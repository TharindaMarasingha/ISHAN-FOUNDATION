import { SectionHeading } from "../ui/SectionHeading";
import { NumberedCard } from "../ui/NumberedCard";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const ZONES = [
  { number: "01", title: "Wellness & Healing Quarter", description: "Home to the Arogya Ashram, featuring integrative clinics, Ayurvedic centers, and therapeutic botanical gardens." },
  { number: "02", title: "Spiritual & Temple Precinct", description: "The silent heart of the township, dedicated to meditation halls, sacred groves, and contemplative spaces." },
  { number: "03", title: "Residential Conscious-Living", description: "Eco-friendly, Vastu-compliant homes designed for families and individuals committed to the community ethos." },
  { number: "04", title: "Cultural & Arts Hub", description: "An open amphitheater, artisan workshops, and galleries celebrating indigenous crafts and conscious expression." },
  { number: "05", title: "Organic Farms & Nature Reserve", description: "Extensive permaculture zones providing farm-to-table nourishment and preserving local biodiversity." },
  { number: "06", title: "Education & Research Center", description: "The physical campus for Universal Spiritual Science (USS), fostering learning across all generations." },
];

export function Zones() {
  return (
    <section className="py-24 px-6 md:px-12 bg-surface border-y border-divider">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <SectionHeading
            align="center"
            eyebrow="The Ecosystem"
            heading="Township Zones & Quarters"
            description="The 150 acres are meticulously divided into interdependent zones, forming a living organism that sustains and elevates its inhabitants."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {ZONES.map((zone, index) => (
            <RevealOnScroll key={zone.number} delay={index * 0.1} className="h-full">
              <NumberedCard {...zone} className="h-full shadow-sm hover:shadow-deepAmber/5" />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
