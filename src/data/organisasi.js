// Data struktur organisasi HMPS Informatika UINSMHB — Masa Khidmat 2026
// Sumber: SK Dekan Fakultas Sains dan Teknologi No. 1407/Un.17/F.VI/PP.00.01/06/2026
//
// Field "foto" diisi path gambar (contoh: "/team/alief-rasyidin.png").
// Kosongkan ("") kalau fotonya belum ada — nanti otomatis tampil placeholder
// berupa lingkaran berisi inisial nama.

export const bph = {
  ketua: { nama: "Muhammad Alief Rasyidin", nim: "241730010", foto: "" },
  sekretaris: { nama: "Muhamad Arief Rachmatullah", nim: "241730035", foto: "" },
  bendahara: { nama: "Parhan Maulana", nim: "241730080", foto: "" },
};

// Urutan tab sesuai urutan di SK
export const departemenList = [
  {
    slug: "pao",
    nama: "PAO",
    namaLengkap: "Pengembangan Aparatur Organisasi",
    ketua: { nama: "Ahmad Fahmirifa Fahrurozi", nim: "241730025", foto: "" },
    sekretaris: { nama: "Khotibul Umami", nim: "251603086", foto: "" },
    anggota: [
      { nama: "Bahrul Ulumudin", nim: "241730090", foto: "" },
      { nama: "Nujma Fatima Ghauri Varadis", nim: "251603102", foto: "" },
      { nama: "Farhan Tirta Firdaus", nim: "251603055", foto: "" },
      { nama: "Dwi Rianti", nim: "251603018", foto: "" },
    ],
    proker: [
      { nama: "Upgrading Pengurus", tanggal: "Agustus 2026" },
      { nama: "Rapat Kerja (Raker)", tanggal: "September 2026" },
    ],
  },
  {
    slug: "internal",
    nama: "Internal",
    namaLengkap: "Departemen Internal",
    ketua: { nama: "Naufal Afaf Ekayana", nim: "241730032", foto: "/team/naufalafaf.png" },
    sekretaris: { nama: "Fierren Al-hilal Saepul Bahri", nim: "241730015", foto: "" },
    anggota: [
      { nama: "Muhfiz Zauzi", nim: "241730018", foto: "" },
      { nama: "Nazwa Althafah Athalia", nim: "241730017", foto: "" },
      { nama: "Bahrurozi", nim: "251603015", foto: "" },
      { nama: "Ahmad Baihaqi", nim: "251603033", foto: "" },
      { nama: "Mufarrihah Az-Zahra", nim: "251603059", foto: "" },
      { nama: "Nabilah Barliana Putri Dewi", nim: "251603076", foto: "" },
    ],
    proker: [
      { nama: "Keakraban Anggota", tanggal: "Agustus 2026" },
      { nama: "Malam Keakraban HMPS", tanggal: "November 2026" },
    ],
  },
  {
    slug: "eksternal",
    nama: "Eksternal",
    namaLengkap: "Departemen Eksternal",
    ketua: { nama: "Muhammad Rifki Hidayatulloh", nim: "241730008", foto: "" },
    sekretaris: { nama: "Athalla Rizqy Erlangga", nim: "241730077", foto: "" },
    anggota: [
      { nama: "Adila Muqtashida", nim: "241730001", foto: "" },
      { nama: "Rizky Dani Wibowo", nim: "251603007", foto: "" },
      { nama: "Anjani Meysun Nine Dzalail", nim: "251603027", foto: "" },
      { nama: "Alfiana", nim: "251603004", foto: "" },
      { nama: "Rosita", nim: "251603075", foto: "" },
    ],
    proker: [
      { nama: "Studi Banding Organisasi", tanggal: "Oktober 2026" },
      { nama: "Kunjungan Industri", tanggal: "Desember 2026" },
    ],
  },
  {
    slug: "kominfo",
    nama: "Kominfo",
    namaLengkap: "Komunikasi dan Informasi",
    ketua: { nama: "Muhammad Sulthan Fajri Rabbani", nim: "241730091", foto: "" },
    sekretaris: { nama: "Aab Abdulah", nim: "241730092", foto: "" },
    anggota: [
      { nama: "Abiyansyah", nim: "241730095", foto: "" },
      { nama: "Mohammad Irham Fastabie", nim: "241730012", foto: "" },
      { nama: "Alvin Juliana", nim: "251603016", foto: "" },
      { nama: "Kayla Putri Nabilqis", nim: "251603097", foto: "" },
      { nama: "Nilam Cahya Lestari", nim: "251603099", foto: "" },
      { nama: "Rayshard Fadlan Maulani", nim: "251603051", foto: "" },
    ],
    proker: [
      { nama: "Konten Media Sosial Mingguan", tanggal: "Sepanjang tahun" },
      { nama: "Peliputan & Dokumentasi Event", tanggal: "Sepanjang tahun" },
    ],
  },
  {
    slug: "mikat",
    nama: "Mikat",
    namaLengkap: "Minat dan Bakat",
    ketua: { nama: "Revan Sabilillah", nim: "241730023", foto: "" },
    sekretaris: { nama: "Mochamad Nurul Ayatullah", nim: "241730079", foto: "" },
    anggota: [
      { nama: "Randy Zahran", nim: "241730105", foto: "" },
      { nama: "Muhamad Zacky", nim: "251603009", foto: "" },
      { nama: "Sahrani Romadona", nim: "251603077", foto: "" },
      { nama: "Yanti Apriliyanti", nim: "251603001", foto: "" },
      { nama: "Sahansyah Abdillah", nim: "251603023", foto: "" },
    ],
    proker: [
      { nama: "IT Sport Tournament", tanggal: "Oktober 2026" },
      { nama: "Lomba Coding Internal", tanggal: "Januari 2027" },
    ],
  },
  {
    slug: "pemberdayaan-perempuan",
    nama: "P. Perempuan",
    namaLengkap: "Pemberdayaan Perempuan",
    ketua: { nama: "Riska Nurnajmah", nim: "241730028", foto: "" },
    sekretaris: { nama: "Lucy Amanda", nim: "241730014", foto: "" },
    anggota: [
      { nama: "Annisa Wening Galih", nim: "241730098", foto: "" },
      { nama: "Halida Hamzah", nim: "251603044", foto: "" },
      { nama: "Tria Nadirotun Yumna", nim: "251603038", foto: "" },
    ],
    proker: [
      { nama: "Seminar Kesetaraan & Ruang Aman", tanggal: "September 2026" },
      { nama: "Kelas Edukasi Perempuan", tanggal: "November 2026" },
    ],
  },
  {
    slug: "ekraf",
    nama: "Ekraf",
    namaLengkap: "Ekonomi Kreatif",
    ketua: { nama: "Rudi Ramdhan Fadhillah", nim: "241730078", foto: "" },
    sekretaris: { nama: "Ahmad Jibril Abdul Qudus", nim: "241730097", foto: "" },
    anggota: [
      { nama: "Muhammad Ari Fudholi", nim: "241730086", foto: "" },
      { nama: "Amar Subagja Firdaus", nim: "241730021", foto: "" },
      { nama: "Ima Imaniyah Hasanah", nim: "251603042", foto: "" },
      { nama: "Maulida Rahmania", nim: "251603092", foto: "" },
    ],
    proker: [
      { nama: "Bazar Kreatif Informatika", tanggal: "Oktober 2026" },
      { nama: "Pelatihan Kewirausahaan Digital", tanggal: "Februari 2027" },
    ],
  },
];
