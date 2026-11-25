import type { ButtonHTMLAttributes } from "react";

const variants = {
  primary: "bg-brand text-brand-foreground hover:opacity-90",
  secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
  danger: "bg-red-600 text-white hover:bg-red-700",
} as const;

const sizes = { sm: "h-8 px-3 text-sm", md: "h-10 px-4", lg: "h-12 px-6 text-lg" } as const;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
};

export function Button({ variant = "primary", size = "md", className = "", ...props }: ButtonProps) {
  return <button className={`inline-flex items-center rounded-md font-medium ${variants[variant]} ${sizes[size]} ${className}`} {...props} />;
}
