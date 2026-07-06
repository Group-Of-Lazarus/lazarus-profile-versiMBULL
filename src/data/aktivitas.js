export const aktivitasList = [
  {
    slug: "seminar-cyber-security",
    kategori: "SEMINAR",
    status: "selesai", // "akan-datang" | "berlangsung" | "selesai"
    tipe: "offline",
    lokasi: "UINSMH Banten",
    tanggalMulai: "2026-06-27",
    tanggalSelesai: "2026-06-27",
    durasi: "1 hari",
    judul: "Seminar Garda Digital",
    ringkas:
      "Di era AI, ancaman digital makin canggih — mulai dari pencurian data 🔒, phishing, deepfake 🕵️, hingga jejak digital yang bisa memengaruhi masa depan karier 💼.",
    cover: "gradient-blue",
    detail: {
      judulBesar: "GARDA DIGITAL 2026",
      subjudul: "Lindungi Privasi, Amankan Karier, Waspada Ancaman AI",
      deskripsi:
        "Seminar ini akan membahas cara memahami kejahatan digital modern, menjaga reputasi dan jejak digital, melindungi data pribadi, serta mendapatkan insight langsung dari praktisi cybersecurity profesional.",
      speakers: [
        { nama: "Yudhistira Arya Mutamang", peran: "Cyber Security Consultant" },
        { nama: "Renko Varel Angelo", peran: "Lead Reverse Engineering" },
      ],
      jadwal: "Sabtu, 27 Juni 2026",
      waktu: "09.15 WIB – selesai",
      tempat: "Aula Universitas BSI Jatiwaringin",
      benefit:
        "E-sertifikat untuk 60 orang tercepat, akses materi, networking, Klinik Digital, dan doorprize menarik.",
      target: "Terbuka untuk mahasiswa & umum",
      kuota: "Kuota terbatas — siapa cepat dia dapat!",
      kontak: [
        { nama: "Irham", telepon: "0813-1048-1842" },
        { nama: "Dinda", telepon: "0857-3172-1430" },
      ],
      penyelenggara: "Kabinet Lazarus",
    },
  },
];

export const filterStatus = [
  { key: "semua", label: "Semua" },
  { key: "akan-datang", label: "Akan Datang" },
  { key: "berlangsung", label: "Sedang Berlangsung" },
  { key: "selesai", label: "Selesai" },
];
