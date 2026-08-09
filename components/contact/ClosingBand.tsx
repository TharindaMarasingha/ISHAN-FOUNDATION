import { GoldDivider } from "../ui/GoldDivider";
import { RevealOnScroll } from "../ui/RevealOnScroll";
import Image from "next/image";

export function ClosingBand() {
  return (
    <>
      <GoldDivider />
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-white">
        <RevealOnScroll>
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            {/* Image Column */}
            <div className="relative w-full aspect-[3/4] md:aspect-[4/5] rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-2xl">
              <Image
                src="/images/conel.webp"
                alt="A serene stone pathway through a lush green forest"
                fill
                className="object-cover hover:scale-105 transition-transform duration-[2000ms] ease-out"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            
            {/* Text Column */}
            <div className="font-display italic text-2xl md:text-3xl lg:text-4xl text-heading flex flex-col gap-8 md:pr-8">
              <p className="leading-relaxed">
                "Every institution begins with an idea.<br/>
                Every movement begins with people.<br/>
                Every transformation begins with<br/>
                a single step."
              </p>
              <p className="font-sans not-italic font-light text-base md:text-lg text-heading/80 leading-relaxed border-t border-divider pt-8">
                Thank you for visiting ISHAN. We invite you to walk this journey with us — as learners, practitioners, leaders, partners, volunteers, researchers, educators, and stewards.
              </p>
            </div>
          </div>
        </RevealOnScroll>
      </section>
    </>
  );
}
