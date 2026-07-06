import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X, ShieldCheck } from "lucide-react";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/aktivitas", label: "Aktivitas" },
  { to: "/struktur-organisasi", label: "Struktur Organisasi" },
];

const infoLinks = [
  { to: "/sejarah", label: "Sejarah HMPS" },
  { to: "/pendaftaran", label: "Pendaftaran" },
  { to: "/galeri", label: "Galeri" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
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
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-white"
      }`}
    >
      <nav className="container-hmps flex items-center justify-between h-[76px]">
        <Link to="/" className="flex items-center gap-2 shrink-0">
          <span className="w-9 h-9 rounded-full bg-blue-600 text-white grid place-items-center">
            <ShieldCheck size={18} />
          </span>
          <span className="font-display font-extrabold text-lg tracking-tight text-slate-900">
            LAZARUS
          </span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                location.pathname === link.to ? "text-slate-900" : "text-slate-600"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <div
            className="relative"
            onMouseEnter={() => setInfoOpen(true)}
            onMouseLeave={() => setInfoOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Informasi
              <ChevronDown
                size={15}
                className={`transition-transform duration-200 ${infoOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`absolute top-full left-1/2 -translate-x-1/2 pt-3 transition-all duration-200 origin-top ${
                infoOpen
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="bg-white rounded-xl shadow-lg border border-slate-100 py-2 w-48">
                {infoLinks.map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="block px-4 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <a
            href="#kontak"
            className="text-sm font-semibold text-white bg-slate-900 hover:bg-blue-600 transition-colors px-5 py-2.5 rounded-full"
          >
            Kontak Kami
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-slate-700"
          onClick={() => setOpen(!open)}
          aria-label="Buka menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white border-t border-slate-100 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container-hmps py-4 flex flex-col gap-1">
          {[...navLinks, ...infoLinks].map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="py-2.5 text-sm font-medium text-slate-700 hover:text-blue-600"
            >
              {l.label}
            </Link>
          ))}
          <a href="#kontak" className="py-2.5 text-sm font-semibold text-blue-600">
            Kontak Kami
          </a>
        </div>
      </div>
    </header>
  );
}
