import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";

const culture = [
  {
    no: "01",
    emoji: "😎",
    id: "Santai Namun Tegas",
    en: "RELAXED YET FIRM",
    desc: "Membangun lingkungan kerja yang enjoy, namun tetap memegang teguh profesionalisme dan ketegasan dalam tanggung jawab.",
  },
  {
    no: "02",
    emoji: "📋",
    id: "Berlandaskan Aturan Jelas",
    en: "CLEAR GUIDELINES",
    desc: "Setiap langkah organisasi dipandu oleh aturan main yang terstruktur rapi, menjadi pondasi kuat untuk menghindari grey area dalam bekerja.",
  },
  {
    no: "03",
    emoji: "🤝",
    id: "Solidaritas yang Solutif",
    en: "BONDING FOR IMPACT",
    desc: "Kedekatan antar pengurus bukan cuma buat nongkrong, tapi jadi kunci kolaborasi efektif dan penyelesaian masalah internal yang cepat.",
  },
];

export default function Culture() {
  return (
    <section className="container-hmps py-24 md:py-28">
      <Reveal>
        <Eyebrow>BUDAYA ORGANISASI</Eyebrow>
        <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-5 mb-14 text-slate-900">
          Culture <span className="text-blue-600">Organisasi</span> Kami
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-3 gap-6">
        {culture.map((c, i) => (
          <Reveal key={c.no} delay={i * 0.12}>
            <div className="bg-white border border-slate-100 rounded-3xl p-8 h-full hover:shadow-lg hover:-translate-y-1 transition-all duration-300 relative">
              <span className="absolute top-6 right-7 text-4xl font-display font-extrabold text-slate-100">
                {c.no}
              </span>
              <div className="w-12 h-12 rounded-xl bg-blue-50 grid place-items-center text-2xl mb-6">
                {c.emoji}
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900 mb-1">
                {c.id}
              </h3>
              <p className="text-[11px] font-semibold tracking-wider text-blue-600 mb-4">
                {c.en}
              </p>
              <p className="text-sm text-slate-600 leading-relaxed">{c.desc}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
