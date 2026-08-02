import { useState } from "react";
import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import { FocusRail } from "./ui/focus-rail";
import ProkerModal from "./ProkerModal";
import { departemenList } from "../data/organisasi";
import {
  HeartHandshake,
  Megaphone,
  Network,
  Settings,
  Store,
  Trophy,
  Users,
} from "lucide-react";

// Icon + deskripsi + palet warna shader tiap departemen.
// Di-mapping ke data proker lewat `slug` yang sama dengan slug di src/data/organisasi.js.
const departmentsMeta = [
  {
    slug: "pao",
    name: "PAO",
    icon: Settings,
    desc: "Departemen PAO bertanggung jawab dalam pengembangan aparatur organisasi, kaderisasi, peningkatan kapasitas pengurus, serta menjaga tata kelola organisasi agar berjalan efektif dan terarah.",
    colors: ["#4c1d95", "#a21caf", "#7e22ce"],
  },
  {
    slug: "internal",
    name: "Internal",
    icon: Users,
    desc: "Departemen Internal berperan menjaga keharmonisan pengurus dan anggota, menguatkan komunikasi internal, serta menciptakan lingkungan organisasi yang solid, nyaman, dan produktif.",
    colors: ["#78350f", "#d97706", "#92400e"],
  },
  {
    slug: "eksternal",
    name: "Eksternal",
    icon: Network,
    desc: "Departemen Eksternal bertanggung jawab membangun relasi, kolaborasi, dan komunikasi dengan pihak luar organisasi untuk memperluas jaringan serta peluang kerja sama HMPS.",
    colors: ["#0f766e", "#059669", "#134e4a"],
  },
  {
    slug: "kominfo",
    name: "Kominfo",
    icon: Megaphone,
    desc: "Departemen Kominfo mengelola arus informasi, publikasi, dokumentasi, dan media organisasi agar setiap program kerja dapat tersampaikan secara informatif, kreatif, dan tepat sasaran.",
    colors: ["#1e3a8a", "#3730a3", "#1e1b4b"],
  },
  {
    slug: "mikat",
    name: "Minat & Bakat",
    icon: Trophy,
    desc: "Departemen Minat & Bakat menjadi wadah pengembangan potensi mahasiswa di bidang akademik maupun non-akademik melalui program yang mendukung kreativitas, prestasi, dan aktualisasi diri.",
    colors: ["#052e16", "#166534", "#14532d"],
  },
  {
    slug: "pp",
    name: "Pemberdayaan Perempuan",
    icon: HeartHandshake,
    desc: "Departemen Pemberdayaan Perempuan berfokus pada penguatan peran, ruang aman, edukasi, dan advokasi bagi mahasiswi agar dapat berkembang aktif dalam lingkungan kampus dan organisasi.",
    colors: ["#831843", "#be185d", "#500724"],
  },
  {
    slug: "ekraf",
    name: "Ekonomi Kreatif",
    icon: Store,
    desc: "Departemen Ekonomi Kreatif bertanggung jawab mengembangkan ide kewirausahaan, pengelolaan usaha kreatif, serta peluang pendanaan mandiri untuk mendukung keberlanjutan program organisasi.",
    colors: ["#450a0a", "#991b1b", "#7f1d1d"],
  },
];

// Gabungkan meta (icon, deskripsi, warna, foto) dengan data proker dari src/data/organisasi.js
const departmentItems = departmentsMeta.map((meta) => {
  const data = departemenList.find((d) => d.slug === meta.slug);
  return {
    id: meta.slug,
    slug: meta.slug,
    title: meta.name,
    icon: meta.icon,
    description: meta.desc,
    meta: `Departemen · ${meta.name}`,
    colors: meta.colors,
    imageSrc: `/departemen/${meta.slug}.jpg`,
    proker: data?.proker ?? [],
  };
});

export default function Culture() {
  const [active, setActive] = useState(null);

  return (
    <section className="container-hmps pb-24">
      <Reveal>
        <Eyebrow>DEPARTEMEN HMPS INFORMATIKA</Eyebrow>
        <h1 className="font-display font-extrabold text-4xl md:text-5xl mt-5 mb-4 text-[var(--text-primary)] max-w-2xl">
          Tugas dan <span className="text-[var(--brand-text)]">Fungsi</span> Setiap Departemen
        </h1>
        <p className="text-[var(--text-secondary)] max-w-lg mb-14">
          Kenali peran masing-masing departemen di HMPS Informatika, lengkap
          dengan program kerja yang sedang dan akan berjalan.
        </p>
      </Reveal>

      <FocusRail items={departmentItems} onExplore={(item) => setActive(item)} />

      <ProkerModal department={active} onClose={() => setActive(null)} />
    </section>
  );
}
