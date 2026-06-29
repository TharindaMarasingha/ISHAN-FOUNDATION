interface GoldDividerProps {
  className?: string;
}

export function GoldDivider({ className = "" }: GoldDividerProps) {
  return (
    <div
      className={`h-px w-full bg-gradient-to-r from-transparent via-burntOrange to-transparent opacity-30 ${className}`}
      aria-hidden="true"
    />
  );
}
