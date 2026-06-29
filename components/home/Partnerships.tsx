import { SectionHeading } from "../ui/SectionHeading";
import { Button } from "../ui/Button";
import { RevealOnScroll } from "../ui/RevealOnScroll";

const WAYS_TO_CONTRIBUTE = [
  "Volunteering", "Professional Expertise", "Research", "Teaching", "Mentorship",
  "Community Projects", "Environmental Initiatives", "Strategic Partnerships",
  "Philanthropic Support", "Knowledge Sharing"
];

export function Partnerships() {
  return (
    <section className="bg-deepAmber/[0.02] py-24 px-6 border-y border-burntOrange/10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div className="flex flex-col items-start text-left">
          <SectionHeading
            eyebrow="Collaborations"
            heading="Partnerships"
            description="We actively seek to collaborate with organizations and institutions aligned with our vision of a conscious future."
          />
          <RevealOnScroll delay={0.2} className="mt-8 flex flex-col items-start gap-8">
            <div className="flex flex-wrap gap-3">
              {["Corporate CSR", "Universities", "Wellness Brands", "Governments", "NGOs"].map(tag => (
                <span key={tag} className="px-4 py-2 border border-burntOrange/20 rounded-full text-xs font-sans font-light text-deepAmber">
                  {tag}
                </span>
              ))}
            </div>
            <Button href="/contact" variant="primary">Become a Partner</Button>
          </RevealOnScroll>
        </div>

        <div className="flex flex-col items-start lg:items-end text-left lg:text-right">
          <SectionHeading
            eyebrow="Individuals"
            heading="You Can Contribute Through"
            align="left"
          />
          <RevealOnScroll delay={0.2} className="mt-8 flex flex-col items-start lg:items-end gap-8 w-full">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4 w-full">
              {WAYS_TO_CONTRIBUTE.map((item, index) => (
                <div key={index} className="flex items-center gap-2 justify-start lg:justify-end">
                  <span className="w-1.5 h-1.5 bg-burntOrange/40 rounded-full hidden lg:block" />
                  <span className="font-sans font-light text-sm text-deepAmber">{item}</span>
                  <span className="w-1.5 h-1.5 bg-burntOrange/40 rounded-full lg:hidden" />
                </div>
              ))}
            </div>
            <Button href="/contact" variant="ghost">Connect With Us</Button>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
