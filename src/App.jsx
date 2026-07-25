import { Routes, Route, useLocation, matchPath } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimatedPage from "./components/AnimatedPage";
import DesktopGate from "./components/DesktopGate";
import Home from "./pages/Home";
import Aktivitas from "./pages/Aktivitas";
import AktivitasDetail from "./pages/AktivitasDetail";
import StrukturOrganisasi from "./pages/StrukturOrganisasi";
import Sejarah from "./pages/Sejarah";
import Pendaftaran from "./pages/Pendaftaran";
import Galeri from "./pages/Galeri";
import NotFound from "./pages/NotFound";

// Daftar semua path yang benar-benar terdaftar sebagai halaman.
// Kalau path yang diakses tidak cocok dengan salah satu ini, berarti itu
// halaman 404 — Navbar & Footer sengaja disembunyikan khusus untuk kondisi ini.
const knownPaths = [
  "/",
  "/aktivitas",
  "/aktivitas/:slug",
  "/struktur-organisasi",
  "/sejarah",
  "/pendaftaran",
  "/galeri",
];

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const location = useLocation();
  const isKnownRoute = knownPaths.some((path) =>
    matchPath({ path, end: true }, location.pathname)
  );

  return (
    <DesktopGate>
      <div className="min-h-screen flex flex-col">
        <ScrollToTop />
        {isKnownRoute && <Navbar />}
        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route path="/" element={<AnimatedPage><Home /></AnimatedPage>} />
              <Route path="/aktivitas" element={<AnimatedPage><Aktivitas /></AnimatedPage>} />
              <Route path="/aktivitas/:slug" element={<AnimatedPage><AktivitasDetail /></AnimatedPage>} />
              <Route path="/struktur-organisasi" element={<AnimatedPage><StrukturOrganisasi /></AnimatedPage>} />
              <Route path="/sejarah" element={<AnimatedPage><Sejarah /></AnimatedPage>} />
              <Route path="/pendaftaran" element={<AnimatedPage><Pendaftaran /></AnimatedPage>} />
              <Route path="/galeri" element={<AnimatedPage><Galeri /></AnimatedPage>} />
              <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
            </Routes>
          </AnimatePresence>
        </main>
        {isKnownRoute && <Footer />}
      </div>
    </DesktopGate>
  );
}
