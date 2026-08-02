import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar } from "lucide-react";

export default function ProkerModal({ department, onClose }) {
  return (
    <AnimatePresence>
      {department && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            className="relative z-10 w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-3xl bg-[var(--surface)] shadow-2xl"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header — gradient pakai warna utama departemen */}
            <div
              className="relative px-6 pt-6 pb-8 text-white"
              style={{
                background: `linear-gradient(135deg, ${department.colors[0]}, ${
                  department.colors[1] ?? department.colors[0]
                })`,
              }}
            >
              <button
                type="button"
                onClick={onClose}
                aria-label="Tutup"
                className="absolute top-5 right-5 w-9 h-9 rounded-full grid place-items-center bg-white/15 hover:bg-white/25 transition-colors"
              >
                <X size={18} />
              </button>

              <department.icon size={26} className="mb-3" strokeWidth={1.75} />
              <p className="text-xs font-semibold uppercase tracking-wider text-white/70 mb-1">
                Program Kerja
              </p>
              <h3 className="font-display font-extrabold text-2xl">{department.title}</h3>
            </div>

            <div className="p-6">
              {department.proker && department.proker.length > 0 ? (
                <ul className="space-y-3">
                  {department.proker.map((proker, i) => (
                    <li
                      key={i}
                      className="flex items-start justify-between gap-4 bg-[var(--surface-alt)] rounded-2xl px-5 py-4"
                    >
                      <span className="font-semibold text-[var(--text-primary)]">
                        {proker.nama}
                      </span>
                      <span className="inline-flex items-center gap-1.5 shrink-0 text-xs font-medium text-[var(--text-muted)] bg-[var(--surface)] border border-[var(--border-subtle)] px-3 py-1.5 rounded-full">
                        <Calendar size={13} />
                        {proker.tanggal}
                      </span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-[var(--text-muted)]">
                  Belum ada proker yang ditambahkan untuk departemen ini.
                </p>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
