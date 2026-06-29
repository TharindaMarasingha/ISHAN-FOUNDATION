import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const TAGS = [
  "Individuals", "Families", "Students", "Professionals", "Organisations",
  "Educational Institutions", "Healthcare Professionals", "Governments", "NGOs",
  "Community Leaders", "Spiritual Seekers", "Social Entrepreneurs", "Environmental Organisations"
];

export function WhoWeServe() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto text-center">
      <SectionHeading
        eyebrow="Our Reach"
        heading="Who We Serve"
        align="center"
      />

      <div className="mt-16 flex flex-wrap justify-center gap-4">
        {TAGS.map((tag, index) => (
          <RevealOnScroll key={tag} delay={index * 0.05}>
            <span className="inline-block px-6 py-3 border border-burntOrange/20 rounded-full font-sans font-light text-sm text-deepAmber hover:bg-burntOrange/5 hover:border-burntOrange/40 transition-colors duration-300 cursor-default">
              {tag}
            </span>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
