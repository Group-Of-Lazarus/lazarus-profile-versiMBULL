function initials(nama) {
  return nama
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function TeamCard({ nama, nim, jabatan, foto, size = "lg" }) {
  const isSmall = size === "sm";

  return (
    <div className={`group ${isSmall ? "aspect-[4/5]" : "aspect-[3/4]"}`} style={{ perspective: "1000px" }}>
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{ transformStyle: "preserve-3d" }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "rotateY(180deg)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "rotateY(0deg)")}
      >
        <div
          className="absolute inset-0 rounded-2xl bg-[var(--brand)] overflow-hidden flex items-center justify-center"
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

        <div
          className="absolute inset-0 rounded-2xl bg-[var(--surface)] border border-[var(--border-subtle)] flex flex-col items-center justify-center text-center p-4"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className={`font-semibold text-[var(--text-primary)] ${isSmall ? "text-sm" : "text-lg"}`}>{nama}</p>
          {jabatan && <p className={`text-[var(--text-muted)] mt-1 ${isSmall ? "text-xs" : "text-sm"}`}>{jabatan}</p>}
          <p className="text-[11px] text-[var(--text-faint)] mt-1">NIM · {nim}</p>
        </div>
      </div>
    </div>
  );
}
