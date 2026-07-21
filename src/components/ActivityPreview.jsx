import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import ActivityCard from "./ActivityCard";
import Dropdown from "./ui/dropdown";
import { aktivitasList, filterStatus } from "../data/aktivitas";
import { departemenList } from "../data/organisasi";

const deptOptions = [
  { key: "semua", label: "Semua Departemen" },
  ...departemenList.map((d) => ({ key: d.slug, label: d.nama })),
];

export default function ActivityPreview() {
  const [statusFilter, setStatusFilter] = useState("semua");
  const [deptFilter, setDeptFilter] = useState("semua");

  const filtered = aktivitasList.filter((a) => {
    const matchStatus = statusFilter === "semua" || a.status === statusFilter;
    const matchDept = deptFilter === "semua" || a.departemen === deptFilter;
    return matchStatus && matchDept;
  });

  const selectedDeptLabel =
    deptFilter !== "semua"
      ? departemenList.find((d) => d.slug === deptFilter)?.nama
      : null;

  return (
    <section className="bg-[var(--surface-alt)] py-24 md:py-28">
      <div className="container-hmps">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Eyebrow>AGENDA TERBARU</Eyebrow>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-5 mb-4 text-[var(--text-primary)]">
              Aktivitas <span className="text-[var(--brand-text)]">Terbaru</span>
            </h2>
            <p className="text-[var(--text-secondary)] max-w-lg">
              Ikuti berbagai kegiatan menarik kami. Gunakan filter atau cari
              aktivitas spesifik yang ingin kamu ikuti.
            </p>
          </div>
          <Link
            to="/aktivitas"
            className="shrink-0 inline-flex items-center justify-center bg-[var(--brand)] hover:bg-[var(--brand-hover)] transition-colors text-white text-sm font-semibold px-6 py-3 rounded-full"
          >
            Lihat Semua
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="flex items-center gap-3 flex-wrap mb-10">
          <Dropdown
            label="Status"
            options={filterStatus}
            value={statusFilter}
            onChange={setStatusFilter}
          />
          <Dropdown
            label="Proker"
            options={deptOptions}
            value={deptFilter}
            onChange={setDeptFilter}
          />
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.1}>
              <ActivityCard item={item} />
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <p className="text-[var(--text-muted)] col-span-full text-center py-12">
              {selectedDeptLabel
                ? `Departemen ${selectedDeptLabel} belum memiliki proker di aktivitas ini.`
                : "Belum ada aktivitas untuk kategori ini."}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
