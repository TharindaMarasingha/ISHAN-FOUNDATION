import { SectionHeading } from "../ui/SectionHeading";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";

const AREAS = [
  {
    title: "Consciousness Research",
    description: "Empirical studies into the nature of subjective experience, non-ordinary states of consciousness, and the neurobiological correlates of profound awakening.",
  },
  {
    title: "Contemplative Practice",
    description: "Systematizing and decoding the methodologies of ancient meditative traditions to make their psychological and physiological benefits accessible to the modern world.",
  },
  {
    title: "Comparative Philosophy",
    description: "Bridging Eastern spiritual frameworks—such as Vedanta, Buddhism, and Yoga—with Western philosophical paradigms to create a unified understanding of human existence.",
  },
  {
    title: "Ethics & Inner Development",
    description: "Investigating how disciplined inner work and heightened awareness naturally give rise to spontaneous ethical behavior, empathy, and social responsibility.",
  },
  {
    title: "Scientific Studies of Meditation",
    description: "Measuring the long-term impact of deep contemplative states on neuroplasticity, immune response, cellular aging, and overall psycho-emotional resilience.",
  },
  {
    title: "Ancient Wisdom Traditions",
    description: "Preserving and authenticating esoteric knowledge systems, ensuring that ancient truths are accurately transmitted without dogmatic distortion.",
  },
];

export function AreasOfStudy() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <SectionHeading
          align="center"
          eyebrow="Domains of Inquiry"
          heading="Core Areas of Study"
          description="Our research spans the spectrum from empirical neuroscience to ancient philosophical frameworks, uniting objective measurement with profound subjective realization."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AREAS.map((area, index) => (
          <RevealOnScroll key={area.title} delay={index * 0.1} className="h-full">
            <Card className="h-full p-8 border-divider hover:-translate-y-1 hover:border-divider transition-all duration-300">
              <h3 className="font-display font-light text-2xl text-heading mb-4">
                {area.title}
              </h3>
              <p className="font-sans font-light text-sm text-heading/80 leading-relaxed">
                {area.description}
              </p>
            </Card>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
