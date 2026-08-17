import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar } from "lucide-react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  useModal,
} from "./ui/animated-modal";

/**
 * Komponen inner yang mengontrol state open/close dari luar (programatik).
 * Harus berada di dalam ModalProvider agar bisa akses useModal().
 */
function ProkerModalInner({ department, onClose }) {
  const { open, setOpen } = useModal();

  // Simpan ref department terakhir yang valid agar useEffect penutupan
  // masih bisa memanggil onClose() meski department sudah di-null-kan
  const departmentRef = React.useRef(department);
  useEffect(() => {
    if (department) departmentRef.current = department;
  }, [department]);

  // Buka modal ketika department di-set dari luar
  useEffect(() => {
    if (department) {
      setOpen(true);
    }
  }, [department, setOpen]);

  // Sync ketika modal ditutup dari dalam (klik overlay / tombol ✕ bawaan)
  const prevOpenRef = React.useRef(open);
  useEffect(() => {
    if (prevOpenRef.current && !open && departmentRef.current) {
      onClose();
    }
    prevOpenRef.current = open;
  }, [open, onClose]);

  const proker = department?.proker ?? [];

  return (
    <ModalBody>
      <ModalContent className="overflow-y-auto">
        {/* Header: gambar siluet card departemen + overlay gelap */}
        <div
          className="relative -mx-8 -mt-8 md:-mx-10 md:-mt-10 mb-6 overflow-hidden"
          style={{ minHeight: "140px" }}
        >
          {/* Gambar latar dari card departemen */}
          {department?.imageSrc && (
            <img
              src={department.imageSrc}
              alt={department.title}
              className="absolute inset-0 w-full h-full object-cover object-center scale-105"
              style={{ filter: "blur(2px) brightness(0.45)" }}
            />
          )}
          {/* Overlay gradient bawah agar fade ke konten */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />

          {/* Konten teks di atas gambar */}
          <div className="relative z-10 px-8 pt-8 pb-6 md:px-10 md:pt-10">
            {department?.icon && (
              <department.icon
                size={28}
                className="mb-3 text-white/80"
                strokeWidth={1.75}
              />
            )}
            <p className="text-xs font-semibold uppercase tracking-widest text-white/60 mb-1">
              Program Kerja
            </p>
            <h4 className="text-2xl md:text-3xl font-extrabold text-white drop-shadow-md">
              {department?.title ?? "—"}
            </h4>
          </div>
        </div>

        {/* Gambar proker — maks 5, ukuran besar */}
        {proker.length > 0 && (
          <div className="flex justify-center items-center flex-wrap gap-3 mb-6">
            {proker.slice(0, 5).map((p, idx) => (
              <motion.div
                key={"proker-img-" + idx}
                style={{ rotate: Math.random() * 14 - 7 }}
                whileHover={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                whileTap={{ scale: 1.1, rotate: 0, zIndex: 100 }}
                className="rounded-xl p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 shrink-0 overflow-hidden"
              >
                {p.foto ? (
                  <img
                    src={p.foto}
                    alt={p.nama}
                    width="160"
                    height="160"
                    className="rounded-lg h-28 w-28 md:h-36 md:w-36 object-cover"
                  />
                ) : (
                  /* Placeholder netral dengan inisial nama proker */
                  <div className="rounded-lg h-28 w-28 md:h-36 md:w-36 flex items-center justify-center text-white text-sm font-bold text-center p-2 bg-slate-700">
                    {p.nama
                      .split(" ")
                      .slice(0, 2)
                      .map((w) => w[0])
                      .join("")}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        )}

        {/* List program kerja */}
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-neutral-400 dark:text-neutral-500 mb-3">
            Daftar Program Kerja
          </p>

          {proker.length > 0 ? (
            <ul className="space-y-2">
              {proker.map((p, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 rounded-xl bg-neutral-50 dark:bg-neutral-900 border border-neutral-100 dark:border-neutral-800 px-4 py-3"
                >
                  {/* Bullet titik kecil */}
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-slate-500" />
                  <div className="flex-1 min-w-0 flex items-center justify-between gap-3">
                    <p className="font-semibold text-sm text-neutral-800 dark:text-neutral-100 leading-snug">
                      {p.nama}
                    </p>
                    <span className="inline-flex items-center gap-1 shrink-0 text-xs text-neutral-500 dark:text-neutral-400">
                      <Calendar size={11} />
                      {p.tanggal}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-neutral-500 dark:text-neutral-400 italic">
              Belum ada program kerja yang ditambahkan untuk departemen ini.
            </p>
          )}
        </div>
      </ModalContent>

      <ModalFooter className="gap-3">
        <button
          onClick={() => setOpen(false)}
          className="px-4 py-2 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 rounded-lg text-sm font-medium hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
        >
          Tutup
        </button>
      </ModalFooter>
    </ModalBody>
  );
}

/**
 * ProkerModal — menggunakan Aceternity UI animated-modal.
 * Props:
 *   department: object departemen (dari Culture.jsx) atau null
 *   onClose: callback ketika modal ditutup
 */
export default function ProkerModal({ department, onClose }) {
  return (
    <Modal>
      <ProkerModalInner department={department} onClose={onClose} />
    </Modal>
  );
}
