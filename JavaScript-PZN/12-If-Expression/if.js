let nilaiUianSaya = 70;

if (nilaiUianSaya > 90) {
  console.log("Nilai UJian Anda Mantap Bang");
} else if (nilaiUianSaya > 80) {
  console.log("Sedikit Mantap");
} else if (nilaiUianSaya > 75) {
  console.log("Nice");
} else {
  console.log("Try Again Bang bang");
}

let umur = 19;
if (umur < 10) {
  console.log("Anak-Anak");
} else if (umur < 30) {
  console.log("Anak Muda");
} else if (umur < 30) {
  console.log("Orang Tua");
} else {
  console.log("Tidak Terdifinisi");
}

// Ternary Operator
// Ternary Operator Bisanya Untuk Nilai yang Hasilnya Boolean
let benar = false;
let hasil = benar ? "MantapBang" : "Kurang Mantap Si bang Try Again Ya";
console.log(hasil);
