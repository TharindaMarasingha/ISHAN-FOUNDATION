import { Card } from "./Card";

interface NumberedCardProps {
  number: string;
  title: string;
  description: string;
  accent?: string;
  className?: string;
}

export function NumberedCard({
  number,
  title,
  description,
  accent,
  className = "",
}: NumberedCardProps) {
  return (
    <Card className={`group ${className}`}>
      <span
        className={`font-display italic text-6xl text-deepAmber/10 absolute top-4 right-4 pointer-events-none transition-colors duration-300 ${
          accent ? `group-hover:text-${accent}` : "group-hover:text-burntOrange/20"
        }`}
      >
        {number}
      </span>
      <h3 className="font-display uppercase tracking-widest text-deepAmber text-xl mb-4 relative z-10">
        {title}
      </h3>
      <p className="font-sans font-light text-sm text-deepAmber leading-relaxed relative z-10">
        {description}
      </p>
    </Card>
  );
}
