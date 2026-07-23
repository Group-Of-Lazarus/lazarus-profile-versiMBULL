import Reveal from "./Reveal";
import ActivityCard from "./ActivityCard";
import { aktivitasList } from "../data/aktivitas";
import TrueFocus from './TrueFocus';


// Cuma nampilin beberapa aktivitas terbaru di Home.
// Detail lengkap + filter status/departemen ada di halaman /aktivitas.
const JUMLAH_TAMPIL = 3;

export default function ActivityPreview() {
  const latest = aktivitasList.slice(0, JUMLAH_TAMPIL);

  return (
    <section className="bg-[var(--brand-soft)] py-24 md:py-28">
      <div className="container-hmps">
        <Reveal className="flex flex-col items-center text-center gap-4 mb-12">
          <TrueFocus
            sentence="AGENDA TERBARU"
            manualMode={false}
            blurAmount={5}
            borderColor="#2D4FA5"
            animationDuration={1}
            pauseBetweenAnimations={1}
           />
          <p className="text-[var(--text-secondary)] max-w-xl">
            Info kegiatan terbaru dari HMPS Informatika. Kunjungi halaman
            Aktivitas untuk melihat detail lengkap dan seluruh kegiatan
            lainnya.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-6">
          {latest.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.1}>
              <ActivityCard item={item} />
            </Reveal>
          ))}
          {latest.length === 0 && (
            <p className="text-[var(--text-muted)] col-span-full text-center py-12">
              Belum ada aktivitas untuk ditampilkan.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
