import { Mail } from "lucide-react";

function initials(nama) {
  return nama
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function DosenCard({ dosen, featured = false }) {
  const jabatan = dosen.jabatanStruktural || dosen.jabatanFungsional;

  return (
    <div
      className={`bg-[var(--surface)] border border-[var(--border-subtle)] rounded-3xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
        featured ? "md:flex md:items-stretch" : ""
      }`}
    >
      <div
        className={`bg-[var(--brand)] flex items-center justify-center shrink-0 ${
          featured ? "md:w-56 aspect-[4/3] md:aspect-auto" : "aspect-[4/3]"
        }`}
      >
        {dosen.foto ? (
          <img src={dosen.foto} alt={dosen.nama} className="w-full h-full object-cover" />
        ) : (
          <span className={`text-white font-display font-extrabold ${featured ? "text-5xl" : "text-4xl"}`}>
            {initials(dosen.nama)}
          </span>
        )}
      </div>

      <div className="p-6 flex-1">
        {jabatan && (
          <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-wide text-[var(--brand-text)] bg-[var(--brand-soft)] px-3 py-1 rounded-full mb-3">
            {jabatan}
          </span>
        )}

        <h3 className="font-display font-bold text-lg text-[var(--text-primary)] leading-snug">
          {dosen.nama}
          {dosen.gelar && <span className="font-medium text-[var(--text-muted)]">, {dosen.gelar}</span>}
        </h3>
        <p className="text-sm text-[var(--brand-text)] font-medium mt-1 mb-4">{dosen.bidangKeahlian}</p>

        {dosen.mataKuliah?.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mb-4">
            {dosen.mataKuliah.slice(0, 3).map((mk) => (
              <span
                key={mk}
                className="text-[11px] font-medium text-[var(--text-secondary)] bg-[var(--surface-alt)] border border-[var(--border-subtle)] px-2.5 py-1 rounded-full"
              >
                {mk}
              </span>
            ))}
            {dosen.mataKuliah.length > 3 && (
              <span className="text-[11px] font-medium text-[var(--text-faint)] px-1 py-1">
                +{dosen.mataKuliah.length - 3} lainnya
              </span>
            )}
          </div>
        )}

        {dosen.email && (
          <a
            href={`mailto:${dosen.email}`}
            className="inline-flex items-center gap-1.5 text-xs font-medium text-[var(--text-muted)] hover:text-[var(--brand-text)] transition-colors"
          >
            <Mail size={13} />
            {dosen.email}
          </a>
        )}
      </div>
    </div>
  );
}
