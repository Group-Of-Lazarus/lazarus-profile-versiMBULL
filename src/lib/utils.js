import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Gabungin class Tailwind dengan aman (menghindari konflik class yang duplikat/bertabrakan)
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Format angka jadi Rupiah, dipakai di Marketplace (ProductCard & modal produk)
export function formatRupiah(angka) {
  return new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(angka);
}
