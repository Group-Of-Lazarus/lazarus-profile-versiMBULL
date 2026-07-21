import { useEffect, useState } from "react";
import { motion } from "framer-motion";

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
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#3AB7EB] px-6 text-center overflow-hidden relative">
        {/* Dekorasi lingkaran blur di background, biar gak polos */}
        <div className="absolute -top-16 -left-16 w-56 h-56 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute -bottom-20 -right-10 w-72 h-72 rounded-full bg-white/10 blur-2xl pointer-events-none" />
        <div className="absolute top-1/3 right-4 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />

        <motion.img
          src="/maskot-kucing.png"
          alt="Maskot HMPS Informatika lagi kerja di laptop, jadi sabar yaaa"
          className="w-56 sm:w-64 md:w-72 drop-shadow-2xl relative z-10 select-none"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-sm mt-2 relative z-10"
        >
          <h1 className="font-display font-extrabold text-2xl text-white mb-3">
            Buka di Desktop atau Laptop, ya!
          </h1>
          <p className="text-white/90 text-sm leading-relaxed mb-6">
            Tampilan untuk HP dan tablet masih dalam proses pengembangan.
            Untuk sekarang, silakan akses website ini lewat komputer atau
            laptop dulu.
          </p>
          <p className="text-xs text-white/70 tracking-wide">
            HMPS Informatika — Kabinet Lazarus
          </p>
        </motion.div>
      </div>
    );
  }

  return children;
}
