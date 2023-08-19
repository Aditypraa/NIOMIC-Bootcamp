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

// Ternary Operator
// Ternary Operator Bisanya Untuk Nilai yang Hasilnya Boolean
let benar = false;
let hasil = benar ? "MantapBang" : "Kurang Mantap Si bang Try Again Ya";
console.log(hasil);
