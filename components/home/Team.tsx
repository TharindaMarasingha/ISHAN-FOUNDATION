import React from "react";
import { SectionHeading } from "../ui/SectionHeading";
import { SectionIllustration } from "../ui/SectionIllustration";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import { Card } from "../ui/Card";
import { TeamMember } from "@/lib/types";

const TEAM: TeamMember[] = [
  {
    archetype: "The Guru",
    role: "Spiritual Guide & Anchor",
    name: "Sevakanand Ji 'Buddhu'",
    description: "Ethics, traditional wisdom & consciousness direction for all programmes.",
    nationality: "India",
  },
  {
    archetype: "Yogeshwari",
    role: "Founder & Visionary — AAI",
    name: "Dr. Hon. S. Kobayashi",
    description: "Japanese wellness traditions, mindful movement & sound healing.",
    nationality: "Japan",
  },
  {
    archetype: "Adiyogini",
    role: "Core Member — AAI",
    name: "Master Indrani Sharma",
    description: "Himalayan yogic sciences, meditation & energy practices.",
    nationality: "Nepal",
  },
  {
    archetype: "The Strategist Sage",
    role: "Country Director — Sri Lanka",
    name: "Ranga Soysa",
    description: "Strategic planning, institutional development & governance.",
    nationality: "Sri Lanka",
  },
  {
    archetype: "The Unity Alchemist",
    role: "Programme Coordination",
    name: "Mansoor Ali",
    description: "Strategic partnerships, community building & international collaboration.",
    nationality: "India",
  },
];

export function Team() {
  return (
    <section className="py-24 px-6 md:px-12 bg-deepAmber/[0.02] border-y border-sacredGold/10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mb-20 max-w-4xl mx-auto text-center relative flex justify-center">
          <SectionIllustration
            variant="hands"
            className="absolute -top-16 w-36 h-36 text-burntOrange opacity-10 pointer-events-none"
          />
          <SectionHeading
            align="center"
            eyebrow="Leadership"
            heading="The founding team"
            description="Guided by a visionary core of internationally credentialed practitioners, architects, and humanitarian leaders — united across nations in a shared purpose."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {TEAM.map((member, index) => {
            const isAnchor = index === 0;
            return (
              <RevealOnScroll key={member.name} delay={index * 0.09} className="h-full">
                <div
                  className={`h-full flex flex-col items-center text-center p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 border ${
                    isAnchor
                      ? "border-sacredGold/50 bg-sacredGold/[0.06] hover:border-sacredGold"
                      : "border-burntOrange/20 bg-darkBrown/5 hover:border-burntOrange/50"
                  }`}
                >
                  <p className="font-display italic text-sacredGold text-lg mb-2">
                    {member.archetype}
                  </p>
                  <p className="text-[0.6rem] md:text-xs uppercase tracking-widest text-burntOrange mb-6">
                    {member.role}
                  </p>
                  
                  <h4 className="font-display text-2xl text-deepAmber mb-4">
                    {member.name}
                  </h4>
                  
                  <p className="font-sans font-light text-sm text-deepAmber/80 leading-relaxed flex-grow mb-8">
                    {member.description}
                  </p>

                  <div className="mt-auto px-4 py-1.5 rounded-full border border-burntOrange/30 text-[0.65rem] uppercase tracking-widest text-burntOrange">
                    {member.nationality}
                  </div>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
