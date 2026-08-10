// Data produk Marketplace HMPS Informatika.
// Harga masih contoh — sesuaikan dengan harga produksi/vendor sebenarnya.
// Field "gambar" diisi path foto produk asli kalau sudah ada (mulai "/").
// Kosongkan ("") kalau belum ada foto — nanti tampil placeholder gradient.

export const kategoriProduk = [
  { key: "semua", label: "Semua Produk" },
  { key: "pakaian", label: "Pakaian" },
  { key: "aksesoris", label: "Aksesoris" },
];

export const productList = [
  {
    slug: "kaos-angkatan-informatika",
    nama: "Kaos Angkatan Informatika",
    kategori: "pakaian",
    harga: 95000,
    deskripsi: "Kaos combed 24s dengan desain custom identitas angkatan, nyaman dipakai harian.",
    ukuran: ["S", "M", "L", "XL", "XXL"],
    gambar: "",
  },
  {
    slug: "hoodie-lazarus",
    nama: "Hoodie Kabinet Lazarus",
    kategori: "pakaian",
    harga: 165000,
    deskripsi: "Hoodie fleece tebal dengan bordir logo Kabinet Lazarus, edisi terbatas masa khidmat 2026.",
    ukuran: ["M", "L", "XL", "XXL"],
    gambar: "",
  },
  {
    slug: "pdh-informatika",
    nama: "PDH (Pakaian Dinas Harian) Informatika",
    kategori: "pakaian",
    harga: 135000,
    deskripsi: "Kemeja PDH resmi identitas Program Studi Informatika, cocok buat acara formal kampus.",
    ukuran: ["S", "M", "L", "XL", "XXL"],
    gambar: "",
  },
  {
    slug: "kaos-itcamp-2026",
    nama: "Kaos IT CAMP 2026",
    kategori: "pakaian",
    harga: 85000,
    deskripsi: "Merchandise resmi event kaderisasi IT CAMP 2026, desain eksklusif buat mahasiswa baru.",
    ukuran: ["S", "M", "L", "XL"],
    gambar: "/aktivitas/IT-CAMP.png",
  },
  {
    slug: "totebag-hmps",
    nama: "Totebag HMPS Informatika",
    kategori: "aksesoris",
    harga: 45000,
    deskripsi: "Totebag kanvas tebal, muat laptop 14 inci, desain minimalis logo HMPS.",
    ukuran: [],
    gambar: "",
  },
  {
    slug: "pin-lanyard-set",
    nama: "Pin & Lanyard Set",
    kategori: "aksesoris",
    harga: 25000,
    deskripsi: "Satu set pin akrilik + lanyard identitas HMPS Informatika Kabinet Lazarus.",
    ukuran: [],
    gambar: "",
  },
  {
    slug: "stiker-pack-lazarus",
    nama: "Stiker Pack Lazarus",
    kategori: "aksesoris",
    harga: 15000,
    deskripsi: "Paket 5 stiker vinyl waterproof dengan desain maskot & logo HMPS.",
    ukuran: [],
    gambar: "",
  },
  {
    slug: "gantungan-kunci-maskot",
    nama: "Gantungan Kunci Maskot",
    kategori: "aksesoris",
    harga: 20000,
    deskripsi: "Gantungan kunci akrilik karakter maskot kucing HMPS Informatika.",
    ukuran: [],
    gambar: "/maskot-kucing.png",
  },
];
