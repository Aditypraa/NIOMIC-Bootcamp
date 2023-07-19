/*
 * var = Variabel yang bisa dirubah dimana saja tetapi tidak ketat
 * let = variabel yang tidak bisa dirubah di local Scope
 * const = Variabel tetap dan tidak bisa dirubah
 */

// Cara Pertama
let namaDepan;
namaDepan = "Aditya";

// Cara Kedua
let namaBelakang = "Pratama";

document.writeln(`Nama Saya : ${namaDepan} ${namaBelakang} <br/>`);

// Memasukan Variabel dengan satu baris
let alamat = "Amerika",
  usia = "88",
  sekolah = "Smp Amerika 5";

let motorPertama = "Suprax";
motorPertama = "Astreax";
document.writeln(
  `Saya Beralamat di : ${alamat} <br/> usia saya sekarang : ${usia} <br/> saya sekolah di : ${sekolah}<br/>  Motor Saya ${motorPertama} <br/>`
);

// Variabel var adalah variabel yang bisa di akses dimana saja kekurangan variabel var yaitu tidak ketat
var a = `Ini Menggunakan Variabel " var "`;
document.writeln(a);

// Variabel CONST isi dari valuenya tidak bisa dirubah atau hasilnya tetap
const mobilPertama = "Lambo cuy";
mobilPertama = "Avanza";

document.writeln(`Mobil Saya : ${mobilPertama} <br/>`); // Maka Hasilnya tidak akan di tampilkan di browser
