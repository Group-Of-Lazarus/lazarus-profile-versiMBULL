import { Shirt, Sparkles } from "lucide-react";
import { formatRupiah } from "../lib/utils";

const kategoriIcon = {
  pakaian: Shirt,
  aksesoris: Sparkles,
};

export default function ProductCard({ product, onSelect }) {
  const hasPhoto = Boolean(product.gambar) && product.gambar.startsWith("/");
  const Icon = kategoriIcon[product.kategori] ?? Shirt;

  return (
    <button
      type="button"
      onClick={() => onSelect(product)}
      className="group text-left bg-[var(--surface)] rounded-3xl overflow-hidden border border-[var(--border-subtle)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative aspect-square overflow-hidden bg-[var(--surface-alt)]">
        {hasPhoto ? (
          <img
            src={product.gambar}
            alt={product.nama}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-400" />
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_25%_25%,white,transparent_45%)]" />
            <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Icon size={40} className="text-white/80" strokeWidth={1.5} />
            </div>
          </div>
        )}
        {product.ukuran?.length > 0 && (
          <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-wide bg-slate-900/70 text-white px-2.5 py-1 rounded-full">
            Multi Ukuran
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-display font-bold text-base text-[var(--text-primary)] mb-1 group-hover:text-[var(--brand-text)] transition-colors line-clamp-1">
          {product.nama}
        </h3>
        <p className="text-sm text-[var(--text-muted)] line-clamp-2 mb-3 leading-relaxed">{product.deskripsi}</p>
        <p className="font-display font-bold text-[var(--brand-text)]">{formatRupiah(product.harga)}</p>
      </div>
    </button>
  );
}
