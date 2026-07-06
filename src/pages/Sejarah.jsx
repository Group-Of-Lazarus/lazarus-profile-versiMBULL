import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";

const timeline = [
  { tahun: "2015", title: "Berdirinya HMPS INF", desc: "Program Studi Informatika UINSMHB resmi membentuk himpunan mahasiswa sebagai wadah aspirasi dan pengembangan diri." },
  { tahun: "2019", title: "Ekspansi Kegiatan", desc: "HMPSINF mulai rutin menggelar seminar, workshop, dan kompetisi teknologi tingkat kampus." },
  { tahun: "2023", title: "Kolaborasi Eksternal", desc: "Menjalin kerja sama dengan komunitas dan industri teknologi untuk memperluas jaringan mahasiswa." },
  { tahun: "2026", title: "HMPSINF Hari Ini", desc: "Terus bertransformasi menjadi wadah yang adaptif, kreatif, dan relevan dengan kebutuhan mahasiswa Informatika." },
];

export default function Sejarah() {
  return (
    <div className="pt-40 pb-24">
      <div className="container-hmps">
        <Reveal>
          <Eyebrow>PERJALANAN KAMI</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mt-5 mb-4 text-slate-900">
            Sejarah <span className="text-blue-600">HMPS INF</span>
          </h1>
          <p className="text-slate-600 max-w-lg mb-14">
            Jejak langkah HMPS INF dari masa ke masa dalam membangun ekosistem
            mahasiswa Informatika yang berdaya.
          </p>
        </Reveal>

        <div className="relative pl-8 border-l-2 border-slate-100 space-y-12 max-w-2xl">
          {timeline.map((t, i) => (
            <Reveal key={t.tahun} delay={i * 0.1} className="relative">
              <span className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-blue-600 border-4 border-white ring-1 ring-slate-100" />
              <p className="text-blue-600 font-bold text-sm mb-1">{t.tahun}</p>
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">{t.title}</h3>
              <p className="text-slate-600 leading-relaxed">{t.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
