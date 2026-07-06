function initials(nama) {
  return nama
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

/**
 * size: "lg" (kepala departemen / ketua umum) | "sm" (anggota)
 */
export default function TeamCard({ nama, nim, jabatan, foto, size = "lg" }) {
  const isSmall = size === "sm";

  return (
    <div className="bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      {/* Photo area: blue background + decorative rings, generated in CSS/SVG */}
      <div
        className={`relative overflow-hidden bg-blue-600 ${
          isSmall ? "aspect-square" : "aspect-[4/5]"
        }`}
      >
        {/* Decorative concentric rings */}
        <svg
          className="absolute inset-0 w-full h-full opacity-40"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          <circle cx="50" cy="42" r="42" fill="none" stroke="#ffffff" strokeWidth="1.2" />
          <circle cx="50" cy="42" r="30" fill="none" stroke="#ffffff" strokeWidth="1.2" />
          <circle cx="50" cy="42" r="18" fill="none" stroke="#ffffff" strokeWidth="1.2" />
        </svg>

        {/* Photo (transparent cutout PNG) or initials fallback */}
        {foto ? (
          <img
            src={foto}
            alt={nama}
            className="absolute inset-0 w-full h-full object-contain object-bottom"
          />
        ) : (
          <div className="absolute inset-0 flex items-end justify-center pb-2">
            <span className="text-white font-display font-extrabold text-4xl drop-shadow">
              {initials(nama)}
            </span>
          </div>
        )}
      </div>

      {/* Name + role */}
      <div className={`text-center ${isSmall ? "p-3" : "p-4"}`}>
        <p className={`font-semibold text-blue-600 ${isSmall ? "text-sm" : "text-base"}`}>
          {nama}
        </p>
        {jabatan && (
          <p className="text-xs text-slate-500 mt-0.5 leading-snug">{jabatan}</p>
        )}
        <p className="text-[11px] text-slate-400 mt-1">NIM · {nim}</p>
      </div>
    </div>
  );
}
