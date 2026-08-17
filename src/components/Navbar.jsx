import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";

// ─── Keyframe styles injected once ────────────────────────────────────────────
const STYLE_ID = "navbar-dropdown-anim";
if (typeof document !== "undefined" && !document.getElementById(STYLE_ID)) {
  const s = document.createElement("style");
  s.id = STYLE_ID;
  s.textContent = `
    @keyframes nb-panel {
      0%   { opacity:0; clip-path:inset(0 0 100% 0 round 16px); transform:translateY(-6px); }
      100% { opacity:1; clip-path:inset(0 0 0%   0 round 16px); transform:translateY(0); }
    }
    @keyframes nb-item {
      0%   { opacity:0; transform:translateX(-10px) skewX(4deg); }
      60%  { opacity:1; transform:translateX(3px)  skewX(-1deg); }
      100% { opacity:1; transform:translateX(0)    skewX(0deg);  }
    }
    .nb-panel { animation: nb-panel 0.26s cubic-bezier(0.22,1,0.36,1) forwards; }
    .nb-item  { animation: nb-item  0.26s cubic-bezier(0.22,1,0.36,1) both; }
  `;
  document.head.appendChild(s);
}

// ─── Data ─────────────────────────────────────────────────────────────────────
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/aktivitas", label: "Kegiatan" },
];

const aspirasiLinks = [
  { label: "Aspirasi", to: "/aspirasi/form", status: "ONGOING" },
  { label: "RAPI (PP)", to: "https://rasa-dppinf-2430da.netlify.app/", external: true },
];

const informasiLinks = [
  { label: "Struktur Organisasi", to: "/struktur-organisasi" },
  { label: "Departemen", to: "/departemen" },
  { label: "Beasiswa", to: "/beasiswa" },
  { label: "Roadmap Matkul", to: "/roadmap-matkul" },
  { label: "Galeri", to: "/galeri" },
  { label: "Pendaftaran HMPS", to: "/pendaftaran" },
];

const layananLinks = [
  { label: "Service Center", to: "/layanan/service-center" },
  { label: "Marketplace", to: "/layanan/marketplace" },
  { label: "Dosen", to: "/layanan/dosen" },
];

const dropdownMenus = [
  { key: "aspirasi",  label: "Aspirasi",  links: aspirasiLinks  },
  { key: "informasi", label: "Informasi", links: informasiLinks },
  { key: "layanan",   label: "Layanan",   links: layananLinks   },
];

// ─── NavDropdown ──────────────────────────────────────────────────────────────
function NavDropdown({ label, links, openKey, setOpenKey, ownKey }) {
  const isOpen = openKey === ownKey;
  const ref = useRef(null);

  // Tutup ketika klik di luar
  useEffect(() => {
    if (!isOpen) return;
    function away(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpenKey(null);
    }
    document.addEventListener("mousedown", away);
    return () => document.removeEventListener("mousedown", away);
  }, [isOpen, setOpenKey]);

  return (
    <div className="relative" ref={ref}>
      {/* Trigger — hanya klik, TIDAK ada hover */}
      <button
        onClick={() => setOpenKey(isOpen ? null : ownKey)}
        className="flex items-center gap-1 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--brand-text)] transition-colors select-none"
      >
        {label}
        <ChevronDown
          size={15}
          className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {/* Panel — mount/unmount agar animasi selalu fresh */}
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 z-50">
          <div
            className="nb-panel bg-[var(--surface)] rounded-2xl shadow-xl border border-[var(--border-subtle)] p-2 w-56"
            style={{ transformOrigin: "top center" }}
          >
            {links.map((item, i) => {
              const cls =
                "nb-item flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-[var(--brand-soft)] transition-colors group cursor-pointer";
              const style = { animationDelay: `${i * 40}ms` };

              const inner = (
                <>
                  <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-[var(--brand-text)] transition-colors">
                    {item.label}
                  </span>
                  {item.status && (
                    <span className="ml-auto text-[9px] font-semibold tracking-wide text-[var(--brand-text)] bg-[var(--brand-soft)] px-2 py-1 rounded-full shrink-0">
                      {item.status}
                    </span>
                  )}
                </>
              );

              return item.external ? (
                <a key={item.label} href={item.to} target="_blank" rel="noreferrer"
                   className={cls} style={style} onClick={() => setOpenKey(null)}>
                  {inner}
                </a>
              ) : (
                <Link key={item.label} to={item.to}
                      className={cls} style={style} onClick={() => setOpenKey(null)}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  return (
    <header className="fixed top-4 inset-x-0 z-50 px-4">
      <nav
        className={`max-w-3xl mx-auto flex items-center justify-between h-16 rounded-full border transition-all duration-300 px-4 md:px-6 ${
          scrolled
            ? "bg-white/50 backdrop-blur-2xl border-white/60 shadow-xl shadow-black/5"
            : "bg-white/30 backdrop-blur-2xl border-white/40 shadow-lg shadow-black/5"
        }`}
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.6)" }}
      >
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo_hmps.png" alt="Logo HMPS" className="h-10 w-10 object-contain" />
          <span className="font-display font-extrabold text-lg tracking-tight text-[var(--text-primary)]">
            HMPS Informatika
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-[var(--brand-text)] ${
                location.pathname === link.to ? "text-[var(--text-primary)]" : "text-[var(--text-secondary)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
          {dropdownMenus.map((menu) => (
            <NavDropdown
              key={menu.key}
              ownKey={menu.key}
              label={menu.label}
              links={menu.links}
              openKey={openDropdown}
              setOpenKey={setOpenDropdown}
            />
          ))}
        </div>

        {/* Mobile hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className="p-2 text-[var(--text-secondary)]"
            onClick={() => setOpen(!open)}
            aria-label="Buka menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 mt-3 rounded-3xl bg-white/90 backdrop-blur-xl border border-white/60 shadow-xl ${
          open ? "max-h-[32rem] overflow-y-auto" : "max-h-0 border-transparent shadow-none"
        }`}
      >
        <div className="container-hmps py-4 flex flex-col gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--brand-text)]"
            >
              {l.label}
            </Link>
          ))}
          {dropdownMenus.map((menu) => (
            <div key={menu.key}>
              <p className="text-[11px] font-semibold tracking-wider text-[var(--text-faint)] uppercase mt-3 mb-1">
                {menu.label}
              </p>
              {menu.links.map((item) =>
                item.external ? (
                  <a
                    key={item.label}
                    href={item.to}
                    target="_blank"
                    rel="noreferrer"
                    className="py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--brand-text)] block"
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--brand-text)] block"
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}
