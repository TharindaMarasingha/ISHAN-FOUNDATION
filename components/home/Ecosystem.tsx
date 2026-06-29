import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import Link from "next/link";

const ECOSYSTEM = [
  {
    tag: "Arogya Ashram International",
    title: "Holistic Health",
    subtitle: "Sanctuaries of Healing",
    description: "Centers dedicated to preventive and restorative wellness, blending ancient Ayurvedic principles with modern understanding.",
    href: "/arogya",
    color: "bg-mandarin",
  },
  {
    tag: "Universal Spiritual Science",
    title: "Spiritual Science",
    subtitle: "The Academy",
    description: "An educational wing focused on researching, preserving, and teaching the universal truths of human spirituality.",
    href: "/uss",
    color: "bg-sacredGold",
  },
  {
    tag: "Samanvaya",
    title: "Community Welfare",
    subtitle: "Harmonious Action",
    description: "Outreach programs designed to uplift the underprivileged through education, resources, and sustainable development.",
    href: "/samanvaya",
    color: "bg-warmGilt",
  },
  {
    tag: "The Brindavan Project",
    title: "Ecological Balance",
    subtitle: "Nature's Restoration",
    description: "Environmental initiatives focused on reforestation, sustainable agriculture, and living in rhythm with the Earth.",
    href: "/brindavan",
    color: "bg-softApricot",
  },
];

export function Ecosystem() {
  return (
    <section id="ecosystem" className="bg-deepAmber/[0.02] py-24 px-6 border-y border-burntOrange/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Our Ecosystem"
          heading="Four Pathways to Conscious Living"
          description="ISHAN operates through four specialized branches, each addressing a critical aspect of the human-nature relationship."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ECOSYSTEM.map((item, index) => (
            <RevealOnScroll key={item.tag} delay={index * 0.1} className="h-full">
              <Card className="h-full flex flex-col group">
                <div className={`h-1 w-12 ${item.color} mb-6 transition-all duration-300 group-hover:w-full`} />
                <span className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-burntOrange mb-4 block">
                  {item.tag}
                </span>
                <h3 className="font-display text-2xl text-deepAmber uppercase tracking-widest mb-1">
                  {item.title}
                </h3>
                <h4 className="font-display italic text-lg text-sacredGold mb-6">
                  {item.subtitle}
                </h4>
                <p className="font-sans font-light text-sm text-deepAmber leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="font-sans text-xs uppercase tracking-[0.2em] text-burntOrange hover:text-mandarin transition-colors mt-auto inline-block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange focus-visible:ring-offset-2 focus-visible:ring-offset-peach"
                >
                  Explore {item.title} &rarr;
                </Link>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
