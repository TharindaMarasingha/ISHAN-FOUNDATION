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

  const eyebrowColor = theme === "dark" ? "text-secondary" : "text-primary";
  const headingColor = theme === "dark" ? "text-surface" : "text-heading";
  const descColor = theme === "dark" ? "text-surface/80" : "text-heading/80";

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
          className={`font-sans font-light ${descColor} max-w-xl leading-relaxed ${alignClass} px-6 sm:px-0`}
        >
          {description}
        </p>
      )}
    </RevealOnScroll>
  );
}
