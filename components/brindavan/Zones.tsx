import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Home, HeartPulse, Building2, Trees, GraduationCap, Palette } from "lucide-react";

const ZONES = [
  {
    icon: HeartPulse,
    title: "Wellness & Healing Quarter",
    description: "A state-of-the-art integrative medical and Ayurvedic center offering residential treatments, preventive diagnostics, and deep rejuvenation therapies.",
  },
  {
    icon: Building2,
    title: "Spiritual & Temple Precinct",
    description: "The energetic heart of the township. Architecturally magnificent temples and meditation halls serving as silent sanctuaries for daily contemplative practice.",
  },
  {
    icon: Home,
    title: "Conscious Residential Enclaves",
    description: "Eco-villas and residential apartments built with sustainable materials, offering residents a lifestyle embedded in nature and a like-minded community.",
  },
  {
    icon: Trees,
    title: "Organic Farms & Nature Reserve",
    description: "Vast tracts dedicated to regenerative agriculture, providing organic produce to the township while preserving local biodiversity and wildlife corridors.",
  },
  {
    icon: GraduationCap,
    title: "Education & Research Campus",
    description: "Home to the Universal Spiritual Science Institute, featuring libraries, lecture halls, and laboratories for the study of consciousness and holistic health.",
  },
  {
    icon: Palette,
    title: "Cultural & Arts Hub",
    description: "Amphitheatres, craft workshops, and exhibition spaces designed to revive traditional arts and foster community through vibrant cultural expression.",
  },
];

export function Zones() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="Township Architecture"
        heading="Key Precincts & Zones"
        description="The Brindavan Project is a fully integrated ecosystem, featuring distinct zones that fulfill every dimension of human life—from healing to housing."
        align="center"
      />

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ZONES.map((zone, index) => {
          const Icon = zone.icon;
          return (
            <RevealOnScroll key={zone.title} delay={index * 0.1}>
              <Card className="h-full flex flex-col p-8 group">
                <div className="w-14 h-14 border border-burntOrange/20 rounded-full flex items-center justify-center mb-6 text-burntOrange group-hover:bg-burntOrange group-hover:text-peach transition-colors duration-300">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display uppercase tracking-widest text-lg text-deepAmber mb-4">
                  {zone.title}
                </h3>
                <p className="font-sans font-light text-deepAmber text-sm leading-relaxed flex-grow">
                  {zone.description}
                </p>
              </Card>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
