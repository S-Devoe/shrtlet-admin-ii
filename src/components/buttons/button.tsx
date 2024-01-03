import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

export default function Button({
  text,
  type,
  className,
  width = "small",
  onClick,
  disabled,
  icon,
  variant,
  height,
}: {
  text: string;
  type?: "button" | "submit" | "reset"; // this should be the normal values for a button type in HTML
  width?: "small" | "medium" | "large" | "full";
  height?: "small" | "medium" | "large";
  onClick?: (e?: any) => void;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  icon?: JSX.Element;
  disabled?: boolean;
  className?: string | string[];
}) {
  return (
    <button
      className={buttonVariants({
        className: cn(
          "rounded-lg disabled:cursor-not-allowed",
          { "px-5": width === "small" },
          { "px-16": width === "large" },
          { "px-10": width === "medium" },
          { "w-full": width === "full" },
          { "text-sm py-3": height === "small" },
          { "text-base py-4": height === "medium" },
          { "text-lg py-[21px]": height === "large" },
          className
        ),
        variant,
      })}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {text}
      {icon && <>{icon}</>}
    </button>
  );
}

const buttonVariants = cva(
  "inline-flex items-center justify-center w-fit py-[0.5rem] rounded-md text-[1rem] font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-orange hover:bg-orange-dark disabled:bg-gray-seven text-white",
        orangeDisabled:
          "bg-orange hover:bg-orange-dark disabled:bg-orange-light disabled:text-orange text-white disabled:opacity-100",
        orangeOutline:
          "bg-transparent border border-orange-dark text-orange-dark hover:bg-orange-dark/10 disabled:text-gray-seven",
        outline:
          "border border-primary text-[0.875rem] text-primary px-4 bg-transparent",
        secondary: "bg-transparent border border-primary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);
