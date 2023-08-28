import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navigation = [
  { name: "La table & le snack", href: "#laTable" },
  { name: "Nos valeurs", href: "#nosValeurs" },
  { name: "Traiteur", href: "#traiteur" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
]
