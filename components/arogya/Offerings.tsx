import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Leaf, HeartPulse, Stethoscope, Sun, Trees, GraduationCap } from "lucide-react";

const OFFERINGS = [
  {
    icon: Leaf,
    title: "Ayurvedic Wellness Programs",
    description: "Personalized healing journeys based on ancient Ayurvedic dosha balancing, incorporating diet, herbal support, and detoxification therapies to restore vitality.",
  },
  {
    icon: Sun,
    title: "Yoga & Meditation",
    description: "Guided practices to align the physical body with the subtle energy systems. From dynamic asana sequences to deep, restorative stillness and breathwork.",
  },
  {
    icon: Stethoscope,
    title: "Preventive Health Screening",
    description: "Comprehensive assessments merging traditional diagnostic methods with modern vital checks to identify imbalances long before they manifest as illness.",
  },
  {
    icon: HeartPulse,
    title: "Holistic Lifestyle Coaching",
    description: "One-on-one mentorship empowering you to integrate sustainable, health-conscious habits into your daily routine for lifelong proactive wellbeing.",
  },
  {
    icon: Trees,
    title: "Wellness Retreats",
    description: "Immersive residential programs set in serene natural environments, designed to disconnect you from daily stressors and facilitate deep, profound healing.",
  },
  {
    icon: GraduationCap,
    title: "Practitioner Training",
    description: "Rigorous educational programs designed to pass down authentic healing wisdom to the next generation of wellness professionals and holistic practitioners.",
  },
];

export function Offerings() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <SectionHeading
        eyebrow="What We Offer"
        heading="Pathways to Complete Wellbeing"
        description="Our comprehensive programs address the human experience in its totality, offering tools and treatments for the physical, mental, and spiritual dimensions."
        align="center"
      />

      <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {OFFERINGS.map((item, index) => {
          const Icon = item.icon;
          return (
            <RevealOnScroll key={item.title} delay={index * 0.1}>
              <Card className="h-full flex flex-col p-8 group">
                <div className="w-14 h-14 border border-burntOrange/20 rounded-full flex items-center justify-center mb-6 text-burntOrange group-hover:bg-burntOrange group-hover:text-peach transition-colors duration-300">
                  <Icon className="w-6 h-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display uppercase tracking-widest text-lg text-deepAmber mb-4">
                  {item.title}
                </h3>
                <p className="font-sans font-light text-deepAmber text-sm leading-relaxed flex-grow">
                  {item.description}
                </p>
              </Card>
            </RevealOnScroll>
          );
        })}
      </div>
    </section>
  );
}
