import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Copy, Minus, Plus, Shirt, Sparkles, X } from "lucide-react";
import Seo from "../../components/Seo";
import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import Dropdown from "../../components/ui/dropdown";
import ProductCard from "../../components/ProductCard";
import { formatRupiah } from "../../lib/utils";
import { kategoriProduk, productList } from "../../data/layanan/marketplace";

const INSTAGRAM_URL = "https://www.instagram.com/hmpsinf/?hl=id";
const INSTAGRAM_HANDLE = "@hmpsinf";
const kategoriIcon = { pakaian: Shirt, aksesoris: Sparkles };

export default function Marketplace() {
  const [kategori, setKategori] = useState("semua");
  const [selected, setSelected] = useState(null);
  const [ukuran, setUkuran] = useState("");
  const [qty, setQty] = useState(1);
  const [copied, setCopied] = useState(false);

  const visibleProducts = productList.filter((p) => kategori === "semua" || p.kategori === kategori);

  const openProduct = (product) => {
    setSelected(product);
    setUkuran(product.ukuran?.[0] ?? "");
    setQty(1);
    setCopied(false);
  };

  const closeModal = () => {
    setSelected(null);
    setCopied(false);
  };

  const handleOrder = async () => {
    if (!selected) return;
    const bagianUkuran = selected.ukuran?.length > 0 ? ` ukuran ${ukuran},` : "";
    const text = `Halo HMPS Informatika, saya mau pesan "${selected.nama}"${bagianUkuran} sebanyak ${qty} pcs. Total kira-kira ${formatRupiah(
      selected.harga * qty
    )}.`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
    } catch {
      // Kalau clipboard API diblok browser, tetep lanjut buka Instagram-nya aja.
    }
    window.open(INSTAGRAM_URL, "_blank", "noreferrer");
  };

  return (
    <div className="pb-24 bg-pattern-grid">
      <Seo
        title="Marketplace"
        path="/layanan/marketplace"
        description="Merchandise resmi HMPS Informatika UINSMHB — kaos angkatan, hoodie kabinet, PDH, totebag, pin, dan aksesoris lainnya."
      />
      <PageHero
        title="Marketplace"
        highlight="HMPS Informatika"
        subtitle="Merchandise resmi buat nunjukkin identitas anak Informatika — dari kaos angkatan sampai aksesoris sehari-hari."
        image="/PageHero-hmps.jpg"
      />

      <div className="container-hmps pt-14">
        <Reveal className="flex flex-col md:flex-row md:items-center gap-3 mb-10">
          <Dropdown label="Kategori" options={kategoriProduk} value={kategori} onChange={setKategori} />
          <p className="text-sm text-[var(--text-muted)] md:ml-auto pl-3 md:pl-0 border-l-2 md:border-0 border-[var(--brand)]">
            Ditemukan <span className="font-semibold text-[var(--text-primary)]">{visibleProducts.length}</span> produk
          </p>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {visibleProducts.map((product, i) => (
            <Reveal key={product.slug} delay={(i % 8) * 0.05}>
              <ProductCard product={product} onSelect={openProduct} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm z-[100] flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.94, opacity: 0, y: 16 }}
              className="bg-[var(--surface)] rounded-3xl overflow-hidden max-w-lg w-full max-h-[88vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[16/10] bg-[var(--surface-alt)]">
                {selected.gambar?.startsWith("/") ? (
                  <img src={selected.gambar} alt={selected.nama} className="w-full h-full object-cover" />
                ) : (
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-blue-600 to-blue-400" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      {(() => {
                        const Icon = kategoriIcon[selected.kategori] ?? Shirt;
                        return <Icon size={52} className="text-white/80" strokeWidth={1.5} />;
                      })()}
                    </div>
                  </div>
                )}
                <button
                  onClick={closeModal}
                  aria-label="Tutup"
                  className="absolute top-4 right-4 w-9 h-9 rounded-full grid place-items-center bg-slate-900/50 text-white hover:bg-slate-900/70 transition-colors"
                >
                  <X size={17} />
                </button>
              </div>

              <div className="p-6 md:p-7">
                <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-1">{selected.nama}</h3>
                <p className="font-display font-bold text-[var(--brand-text)] text-lg mb-4">
                  {formatRupiah(selected.harga)}
                </p>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6">{selected.deskripsi}</p>

                {selected.ukuran?.length > 0 && (
                  <div className="mb-6">
                    <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-faint)] mb-2.5">
                      Pilih Ukuran
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {selected.ukuran.map((u) => (
                        <button
                          key={u}
                          type="button"
                          onClick={() => setUkuran(u)}
                          className={`w-11 h-11 rounded-xl text-sm font-semibold border transition-colors ${
                            ukuran === u
                              ? "bg-[var(--brand)] border-[var(--brand)] text-white"
                              : "bg-[var(--surface)] border-[var(--border)] text-[var(--text-secondary)] hover:border-[var(--brand)]"
                          }`}
                        >
                          {u}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mb-6">
                  <p className="text-xs font-semibold uppercase tracking-wide text-[var(--text-faint)] mb-2.5">
                    Jumlah
                  </p>
                  <div className="inline-flex items-center gap-4 bg-[var(--surface-alt)] rounded-xl px-4 py-2.5">
                    <button
                      type="button"
                      onClick={() => setQty((q) => Math.max(1, q - 1))}
                      className="text-[var(--text-secondary)] hover:text-[var(--brand-text)] transition-colors"
                      aria-label="Kurangi jumlah"
                    >
                      <Minus size={16} />
                    </button>
                    <span className="font-display font-bold text-[var(--text-primary)] w-6 text-center">{qty}</span>
                    <button
                      type="button"
                      onClick={() => setQty((q) => q + 1)}
                      className="text-[var(--text-secondary)] hover:text-[var(--brand-text)] transition-colors"
                      aria-label="Tambah jumlah"
                    >
                      <Plus size={16} />
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-between bg-[var(--brand-soft)] rounded-2xl px-5 py-4 mb-6">
                  <span className="text-sm font-medium text-[var(--brand-soft-text)]">Estimasi Total</span>
                  <span className="font-display font-bold text-[var(--brand-text)]">
                    {formatRupiah(selected.harga * qty)}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={handleOrder}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[var(--brand)] hover:bg-[var(--brand-hover)] transition-colors text-white text-sm font-semibold py-3.5 rounded-xl"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? "Tersalin! Lanjut chat di Instagram" : "Pesan via Instagram"}
                </button>
                <p className="text-xs text-[var(--text-faint)] text-center mt-3">
                  Ringkasan pesanan otomatis disalin, tinggal paste ke DM {INSTAGRAM_HANDLE}.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
