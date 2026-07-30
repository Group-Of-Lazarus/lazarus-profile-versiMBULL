import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  ChevronDown,
  Menu,
  X,
  MessageSquare,
  Heart,
  Building2,
  Layers,
  GraduationCap,
  BookOpen,
  Images,
  ClipboardList,
  Headset,
  ShoppingBag,
  UserRound,
} from "lucide-react";

// Link langsung tanpa dropdown
const navLinks = [
  { to: "/", label: "Home" },
  { to: "/aktivitas", label: "Kegiatan" },
];

// Dropdown "Aspirasi"
const aspirasiLinks = [
  { label: "Aspirasi", to: "/aspirasi/form", icon: MessageSquare, status: "ONGOING" },
  {
    label: "RAPI (PP)",
    to: "https://rasa-dppinf-2430da.netlify.app/",
    icon: Heart,
    external: true,
  },
];

// Dropdown "Informasi"
const informasiLinks = [
  { label: "Struktur Organisasi", to: "/struktur-organisasi", icon: Building2 },
  { label: "Departemen", to: "/departemen", icon: Layers },
  { label: "Beasiswa", to: "/beasiswa", icon: GraduationCap },
  { label: "Sejarah HMPS", to: "/sejarah", icon: BookOpen },
  { label: "Galeri", to: "/galeri", icon: Images },
  { label: "Pendaftaran HMPS", to: "/pendaftaran", icon: ClipboardList },
];

// Dropdown "Layanan"
const layananLinks = [
  { label: "Service Center", to: "/layanan/service-center", icon: Headset },
  { label: "Marketplace", to: "/layanan/marketplace", icon: ShoppingBag },
  { label: "Dosen", to: "/layanan/dosen", icon: UserRound },
];

// Konfigurasi tiap dropdown di navbar: label tombol + daftar linknya.
// Halaman yang belum dibuat (mis. Beasiswa, Service Center, dst) otomatis
// diarahkan ke halaman 404 lewat catch-all route "*" di App.jsx.
const dropdownMenus = [
  { key: "aspirasi", label: "Aspirasi", links: aspirasiLinks },
  { key: "informasi", label: "Informasi", links: informasiLinks },
  { key: "layanan", label: "Layanan", links: layananLinks },
];

function NavDropdown({ label, links, openKey, setOpenKey, ownKey }) {
  const isOpen = openKey === ownKey;

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpenKey(ownKey)}
      onMouseLeave={() => setOpenKey(null)}
    >
      <button className="flex items-center gap-1 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--brand-text)] transition-colors">
        {label}
        <ChevronDown
          size={15}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 origin-top ${
          isOpen ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-[var(--surface)] rounded-2xl shadow-lg border border-[var(--border-subtle)] p-2 w-56">
          {links.map((item) => {
            const inner = (
              <>
                <span className="w-8 h-8 rounded-lg bg-[var(--brand-soft)] text-[var(--brand-text)] grid place-items-center shrink-0 group-hover:bg-[var(--surface)] transition-colors">
                  <item.icon size={15} />
                </span>
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
            const className =
              "flex items-center gap-3 p-2 rounded-lg hover:bg-[var(--brand-soft)] transition-colors group";

            return item.external ? (
              <a key={item.label} href={item.to} target="_blank" rel="noreferrer" className={className}>
                {inner}
              </a>
            ) : (
              <Link key={item.label} to={item.to} className={className}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

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
          <img
            src="/logo_hmps.png"
            alt="Logo HMPS"
            className="h-10 w-10 object-contain"
          />
          <span className="font-display font-extrabold text-lg tracking-tight text-[var(--text-primary)]">
            HMPS Informatika
          </span>
        </Link>

        {/* Desktop — nav links di tengah */}
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

        {/* Mobile: tombol menu */}
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

      {/* Mobile menu — kartu terpisah, muncul di bawah pill navbar */}
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
                    className="flex items-center gap-2 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--brand-text)]"
                  >
                    <item.icon size={15} className="text-[var(--brand-text)]" />
                    {item.label}
                  </a>
                ) : (
                  <Link
                    key={item.label}
                    to={item.to}
                    className="flex items-center gap-2 py-2.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--brand-text)]"
                  >
                    <item.icon size={15} className="text-[var(--brand-text)]" />
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
