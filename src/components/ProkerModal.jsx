import { useEffect, useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar } from "lucide-react";

/**
 * Modal proker — ala "Expandable Card" Aceternity UI.
 * Kartu proker kecil di list, diklik salah satu -> membesar jadi overlay
 * detail dengan animasi shared-layout (layoutId), bukan modal baru yang
 * muncul mendadak dari tengah.
 */
export default function ProkerModal({ department, onClose }) {
  const [selected, setSelected] = useState(null);
  const uid = useId();

  // Reset kartu yang lagi di-expand tiap kali ganti departemen / modal ditutup
  useEffect(() => {
    setSelected(null);
  }, [department]);

  useEffect(() => {
    function onKeyDown(e) {
      if (e.key !== "Escape") return;
      if (selected !== null) setSelected(null);
      else onClose();
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected, onClose]);

  const proker = department?.proker ?? [];

  return (
    <AnimatePresence>
      {department && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-4 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
            onClick={() => (selected !== null ? setSelected(null) : onClose())}
          />

          {/* Kartu utama — daftar proker (kondisi "tertutup") */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="relative z-10 w-full max-w-lg my-8 rounded-3xl bg-[var(--surface)] shadow-2xl overflow-hidden"
          >
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
              {proker.length > 0 ? (
                <ul className="space-y-3">
                  {proker.map((p, i) => (
                    <motion.li
                      key={i}
                      layoutId={`proker-${uid}-${i}`}
                      onClick={() => setSelected(i)}
                      className="flex items-center justify-between gap-4 bg-[var(--surface-alt)] rounded-2xl px-5 py-4 cursor-pointer hover:bg-[var(--brand-soft)] transition-colors"
                    >
                      <motion.span
                        layoutId={`proker-title-${uid}-${i}`}
                        className="font-semibold text-[var(--text-primary)]"
                      >
                        {p.nama}
                      </motion.span>
                      <motion.span
                        layoutId={`proker-date-${uid}-${i}`}
                        className="inline-flex items-center gap-1.5 shrink-0 text-xs font-medium text-[var(--text-muted)] bg-[var(--surface)] border border-[var(--border-subtle)] px-3 py-1.5 rounded-full"
                      >
                        <Calendar size={13} />
                        {p.tanggal}
                      </motion.span>
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-[var(--text-muted)]">
                  Belum ada proker yang ditambahkan untuk departemen ini.
                </p>
              )}
            </div>
          </motion.div>

          {/* Kartu proker yang di-expand (kondisi "terbuka") */}
          <AnimatePresence>
            {selected !== null && proker[selected] && (
              <motion.div
                className="fixed inset-0 z-[110] flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="absolute inset-0 bg-slate-950/70 backdrop-blur-sm"
                  onClick={() => setSelected(null)}
                />
                <motion.div
                  layoutId={`proker-${uid}-${selected}`}
                  className="relative z-10 w-full max-w-md rounded-3xl p-8 text-white shadow-2xl"
                  style={{
                    background: `linear-gradient(135deg, ${department.colors[0]}, ${
                      department.colors[1] ?? department.colors[0]
                    })`,
                  }}
                >
                  <button
                    type="button"
                    onClick={() => setSelected(null)}
                    aria-label="Tutup detail"
                    className="absolute top-5 right-5 w-9 h-9 rounded-full grid place-items-center bg-white/15 hover:bg-white/25 transition-colors"
                  >
                    <X size={18} />
                  </button>

                  <department.icon size={28} className="mb-4" strokeWidth={1.75} />
                  <motion.h4
                    layoutId={`proker-title-${uid}-${selected}`}
                    className="font-display font-extrabold text-2xl mb-4"
                  >
                    {proker[selected].nama}
                  </motion.h4>
                  <motion.span
                    layoutId={`proker-date-${uid}-${selected}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium bg-white/15 px-3 py-1.5 rounded-full w-fit"
                  >
                    <Calendar size={14} />
                    {proker[selected].tanggal}
                  </motion.span>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                    className="text-white/80 text-sm mt-6 leading-relaxed"
                  >
                    Detail lebih lanjut mengenai program kerja ini akan
                    diinformasikan oleh Departemen {department.title} melalui
                    media resmi HMPS Informatika.
                  </motion.p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
