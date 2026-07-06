import { useState } from "react";
import { Search } from "lucide-react";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import ActivityCard from "../components/ActivityCard";
import { aktivitasList, filterStatus } from "../data/aktivitas";

export default function Aktivitas() {
  const [active, setActive] = useState("semua");
  const [query, setQuery] = useState("");

  const filtered = aktivitasList.filter((a) => {
    const matchStatus = active === "semua" || a.status === active;
    const matchQuery = a.judul.toLowerCase().includes(query.toLowerCase());
    return matchStatus && matchQuery;
  });

  return (
    <div className="pt-40 pb-24">
      <div className="container-hmps">
        <Reveal>
          <Eyebrow>AGENDA TERBARU</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mt-5 mb-4 text-slate-900">
            Aktivitas <span className="text-blue-600">Terbaru</span>
          </h1>
          <p className="text-slate-600 max-w-lg mb-10">
            Ikuti berbagai kegiatan menarik kami. Gunakan filter atau cari
            aktivitas spesifik yang ingin kamu ikuti.
          </p>
        </Reveal>

        <Reveal
          delay={0.1}
          className="flex flex-col md:flex-row md:items-center gap-4 mb-10"
        >
          <div className="flex items-center gap-2 flex-wrap flex-1">
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
          </div>

          <div className="relative w-full md:w-72">
            <Search
              size={16}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari aktivitas..."
              className="w-full text-sm bg-white border border-slate-200 rounded-full pl-10 pr-4 py-2.5 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
            />
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.08}>
              <ActivityCard item={item} />
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <p className="text-slate-500 col-span-full text-center py-16">
              Tidak ada aktivitas yang cocok dengan pencarianmu.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
