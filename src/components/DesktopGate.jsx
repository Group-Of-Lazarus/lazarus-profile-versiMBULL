import { useEffect, useState } from "react";
import { Monitor } from "lucide-react";

// Breakpoint gate: di bawah 1024px (tablet & HP) bakal ke-block.
// Ganti angka ini kalau mau ubah batasnya.
const BREAKPOINT = "(min-width: 1024px)";

export default function DesktopGate({ children }) {
  const [isDesktop, setIsDesktop] = useState(() =>
    typeof window !== "undefined" ? window.matchMedia(BREAKPOINT).matches : true
  );

  useEffect(() => {
    const mql = window.matchMedia(BREAKPOINT);
    const handler = (e) => setIsDesktop(e.matches);
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, []);

  if (!isDesktop) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--page)] px-6 text-center">
        <div className="max-w-sm">
          <div className="w-16 h-16 rounded-2xl bg-[var(--brand-soft)] text-[var(--brand-text)] grid place-items-center mx-auto mb-6">
            <Monitor size={28} />
          </div>
          <h1 className="font-display font-bold text-xl text-[var(--text-primary)] mb-3">
            Buka di Desktop atau Laptop
          </h1>
          <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6">
            Tampilan untuk HP dan tablet masih dalam proses pengembangan.
            Untuk sekarang, silakan akses website ini lewat komputer atau
            laptop ya!
          </p>
          <p className="text-xs text-[var(--text-faint)]">
            HMPS Informatika — Kabinet Lazarus
          </p>
        </div>
      </div>
    );
  }

  return children;
}
