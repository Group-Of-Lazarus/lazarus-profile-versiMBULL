import { useMemo, useState } from "react";
import { Users } from "lucide-react";
import Seo from "../../components/Seo";
import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import DosenCard from "../../components/DosenCard";
import Dropdown from "../../components/ui/dropdown";
import { dosenList } from "../../data/dosen";

export default function Dosen() {
  const [bidang, setBidang] = useState("semua");

  const bidangOptions = useMemo(() => {
    const unik = [...new Set(dosenList.map((d) => d.bidangKeahlian))];
    return [{ key: "semua", label: "Semua Bidang Keahlian" }, ...unik.map((b) => ({ key: b, label: b }))];
  }, []);

  const pimpinan = dosenList.filter((d) => d.jabatanStruktural);
  const dosenTetap = dosenList
    .filter((d) => !d.jabatanStruktural)
    .filter((d) => bidang === "semua" || d.bidangKeahlian === bidang);

  return (
    <div className="pb-24 bg-pattern-grid">
      <Seo
        title="Dosen"
        path="/layanan/dosen"
        description="Kenali dosen-dosen Program Studi Informatika UINSMHB, lengkap dengan bidang keahlian dan mata kuliah yang diampu."
      />
      <PageHero
        title="Dosen"
        highlight="Program Studi Informatika"
        subtitle="Tenaga pengajar yang membimbing perjalanan akademik mahasiswa Informatika, dari dasar pemrograman sampai riset lanjutan."
        image="/PageHero-hmps.jpg"
      />

      <div className="container-hmps pt-14">
        {pimpinan.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-6">
              <Users size={14} className="text-[var(--brand-text)]" />
              <p className="text-xs font-semibold tracking-wider text-[var(--text-muted)] uppercase">
                Pimpinan Program Studi
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {pimpinan.map((d, i) => (
                <Reveal key={d.email} delay={i * 0.1}>
                  <DosenCard dosen={d} featured />
                </Reveal>
              ))}
            </div>
          </div>
        )}

        <Reveal className="flex items-center gap-2 mb-2">
          <Users size={14} className="text-[var(--text-faint)]" />
          <p className="text-xs font-semibold tracking-wider text-[var(--text-faint)] uppercase">Dosen Tetap</p>
        </Reveal>

        <Reveal className="mb-8">
          <Dropdown label="Bidang" options={bidangOptions} value={bidang} onChange={setBidang} />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dosenTetap.map((d, i) => (
            <Reveal key={d.email} delay={(i % 6) * 0.06}>
              <DosenCard dosen={d} />
            </Reveal>
          ))}
          {dosenTetap.length === 0 && (
            <p className="text-[var(--text-muted)] col-span-full text-center py-16">
              Belum ada dosen di bidang keahlian ini.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
