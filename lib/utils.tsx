import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const bgColors = [
  "bg-red",
  "bg-teal-900",
  "bg-blue-900",
  "bg-pink-800",
  "bg-amber-900",
]

export const navigation = [
  { name: "La table & le snack", href: "#la-table" },
  { name: "Sur mesure", href: "#sur-mesure" },
  { name: "Contact", href: "#contact" },
]

export const reservationLink =
  "https://bookings.zenchef.com/results?rid=363456&pid=1001"
