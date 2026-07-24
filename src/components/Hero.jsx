import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GraduationCap, Cpu, Users, Trophy, ArrowRight } from "lucide-react";
import BlurText from "./BlurText";
import MagneticButton from "./MagneticButton";
import PengurusCarousel from "./PengurusCarousel";
import Marquee from "./Marquee";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

const marqueeBadges = [
  { icon: GraduationCap, label: "Akademik" },
  { icon: Cpu, label: "Teknologi" },
  { icon: Users, label: "Organisasi" },
  { icon: Trophy, label: "Prestasi" },
];

export default function Hero() {
  return (
    <section className="relative bg-[var(--page)] bg-pattern-grid overflow-hidden pt-28 md:pt-32">
      {/* Glow lembut brand di kanan atas */}
      <div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] bg-[var(--brand-soft)] blur-[120px] rounded-full pointer-events-none" />

      <div className="container-hmps relative z-10 py-0 md:py-0 grid lg:grid-cols-2 gap-16 items-center">
        {/* Kolom kiri — teks */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-[var(--text-secondary)] bg-[var(--surface)] border border-[var(--border-subtle)] rounded-full px-4 py-2 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Himpunan Mahasiswa Program Studi Informatika
          </motion.div>

          <BlurText
            text="Bangun budaya digital yang solid & kreatif."
            delay={200}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="font-display font-extrabold text-[var(--text-primary)] leading-[1.05] text-4xl md:text-5xl lg:text-6xl tracking-tight"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="max-w-lg text-[var(--text-secondary)] text-base md:text-lg mt-6 mb-10"
          >
            Wadah resmi mahasiswa Informatika UIN Sultan Maulana Hasanuddin
            Banten untuk mengembangkan potensi, kompetensi akademik,
            kreativitas, integritas, dan aspirasi.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <MagneticButton
              as="a"
              href="/pendaftaran"
              className="inline-flex items-center gap-2 bg-[var(--brand)] hover:bg-[var(--brand-hover)] transition-colors text-white text-sm font-semibold px-6 py-3.5 rounded-full"
            >
              Lihat Kegiatan
            </MagneticButton>
          </motion.div>
        </div>

        {/* Kolom kanan — carousel foto pengurus per periode */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <PengurusCarousel />
        </motion.div>
      </div>

      {/* Marquee menyatu di dalam section Hero, bukan section terpisah */}
      <div className="container-hmps relative z-10 mt-8 md:mt-12 pb-16 md:pb-20">
        <Marquee
          duration={30}
          className="rounded-4xl bg-gradient-to-r from-blue-400 via-slate-400 to-[var(--brand)] shadow-lg"
        >
          <div className="flex items-center gap-8 pl-8 pr-3 py-3">
            <span className="inline-flex items-center gap-3 shrink-0">
              <span className="w-9 h-9 rounded-full bg-white grid place-items-center shrink-0 overflow-hidden">
                <img
                  src="/logo_hmps.png"
                  alt="Logo HMPS Informatika"
                  className="w-6 h-6 object-contain"
                />
              </span>
              <span className="text-white font-extrabold text-sm md:text-base uppercase tracking-wide whitespace-nowrap">
                HMPS Informatika
              </span>
            </span>

            <p className="text-white/90 text-sm md:text-base font-medium whitespace-nowrap">
              Wadah pengembangan akademik, teknologi, inovasi, dan kolaborasi
              mahasiswa Teknik Informatika.
            </p>

            {marqueeBadges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 text-white font-medium text-sm md:text-base shrink-0"
              >
                <Icon size={18} strokeWidth={2.2} />
                {label}
              </span>
            ))}

            <Link
              to="/aktivitas"
              className="inline-flex items-center gap-2 bg-white text-[var(--brand)] font-semibold text-sm px-5 py-2.5 rounded-full shrink-0 hover:bg-white/90 transition-colors"
            >
              Jelajahi HMPS
              <ArrowRight size={16} />
            </Link>
          </div>
        </Marquee>
      </div>
    </section>
  );
}
