import React from "react";
import Link from "next/link";
import { MagneticButton } from "./MagneticButton";

interface ButtonProps {
  variant?: "primary" | "ghost";
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  magnetic?: boolean;
}

export function Button({
  variant = "primary",
  href,
  onClick,
  children,
  className = "",
  type = "button",
  disabled = false,
  magnetic = true,
}: ButtonProps) {
  const baseClasses =
    "inline-block uppercase text-xs tracking-[0.15em] px-10 py-4 transition-colors duration-300 rounded-full";
  
  const variantClasses =
    variant === "primary"
      ? "bg-cta text-white hover:bg-cta/90 disabled:opacity-50 disabled:hover:bg-cta"
      : "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white disabled:opacity-50 disabled:hover:border-primary disabled:hover:text-primary disabled:hover:bg-transparent";

  const combinedClasses = `${baseClasses} ${variantClasses} ${className} ${disabled ? 'cursor-not-allowed' : ''}`;

  const renderInner = () => {
    if (href) {
      return (
        <Link href={href} className={combinedClasses}>
          {children}
        </Link>
      );
    }
    return (
      <button type={type} disabled={disabled} onClick={onClick} className={combinedClasses}>
        {children}
      </button>
    );
  };

  if (magnetic && !disabled) {
    return <MagneticButton>{renderInner()}</MagneticButton>;
  }
  return renderInner();
}
