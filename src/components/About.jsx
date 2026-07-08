import Reveal from "./Reveal";
import Eyebrow from "./Eyebrow";
import PhotoStack from "./PhotoStack";

// Tambahkan/ganti foto di sini — urutan pertama = paling depan
const aboutPhotos = [
  { src: "/hmps-2.jpg", alt: "Kegiatan komunitas HMPS INF" },
  { src: "/hmps-1.jpg", alt: "Dokumentasi HMPS INF" },
  { src: "/hmps-3.jpg", alt: "Penyambutan maba inf" },

];

export default function About() {
  return (
    <section id="tentang" className="container-hmps py-24 md:py-28">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <Reveal>
          <Eyebrow>TENTANG KAMI</Eyebrow>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl mt-5 mb-6 leading-tight text-[var(--text-primary)]">
            Mengenal Kabinet <span className="text-[var(--brand-text)]">LAZARUS</span>
          </h2>
          <p className="text-[var(--text-secondary)] leading-relaxed mb-4">
            Kabinet Lazarus adalah wadah resmi bagi mahasiswa Program Studi
            Informatika untuk mengembangkan potensi diri, meningkatkan
            kemampuan akademis, dan menyalurkan aspirasi, bakat, minat, serta
            kreativitas.
          </p>
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Kami berkomitmen membentuk mahasiswa yang berkompeten, kreatif,
            dan berintegritas dan menjadi jembatan antara mahasiswa dan civitas
            akademika UINSMHB, menciptakan lingkungan akademis yang dinamis dan
            berdampak.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <PhotoStack images={aboutPhotos} size={380} />
          <p className="text-center text-xs text-[var(--text-faint)] mt-6">
            Klik foto untuk lihat foto berikutnya
          </p>
        </Reveal>
      </div>
    </section>
  );
}
