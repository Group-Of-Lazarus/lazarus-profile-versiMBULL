import itcamp from "./itcamp";

// Cara nambah aktivitas baru:
// 1. Bikin file baru di folder ini, contoh: pijar-desa.js (contoh isinya sama kayak itcamp.js,
//    tinggal ganti semua datanya, jangan lupa `export default namaAktivitas;` di baris terakhir)
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
