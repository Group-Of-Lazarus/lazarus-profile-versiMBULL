// Album galeri, dikelompokkan per kegiatan HMPS Informatika.
//
// Cara nambah album baru:
// 1. Taruh foto-foto di public/ (bisa folder baru, contoh: public/galeri/nama-event/)
// 2. Tambahin object baru di array galeriAlbums di bawah, foto pertama di
//    array "foto" otomatis dipakai sebagai cover kalau field "cover" dikosongin.
// 3. Field "departemen" harus sama dengan slug di src/data/organisasi.js
//    (kosongkan "" kalau lintas-departemen/panitia gabungan).

export const galeriAlbums = [
  {
    slug: "it-camp-2026",
    judul: "IT CAMP 2026",
    deskripsi:
      "Kaderisasi mahasiswa baru Informatika di Villa Anyer Beach Resort — pengenalan jurusan, organisasi, dan keakraban angkatan.",
    departemen: "internal",
    tanggal: "2026-09-12",
    cover: "/aktivitas/IT-CAMP.png",
    foto: [{ src: "/aktivitas/IT-CAMP.png", caption: "Dokumentasi IT CAMP 2026" }],
  },
  {
    slug: "pelantikan-kabinet-lazarus",
    judul: "Pelantikan & Serah Terima Jabatan",
    deskripsi:
      "Momen pelantikan pengurus HMPS Informatika Kabinet Lazarus, serah terima estafet kepemimpinan dari Kabinet Sinergi.",
    departemen: "pao",
    tanggal: "2026-08-01",
    cover: "/kabinet-lazarus.png",
    foto: [
      { src: "/kabinet-lazarus.png", caption: "Kabinet Lazarus — masa khidmat 2026" },
      { src: "/kabinet-sinergi.png", caption: "Kabinet Sinergi — periode sebelumnya" },
    ],
  },
  {
    slug: "dokumentasi-umum-hmps",
    judul: "Dokumentasi Kegiatan Umum HMPS",
    deskripsi:
      "Kumpulan momen keseharian dan kebersamaan mahasiswa Informatika di berbagai kegiatan HMPS.",
    departemen: "internal",
    tanggal: "2026-01-10",
    cover: "/hmps-1.jpg",
    foto: [
      { src: "/hmps-1.jpg", caption: "Dokumentasi HMPS INF" },
      { src: "/hmps-2.jpg", caption: "Kegiatan komunitas HMPS INF" },
      { src: "/hmps-3.jpg", caption: "Penyambutan mahasiswa baru Informatika" },
    ],
  },
  {
    slug: "konsolidasi-departemen",
    judul: "Konsolidasi & Rapat Kerja Departemen",
    deskripsi:
      "Rapat kerja dan konsolidasi program kerja dari tujuh departemen HMPS Informatika masa khidmat 2026.",
    departemen: "pao",
    tanggal: "2026-08-15",
    cover: "/departemen/internal.jpg",
    foto: [
      { src: "/departemen/pao.jpg", caption: "Departemen PAO" },
      { src: "/departemen/internal.jpg", caption: "Departemen Internal" },
      { src: "/departemen/eksternal.jpg", caption: "Departemen Eksternal" },
      { src: "/departemen/kominfo.jpg", caption: "Departemen Kominfo" },
      { src: "/departemen/mikat.jpg", caption: "Departemen Minat & Bakat" },
      { src: "/departemen/pp.jpg", caption: "Departemen Pemberdayaan Perempuan" },
      { src: "/departemen/ekraf.jpg", caption: "Departemen Ekonomi Kreatif" },
    ],
  },
];
