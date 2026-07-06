import { useState } from "react";
import Reveal from "../components/Reveal";
import Eyebrow from "../components/Eyebrow";
import { CheckCircle2 } from "lucide-react";

export default function Pendaftaran() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-40 pb-24">
      <div className="container-hmps grid md:grid-cols-2 gap-14 items-start">
        <Reveal>
          <Eyebrow>PENDAFTARAN</Eyebrow>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl mt-5 mb-4 text-slate-900">
            Gabung <span className="text-blue-600">HMPS INF</span>
          </h1>
          <p className="text-slate-600 max-w-md mb-6">
            Jadilah bagian dari HMPS INF dan kembangkan potensi, jaringan, serta
            pengalaman organisasimu bersama kami.
          </p>
          <ul className="space-y-3">
            {[
              "Terbuka untuk seluruh mahasiswa Informatika UIN Sultan Maulana Hasanuddin Banten",
              "Kesempatan mengikuti pelatihan & event eksklusif",
              "Membangun relasi lintas angkatan dan kampus",
            ].map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm text-slate-600">
                <CheckCircle2 size={18} className="text-blue-600 shrink-0 mt-0.5" />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          {sent ? (
            <div className="bg-blue-50 border border-blue-100 rounded-3xl p-10 text-center">
              <CheckCircle2 size={36} className="text-blue-600 mx-auto mb-4" />
              <h3 className="font-display font-bold text-xl text-slate-900 mb-2">
                Pendaftaran Terkirim!
              </h3>
              <p className="text-slate-600 text-sm">
                Terima kasih sudah mendaftar. Tim HMPS INF akan menghubungimu
                lewat email atau WhatsApp.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-slate-100 rounded-3xl p-8 space-y-5"
            >
              {[
                { label: "Nama Lengkap", type: "text", placeholder: "Masukkan nama lengkap" },
                { label: "NIM", type: "text", placeholder: "Masukkan NIM" },
                { label: "Email", type: "email", placeholder: "nama@email.com" },
                { label: "No. WhatsApp", type: "tel", placeholder: "08xxxxxxxxxx" },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm font-medium text-slate-700 mb-1.5">
                    {f.label}
                  </label>
                  <input
                    required
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full text-sm border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1.5">
                  Motivasi Bergabung
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Ceritakan alasanmu ingin bergabung..."
                  className="w-full text-sm border border-slate-200 rounded-xl px-4 py-3 outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-500 transition-colors text-white text-sm font-semibold py-3.5 rounded-xl"
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
