// Construktor
function Person(nama, umur) {
  this.nama = nama;
  this.umur = umur;
}

let orang1 = new Person("Jamaika", 12);
let orang2 = new Person("Julaika", 24);
let orang3 = new Person("Yadi", 50);

console.log(`Orang Pertama : ${orang1.nama} dengan umur ${orang1.umur}`);
console.log(`Orang Kedua : ${orang2.nama} dengan umur ${orang2.umur}`);
console.log(`Orang Ketiga : ${orang3.nama} dengan Umur ${orang3.umur}`);
