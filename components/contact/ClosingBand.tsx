import { GoldDivider } from "../ui/GoldDivider";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function ClosingBand() {
  return (
    <>
      <GoldDivider />
      <section className="py-24 px-6 text-center bg-deepAmber/[0.02]">
        <RevealOnScroll>
          <p className="font-display italic text-2xl md:text-3xl text-deepAmber max-w-4xl mx-auto">
            One Humanity <span className="text-mandarin mx-2">·</span> One Nature <span className="text-mandarin mx-2">·</span> One Conscious Future
          </p>
        </RevealOnScroll>
      </section>
    </>
  );
}
