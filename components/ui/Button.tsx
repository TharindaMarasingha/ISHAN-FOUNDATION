import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost";
  href?: string;
  children: ReactNode;
  className?: string;
}

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "uppercase text-xs tracking-[0.2em] px-8 py-3 transition-colors duration-300 font-sans inline-block text-center";

  const baseStyles = {
    primary: "bg-burntOrange text-peach hover:bg-mandarin",
    ghost:
      "bg-transparent border border-burntOrange text-burntOrange hover:bg-mandarin hover:text-peach",
  };

  const combinedClasses = `inline-flex items-center justify-center px-8 py-3.5 font-sans text-[0.65rem] uppercase tracking-[0.2em] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burntOrange focus-visible:ring-offset-2 focus-visible:ring-offset-peach ${baseStyles[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
