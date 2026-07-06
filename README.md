# LAZARUS — Template Website Komunitas

Clone struktur & animasi dari AOS, dibangun ulang dengan **React + Vite +
Tailwind CSS v4 + Framer Motion**. Gunakan ini sebagai starter untuk website
komunitas kamu sendiri — tinggal ganti nama, warna, data, dan foto.

## Stack

- **React 19** + **Vite** — build tool cepat
- **Tailwind CSS v4** — styling utility-first
- **React Router v7** — routing multi-halaman
- **Framer Motion** — animasi scroll-reveal & transisi
- **lucide-react** — icon set

## Struktur Folder

```
src/
├── components/       # Navbar, Footer, Hero, About, Culture, dst
│   ├── BrandIcons.jsx    # Icon Instagram/LinkedIn/YouTube custom (SVG)
│   ├── Reveal.jsx        # Wrapper animasi scroll-reveal (dipakai di semua section)
│   ├── Eyebrow.jsx       # Label pill kecil di atas heading
│   └── ActivityCard.jsx  # Kartu aktivitas (dipakai di Home & halaman Aktivitas)
├── pages/            # Satu file per halaman/route
│   ├── Home.jsx
│   ├── Aktivitas.jsx
│   ├── AktivitasDetail.jsx
│   ├── StrukturOrganisasi.jsx
│   ├── Sejarah.jsx
│   ├── Pendaftaran.jsx
│   ├── Galeri.jsx
│   └── NotFound.jsx
├── data/             # "Database" sementara — ganti dengan API/CMS asli
│   ├── organisasi.js
│   └── aktivitas.js
├── App.jsx           # Routing utama
├── main.jsx          # Entry point
└── index.css         # Tema warna & font global (Tailwind v4 @theme)
```

## Menjalankan Project

```bash
npm install
npm run dev       # development server
npm run build     # build production ke /dist
npm run preview   # preview hasil build
```

## Yang Perlu Kamu Ganti

1. **Nama & identitas** — cari-ganti "HMPS INFORMATIKA" di `Navbar.jsx`, `Footer.jsx`,
   `Hero.jsx`, dan `index.html`.
2. **Warna brand** — edit variabel di `src/index.css` bagian `@theme`
   (`--color-brand-blue`, dll), lalu sesuaikan kelas `bg-blue-600` /
   `text-blue-600` di seluruh komponen jika mau ganti hue.
3. **Data organisasi** — edit `src/data/organisasi.js` (ketua umum,
   sekretariat, sektor, dst).
4. **Data aktivitas/event** — edit `src/data/aktivitas.js`. Tiap item
   otomatis dapat halaman detail di `/aktivitas/:slug`.
5. **Foto** — ganti placeholder gradient di `About.jsx`, `ActivityCard.jsx`,
   dan `Galeri.jsx` dengan `<img src="..." />` foto asli komunitas kamu.
   Taruh file gambar di folder `public/` lalu referensikan dengan
   `/nama-file.jpg`.
6. **Kontak & sosial media** — edit array `platforms` di `Contact.jsx`.
7. **Form pendaftaran** — `Pendaftaran.jsx` saat ini hanya simulasi submit di
   frontend. Sambungkan ke backend/Google Form/Supabase sesuai kebutuhan.

## Animasi

Semua animasi scroll-reveal pakai komponen `<Reveal>` (Framer Motion,
`whileInView`), jadi konsisten di seluruh halaman dan otomatis menghormati
preferensi "reduced motion" pengguna. Halaman detail aktivitas & struktur
organisasi juga punya transisi tab (`AnimatePresence`) mirip web aslinya.

## Catatan

Ini adalah kloning **tampilan & struktur** untuk keperluan belajar / dasar
project komunitas kamu sendiri — bukan salinan 1:1 dari kode sumber asli
(yang tidak publik). Semua data organisasi & aktivitas di folder `data/`
adalah contoh yang perlu kamu sesuaikan dengan data komunitasmu sendiri.
