import { useState } from "react";
import { Check, Clock, Copy, Cpu, Code2, Home, Laptop, Mail, Palette, Plug, Tag } from "lucide-react";
import Seo from "../../components/Seo";
import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import Eyebrow from "../../components/Eyebrow";
import { StickyScroll } from "../../components/ui/sticky-scroll-reveal";
import { InstagramIcon } from "../../components/BrandIcons";
import { serviceList } from "../../data/layanan/serviceCenter";

// Kontak resmi HMPS — dipakai ulang dari yang sudah ada di Contact.jsx,
// biar pesan masuk ke akun yang sama & benar-benar dipantau pengurus.
const INSTAGRAM_URL = "https://www.instagram.com/hmpsinf/?hl=id";
const INSTAGRAM_HANDLE = "@hmpsinf";
const EMAIL = "lazarus@uin.ac.id";

const iconMap = { Laptop, Cpu, Code2, Palette, Plug, Home };

export default function ServiceCenter() {
  const [copiedSlug, setCopiedSlug] = useState(null);

  const handleInquire = async (service) => {
    const text = `Halo HMPS Informatika, saya mau tanya soal layanan "${service.judul}" di Service Center.`;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Kalau clipboard API diblok browser, tetep lanjut buka Instagram-nya aja.
    }
    setCopiedSlug(service.slug);
    setTimeout(() => setCopiedSlug(null), 2000);
    window.open(INSTAGRAM_URL, "_blank", "noreferrer");
  };

  // Susun data buat StickyScroll: teks + bullet "contoh layanan" di kiri
  // (scroll biasa), foto + CTA di panel kanan yang sticky.
  const stickyContent = serviceList.map((service) => {
    const Icon = iconMap[service.icon];
    const isCopied = copiedSlug === service.slug;

    return {
      title: service.judul,
      description: service.deskripsi,
      extra: (
        <div className="space-y-5">
          <ul className="space-y-2.5">
            {service.contoh.map((c) => (
              <li key={c} className="flex items-start gap-2.5 text-sm text-slate-300">
                <Check size={14} className="mt-0.5 shrink-0 text-blue-400" />
                {c}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80">
              <Tag size={12} />
              {service.estimasi}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white/80">
              <Clock size={12} />
              {service.durasi}
            </span>
          </div>
          {/* Fallback CTA — cuma tampil kalau panel sticky di kanan lagi
              disembunyikan (layar < 1024px), biar tombol pesan tetap ada. */}
          <button
            type="button"
            onClick={() => handleInquire(service)}
            className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition-colors lg:hidden"
          >
            <Copy size={14} />
            Tanya Layanan Ini
          </button>
        </div>
      ),
      content: (
        <div className="relative h-full w-full">
          <img
            src={service.gambar}
            alt={service.judul}
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/15 to-slate-950/40" />

          <div className="absolute top-5 left-5 w-11 h-11 rounded-full bg-white/15 backdrop-blur-md grid place-items-center text-white ring-1 ring-white/20">
            <Icon size={19} strokeWidth={2} />
          </div>

          <div className="absolute bottom-5 left-5 right-5">
            <p className="text-[11px] font-semibold uppercase tracking-wide text-white/70 mb-2">
              {service.estimasi}
            </p>
            <button
              type="button"
              onClick={() => handleInquire(service)}
              className="w-full inline-flex items-center justify-center gap-2 bg-white text-slate-900 text-sm font-semibold py-2.5 rounded-full hover:bg-white/90 transition-colors"
            >
              {isCopied ? (
                <>
                  <Check size={15} /> Tersalin, buka Instagram...
                </>
              ) : (
                <>
                  <Copy size={15} /> Tanya Layanan Ini
                </>
              )}
            </button>
          </div>
        </div>
      ),
    };
  });

  return (
    <div className="pb-24 bg-pattern-grid">
      <Seo
        title="Service Center"
        path="/layanan/service-center"
        description="Jasa service HP, laptop, PC, elektronik, upgrade hardware/software, pembuatan web & aplikasi, desain UI/UX, hingga pemasangan smart home oleh mahasiswa Informatika."
      />
      <PageHero
        title="Service Center"
        highlight="HMPS Informatika"
        subtitle="Jasa teknis dari mahasiswa Informatika buat mahasiswa — mulai dari service perangkat, upgrade sistem, sampai project digital custom."
        image="/PageHero-hmps.jpg"
      />

      <div className="container-hmps pt-14">
        <Reveal className="max-w-2xl mb-10">
          <Eyebrow>6 LAYANAN TERSEDIA</Eyebrow>
          <p className="text-[var(--text-secondary)] leading-relaxed mt-4">
            Service Center adalah unit layanan praktik kerja mahasiswa Informatika, digagas bareng Departemen
            Ekonomi Kreatif. Selain jadi sumber pemasukan mandiri untuk organisasi, ini juga jadi ruang buat
            pengurus & anggota mengasah skill teknis secara langsung. Scroll di dalam kartu berikut buat lihat
            semua layanan.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <StickyScroll content={stickyContent} />
        </Reveal>

        <Reveal delay={0.15} className="mt-14">
          <div className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-6 max-w-3xl">
            <div className="flex-1">
              <h3 className="font-display font-bold text-lg text-[var(--text-primary)] mb-1">
                Butuh layanan yang nggak ada di daftar?
              </h3>
              <p className="text-sm text-[var(--text-secondary)]">
                Chat langsung aja, nanti dibantu diarahkan ke pengurus yang paham bidangnya.
              </p>
            </div>
            <div className="flex flex-col gap-2 shrink-0">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-[var(--brand)] hover:bg-[var(--brand-hover)] px-5 py-2.5 rounded-full transition-colors"
              >
                <InstagramIcon size={15} />
                {INSTAGRAM_HANDLE}
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--brand-text)] px-5 py-2.5 transition-colors"
              >
                <Mail size={15} />
                {EMAIL}
              </a>
            </div>
          </div>
          <p className="text-xs text-[var(--text-faint)] mt-4 max-w-3xl">
            Estimasi harga & durasi bersifat indikatif, harga final menyesuaikan tingkat kerusakan/kompleksitas
            setelah pengecekan.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
