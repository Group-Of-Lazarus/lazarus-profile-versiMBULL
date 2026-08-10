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
import Departemen from "./pages/Departemen";
import RoadmapMatkul from "./pages/RoadmapMatkul";
import Beasiswa from "./pages/Beasiswa";
import Pendaftaran from "./pages/Pendaftaran";
import Galeri from "./pages/Galeri";
import ServiceCenter from "./pages/layanan/ServiceCenter";
import Marketplace from "./pages/layanan/Marketplace";
import Dosen from "./pages/layanan/Dosen";
import NotFound from "./pages/NotFound";

// Daftar semua path yang benar-benar terdaftar sebagai halaman.
// Kalau path yang diakses tidak cocok dengan salah satu ini, berarti itu
// halaman 404 — Navbar & Footer sengaja disembunyikan khusus untuk kondisi ini.
const knownPaths = [
  "/",
  "/aktivitas",
  "/aktivitas/:slug",
  "/struktur-organisasi",
  "/departemen",
  "/roadmap-matkul",
  "/beasiswa",
  "/pendaftaran",
  "/galeri",
  "/layanan/service-center",
  "/layanan/marketplace",
  "/layanan/dosen",
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
              <Route path="/departemen" element={<AnimatedPage><Departemen /></AnimatedPage>} />
              <Route path="/roadmap-matkul" element={<AnimatedPage><RoadmapMatkul /></AnimatedPage>} />
              <Route path="/beasiswa" element={<AnimatedPage><Beasiswa /></AnimatedPage>} />
              <Route path="/pendaftaran" element={<AnimatedPage><Pendaftaran /></AnimatedPage>} />
              <Route path="/galeri" element={<AnimatedPage><Galeri /></AnimatedPage>} />
              <Route path="/layanan/service-center" element={<AnimatedPage><ServiceCenter /></AnimatedPage>} />
              <Route path="/layanan/marketplace" element={<AnimatedPage><Marketplace /></AnimatedPage>} />
              <Route path="/layanan/dosen" element={<AnimatedPage><Dosen /></AnimatedPage>} />
              <Route path="*" element={<AnimatedPage><NotFound /></AnimatedPage>} />
            </Routes>
          </AnimatePresence>
        </main>
        {isKnownRoute && <Footer />}
      </div>
    </DesktopGate>
  );
}
