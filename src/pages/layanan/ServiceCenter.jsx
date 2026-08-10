import { Cpu, Code2, Home, Laptop, Mail, Palette, Plug } from "lucide-react";
import Seo from "../../components/Seo";
import Reveal from "../../components/Reveal";
import PageHero from "../../components/PageHero";
import ServiceCard from "../../components/ServiceCard";
import { InstagramIcon } from "../../components/BrandIcons";
import { serviceList } from "../../data/layanan/serviceCenter";

// Kontak resmi HMPS — dipakai ulang dari yang sudah ada di Contact.jsx,
// biar pesan masuk ke akun yang sama & benar-benar dipantau pengurus.
const INSTAGRAM_URL = "https://www.instagram.com/hmpsinf/?hl=id";
const INSTAGRAM_HANDLE = "@hmpsinf";
const EMAIL = "lazarus@uin.ac.id";

const iconMap = { Laptop, Cpu, Code2, Palette, Plug, Home };

export default function ServiceCenter() {
  const handleInquire = async (service) => {
    const text = `Halo HMPS Informatika, saya mau tanya soal layanan "${service.judul}" di Service Center.`;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Kalau clipboard API diblok browser, tetep lanjut buka Instagram-nya aja.
    }
    window.open(INSTAGRAM_URL, "_blank", "noreferrer");
  };

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
          <p className="text-[var(--text-secondary)] leading-relaxed">
            Service Center adalah unit layanan praktik kerja mahasiswa Informatika, digagas bareng Departemen
            Ekonomi Kreatif. Selain jadi sumber pemasukan mandiri untuk organisasi, ini juga jadi ruang buat
            pengurus & anggota mengasah skill teknis secara langsung.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {serviceList.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 6) * 0.06}>
              <ServiceCard service={service} icon={iconMap[service.icon]} onInquire={handleInquire} />
            </Reveal>
          ))}
        </div>

        <Reveal>
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
