import Reveal from "./Reveal";
import { HoverEffect } from "./ui/card-hover-effect";
import { departemenList } from "../data/organisasi";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
import {
  HeartHandshake,
  Megaphone,
  Network,
  Settings,
  Store,
  Trophy,
  Users,
} from "lucide-react";

// Icon + deskripsi singkat tiap departemen. Di-mapping ke data proker
// lewat `slug` yang sama dengan slug di src/data/organisasi.js.
const departmentsMeta = [
  {
    slug: "pao",
    name: "PAO",
    icon: Settings,
    desc: "Departemen PAO bertanggung jawab dalam pengembangan aparatur organisasi, kaderisasi, peningkatan kapasitas pengurus, serta menjaga tata kelola organisasi agar berjalan efektif dan terarah.",
  },
  {
    slug: "internal",
    name: "Internal",
    icon: Users,
    desc: "Departemen Internal berperan menjaga keharmonisan pengurus dan anggota, menguatkan komunikasi internal, serta menciptakan lingkungan organisasi yang solid, nyaman, dan produktif.",
  },
  {
    slug: "eksternal",
    name: "Eksternal",
    icon: Network,
    desc: "Departemen Eksternal bertanggung jawab membangun relasi, kolaborasi, dan komunikasi dengan pihak luar organisasi untuk memperluas jaringan serta peluang kerja sama HMPS.",
  },
  {
    slug: "kominfo",
    name: "Kominfo",
    icon: Megaphone,
    desc: "Departemen Kominfo mengelola arus informasi, publikasi, dokumentasi, dan media organisasi agar setiap program kerja dapat tersampaikan secara informatif, kreatif, dan tepat sasaran.",
  },
  {
    slug: "mikat",
    name: "Minat & Bakat",
    icon: Trophy,
    desc: "Departemen Minat & Bakat menjadi wadah pengembangan potensi mahasiswa di bidang akademik maupun non-akademik melalui program yang mendukung kreativitas, prestasi, dan aktualisasi diri.",
  },
  {
    slug: "pemberdayaan-perempuan",
    name: "Pemberdayaan Perempuan",
    icon: HeartHandshake,
    desc: "Departemen Pemberdayaan Perempuan berfokus pada penguatan peran, ruang aman, edukasi, dan advokasi bagi mahasiswi agar dapat berkembang aktif dalam lingkungan kampus dan organisasi.",
  },
  {
    slug: "ekraf",
    name: "Ekonomi Kreatif",
    icon: Store,
    desc: "Departemen Ekonomi Kreatif bertanggung jawab mengembangkan ide kewirausahaan, pengelolaan usaha kreatif, serta peluang pendanaan mandiri untuk mendukung keberlanjutan program organisasi.",
  },
];

// Gabungkan meta (icon, deskripsi) dengan data proker dari src/data/organisasi.js
const departmentItems = departmentsMeta.map((meta) => {
  const data = departemenList.find((d) => d.slug === meta.slug);
  return {
    slug: meta.slug,
    title: meta.name,
    icon: meta.icon,
    description: meta.desc,
    proker: data?.proker ?? [],
  };
});

const typewriterWords = [
  { text: "Tugas" },
  { text: "dan" },
  { text: "Fungsi" },
  { text: "Departemen" },
  { text: "HMPS", className: "text-[var(--brand-text)]" },
  { text: "Informatika", className: "text-[var(--brand-text)]" },
];

export default function Culture() {
  return (
    <section className="container-hmps pt-8 pb-24 md:pt-10 md:pb-28">
      <Reveal>
        <div className="text-center max-w-4xl mx-auto mb-4 md:mb-6">
          <p className="font-display font-bold text-lg text-[var(--text-primary)] mb-3">
            Departemen HMPS Informatika
          </p>
          <div className="flex justify-center">
  <TypewriterEffectSmooth words={typewriterWords} />
</div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <HoverEffect items={departmentItems} className="max-w-6xl mx-auto" />
      </Reveal>

      <Reveal delay={0.56}>
        <p className="text-center text-sm text-[var(--text-muted)] mt-10">
          Ngahiji, Ngajaga Informatika.
        </p>
      </Reveal>
    </section>
  );
}
