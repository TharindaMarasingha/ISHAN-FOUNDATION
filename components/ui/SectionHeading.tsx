import React, { ReactNode } from "react";
import { RevealOnScroll } from "./RevealOnScroll";

interface SectionHeadingProps {
  eyebrow?: string;
  heading: string | ReactNode;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  heading,
  description,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center mx-auto" : "text-left";
  const flexClass = align === "center" ? "items-center" : "items-start";

  const eyebrowColor = theme === "dark" ? "text-mandarin" : "text-burntOrange";
  const headingColor = theme === "dark" ? "text-softApricot" : "text-deepAmber";
  const descColor = theme === "dark" ? "text-softApricot/80" : "text-deepAmber";

  return (
    <RevealOnScroll className={`flex flex-col ${flexClass}`}>
      {eyebrow && (
        <span
          className={`font-display italic ${eyebrowColor} tracking-[0.2em] text-sm uppercase mb-4 ${alignClass}`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display font-light ${headingColor} text-4xl md:text-5xl lg:text-6xl mb-6 ${alignClass}`}
      >
        {heading}
      </h2>
      {description && (
        <p
          className={`font-sans font-light ${descColor} max-w-xl leading-relaxed ${alignClass}`}
        >
          {description}
        </p>
      )}
    </RevealOnScroll>
  );
}
