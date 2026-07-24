import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Users } from "lucide-react";

// Data foto pengurus per periode kabinet.
// Tinggal tambah/ganti item di sini kalau ada foto kepengurusan baru —
// urutannya otomatis mengikuti array ini.
const periods = [
  { image: "/kabinet-lazarus.png", label: "Kabinet Lazarus", year: "2026 / 2027" },
  { image: "/kabinet-sinergi.png", label: "Kabinet Sinergi", year: "2025 / 2026" },
  { image: "/hmps-3.jpg", label: "Kabinet Sebelumnya", year: "2024 / 2025" },
];

const AUTOPLAY_MS = 4500;

const variants = {
  enter: (direction) => ({
    x: direction > 0 ? 60 : -60,
    opacity: 0,
    scale: 0.97,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -60 : 60,
    opacity: 0,
    scale: 0.97,
  }),
};

export default function PengurusCarousel() {
  const [[index, direction], setIndex] = useState([0, 0]);

  const paginate = useCallback((newDirection) => {
    setIndex(([prev]) => {
      const next = (prev + newDirection + periods.length) % periods.length;
      return [next, newDirection];
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => paginate(1), AUTOPLAY_MS);
    return () => clearInterval(timer);
  }, [paginate]);

  const current = periods[index];

  return (
    <div className="relative">
      {/* Glow lembut di belakang frame */}
      <div className="absolute -inset-8 bg-[var(--brand)]/20 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative bg-[var(--surface)] border border-[var(--border-subtle)] rounded-[2rem] p-3 shadow-2xl">
        {/* Bar kecil ala "device chrome" */}
        <div className="flex items-center gap-2 px-3 pb-3">
          <span className="w-7 h-7 rounded-full bg-[var(--brand)] grid place-items-center shrink-0">
            <Users size={13} className="text-white" />
          </span>
            <span className="text-xs font-medium text-[var(--text-muted)]">
            Galeri Kepengurusan
          </span>
        </div>

        <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-[var(--surface-alt)]">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.img
              key={current.image}
              src={current.image}
              alt={`Foto ${current.label} ${current.year}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>

          {/* Overlay gradient bawah + label periode */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent p-5 pt-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.label + current.year}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-white font-display font-bold text-lg leading-none">
                  {current.label}
                </p>
                <p className="text-slate-300 text-sm mt-1">{current.year}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Tombol navigasi kiri-kanan */}
          <button
            type="button"
            onClick={() => paginate(-1)}
            aria-label="Foto sebelumnya"
            className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white grid place-items-center transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => paginate(1)}
            aria-label="Foto berikutnya"
            className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/30 hover:bg-black/50 backdrop-blur-sm text-white grid place-items-center transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* Indikator titik */}
        <div className="flex items-center justify-center gap-2 pt-4 pb-1">
          {periods.map((p, i) => (
            <button
              key={p.image}
              type="button"
              onClick={() => setIndex([i, i > index ? 1 : -1])}
              aria-label={`Lihat ${p.label} ${p.year}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-[var(--brand)]" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
