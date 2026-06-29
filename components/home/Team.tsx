import { SectionHeading } from "../ui/SectionHeading";
import { Card } from "../ui/Card";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const TEAM = [
  {
    archetype: "The Guru",
    role: "Founder & Spiritual Head",
    name: "Sevakanand Ji",
    description: "The visionary behind ISHAN, guiding the global community with profound spiritual insight and compassionate action.",
    nationality: "Global",
    highlight: true,
  },
  {
    archetype: "The Pioneer",
    role: "Co-Founder",
    name: "Dr. Kobayashi",
    description: "Bridging Eastern wisdom with scientific rigor to establish ISHAN's holistic health protocols.",
    nationality: "Japan",
  },
  {
    archetype: "The Teacher",
    role: "Head of Education",
    name: "Master Indrani Sharma",
    description: "Curating and disseminating the Universal Spiritual Science curriculum worldwide.",
    nationality: "India",
  },
  {
    archetype: "The Builder",
    role: "Director of Operations",
    name: "Ranga Soysa",
    description: "Translating spiritual vision into tangible infrastructure and global outreach programs.",
    nationality: "Sri Lanka",
  },
  {
    archetype: "The Healer",
    role: "Lead Ayurvedic Physician",
    name: "Mansoor Ali",
    description: "Overseeing the Arogya Ashram protocols, ensuring authentic restorative treatments.",
    nationality: "UAE",
  },
];

export function Team() {
  return (
    <section className="bg-deepAmber/[0.02] py-24 px-6 border-y border-burntOrange/10">
      <div className="max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Leadership"
          heading="The Founding Team"
          description="A diverse collective of seers, scientists, and social builders united by a singular vision for humanity."
          align="center"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {TEAM.map((member, index) => (
            <RevealOnScroll key={member.name} delay={index * 0.1} className={`h-full ${member.highlight ? 'md:col-span-2 lg:col-span-3 xl:col-span-1 xl:row-span-2' : ''}`}>
              <Card className={`h-full flex flex-col ${member.highlight ? 'bg-sacredGold/10 border-sacredGold/30' : ''}`}>
                <span className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-burntOrange mb-2 block">
                  {member.archetype}
                </span>
                <span className="font-sans font-medium text-xs text-deepAmber/60 uppercase tracking-widest mb-4 block">
                  {member.role}
                </span>
                <h3 className="font-display text-2xl text-deepAmber uppercase tracking-widest mb-4">
                  {member.name}
                </h3>
                <p className="font-sans font-light text-sm text-deepAmber leading-relaxed mb-6 flex-grow">
                  {member.description}
                </p>
                <div className="mt-auto pt-4 border-t border-burntOrange/10">
                  <span className="font-sans text-xs italic text-deepAmber/50">
                    Based in {member.nationality}
                  </span>
                </div>
              </Card>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
