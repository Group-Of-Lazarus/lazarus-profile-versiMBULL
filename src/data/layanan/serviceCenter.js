// Data layanan Service Center HMPS Informatika.
// Estimasi harga & durasi bersifat INDIKATIF (bukan harga pasti) — sesuaikan
// dengan kebijakan Service Center HMPS Informatika sebelum dipublikasikan.
// Field "icon" cocokin ke komponen lucide-react di src/pages/layanan/ServiceCenter.jsx
//
// Field "gambar" — CARA GANTI KE FOTO ASLI:
// 1. Taruh foto dokumentasi layanan (hasil jepretan sendiri/tim) di folder
//    public/service-center/, kasih nama sesuai slug, contoh:
//    public/service-center/service-elektronik.jpg
// 2. Ganti value "gambar" di bawah dari URL Unsplash jadi path lokal,
//    contoh: gambar: "/service-center/service-elektronik.jpg"
// Sementara masih pakai foto stok Unsplash (free-to-use, unsplash.com/license)
// sebagai placeholder sampai foto asli tersedia.

export const serviceList = [
  {
    slug: "service-elektronik",
    icon: "Laptop",
    judul: "Service HP, Laptop, PC & Elektronik",
    deskripsi: "Perbaikan kerusakan hardware maupun software untuk HP, laptop, PC, dan perangkat elektronik lainnya.",
    contoh: [
      "Ganti layar & baterai HP/laptop",
      "Instal ulang OS & driver",
      "Bersihin PC dari virus/malware",
      "Servis charger, keyboard, engsel laptop",
    ],
    estimasi: "Rp 25.000 - Rp 300.000",
    durasi: "1 - 3 hari kerja",
    gambar: "https://images.unsplash.com/photo-1721333089073-215a56fd710c?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "upgrade-hardware-software",
    icon: "Cpu",
    judul: "Upgrade Hardware & Software",
    deskripsi: "Tingkatin performa perangkat kamu lewat upgrade komponen atau software terbaru.",
    contoh: [
      "Tambah/ganti RAM & SSD",
      "Upgrade sistem operasi",
      "Instal software & lisensi aplikasi",
      "Optimasi performa PC/laptop",
    ],
    estimasi: "Rp 50.000 - Rp 500.000",
    durasi: "1 - 2 hari kerja",
    gambar: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "project-maintenance-web-mobile",
    icon: "Code2",
    judul: "Project & Maintenance Web/Mobile",
    deskripsi: "Pembuatan website atau aplikasi mobile custom, lengkap dengan layanan maintenance berkala.",
    contoh: [
      "Website company profile / portofolio",
      "Aplikasi mobile Android sederhana",
      "Maintenance & update rutin",
      "Migrasi hosting & domain",
    ],
    estimasi: "Mulai Rp 300.000",
    durasi: "1 - 4 minggu",
    gambar: "https://images.unsplash.com/photo-1774901128283-64c62117216a?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "desain-ui-ux",
    icon: "Palette",
    judul: "Pembuatan Desain UI/UX",
    deskripsi: "Rancang desain antarmuka aplikasi/website yang rapi, modern, dan enak dipakai.",
    contoh: [
      "Wireframe & prototype (Figma)",
      "Desain UI aplikasi mobile/web",
      "Redesign tampilan produk lama",
      "Design system & style guide",
    ],
    estimasi: "Rp 150.000 - Rp 750.000",
    durasi: "3 - 10 hari kerja",
    gambar: "https://images.unsplash.com/photo-1658204212985-e0126040f88f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "service-elektronik-lainnya",
    icon: "Plug",
    judul: "Service Elektronik Lainnya",
    deskripsi: "Perbaikan perangkat elektronik rumah tangga & gadget di luar HP/laptop/PC.",
    contoh: [
      "Printer & scanner",
      "Speaker & perangkat audio",
      "Router & perangkat jaringan",
      "Perangkat elektronik rumahan lainnya",
    ],
    estimasi: "Rp 20.000 - Rp 200.000",
    durasi: "1 - 3 hari kerja",
    gambar: "https://images.unsplash.com/photo-1620283085439-39620a1e21c4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    slug: "pemasangan-smart-home",
    icon: "Home",
    judul: "Pemasangan Smart Home",
    deskripsi: "Instalasi & konfigurasi perangkat smart home biar rumah/kos kamu makin praktis.",
    contoh: [
      "Lampu & saklar pintar (smart switch)",
      "CCTV & kamera keamanan berbasis WiFi",
      "Smart plug & otomasi sederhana",
      "Integrasi perangkat lewat 1 aplikasi",
    ],
    estimasi: "Rp 100.000 - Rp 400.000",
    durasi: "1 hari kerja",
    gambar: "https://images.unsplash.com/photo-1558089687-f282ffcbc126?q=80&w=1600&auto=format&fit=crop",
  },
];
