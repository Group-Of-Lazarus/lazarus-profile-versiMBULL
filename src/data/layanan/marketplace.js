// Data produk Marketplace HMPS Informatika.
// Harga masih contoh — sesuaikan dengan harga produksi/vendor sebenarnya.
//
// Field "gambar" berupa ARRAY path/URL foto (bukan satu foto doang) — dipakai
// buat galeri di ProductGalleryCard (foto utama + strip thumbnail di bawahnya,
// tinggal klik thumbnail buat ganti foto utama).
//
// Sementara masih pakai foto stok Unsplash (free-to-use, unsplash.com/license)
// sebagai placeholder karena foto produk asli belum ada. Cara ganti ke foto
// asli nanti:
// 1. Buat folder public/marketplace/<slug-produk>/, taruh foto di situ
//    (boleh beberapa foto, urutan bebas — foto pertama di array jadi foto
//    utama yang tampil duluan).
// 2. Ganti array "gambar" di bawah dari URL Unsplash jadi path lokal, contoh:
//    gambar: ["/marketplace/pdh-angkatan-informatika/1.jpg", ".../2.jpg"]

export const productList = [
  {
    slug: "pdh-angkatan-informatika",
    nama: "PDH Angkatan Informatika",
    tagline: "[SERAGAM KEBANGGAAN]",
    deskripsi: [
      "PDH angkatan? Wajib punya!",
      "Biar makin kompak pas acara formal kampus, seminar, atau kegiatan organisasi, PDH angkatan Informatika ini jadi identitas kekompakan satu angkatan.",
      "Bahan kombinasi kain kemeja premium yang adem dipakai seharian, bordir logo HMPS di dada rapi dan awet, gak gampang luntur meski sering dicuci.",
      "Harganya Rp 130.000 - Rp 150.000 aja! Sudah termasuk bordir nama & NIM sesuai request.",
    ],
    harga: "Rp 130.000 - Rp 150.000",
    varian: ["S", "M", "L", "XL", "XXL"],
    gambar: [
      "https://images.unsplash.com/photo-1651761179569-4ba2aa054997?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1671438118097-479e63198629?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1586363129094-d7a38564fae1?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1717127332831-1c0870daf526?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    slug: "atribut-pengenalan-lingkungan-kampus",
    nama: "Atribut Pengenalan Lingkungan Kampus",
    tagline: "[SIAP JADI MABA]",
    deskripsi: [
      "Udah siap jadi mahasiswa baru Informatika?",
      "Paket atribut PLK ini isinya lengkap: name tag, tali lanyard, topi identitas, sampai buku catatan kegiatan — wajib dipakai & dibawa selama masa Pengenalan Lingkungan Kampus.",
      "Bahan lanyard tebal gak gampang putus, name tag anti pudar, topi nyaman dipakai seharian di bawah terik.",
      "Cuma Rp 45.000 - Rp 65.000 loh buat satu paket lengkap! Yuk siap-siap jadi maba kece.",
    ],
    harga: "Rp 45.000 - Rp 65.000",
    varian: [],
    gambar: [
      "https://images.unsplash.com/photo-1704269523788-f2bb9885e583?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1769142726489-6f40b1c575c5?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1722929025573-3d461531ac4d?q=80&w=1200&auto=format&fit=crop",
    ],
  },
  {
    slug: "paket-alat-iot",
    nama: "Paket Alat IoT untuk Praktikum",
    tagline: "[BUILD YOUR PROJECT]",
    deskripsi: [
      "Lagi butuh komponen buat tugas praktikum atau project IoT?",
      "Paket ini isinya microcontroller ESP32/Arduino Uno, breadboard, kabel jumper, plus beberapa sensor dasar (suhu, gerak, cahaya) — siap pakai buat eksperimen.",
      "Semua komponen sudah dicek kualitasnya, cocok buat mahasiswa yang lagi ngoding sekaligus ngoprek hardware.",
      "Harga mulai Rp 150.000 - Rp 350.000 tergantung paket yang dipilih (Basic/Lengkap).",
    ],
    harga: "Rp 150.000 - Rp 350.000",
    varian: ["Paket Basic", "Paket Lengkap"],
    gambar: [
      "https://images.unsplash.com/photo-1553406830-ef2513450d76?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1631378297854-185cff6b0986?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1649959168260-2eb9702d7b69?q=80&w=1200&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1557855506-3619a44bab73?q=80&w=1200&auto=format&fit=crop",
    ],
  },
];
