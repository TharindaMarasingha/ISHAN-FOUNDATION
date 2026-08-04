import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const PARTNERS = [
  "Visionary Investors", "Architects & Planners", "Sustainable Energy Providers", 
  "Ayurvedic Practitioners", "Organic Farming Experts", "Future Residents",
  "Philanthropic Organizations", "Cultural Ambassadors"
];

export function Involvement() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto text-center">
      <SectionHeading
        eyebrow="Get Involved"
        heading="A Collaborative Creation"
        description="A project of this scale requires a coalition of the willing. We are actively seeking partners, experts, and pioneers to join us in bringing Sri Vrindavan Project to life."
        align="center"
      />

      <div className="mt-16 flex flex-wrap justify-center gap-4">
        {PARTNERS.map((tag, index) => (
          <RevealOnScroll key={tag} delay={index * 0.05}>
            <span className="inline-block px-6 py-3 border border-divider rounded-full font-sans font-light text-sm text-heading hover:bg-softAccent hover:border-primary/40 transition-colors duration-300 cursor-default">
              {tag}
            </span>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
