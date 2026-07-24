import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, SearchX } from "lucide-react";
import Seo from "../components/Seo";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[var(--page)] bg-pattern-grid flex items-center justify-center px-6">
      <Seo title="Halaman Tidak Ditemukan" noIndex />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="w-16 h-16 rounded-2xl bg-[var(--brand-soft)] text-[var(--brand-text)] grid place-items-center mx-auto mb-6">
          <SearchX size={28} />
        </div>

        <p className="font-display font-extrabold text-7xl md:text-8xl text-[var(--brand-text)] leading-none mb-4">
          404
        </p>

        <h1 className="font-display font-bold text-xl md:text-2xl text-[var(--text-primary)] mb-3">
          Halaman tidak ditemukan
        </h1>
        <p className="text-[var(--text-secondary)] text-sm md:text-base mb-8">
          Halaman yang kamu cari mungkin sudah dipindahkan, dihapus, atau
          memang belum tersedia.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-[var(--brand)] hover:bg-[var(--brand-hover)] transition-colors text-white text-sm font-semibold px-6 py-3.5 rounded-full"
        >
          <Home size={16} />
          Kembali ke Beranda
        </Link>
      </motion.div>
    </div>
  );
}
