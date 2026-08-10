# LAZARUS — Website HMPS Informatika UINSMHB

Website resmi Himpunan Mahasiswa Program Studi Informatika UINSMHB, kabinet
**Lazarus**. Dibangun dengan **React + Vite + Tailwind CSS v4 + Framer
Motion**.

## Stack

- **React 19** + **Vite** — build tool cepat
- **Tailwind CSS v4** — styling utility-first (token warna via `@theme` di `index.css`)
- **React Router v7** — routing multi-halaman
- **Framer Motion** — animasi scroll-reveal, transisi halaman, hover effect, marquee
- **GSAP** — animasi tambahan (dipakai di beberapa komponen seperti `RotatingText`)
- **lucide-react** — icon set
- **react-helmet-async** — SEO (title/meta per halaman, Open Graph, JSON-LD)
- **clsx** + **tailwind-merge** — helper `cn()` untuk gabungin className dengan aman (dipakai komponen ala Aceternity UI)

## Struktur Folder

```
src/
├── components/
│   ├── ui/                    # Komponen UI reusable ala Aceternity UI (disesuaikan tema project)
│   │   ├── card-hover-effect.jsx   # Card hover + modal "Lihat Proker" (dipakai di Culture.jsx)
│   │   ├── typewriter-effect.jsx   # Heading animasi ketik (dipakai di Culture.jsx)
│   │   └── dropdown.jsx            # Dropdown filter reusable (dipakai di ActivityPreview & Aktivitas)
│   ├── Navbar.jsx, Footer.jsx, Hero.jsx, About.jsx, VisiMisi.jsx
│   ├── Culture.jsx             # Section "Tugas dan Fungsi Departemen" (pakai card-hover-effect + typewriter-effect)
│   ├── ActivityCard.jsx        # Kartu aktivitas (dipakai di Home & halaman Aktivitas)
│   ├── ActivityPreview.jsx     # Section "Aktivitas Terbaru" di Home, dengan filter status & departemen
│   ├── Marquee.jsx             # Banner berjalan (children di-duplikat, animasi CSS `animate-marquee`)
│   ├── DesktopGate.jsx         # Blokir tampilan di bawah 1024px, tampilin maskot + pesan "buka di desktop"
│   ├── Seo.jsx                 # Komponen SEO reusable (title, meta description, OG, canonical, JSON-LD)
│   ├── TeamCard.jsx, PageHero.jsx, Reveal.jsx, Eyebrow.jsx, BrandIcons.jsx
│   ├── AnimatedPage.jsx        # Wrapper transisi antar halaman
│   ├── ThemeToggle.jsx         # Toggle dark/light mode
│   └── BlurText.jsx, TextReveal.jsx, RotatingText.jsx, TiltCard.jsx, MagneticButton.jsx, PhotoStack.jsx
├── pages/                      # Satu file per halaman/route
│   ├── Home.jsx
│   ├── Aktivitas.jsx            # List aktivitas + filter dropdown (status & departemen)
│   ├── AktivitasDetail.jsx      # Detail 1 aktivitas (route /aktivitas/:slug)
│   ├── StrukturOrganisasi.jsx
│   ├── Departemen.jsx
│   ├── RoadmapMatkul.jsx        # Roadmap mata kuliah semester 1-8 (route /roadmap-matkul)
│   ├── Beasiswa.jsx             # Info beasiswa buat mahasiswa Informatika (route /beasiswa)
│   ├── Pendaftaran.jsx
│   ├── Galeri.jsx                # Album foto per kegiatan + lightbox
│   ├── layanan/
│   │   ├── ServiceCenter.jsx     # route /layanan/service-center
│   │   ├── Marketplace.jsx       # route /layanan/marketplace
│   │   └── Dosen.jsx             # route /layanan/dosen
│   └── NotFound.jsx
├── data/                        # "Database" sementara — ganti dengan API/CMS asli kalau sudah siap
│   ├── organisasi.js            # BPH, departemen (nama, slug, anggota, proker)
│   ├── beasiswa.js               # Daftar beasiswa + kategori filter
│   ├── roadmap.js                # Matkul semester 1-8 + kategori (wajib umum/prodi/peminatan/dst)
│   ├── galeri.js                  # Album foto per kegiatan
│   ├── dosen.js                   # Data dosen (CONTOH — ganti dengan data asli, lihat komentar di file)
│   ├── layanan/
│   │   ├── serviceCenter.js       # Daftar jasa Service Center
│   │   └── marketplace.js         # Daftar produk Marketplace
│   └── aktivitas/                 # Satu file per aktivitas + index.js yang menggabungkan semuanya
│       ├── index.js              # export aktivitasList & filterStatus
│       └── itcamp.js             # Contoh 1 aktivitas
├── lib/
│   └── utils.js                 # Helper cn() untuk Tailwind (dipakai komponen di src/components/ui)
├── context/
│   └── ThemeContext.jsx         # Provider dark/light mode (class `.dark` di html)
├── App.jsx                      # Routing utama, dibungkus <DesktopGate>
├── main.jsx                     # Entry point, dibungkus <HelmetProvider>
└── index.css                    # Tema warna & font global (Tailwind v4 @theme), keyframes marquee
```

## Menjalankan Project

```bash
npm install
npm run dev       # development server
npm run build     # build production ke /dist
npm run preview   # preview hasil build
```

## Data Penting

1. **Nama & identitas** — cari-ganti "HMPS INFORMATIKA" / "LAZARUS" di
   `Navbar.jsx`, `Footer.jsx`, `Hero.jsx`, `index.html`, dan `Seo.jsx`
   (`SITE_NAME`).
2. **Warna brand** — edit variabel di `src/index.css` bagian `@theme`
   (`--brand`, `--brand-hover`, `--brand-text`, dll — brand utama saat ini
   Royal Blue `#2D4FA5`).
3. **Data organisasi** — edit `src/data/organisasi.js`: BPH (ketua,
   sekretaris, bendahara) dan tiap departemen (`nama`, `slug`, `anggota`,
   dan `proker` — array `{ nama, tanggal }` yang muncul di modal "Lihat
   Proker" pada Culture.jsx serta filter dropdown Aktivitas).
4. **Data aktivitas/event** — tambah file baru di `src/data/aktivitas/`
   (contoh format lihat `itcamp.js`), lalu import & daftarkan ke
   `aktivitasList` di `src/data/aktivitas/index.js`. **Jangan lupa isi
   field `departemen`** (slug departemen penyelenggara, harus sama dengan
   slug di `organisasi.js`) supaya aktivitas itu ke-filter dengan benar di
   dropdown "Proker" pada halaman Aktivitas. Tiap item otomatis dapat
   halaman detail di `/aktivitas/:slug`.
5. **Foto** — taruh file gambar di folder `public/`, referensikan dengan
   `/nama-file.jpg` (contoh: `logo_hmps.png`, `mascot-kucing.png`,
   `PageHero-hmps.jpg`).
6. **Kontak & sosial media** — edit array `platforms` di `Contact.jsx`.
7. **Form pendaftaran** — `Pendaftaran.jsx` saat ini hanya simulasi submit
   di frontend. Sambungkan ke backend/Google Form/Supabase sesuai
   kebutuhan.
8. **DesktopGate** — `src/components/DesktopGate.jsx` mem-block tampilan
   di bawah breakpoint `1024px` (variabel `BREAKPOINT`) dan menampilkan
   maskot (`public/mascot-kucing.png`) karena tampilan responsive (HP/tablet)
   belum dikembangkan. Hapus/ubah komponen ini di `App.jsx` kalau versi
   responsive sudah siap.
9. **SEO** — komponen `<Seo />` (di `src/components/Seo.jsx`) dipasang di
   tiap halaman untuk title, meta description, canonical, Open Graph, dan
   JSON-LD. **Ganti `SITE_URL`** di `Seo.jsx` serta URL di `index.html`,
   `public/robots.txt`, dan `public/sitemap.xml` begitu domain final sudah
   ada. Ingat update manual `public/sitemap.xml` tiap nambah aktivitas
   baru.

## Fitur yang Sudah Ada

- **Dark/Light mode** — toggle di Navbar, disimpan via `ThemeContext`.
- **Filter Aktivitas** — dropdown status (Semua/Akan Datang/Berlangsung/
  Selesai) dan dropdown departemen, tersedia di section Aktivitas Home
  (`ActivityPreview.jsx`) dan halaman `/aktivitas` (dengan tambahan search
  box).
- **Card Hover Effect + Modal Proker** — di section "Tugas dan Fungsi
  Departemen" (Home), tiap departemen bisa diklik "Lihat Proker" untuk
  lihat daftar program kerja.
- **Typewriter heading** — animasi ketik pada judul section departemen.
- **Marquee kapsul** — banner berjalan gradient di Home berisi logo,
  nama organisasi, deskripsi, badge, dan tombol CTA, animasinya nyambung
  tanpa putus (loop seamless).
- **Desktop-only gate** — halaman diblokir dengan maskot kalau dibuka dari
  layar < 1024px.
- **SEO dasar** — title/meta per halaman, sitemap, robots.txt, Open Graph.

## Deploy

Project ini sudah pernah di-deploy ke **Vercel** (framework preset: Vite,
build command `npm run build`, output directory `dist`). Auto-deploy aktif
tiap `git push` ke branch utama repo GitHub organisasi.
