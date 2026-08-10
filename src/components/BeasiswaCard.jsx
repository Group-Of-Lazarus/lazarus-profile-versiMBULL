import { Calendar, ExternalLink, Gift, Info, Landmark, Users } from "lucide-react";

// Meta tampilan per kategori (ikon + warna badge) — dipisah dari data mentah
// di src/data/beasiswa.js biar file data tetap "polos" dan gampang dipindah
// ke API/CMS asli suatu saat nanti (sama kayak pola departmentsMeta di Culture.jsx).
const tipeMeta = {
  pemerintah: { label: "Pemerintah", className: "bg-blue-50 text-blue-600" },
  perbankan: { label: "Perbankan / BUMN", className: "bg-emerald-50 text-emerald-600" },
  swasta: { label: "Swasta / Yayasan", className: "bg-amber-50 text-amber-600" },
  teknologi: { label: "Pelatihan & Teknologi", className: "bg-purple-50 text-purple-600" },
  sosial: { label: "Sosial-Keagamaan", className: "bg-rose-50 text-rose-600" },
  kampus: { label: "Internal Kampus", className: "bg-slate-100 text-slate-600" },
};

export default function BeasiswaCard({ item }) {
  const meta = tipeMeta[item.tipe] ?? tipeMeta.pemerintah;

  return (
    <div className="flex flex-col h-full bg-[var(--surface)] border border-[var(--border-subtle)] rounded-3xl p-6 md:p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start justify-between gap-3 mb-4">
        <span className={`inline-flex items-center text-[10px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full ${meta.className}`}>
          {meta.label}
        </span>
        <span className="w-10 h-10 rounded-xl bg-[var(--brand-soft)] text-[var(--brand-text)] grid place-items-center shrink-0">
          <Landmark size={18} />
        </span>
      </div>

      <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-1 leading-snug">
        {item.nama}
      </h3>
      <p className="text-xs font-medium text-[var(--text-faint)] mb-4">{item.penyelenggara}</p>

      <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-5">{item.deskripsi}</p>

      <div className="space-y-3 mb-5">
        <div className="flex items-start gap-2.5 text-sm">
          <Users size={15} className="text-[var(--brand-text)] shrink-0 mt-0.5" />
          <p className="text-[var(--text-secondary)] leading-relaxed">
            <span className="font-semibold text-[var(--text-primary)]">Untuk siapa: </span>
            {item.untukSiapa}
          </p>
        </div>
        <div className="flex items-start gap-2.5 text-sm">
          <Gift size={15} className="text-[var(--brand-text)] shrink-0 mt-0.5" />
          <p className="text-[var(--text-secondary)] leading-relaxed">
            <span className="font-semibold text-[var(--text-primary)]">Benefit: </span>
            {item.benefit}
          </p>
        </div>
        <div className="flex items-start gap-2.5 text-sm">
          <Calendar size={15} className="text-[var(--brand-text)] shrink-0 mt-0.5" />
          <p className="text-[var(--text-secondary)] leading-relaxed">
            <span className="font-semibold text-[var(--text-primary)]">Jadwal: </span>
            {item.jadwal}
          </p>
        </div>
      </div>

      {item.catatan && (
        <div className="flex items-start gap-2.5 text-xs bg-[var(--surface-alt)] rounded-xl px-4 py-3 mb-5">
          <Info size={14} className="text-[var(--text-faint)] shrink-0 mt-0.5" />
          <p className="text-[var(--text-muted)] leading-relaxed">{item.catatan}</p>
        </div>
      )}

      <div className="mt-auto pt-2">
        {item.link ? (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-text)] bg-[var(--brand-soft)] hover:bg-[var(--brand-ring)] px-4 py-2.5 rounded-full transition-colors"
          >
            Kunjungi Website Resmi
            <ExternalLink size={14} />
          </a>
        ) : (
          <p className="text-xs font-medium text-[var(--text-faint)]">
            Info & pendaftaran lewat Bagian Kemahasiswaan kampus.
          </p>
        )}
      </div>
    </div>
  );
}
