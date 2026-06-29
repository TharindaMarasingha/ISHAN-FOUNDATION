import { GoldDivider } from "../ui/GoldDivider";
import { RevealOnScroll } from "../ui/RevealOnScroll";

export function ClosingBand() {
  return (
    <section className="flex flex-col items-center">
      <GoldDivider />
      <div className="py-24 px-6 text-center w-full bg-deepAmber/[0.02]">
        <RevealOnScroll>
          <p className="font-display italic text-2xl md:text-3xl text-sacredGold">
            "One Humanity · One Nature · One Conscious Future"
          </p>
        </RevealOnScroll>
      </div>
    </section>
  );
}
