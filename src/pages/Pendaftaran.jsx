import { useState } from "react";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import Seo from "../components/Seo";
import Dropdown from "../components/ui/dropdown";
import { CheckCircle2, GraduationCap } from "lucide-react";
import { departemenList } from "../data/organisasi";

const angkatanOptions = [
  { key: "", label: "Pilih angkatan" },
  { key: "2026", label: "2026" },
  { key: "2025", label: "2025" },
  { key: "2024", label: "2024" },
  { key: "lainnya", label: "Lainnya" },
];

const minatOptions = [
  { key: "", label: "Belum tahu, ikut ditempatkan" },
  ...departemenList.map((d) => ({ key: d.slug, label: `${d.nama} — ${d.namaLengkap}` })),
];

const initialForm = {
  nama: "",
  nim: "",
  angkatan: "",
  email: "",
  whatsapp: "",
  minat: "",
  motivasi: "",
};

export default function Pendaftaran() {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulasi submit di frontend — sambungkan ke backend/Google Form/Supabase
    // sesuai kebutuhan (lihat README bagian "Data Penting" no. 7).
    setSent(true);
  };

  const handleReset = () => {
    setForm(initialForm);
    setSent(false);
  };

  return (
    <div className="pt-40 pb-24">
      <Seo
        title="Pendaftaran"
        path="/pendaftaran"
        description="Daftar jadi anggota atau ikut kegiatan HMPS Informatika UINSMHB. Isi formulir pendaftaran secara online di sini."
      />
      <div className="container-hmps grid md:grid-cols-2 gap-14 items-start">
        <Reveal>
          <Eyebrow>PENDAFTARAN</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mt-5 mb-4 text-[var(--text-primary)]">
            Gabung <span className="text-[var(--brand-text)]">HMPS INF</span>
          </h1>
          <p className="text-[var(--text-secondary)] max-w-md mb-6">
            Jadilah bagian dari HMPS INF dan kembangkan potensi, jaringan, serta
            pengalaman organisasimu bersama kami.
          </p>
          <ul className="space-y-3 mb-8">
            {[
              "Terbuka untuk seluruh mahasiswa Informatika UIN Sultan Maulana Hasanuddin Banten",
              "Kesempatan mengikuti pelatihan & event eksklusif",
              "Membangun relasi lintas angkatan dan kampus",
              "Bisa pilih minat departemen sesuai passion kamu",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-[var(--text-secondary)]">
                <CheckCircle2 size={18} className="text-[var(--brand-text)] shrink-0 mt-0.5" />
                {b}
              </li>
            ))}
          </ul>

          <div className="flex items-start gap-3 bg-[var(--brand-soft)] border border-[var(--brand-ring)] rounded-2xl px-5 py-4">
            <GraduationCap size={18} className="text-[var(--brand-text)] shrink-0 mt-0.5" />
            <p className="text-sm text-[var(--brand-soft-text)] leading-relaxed">
              Bingung mau di departemen mana? Lihat dulu tugas & fungsi tiap departemen di halaman{" "}
              <a href="/departemen" className="font-semibold underline underline-offset-2">
                Departemen
              </a>
              .
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          {sent ? (
            <div className="bg-[var(--brand-soft)] border border-[var(--brand-ring)] rounded-3xl p-10 text-center">
              <CheckCircle2 size={36} className="text-[var(--brand-text)] mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl text-[var(--text-primary)] mb-2">
                Pendaftaran Terkirim!
              </h3>
              <p className="text-[var(--text-secondary)] text-sm mb-6">
                Terima kasih, {form.nama || "Calon Pengurus"}. Tim HMPS INF akan menghubungimu
                lewat email atau WhatsApp.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="text-sm font-semibold text-[var(--brand-text)] hover:underline"
              >
                Isi formulir lain
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-[var(--surface)] border border-[var(--border-subtle)] rounded-3xl p-8 space-y-5"
            >
              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                  Nama Lengkap
                </label>
                <input
                  required
                  type="text"
                  value={form.nama}
                  onChange={update("nama")}
                  placeholder="Masukkan nama lengkap"
                  className="w-full text-sm border border-[var(--border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand-ring)] transition-all"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">NIM</label>
                  <input
                    required
                    type="text"
                    value={form.nim}
                    onChange={update("nim")}
                    placeholder="25xxxxxxx"
                    className="w-full text-sm border border-[var(--border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand-ring)] transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">Angkatan</label>
                  <Dropdown
                    options={angkatanOptions}
                    value={form.angkatan}
                    onChange={(val) => setForm((f) => ({ ...f, angkatan: val }))}
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="nama@email.com"
                  className="w-full text-sm border border-[var(--border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand-ring)] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                  No. WhatsApp
                </label>
                <input
                  required
                  type="tel"
                  pattern="[0-9+\s-]{9,15}"
                  value={form.whatsapp}
                  onChange={update("whatsapp")}
                  placeholder="08xxxxxxxxxx"
                  className="w-full text-sm border border-[var(--border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand-ring)] transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                  Minat Departemen
                </label>
                <Dropdown
                  options={minatOptions}
                  value={form.minat}
                  onChange={(val) => setForm((f) => ({ ...f, minat: val }))}
                  className="w-full"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--text-secondary)] mb-1.5">
                  Motivasi Bergabung
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.motivasi}
                  onChange={update("motivasi")}
                  placeholder="Ceritakan alasanmu ingin bergabung..."
                  className="w-full text-sm border border-[var(--border)] rounded-xl px-4 py-3 outline-none focus:border-[var(--brand)] focus:ring-2 focus:ring-[var(--brand-ring)] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[var(--brand)] hover:bg-[var(--brand-hover)] transition-colors text-white text-sm font-semibold py-3.5 rounded-xl"
              >
                Kirim Pendaftaran
              </button>
            </form>
          )}
        </Reveal>
      </div>
    </div>
  );
}
