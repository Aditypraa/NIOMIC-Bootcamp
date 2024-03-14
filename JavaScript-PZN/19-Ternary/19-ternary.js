const nilai = 75;
let ucapan;
if (nilai >= 75) {
  ucapan = "Selamat anda Lulus";
} else {
  ucapan = "Anda Tidak Lulus";
}

// Ternary OPerator
let ucapanTernary = nilai ? "Selamat anda Lulus" : "Anda Tidak Lulus";

console.log(ucapan);
console.log(ucapanTernary);
