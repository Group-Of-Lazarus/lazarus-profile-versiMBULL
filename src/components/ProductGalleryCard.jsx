import { useState } from "react";
import { Check, ShoppingCart } from "lucide-react";

export default function ProductGalleryCard({ product, onOrder }) {
  const [activeImage, setActiveImage] = useState(0);
  const [copied, setCopied] = useState(false);

  const handleOrder = async () => {
    await onOrder(product);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Foto utama */}
      <div className="relative aspect-[4/5] bg-[var(--surface-alt)] overflow-hidden">
        <img
          src={product.gambar[activeImage]}
          alt={product.nama}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Strip thumbnail — klik buat ganti foto utama */}
      <div className="flex gap-2 p-3 overflow-x-auto">
        {product.gambar.map((src, i) => (
          <button
            key={src}
            type="button"
            onClick={() => setActiveImage(i)}
            className={`shrink-0 w-14 h-14 rounded-lg overflow-hidden border-2 transition-colors ${
              activeImage === i
                ? "border-[var(--brand)]"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
            aria-label={`Lihat foto ${i + 1}`}
          >
            <img src={src} alt="" className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      <div className="px-6 pb-6 pt-1">
        <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-1 leading-snug">
          {product.nama}
        </h3>
        <p className="text-xs font-semibold text-[var(--brand-text)] tracking-wide mb-4">
          {product.tagline}
        </p>

        <div className="space-y-3 mb-5">
          {product.deskripsi.map((paragraf, i) => (
            <p key={i} className="text-sm text-[var(--text-secondary)] leading-relaxed">
              {paragraf}
            </p>
          ))}
        </div>

        {product.varian?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-5">
            {product.varian.map((v) => (
              <span
                key={v}
                className="text-xs font-medium text-[var(--text-secondary)] bg-[var(--surface-alt)] border border-[var(--border-subtle)] px-2.5 py-1 rounded-full"
              >
                {v}
              </span>
            ))}
          </div>
        )}

        <p className="font-display font-extrabold text-xl text-[var(--text-primary)] mb-5">
          {product.harga}
        </p>

        <button
          type="button"
          onClick={handleOrder}
          className="w-full inline-flex items-center justify-center gap-2 bg-[var(--brand)] hover:bg-[var(--brand-hover)] transition-colors text-white text-sm font-semibold py-3.5 rounded-xl"
        >
          {copied ? (
            <>
              <Check size={16} /> Tersalin, buka Instagram...
            </>
          ) : (
            <>
              <ShoppingCart size={16} /> Pesan Sekarang
            </>
          )}
        </button>
      </div>
    </div>
  );
}
