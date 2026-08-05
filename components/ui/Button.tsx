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
    "inline-block text-xs font-sans tracking-[0.15em] px-10 py-4 transition-all duration-300 rounded-full";
  
  const variantClasses =
    variant === "primary"
      ? "bg-[#DE5680] text-white font-bold hover:brightness-95 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(222,86,128,0.25)] disabled:opacity-40 disabled:hover:brightness-100 disabled:hover:[box-shadow:none] disabled:hover:translate-y-0 [text-shadow:0_1px_3px_rgba(0,0,0,0.3)] shadow-md transition-all duration-300"
      : "bg-transparent border-[1.5px] border-secondary text-heading hover:bg-divider disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:border-secondary disabled:hover:text-heading";

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
