// Arrow Function
let lemparDadu = () => {
  return Math.floor(Math.random() * 6) + 1;
};
console.log(lemparDadu());

// ================================================================

// Function dengan Parameter/Argumen
// Parameter
let cobaParameter = (namaDepan, namaBelakang) => {
  console.log(`Perkenalkan Nama Saya ${namaDepan} ${namaBelakang}`);
};
cobaParameter("Aditya", "Pratama"); //Argumen

// ================================================================

// Penjumlahan dengan Function
function jumlahkan(a, b) {
  const total = a + b;
  return total;
}
console.log(`Totalnya adalah : ${jumlahkan(1, 5)}`);

// ================================================================

// Return
function cekJumlah(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    return "Bukan Angka";
  }
  return x + y;
}
let totalPenjumlahan = cekJumlah(3, 3);
console.log(totalPenjumlahan);

// Scope
let linux = "Debian";

function daftarLinux() {
  let linux = "Ubuntu";
  return linux;
}
console.log(linux);
console.log(daftarLinux());

// Lexical Scope
// function funcLuar() {
//   const nilaiLuar = "Value Bagian Luar";

//   function lebihDalam() {
//     let nilaiDalam = `ini function bagiandalam mengakses : ${nilaiLuar}`;
//     console.log(nilaiDalam);
//   }
//   lebihDalam();
// }
// console.log(funcLuar());

// Function sebagai Parameter
// function duaKali(func) {
//   func();
//   func();
// }
// function tes() {
//   const hasil = Math.floor(Math.random() * 6) + 1;
//   console.log(hasil);
// }
// duaKali(tes, tes);
