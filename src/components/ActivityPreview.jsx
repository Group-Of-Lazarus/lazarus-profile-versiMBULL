import { useState } from "react";
import { Link } from "react-router-dom";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import ActivityCard from "./ActivityCard";
import { aktivitasList, filterStatus } from "../data/aktivitas";

export default function ActivityPreview() {
  const [active, setActive] = useState("semua");

  const filtered =
    active === "semua"
      ? aktivitasList
      : aktivitasList.filter((a) => a.status === active);

  return (
    <section className="bg-slate-50 py-24 md:py-28">
      <div className="container-hmps">
        <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Eyebrow>AGENDA TERBARU</Eyebrow>
            <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-5 mb-4 text-slate-900">
              Aktivitas <span className="text-blue-600">Terbaru</span>
            </h2>
            <p className="text-slate-600 max-w-lg">
              Ikuti berbagai kegiatan menarik kami. Gunakan filter atau cari
              aktivitas spesifik yang ingin kamu ikuti.
            </p>
          </div>
          <Link
            to="/aktivitas"
            className="shrink-0 inline-flex items-center justify-center bg-slate-900 hover:bg-blue-600 transition-colors text-white text-sm font-semibold px-6 py-3 rounded-full"
          >
            Lihat Semua
          </Link>
        </Reveal>

        <Reveal delay={0.1} className="flex items-center gap-2 flex-wrap mb-10">
          {filterStatus.map((f) => (
            <button
              key={f.key}
              onClick={() => setActive(f.key)}
              className={`text-sm font-medium px-5 py-2.5 rounded-full border transition-colors ${
                active === f.key
                  ? "bg-blue-600 border-blue-600 text-white"
                  : "bg-white border-slate-200 text-slate-600 hover:border-blue-300"
              }`}
            >
              {f.label}
            </button>
          ))}
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.1}>
              <ActivityCard item={item} />
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <p className="text-slate-500 col-span-full text-center py-12">
              Belum ada aktivitas untuk kategori ini.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
