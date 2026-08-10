import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Images, X } from "lucide-react";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import Seo from "../components/Seo";
import Dropdown from "../components/ui/dropdown";
import { galeriAlbums } from "../data/galeri";
import { departemenList } from "../data/organisasi";

const deptOptions = [
  { key: "semua", label: "Semua Departemen" },
  ...departemenList.map((d) => ({ key: d.slug, label: d.nama })),
];

function fmtTanggal(s) {
  return new Date(s).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" });
}

export default function Galeri() {
  const [deptFilter, setDeptFilter] = useState("semua");
  const [activeAlbum, setActiveAlbum] = useState(null);
  const [lightbox, setLightbox] = useState(null);

  const filtered = galeriAlbums.filter((a) => deptFilter === "semua" || a.departemen === deptFilter);

  return (
    <div className="pt-40 pb-24">
      <Seo
        title="Galeri"
        path="/galeri"
        description="Dokumentasi momen-momen terbaik dari berbagai kegiatan HMPS Informatika UINSMHB, dikelompokkan per kegiatan."
      />
      <div className="container-hmps">
        <Reveal>
          <Eyebrow>DOKUMENTASI</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mt-5 mb-4 text-[var(--text-primary)]">
            Galeri <span className="text-[var(--brand-text)]">Kegiatan</span>
          </h1>
          <p className="text-[var(--text-secondary)] max-w-lg mb-10">
            Momen-momen terbaik dari berbagai kegiatan yang telah HMPS INF selenggarakan, dikelompokkan per album.
          </p>
        </Reveal>

        <AnimatePresence mode="wait">
          {!activeAlbum ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Reveal className="mb-8">
                <Dropdown label="Departemen" options={deptOptions} value={deptFilter} onChange={setDeptFilter} />
              </Reveal>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((album, i) => (
                  <Reveal key={album.slug} delay={(i % 6) * 0.07}>
                    <button
                      type="button"
                      onClick={() => setActiveAlbum(album)}
                      className="group block w-full text-left bg-[var(--surface)] rounded-3xl overflow-hidden border border-[var(--border-subtle)] hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-alt)]">
                        <img
                          src={album.cover}
                          alt={album.judul}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
                        <span className="absolute top-3 right-3 inline-flex items-center gap-1.5 text-[10px] font-semibold text-white bg-slate-900/60 backdrop-blur px-2.5 py-1 rounded-full">
                          <Images size={11} />
                          {album.foto.length} foto
                        </span>
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <h3 className="font-display font-bold text-lg text-white leading-snug">{album.judul}</h3>
                          <p className="text-xs text-white/70 mt-1">{fmtTanggal(album.tanggal)}</p>
                        </div>
                      </div>
                    </button>
                  </Reveal>
                ))}
                {filtered.length === 0 && (
                  <p className="text-[var(--text-muted)] col-span-full text-center py-16">
                    Belum ada album dokumentasi untuk departemen ini.
                  </p>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="detail"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                type="button"
                onClick={() => setActiveAlbum(null)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--brand-text)] transition-colors mb-6"
              >
                <ChevronLeft size={16} />
                Kembali ke semua album
              </button>

              <div className="mb-8">
                <h2 className="font-display font-extrabold text-2xl md:text-3xl text-[var(--text-primary)] mb-2">
                  {activeAlbum.judul}
                </h2>
                <p className="text-sm text-[var(--text-faint)] mb-3">{fmtTanggal(activeAlbum.tanggal)}</p>
                <p className="text-[var(--text-secondary)] max-w-2xl leading-relaxed">{activeAlbum.deskripsi}</p>
              </div>

              <div className="columns-2 md:columns-3 gap-4 space-y-4">
                {activeAlbum.foto.map((f, i) => (
                  <Reveal key={f.src + i} delay={(i % 4) * 0.06}>
                    <button
                      onClick={() => setLightbox(f)}
                      className="w-full block break-inside-avoid rounded-2xl overflow-hidden group relative"
                    >
                      <img
                        src={f.src}
                        alt={f.caption}
                        className="w-full h-auto group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/30 transition-colors flex items-end p-4 opacity-0 group-hover:opacity-100">
                        <p className="text-white text-xs font-medium text-left">{f.caption}</p>
                      </div>
                    </button>
                  </Reveal>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-slate-900/85 backdrop-blur-sm z-[100] flex items-center justify-center p-6"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              className="bg-[var(--surface)] rounded-2xl overflow-hidden max-w-2xl w-full max-h-[85vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              <img src={lightbox.src} alt={lightbox.caption} className="w-full h-auto object-contain max-h-[70vh]" />
              <div className="p-5 flex items-center justify-between gap-4">
                <p className="text-sm font-medium text-[var(--text-secondary)]">{lightbox.caption}</p>
                <button
                  onClick={() => setLightbox(null)}
                  className="text-[var(--text-faint)] hover:text-[var(--text-secondary)] shrink-0"
                  aria-label="Tutup"
                >
                  <X size={18} />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
