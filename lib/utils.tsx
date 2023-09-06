import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navigation = [
  { name: "La table & le snack", href: "#laTable" },
  { name: "Sur mesure", href: "#surMesure" },
  { name: "Contact", href: "#contact" },
]

export const reservationLink =
  "https://ib.guestonline.fr/instabook/bookings/lTtWuZ3"
