// Belajar Tipe Data

let nama = "Aditya Pratama"; //String value
let usia = 30; // Number
let tinggiBadan = 175.5; // Double atau Float
let boolean = true; // True False
let beratBadan;
let iphone = null;

beratBadan = 60;

if (iphone == null) {
  iphone = "Belum Punya";
} else {
  iphone = "Sudah Punya";
}

let saldoAwal = 50;
let saldoTambahan = 100;
let hutang = 20;
let saldoAkhir = saldoAwal + saldoTambahan - hutang;

alert(
  `Nama Saya : ${nama} dengan usisa : ${usia}, tinggi badan saya : ${tinggiBadan} dan berat badan saya : ${beratBadan}Kg, iphone : ${iphone}`
);

alert(
  `Saldo awal ${saldoAwal} saldo tambahan saya ${saldoTambahan} dan hutang saya ${hutang}. Total saldo saya ${saldoAkhir}`
);
