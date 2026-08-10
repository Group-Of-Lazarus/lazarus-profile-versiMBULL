// Data beasiswa yang relevan buat mahasiswa Informatika UINSMHB.
// Field "tipe" cuma nyimpen key kategori — label, ikon, dan warna badge-nya
// di-mapping di src/pages/Beasiswa.jsx (biar file data ini tetap "polos"
// dan gampang dipindah ke API/CMS asli suatu saat nanti).
//
// PENTING: field "jadwal" sengaja ditulis general (bulan/pola tahunan),
// BUKAN tanggal pasti — karena jadwal beasiswa gampang berubah tiap tahun.
// Selalu arahkan mahasiswa buat cek ulang ke link resmi sebelum daftar.

export const kategoriBeasiswa = [
  { key: "semua", label: "Semua Kategori" },
  { key: "pemerintah", label: "Pemerintah" },
  { key: "perbankan", label: "Perbankan / BUMN" },
  { key: "swasta", label: "Swasta / Yayasan" },
  { key: "teknologi", label: "Pelatihan & Teknologi" },
  { key: "sosial", label: "Sosial-Keagamaan" },
  { key: "kampus", label: "Internal Kampus" },
];

export const beasiswaList = [
  {
    slug: "kip-kuliah",
    nama: "KIP Kuliah",
    penyelenggara: "Kementerian Pendidikan Tinggi, Sains, dan Teknologi (Kemdiktisaintek)",
    tipe: "pemerintah",
    deskripsi:
      "Bantuan biaya kuliah penuh plus uang saku bulanan bagi mahasiswa dari keluarga kurang mampu namun berprestasi, mulai dari jalur SNBP, SNBT, hingga jalur mandiri.",
    untukSiapa:
      "Siswa SMA/SMK sederajat yang baru lulus dan termasuk keluarga kurang/rentan mampu (terdata DTKS/P3KE atau kriteria setara).",
    benefit: "Bebas UKT/SPP penuh selama masa studi + bantuan biaya hidup bulanan.",
    jadwal: "Dibuka tiap awal tahun mengikuti linimasa SNBP/SNBT — pantau jadwal resminya tiap tahun.",
    link: "https://kip-kuliah.kemdiktisaintek.go.id/",
    catatan: "Mahasiswa on-going yang sudah jadi penerima bisa lanjut tiap semester lewat SIM KIP Kuliah tanpa daftar ulang dari nol.",
  },
  {
    slug: "beasiswa-bank-indonesia",
    nama: "Program Bantuan Pendidikan Kebanksentralan (Beasiswa BI)",
    penyelenggara: "Bank Indonesia",
    tipe: "perbankan",
    deskripsi:
      "Beasiswa dari bank sentral RI untuk mahasiswa aktif berprestasi, sekaligus membuka akses ke komunitas Generasi Baru Indonesia (GenBI) untuk pelatihan leadership & soft skill.",
    untukSiapa:
      "Mahasiswa aktif S1 (umumnya mulai semester 3-6), memenuhi IPK minimal sesuai ketentuan kampus, aktif organisasi jadi nilai plus.",
    benefit: "Bantuan dana bulanan + pembinaan kepemimpinan lewat komunitas GenBI.",
    jadwal: "Dibuka berkala tiap tahun — jadwal & link pendaftaran ditentukan oleh Bagian Kemahasiswaan kampus.",
    link: "https://www.bi.go.id/",
    catatan: "UIN Sultan Maulana Hasanuddin Banten termasuk salah satu kampus mitra Beasiswa Reguler BI — pantau info dari Bagian Kemahasiswaan kampus.",
  },
  {
    slug: "digital-talent-scholarship",
    nama: "Digital Talent Scholarship (DTS)",
    penyelenggara: "Kementerian Komunikasi dan Digital (Komdigi) RI",
    tipe: "teknologi",
    deskripsi:
      "Pelatihan intensif gratis di bidang pemrograman, data science, cybersecurity, cloud, sampai AI — lengkap sertifikat & peluang magang lewat platform Diploy. Paling relevan buat anak Informatika!",
    untukSiapa:
      "WNI, mahasiswa aktif (termasuk tingkat akhir) hingga umum, sesuai kategori akademi pelatihan yang dipilih (Fresh Graduate Academy, Thematic Academy, dll).",
    benefit: "Pelatihan gratis, sertifikat kompetensi, akses mentor & virtual internship.",
    jadwal: "Dibuka beberapa gelombang tiap tahun, tergantung tema akademi.",
    link: "https://digitalent.kominfo.go.id/",
    catatan: "",
  },
  {
    slug: "beasiswa-unggulan",
    nama: "Beasiswa Unggulan — Masyarakat Berprestasi",
    penyelenggara: "Kementerian Pendidikan Dasar dan Menengah RI",
    tipe: "pemerintah",
    deskripsi:
      "Beasiswa nasional untuk individu berprestasi yang ingin melanjutkan studi sarjana, magister, atau doktor di dalam maupun luar negeri.",
    untukSiapa:
      "Memiliki prestasi akademik/non-akademik yang bisa dibuktikan, memenuhi syarat kemampuan intelektual, emosional, dan spiritual sesuai ketentuan.",
    benefit: "Biaya pendidikan & biaya pendukung studi.",
    jadwal: "Dibuka berkala, umumnya menyesuaikan tahun ajaran baru.",
    link: "https://beasiswaunggulan.kemendikdasmen.go.id/",
    catatan: "",
  },
  {
    slug: "djarum-beasiswa-plus",
    nama: "Djarum Beasiswa Plus",
    penyelenggara: "Djarum Foundation",
    tipe: "swasta",
    deskripsi:
      "Beasiswa prestasi buat mahasiswa semester 4, lengkap dengan pembinaan soft skill lewat komunitas Beswan Djarum (leadership, entrepreneurship, dll).",
    untukSiapa: "Mahasiswa S1/D4 semester 4 di kampus mitra Djarum Foundation, IPK minimal 3.00.",
    benefit: "Uang saku bulanan selama 1 tahun + pelatihan soft skill.",
    jadwal: "Dibuka 1 kali per tahun, umumnya sekitar Maret-Juli.",
    link: "https://djarumbeasiswaplus.org/",
    catatan: "Cek dulu apakah kampus kamu termasuk daftar perguruan tinggi mitra di website resminya.",
  },
  {
    slug: "beasiswa-dataprint",
    nama: "Beasiswa DataPrint",
    penyelenggara: "DataPrint",
    tipe: "swasta",
    deskripsi:
      "Beasiswa berbasis esai yang terbuka untuk pelajar SMP/SMA sederajat maupun mahasiswa D3/D4/S1 dari semua jurusan, tanpa syarat kampus mitra.",
    untukSiapa: "Pelajar/mahasiswa aktif, cukup isi formulir & esai singkat sesuai tema yang ditentukan.",
    benefit: "Dana pendidikan langsung ke rekening penerima.",
    jadwal: "Periode pendaftaran dibuka beberapa kali dalam setahun.",
    link: "https://beasiswadataprint.com/",
    catatan: "",
  },
  {
    slug: "beasiswa-cendekia-baznas",
    nama: "Beasiswa Cendekia BAZNAS",
    penyelenggara: "Badan Amil Zakat Nasional (BAZNAS)",
    tipe: "sosial",
    deskripsi:
      "Beasiswa dari dana zakat nasional untuk mahasiswa on-going, dengan prioritas khusus buat jurusan STEM — termasuk Ilmu Komputer/Informatika.",
    untukSiapa: "Mahasiswa aktif S1/D4 semester 5 di kampus mitra BAZNAS, IPK minimal 3.00, prioritas jurusan STEM.",
    benefit: "Subsidi UKT per semester, bantuan biaya riset, serta pembinaan karakter.",
    jadwal: "Dibuka 1 kali per tahun, umumnya pertengahan tahun.",
    link: "https://baznas.go.id/",
    catatan: "Program studi Informatika masuk kategori prioritas STEM di program ini.",
  },
  {
    slug: "beasiswa-internal-kampus",
    nama: "Beasiswa PPA & BBP-PPA (Internal Kampus)",
    penyelenggara: "UIN Sultan Maulana Hasanuddin Banten",
    tipe: "kampus",
    deskripsi:
      "Beasiswa Peningkatan Prestasi Akademik (PPA) dan Bantuan Biaya Pendidikan (BBP-PPA) yang dikelola langsung oleh kampus untuk mahasiswa berprestasi maupun yang membutuhkan bantuan biaya kuliah.",
    untukSiapa: "Mahasiswa aktif UINSMHB dengan IPK & syarat administratif sesuai ketentuan Bagian Kemahasiswaan tiap tahunnya.",
    benefit: "Bantuan biaya pendidikan/hidup dari anggaran kampus & pemerintah.",
    jadwal: "Info & jadwal pendaftaran diumumkan langsung oleh Bagian Kemahasiswaan/Akademik kampus.",
    link: "",
    catatan: "Belum ada link pendaftaran online — pantau pengumuman resmi dari Bagian Kemahasiswaan UINSMHB.",
  },
];
