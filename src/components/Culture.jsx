import Reveal from "./Reveal";
import {
  HeartHandshake,
  Megaphone,
  Network,
  Settings,
  Store,
  Trophy,
  Users,
} from "lucide-react";

const departments = [
  {
    name: "PAO",
    icon: Settings,
    desc: "Departemen PAO bertanggung jawab dalam pengembangan aparatur organisasi, kaderisasi, peningkatan kapasitas pengurus, serta menjaga tata kelola organisasi agar berjalan efektif dan terarah.",
  },
  {
    name: "Internal",
    icon: Users,
    desc: "Departemen Internal berperan menjaga keharmonisan pengurus dan anggota, menguatkan komunikasi internal, serta menciptakan lingkungan organisasi yang solid, nyaman, dan produktif.",
  },
  {
    name: "Eksternal",
    icon: Network,
    desc: "Departemen Eksternal bertanggung jawab membangun relasi, kolaborasi, dan komunikasi dengan pihak luar organisasi untuk memperluas jaringan serta peluang kerja sama HMPS.",
  },
  {
    name: "Kominfo",
    icon: Megaphone,
    desc: "Departemen Kominfo mengelola arus informasi, publikasi, dokumentasi, dan media organisasi agar setiap program kerja dapat tersampaikan secara informatif, kreatif, dan tepat sasaran.",
  },
  {
    name: "Minat & Bakat",
    icon: Trophy,
    desc: "Departemen Minat & Bakat menjadi wadah pengembangan potensi mahasiswa di bidang akademik maupun non-akademik melalui program yang mendukung kreativitas, prestasi, dan aktualisasi diri.",
  },
  {
    name: "Pemberdayaan Perempuan",
    icon: HeartHandshake,
    desc: "Departemen Pemberdayaan Perempuan berfokus pada penguatan peran, ruang aman, edukasi, dan advokasi bagi mahasiswi agar dapat berkembang aktif dalam lingkungan kampus dan organisasi.",
  },
  {
    name: "Ekonomi Kreatif",
    icon: Store,
    desc: "Departemen Ekonomi Kreatif bertanggung jawab mengembangkan ide kewirausahaan, pengelolaan usaha kreatif, serta peluang pendanaan mandiri untuk mendukung keberlanjutan program organisasi.",
  },
];

export default function Culture() {
  return (
    <section className="container-hmps py-24 md:py-28">
      <Reveal>
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <p className="font-display font-bold text-lg text-slate-900 mb-3">
            Departemen HMPS Informatika
          </p>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl leading-tight text-blue-600">
            Penjelasan Tugas dan Fungsi Setiap Departemen di HMPS Informatika
          </h2>
        </div>
      </Reveal>

      <div className="grid gap-x-16 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
        {departments.map((department, i) => (
          <Reveal key={department.name} delay={i * 0.08}>
            <article className="h-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-14 h-14 rounded-full bg-blue-600 text-white grid place-items-center shrink-0">
                  <department.icon size={27} strokeWidth={2.5} />
                </span>
                <h3 className="font-display font-extrabold text-2xl md:text-3xl text-slate-950">
                  {department.name}
                </h3>
              </div>
              <p className="text-base md:text-lg text-slate-800 leading-relaxed">
                {department.desc}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.56}>
        <p className="text-center text-sm text-slate-500 mt-16">
          Ngahiji, Ngajaga Informatika.
        </p>
      </Reveal>
    </section>
  );
}
