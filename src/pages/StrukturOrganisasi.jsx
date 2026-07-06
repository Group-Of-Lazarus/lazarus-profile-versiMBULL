import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Users, Building2 } from "lucide-react";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import TeamCard from "../components/TeamCard";
import { bph, departemenList } from "../data/organisasi";

export default function StrukturOrganisasi() {
  const [tab, setTab] = useState(departemenList[0].slug);
  const active = departemenList.find((d) => d.slug === tab);

  return (
    <div className="pt-40 pb-24">
      <div className="container-hmps">
        <Reveal>
          <Eyebrow>MASA KHIDMAT 2026</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mt-5 mb-4 text-slate-900">
            Struktur <span className="text-blue-600">Organisasi</span>
          </h1>
          <p className="text-slate-600 max-w-lg mb-14">
            Sinergi dalam harmoni — HMPS Informatika yang adaptif dan kreatif.
          </p>
        </Reveal>

        {/* Badan Pengurus Harian — layout tree/org-chart */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-10">
            <Star size={16} className="text-blue-600" />
            <h2 className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
              Badan Pengurus Harian
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* Ketua — tengah atas */}
            <div className="flex justify-center">
              <div className="w-48">
                <Reveal once={false}>
                  <TeamCard {...bph.ketua} jabatan="Ketua Umum" />
                </Reveal>
              </div>
            </div>

            {/* Connector lines — desktop only */}
            <div className="hidden md:block relative h-12">
              <div className="absolute left-1/2 top-0 w-px h-6 bg-slate-300 -translate-x-1/2" />
              <div className="absolute left-[22%] right-[22%] top-6 h-px bg-slate-300" />
              <div className="absolute left-[22%] top-6 w-px h-6 bg-slate-300" />
              <div className="absolute right-[22%] top-6 w-px h-6 bg-slate-300" />
            </div>
            {/* Mobile spacer */}
            <div className="h-8 md:hidden" />

            {/* Sekretaris & Bendahara — menyebar kiri-kanan */}
            <div className="flex flex-col md:flex-row md:justify-between items-center md:items-start gap-8 md:gap-0">
              <div className="w-48">
                <Reveal once={false} delay={0.1}>
                  <TeamCard {...bph.sekretaris} jabatan="Sekretaris Umum" />
                </Reveal>
              </div>
              <div className="w-48">
                <Reveal once={false} delay={0.2}>
                  <TeamCard {...bph.bendahara} jabatan="Bendahara Umum" />
                </Reveal>
              </div>
            </div>
          </div>
        </div>

        {/* Departemen */}
        <Reveal once={false}>
          <div className="flex items-center gap-2 mb-5">
            <Building2 size={16} className="text-blue-600" />
            <h2 className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
              Departemen
            </h2>
          </div>

          <div className="flex items-center gap-2 flex-wrap mb-8">
            {departemenList.map((d) => (
              <button
                key={d.slug}
                onClick={() => setTab(d.slug)}
                className={`text-sm font-medium px-5 py-2.5 rounded-full transition-colors ${
                  tab === d.slug
                    ? "bg-slate-900 text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300"
                }`}
              >
                {d.nama}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm text-slate-500 mb-6">{active.namaLengkap}</p>

              {/* Kepala + Sekretaris Departemen, sejajar */}
              <div className="grid sm:grid-cols-2 gap-5 max-w-xl mb-10">
                <Reveal once={false}>
                  <TeamCard {...active.ketua} jabatan="Kepala Departemen" />
                </Reveal>
                <Reveal once={false} delay={0.1}>
                  <TeamCard {...active.sekretaris} jabatan="Sekretaris Departemen" />
                </Reveal>
              </div>

              {/* Anggota */}
              <div className="flex items-center gap-2 mb-4">
                <Users size={14} className="text-slate-400" />
                <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase">
                  Anggota
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {active.anggota.map((a, i) => (
                  <Reveal key={a.nim} once={false} delay={(i % 4) * 0.06}>
                    <TeamCard {...a} size="sm" />
                  </Reveal>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </div>
  );
}
