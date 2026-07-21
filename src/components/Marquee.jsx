export default function Marquee({ children, className = "", duration = 28 }) {
  return (
    <div className={`overflow-hidden ${className}`}>
      <div
        className="flex w-max animate-marquee"
        style={{ animationDuration: `${duration}s` }}
      >
        {/* Blok konten diduplikat 2x biar animasinya nyambung terus tanpa putus */}
        <div className="flex items-center shrink-0">{children}</div>
        <div className="flex items-center shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
