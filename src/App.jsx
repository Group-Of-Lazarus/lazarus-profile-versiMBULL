import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Aktivitas from "./pages/Aktivitas";
import AktivitasDetail from "./pages/AktivitasDetail";
import StrukturOrganisasi from "./pages/StrukturOrganisasi";
import Sejarah from "./pages/Sejarah";
import Pendaftaran from "./pages/Pendaftaran";
import Galeri from "./pages/Galeri";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aktivitas" element={<Aktivitas />} />
          <Route path="/aktivitas/:slug" element={<AktivitasDetail />} />
          <Route path="/struktur-organisasi" element={<StrukturOrganisasi />} />
          <Route path="/sejarah" element={<Sejarah />} />
          <Route path="/pendaftaran" element={<Pendaftaran />} />
          <Route path="/galeri" element={<Galeri />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
