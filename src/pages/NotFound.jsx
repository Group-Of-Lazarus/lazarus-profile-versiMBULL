import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">
      <p className="font-display font-extrabold text-8xl text-blue-600 mb-4">404</p>
      <h1 className="font-display font-bold text-2xl text-slate-900 mb-3">
        Halaman Tidak Ditemukan
      </h1>
      <p className="text-slate-500 mb-8 max-w-sm">
        Halaman yang kamu cari mungkin sudah dipindahkan atau tidak tersedia.
      </p>
      <Link
        to="/"
        className="bg-blue-600 hover:bg-blue-500 transition-colors text-white text-sm font-semibold px-6 py-3 rounded-full"
      >
        Kembali ke Home
      </Link>
    </div>
  );
}
