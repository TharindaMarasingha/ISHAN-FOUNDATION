import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`border border-burntOrange/20 bg-deepAmber/5 p-8 transition-all duration-300 hover:border-burntOrange/50 hover:-translate-y-1 relative overflow-hidden ${className}`}
    >
      {children}
    </div>
  );
}
