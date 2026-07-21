import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";

// Dropdown filter reusable, dipakai buat filter status aktivitas
// dan filter proker per departemen di ActivityPreview.jsx

export default function Dropdown({ label, options, value, onChange, className = "" }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selected = options.find((o) => o.key === value);

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between gap-3 min-w-[220px] text-sm font-medium px-5 py-2.5 rounded-full border border-[var(--border)] bg-[var(--surface)] text-[var(--text-secondary)] hover:border-[var(--brand)] transition-colors"
      >
        <span className="truncate">
          {label && <span className="text-[var(--text-muted)]">{label}: </span>}
          <span className="text-[var(--text-primary)] font-semibold">
            {selected?.label}
          </span>
        </span>
        <ChevronDown
          size={16}
          className={`shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="absolute left-0 mt-2 w-full min-w-[220px] rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xl overflow-hidden z-30 py-2 max-h-72 overflow-y-auto"
          >
            {options.map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => {
                  onChange(opt.key);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between gap-2 text-left text-sm px-4 py-2.5 transition-colors ${
                  opt.key === value
                    ? "text-[var(--brand-text)] font-semibold bg-[var(--brand-ring)]"
                    : "text-[var(--text-secondary)] hover:bg-[var(--surface-alt)]"
                }`}
              >
                {opt.label}
                {opt.key === value && <Check size={15} />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
