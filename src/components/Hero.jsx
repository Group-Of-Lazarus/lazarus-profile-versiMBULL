import { motion } from "framer-motion";
import BlurText from "./BlurText";
import MagneticButton from "./MagneticButton";
import PengurusCarousel from "./PengurusCarousel";

const handleAnimationComplete = () => {
  console.log('Animation completed!');
};

export default function Hero() {
  return (
    <section className="relative bg-[var(--page)] bg-pattern-grid overflow-hidden pt-28 md:pt-32">
      {/* Glow lembut brand di kanan atas */}
      <div className="absolute -top-40 right-[-10%] w-[600px] h-[600px] bg-[var(--brand-soft)] blur-[120px] rounded-full pointer-events-none" />

      <div className="container-hmps relative z-10 py-20 md:py-28 grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-112px)]">
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
              Gabung HMPS INF →
            </MagneticButton>

            <MagneticButton
              as="a"
              href="#tentang"
              className="inline-flex items-center gap-2 bg-[var(--surface)] hover:bg-[var(--surface-alt)] border border-[var(--border-subtle)] transition-colors text-[var(--text-primary)] text-sm font-semibold px-6 py-3.5 rounded-full"
            >
              Tentang Kami
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
    </section>
  );
}
