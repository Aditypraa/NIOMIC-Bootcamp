// Latihan 1

/*
1. Promp untuk mengetahui saldo akhir dari inputan user
2. Menentukan hari dari tanggal yang ada saat ini
*/

let saldoAwal = Number(prompt(`Masukan saldo Awal`));
let saldoTambahan = Number(prompt(`Masukan Saldo Tambahan`));
let hutang = Number(prompt(`Masukan Jumlah Hutang anda`));
let saldoAkhir = saldoAwal + saldoTambahan - hutang;

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let currentDate = `${day} - ${month} - ${year}`;

document.getElementById("jumlah").innerHTML = saldoAkhir;
document.getElementById("hari").innerHTML = currentDate;
