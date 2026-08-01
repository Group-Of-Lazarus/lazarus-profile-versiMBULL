import { Crown, FileText, Wallet, User, IdCard } from "lucide-react";

function initials(nama) {
  return nama
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

// Deteksi peran dari teks jabatan, buat nentuin warna aksen + ikon
// yang dipakai di pita (ribbon) sisi belakang kartu.
function detectRole(jabatan = "") {
  const j = jabatan.toLowerCase();
  if (j.includes("ketua") || j.includes("kepala")) return "ketua";
  if (j.includes("sekretaris")) return "sekretaris";
  if (j.includes("bendahara")) return "bendahara";
  return "anggota";
}

const roleStyles = {
  ketua: { tone: "bg-[var(--brand)]", icon: Crown },
  sekretaris: { tone: "bg-indigo-600", icon: FileText },
  bendahara: { tone: "bg-amber-500", icon: Wallet },
  anggota: { tone: "bg-slate-500", icon: User },
};

/**
 * size: "lg" (kepala departemen / BPH) | "sm" (anggota)
 * Hover flip 3D — depan foto/inisial dengan warna sesuai peran,
 * belakang pita warna (ikon + jabatan) + nama & NIM di badan putih.
 */
export default function TeamCard({ nama, nim, jabatan = "Anggota", foto, size = "lg" }) {
  const isSmall = size === "sm";
  const role = detectRole(jabatan);
  const { tone, icon: RoleIcon } = roleStyles[role];

  return (
    <div className={`group ${isSmall ? "aspect-[4/5]" : "aspect-[3/4]"}`} style={{ perspective: "1000px" }}>
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{ transformStyle: "preserve-3d" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "rotateY(180deg)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "rotateY(0deg)")}
      >
        {/* Depan — foto/inisial, warna disamakan untuk semua kartu (biru brand) */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden flex items-center justify-center bg-[var(--brand)]"
          style={{ backfaceVisibility: "hidden" }}
        >
          {foto ? (
            <img src={foto} alt={nama} className="w-full h-full object-cover" />
          ) : (
            <span className={`text-white font-display font-extrabold ${isSmall ? "text-3xl" : "text-5xl"}`}>
              {initials(nama)}
            </span>
          )}
        </div>

        {/* Belakang — pita warna (ikon + jabatan) + nama & NIM, badan tinted (bukan putih polos) */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden bg-[var(--brand-soft)] border border-[var(--border-subtle)] flex flex-col"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <div className={`flex items-center justify-center gap-1.5 text-white ${tone} ${isSmall ? "py-2" : "py-3"}`}>
            <RoleIcon size={isSmall ? 12 : 14} />
            <span className={`font-semibold uppercase tracking-wide ${isSmall ? "text-[9px]" : "text-[11px]"}`}>
              {jabatan}
            </span>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center text-center px-3 gap-2">
            <span className={`w-8 h-1 rounded-full ${tone}`} />
            <p className={`font-semibold text-[var(--text-primary)] leading-tight ${isSmall ? "text-sm" : "text-lg"}`}>
              {nama}
            </p>
            <span className="inline-flex items-center gap-1.5 bg-[var(--surface)] border border-[var(--border-subtle)] rounded-full px-3 py-1">
              <IdCard size={isSmall ? 11 : 13} className="text-[var(--text-faint)]" />
              <span className={`text-[var(--text-secondary)] font-medium ${isSmall ? "text-[10px]" : "text-xs"}`}>
                {nim}
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
