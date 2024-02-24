/*
1. For
2. While
3. For Of
4. For In
*/

// FOR
for (let i = 0; i <= 10; i++) {
  console.log(`Perulangan Ke ${i}`);
}

for (let a = 0; a <= 10; a += 2) {
  console.log(`Ke - ${a}`);
}

for (let kurang = 10; kurang >= 1; kurang--) {
  console.log(`ke-${kurang}`);
}

// Mendapatkan Index Array Dengan Perulangan For
let hewan = ["Kucing", "Sapi", "Kambing", "Kerbau", "Harimau"];
for (let i = 0; i < hewan.length; i++) {
  console.log(`${i + 1}. ${hewan[i]}`);
}

// Nested Loop
let pilihanGanda = "abcd";
for (let i = 1; i < pilihanGanda.length; i++) {
  console.log(`${i} Soal Nomor ${i} :`);
  for (let j = 0; j < pilihanGanda.length; j++) {
    console.log(`${pilihanGanda[j]} Jawaban`);
  }
}

// Nested Array Dan Nested Loop
const studentRow = [
  ["Alif", "Lusi", "Arul"],
  ["OLiv", "Hendra", "Yanto"],
  ["Samuel", "Jeus", "Hadi"],
];

for (let i = 0; i < studentRow.length; i++) {
  let row = studentRow[i];
  console.log(`Seat Row #${i + 1}}`);
  for (let j = 0; j < row.length; j++) {
    console.log(`  ${row[j]}`);
  }
}

// For Of : Digunakan Untuk Mencari Index ARRAY
for (row of studentRow) {
  for (student of row) {
    console.log(student);
  }
}

// For In : Digunakan Untuk Mencari Property Object
const murids = {
  olivia: 20,
  aril: 50,
  arul: 60,
  dewi: 70,
  kaguya: 80,
};

for (let murid in murids) {
  console.log(`${murid} Dengan Nilai : ${murids[murid]}`);
}
