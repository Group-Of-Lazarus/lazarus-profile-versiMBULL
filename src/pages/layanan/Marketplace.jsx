import Seo from "../../components/Seo";
import Reveal from "../../components/Reveal";
import Eyebrow from "../../components/Eyebrow";
import ProductGalleryCard from "../../components/ProductGalleryCard";
import { productList } from "../../data/layanan/marketplace";

// Kontak resmi HMPS — sama seperti yang dipakai di Contact.jsx & Service Center.
const INSTAGRAM_URL = "https://www.instagram.com/hmpsinf/?hl=id";

export default function Marketplace() {
  const handleOrder = async (product) => {
    const text = `Halo HMPS Informatika, saya mau pesan "${product.nama}". Harga: ${product.harga}.`;
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
        title="Marketplace"
        path="/layanan/marketplace"
        description="Merchandise & kebutuhan resmi HMPS Informatika UINSMHB — PDH angkatan, atribut pengenalan lingkungan kampus, dan paket alat IoT."
      />

      {/* Hero tanpa foto — cuma teks, senada referensi */}
      <div className="pt-40 pb-16 text-center">
        <div className="container-hmps">
          <Reveal>
            <div className="flex justify-center mb-5">
              <Eyebrow>HMPS INFORMATIKA OFFICIAL MERCH</Eyebrow>
            </div>
            <h1 className="font-display font-extrabold text-4xl md:text-5xl text-[var(--text-primary)] mb-4">
              Koleksi Eksklusif <span className="text-[var(--brand-text)]">HMPS Informatika</span>
            </h1>
            <p className="text-[var(--text-secondary)] max-w-xl mx-auto">
              Tunjukkan identitasmu sebagai bagian dari keluarga besar Informatika dengan merchandise resmi
              dan berkualitas dari kami.
            </p>
          </Reveal>
        </div>
      </div>

      <div className="container-hmps">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productList.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.1}>
              <ProductGalleryCard product={product} onOrder={handleOrder} />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
