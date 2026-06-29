import { ReactNode } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

interface SectionHeadingProps {
  eyebrow: string;
  heading: string | ReactNode;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
}: SectionHeadingProps) {
  return (
    <RevealOnScroll
      className={`flex flex-col ${
        align === "center" ? "items-center text-center" : "items-start text-left"
      }`}
    >
      <span className="font-display italic text-burntOrange tracking-[0.2em] text-sm uppercase mb-4 block">
        {eyebrow}
      </span>
      <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl text-deepAmber">
        {heading}
      </h2>
      {description && (
        <p
          className={`font-sans font-light text-deepAmber max-w-xl leading-relaxed mt-6 ${
            align === "center" ? "mx-auto" : ""
          }`}
        >
          {description}
        </p>
      )}
    </RevealOnScroll>
  );
}
