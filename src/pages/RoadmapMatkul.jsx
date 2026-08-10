import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookMarked, Check, GraduationCap, Layers3 } from "lucide-react";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import { roadmapMatkul, kategoriMatkul } from "../data/roadmap";

const totalSksProgram = roadmapMatkul.reduce(
  (sum, s) => sum + s.matkul.reduce((ssum, m) => ssum + m.sks, 0),
  0
);

export default function RoadmapMatkul() {
  const [active, setActive] = useState(1);
  const activeData = roadmapMatkul.find((s) => s.semester === active);

  const sksSemesterAktif = activeData.matkul.reduce((sum, m) => sum + m.sks, 0);
  const sksKumulatif = roadmapMatkul
    .filter((s) => s.semester <= active)
    .reduce((sum, s) => sum + s.matkul.reduce((ssum, m) => ssum + m.sks, 0), 0);

  return (
    <div className="pt-40 pb-24 bg-pattern-grid">
      <Seo
        title="Roadmap Matkul"
        path="/roadmap-matkul"
        description="Roadmap mata kuliah Program Studi Informatika UINSMHB dari semester 1 sampai 8, lengkap dengan total SKS tiap semester."
      />
      <div className="container-hmps">
        <Reveal>
          <Eyebrow>PERJALANAN AKADEMIK</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mt-5 mb-4 text-[var(--text-primary)]">
            Roadmap <span className="text-[var(--brand-text)]">Mata Kuliah</span>
          </h1>
          <p className="text-[var(--text-secondary)] max-w-xl mb-4">
            Gambaran jalur perkuliahan Program Studi Informatika dari semester 1 sampai 8 — total{" "}
            <span className="font-semibold text-[var(--text-primary)]">{totalSksProgram} SKS</span> sampai lulus.
          </p>
          <p className="text-xs text-[var(--text-faint)] max-w-xl mb-14">
            Susunan matkul di halaman ini adalah referensi umum, bisa berbeda dengan kurikulum resmi yang
            berlaku — cek buku panduan akademik prodi untuk detail final.
          </p>
        </Reveal>

        {/* Stepper horizontal — 8 node semester */}
        <Reveal delay={0.1}>
          <div className="relative mb-4 overflow-x-auto pb-2">
            <div className="flex items-center min-w-[640px] md:min-w-0">
              {roadmapMatkul.map((s, i) => {
                const isActive = s.semester === active;
                const isPassed = s.semester < active;
                return (
                  <div key={s.semester} className="flex items-center flex-1 last:flex-none">
                    <button
                      type="button"
                      onClick={() => setActive(s.semester)}
                      className="flex flex-col items-center gap-2 shrink-0 group"
                    >
                      <span
                        className={`w-11 h-11 rounded-full grid place-items-center font-display font-bold text-sm border-2 transition-colors ${
                          isActive
                            ? "bg-[var(--brand)] border-[var(--brand)] text-white"
                            : isPassed
                              ? "bg-[var(--brand-soft)] border-[var(--brand)]/40 text-[var(--brand-text)]"
                              : "bg-[var(--surface)] border-[var(--border)] text-[var(--text-faint)] group-hover:border-[var(--brand)]"
                        }`}
                      >
                        {isPassed ? <Check size={18} /> : s.semester}
                      </span>
                      <span
                        className={`text-[11px] font-semibold uppercase tracking-wide ${
                          isActive ? "text-[var(--brand-text)]" : "text-[var(--text-faint)]"
                        }`}
                      >
                        SMT {s.semester}
                      </span>
                    </button>
                    {i < roadmapMatkul.length - 1 && (
                      <span
                        className={`h-0.5 flex-1 mx-1 md:mx-2 rounded-full transition-colors ${
                          isPassed ? "bg-[var(--brand)]/50" : "bg-[var(--border)]"
                        }`}
                      />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Konten semester aktif */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-3xl shadow-sm p-6 md:p-10 mb-8"
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[var(--border-subtle)]">
              <div className="flex items-center gap-4">
                <span className="w-12 h-12 rounded-2xl bg-[var(--brand-soft)] text-[var(--brand-text)] grid place-items-center shrink-0">
                  <GraduationCap size={22} />
                </span>
                <div>
                  <h2 className="font-display font-bold text-xl text-[var(--text-primary)] leading-tight">
                    Semester {activeData.semester}
                  </h2>
                  <p className="text-sm text-[var(--text-muted)] max-w-md">{activeData.fokus}</p>
                </div>
              </div>
              <div className="flex gap-3 shrink-0">
                <div className="bg-[var(--surface-alt)] rounded-2xl px-4 py-2.5 text-center">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--text-faint)]">SKS Semester</p>
                  <p className="font-display font-bold text-lg text-[var(--text-primary)]">{sksSemesterAktif}</p>
                </div>
                <div className="bg-[var(--brand-soft)] rounded-2xl px-4 py-2.5 text-center">
                  <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--brand-text)]">Kumulatif</p>
                  <p className="font-display font-bold text-lg text-[var(--brand-text)]">{sksKumulatif}</p>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {activeData.matkul.map((m, i) => {
                const meta = kategoriMatkul[m.kategori];
                return (
                  <div
                    key={m.nama + i}
                    className="flex items-center justify-between gap-3 bg-[var(--surface-alt)] rounded-2xl px-5 py-4"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="w-8 h-8 rounded-lg bg-[var(--surface)] border border-[var(--border-subtle)] grid place-items-center shrink-0 text-[var(--text-faint)]">
                        <BookMarked size={14} />
                      </span>
                      <div className="min-w-0">
                        <p className="font-semibold text-sm text-[var(--text-primary)] leading-snug truncate">{m.nama}</p>
                        <span className={`inline-block mt-1 text-[10px] font-semibold uppercase tracking-wide px-2 py-0.5 rounded-full ${meta.className}`}>
                          {meta.label}
                        </span>
                      </div>
                    </div>
                    <span className="shrink-0 text-xs font-bold text-[var(--text-muted)] bg-[var(--surface)] border border-[var(--border-subtle)] w-9 h-9 rounded-full grid place-items-center">
                      {m.sks}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Legenda kategori */}
        <Reveal>
          <div className="flex items-center gap-2 mb-4">
            <Layers3 size={14} className="text-[var(--text-faint)]" />
            <p className="text-xs font-semibold tracking-wider text-[var(--text-faint)] uppercase">Kategori Mata Kuliah</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {Object.entries(kategoriMatkul).map(([key, meta]) => (
              <span key={key} className={`text-xs font-semibold px-3 py-1.5 rounded-full ${meta.className}`}>
                {meta.label}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
