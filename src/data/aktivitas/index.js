import itcamp from "./itcamp";

// Cara nambah aktivitas baru:
// 1. Bikin file baru di folder ini, contoh: pijar-desa.js (contoh isinya sama kayak itcamp.js,
//    tinggal ganti semua datanya, jangan lupa `export default namaAktivitas;` di baris terakhir)
//    Jangan lupa isi field `departemen` dengan slug departemen penyelenggaranya
//    (slug harus sama dengan slug di src/data/organisasi.js, contoh: "internal", "kominfo", dst)
//    supaya aktivitas ini muncul saat difilter lewat dropdown "Departemen".
// 2. Import di sini: import pijarDesa from "./pijar-desa";
// 3. Masukkan ke array aktivitasList di bawah ini.
//
// import pijarDesa from "./pijar-desa";

export const aktivitasList = [
    itcamp,
    // pijarDesa,
];

export const filterStatus = [
    { key: "semua", label: "Semua" },
    { key: "akan-datang", label: "Akan Datang" },
    { key: "berlangsung", label: "Sedang Berlangsung" },
    { key: "selesai", label: "Selesai" },
];
