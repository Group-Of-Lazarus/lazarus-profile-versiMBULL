import { useState } from "react";
import { AlertCircle } from "lucide-react";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import PageHero from "../components/PageHero";
import BeasiswaCard from "../components/BeasiswaCard";
import Dropdown from "../components/ui/dropdown";
import { beasiswaList, kategoriBeasiswa } from "../data/beasiswa";

export default function Beasiswa() {
  const [kategori, setKategori] = useState("semua");

  const filtered = beasiswaList.filter((b) => kategori === "semua" || b.tipe === kategori);

  return (
    <div className="pb-24 bg-pattern-grid">
      <Seo
        title="Beasiswa"
        path="/beasiswa"
        description="Kumpulan informasi beasiswa pemerintah, perbankan, swasta, hingga pelatihan teknologi yang relevan buat mahasiswa Informatika UINSMHB."
      />
      <PageHero
        title="Beasiswa untuk"
        highlight="Mahasiswa Informatika"
        subtitle="Kumpulan informasi beasiswa dari pemerintah, perbankan, swasta, hingga pelatihan teknologi — biar kuliahmu makin ringan dan skill makin terasah."
        image="/PageHero-hmps.jpg"
      />

      <div className="container-hmps pt-14">
        <Reveal className="flex flex-col md:flex-row md:items-center gap-3 mb-10">
          <Dropdown label="Kategori" options={kategoriBeasiswa} value={kategori} onChange={setKategori} />
          <p className="text-sm text-[var(--text-muted)] md:ml-auto pl-3 md:pl-0 border-l-2 md:border-0 border-[var(--brand)]">
            Ditemukan <span className="font-semibold text-[var(--text-primary)]">{filtered.length}</span> program beasiswa
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {filtered.map((item, i) => (
            <Reveal key={item.slug} delay={(i % 6) * 0.06}>
              <BeasiswaCard item={item} />
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <p className="text-[var(--text-muted)] col-span-full text-center py-16">
              Belum ada beasiswa di kategori ini.
            </p>
          )}
        </div>

        <Reveal>
          <div className="flex items-start gap-3 bg-amber-50 border border-amber-100 rounded-2xl px-5 py-4 max-w-3xl">
            <AlertCircle size={18} className="text-amber-600 shrink-0 mt-0.5" />
            <p className="text-sm text-amber-800 leading-relaxed">
              Syarat, kuota, dan jadwal tiap beasiswa bisa berubah setiap tahun. Selalu cek ulang informasi
              terbaru langsung di website resmi penyelenggara atau Bagian Kemahasiswaan kampus sebelum mendaftar.
            </p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}
