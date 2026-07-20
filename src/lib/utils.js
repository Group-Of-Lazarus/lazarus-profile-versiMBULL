import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Gabungin class Tailwind dengan aman (menghindari konflik class yang duplikat/bertabrakan)
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
