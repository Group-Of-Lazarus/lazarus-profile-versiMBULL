import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Calendar, ClipboardList } from "lucide-react";
import { cn } from "../../lib/utils";

// Card Hover Effect ala Aceternity UI, disesuaikan dengan token warna
// (--surface, --border, --brand, dst) dan mode gelap/terang project ini.
//
// items: [{
//   slug: string,
//   title: string,
//   icon?: LucideIcon,
//   description: string,
//   proker?: [{ nama: string, tanggal: string }],
// }]

export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeDept, setActiveDept] = useState(null);

  return (
    <>
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2",
          className
        )}
      >
        {items.map((item, idx) => (
          <div
            key={item.slug ?? item.title}
            className="relative group block h-full w-full p-2"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
               <motion.span
                className="absolute inset-0 h-full w-full rounded-3xl block"
                style={{ background: "var(--brand-ring)" }}
                layoutId="hoverBackground"
                transition={{ layout: { type: "spring", stiffness: 300, damping: 30 } }}
                initial={{ opacity: 0 }}
                animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                }}
                exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                }}
                />
              )}
            </AnimatePresence>

            <Card>
              <div className="flex items-center gap-3 mb-3">
                {item.icon && (
                  <span className="w-12 h-12 rounded-full bg-[var(--brand)] text-white grid place-items-center shrink-0">
                    <item.icon size={22} strokeWidth={2.5} />
                  </span>
                )}
                <CardTitle className="mt-0">{item.title}</CardTitle>
              </div>
              <CardDescription>{item.description}</CardDescription>

              <button
                type="button"
                onClick={() => setActiveDept(item)}
                className="relative z-30 mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-text)] bg-[var(--brand-soft)] hover:bg-[var(--brand-ring)] px-4 py-2 rounded-full transition-colors"
              >
                <ClipboardList size={16} />
                Lihat Proker
              </button>
            </Card>
          </div>
        ))}
      </div>

      <ProkerModal department={activeDept} onClose={() => setActiveDept(null)} />
    </>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "rounded-3xl h-full w-full p-4 overflow-hidden bg-[var(--surface)] border border-[var(--border-subtle)] group-hover:border-[var(--brand)]/40 relative z-20 transition-colors",
        className
      )}
    >
      <div className="relative z-50 p-2">{children}</div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h3
      className={cn(
        "font-display font-extrabold text-xl md:text-2xl text-[var(--text-primary)]",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "text-sm md:text-base text-[var(--text-secondary)] leading-relaxed",
        className
      )}
    >
      {children}
    </p>
  );
};

// Modal detail proker: muncul saat tombol "Lihat Proker" di-klik,
// isinya daftar nama proker + tanggal pelaksanaan untuk departemen terkait.
function ProkerModal({ department, onClose }) {
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
            className="relative z-10 w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-3xl bg-[var(--surface)] border border-[var(--border)] shadow-2xl p-6 md:p-8"
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.2 }}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-5 right-5 w-9 h-9 rounded-full grid place-items-center bg-[var(--surface-alt)] text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label="Tutup"
            >
              <X size={18} />
            </button>

            <p className="font-display font-bold text-sm text-[var(--brand-text)] mb-1">
              Program Kerja
            </p>
            <h3 className="font-display font-extrabold text-2xl text-[var(--text-primary)] mb-6 pr-10">
              {department.title}
            </h3>

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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
