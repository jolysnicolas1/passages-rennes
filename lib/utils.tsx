import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navigation = [
  { name: "Nos offres", href: "/nos-offres" },
  { name: "Qui sommes nous ?", href: "/qui-sommes-nous" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
]
