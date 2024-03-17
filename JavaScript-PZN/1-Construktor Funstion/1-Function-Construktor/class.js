/*  
!!! Sebelum JavaScript ES6 : Pembuatan Class Di JavaScript Menggunakan Kata Kunci Function
Yang membedakan Function dan class Penamaan construktor function menggunakan UPPERCASE
*/

// Ini adalah Best Practice Penamaan Construktor Function
function Car() {
  // Pembuatan Property
  this.merek = "";
  this.warna = "";
  this.harga = "";
}

// Pembuatan Object
let avanza = new Car(); // Menggunakan Keyword New
avanza.merek = "Avanza";
avanza.warna = "Biru";
avanza.harga = 1.5;

console.log(avanza);

// Pembuatan Object
let supra = new Car(); // Menggunakan Keyword New
supra.merek = "Supra";
supra.warna = "Hijau";
supra.harga = 2.0;

console.log(supra);

// Pembuatan Class Dengan Construktor Function
function Laptop() {
  this.warna = "";
  this.harga = "";
}

let acer = new Laptop();
acer.warna = "Hitam";
acer.harga = 1.5;
console.log(acer);

let lenovo = new Laptop();
lenovo.warna = "Putih";
lenovo.harga = 2.5;
console.log(lenovo);
