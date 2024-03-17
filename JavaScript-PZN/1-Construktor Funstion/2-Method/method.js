// Contoh 1
function Person() {
  this.firstName = "";
  this.lastName = "";

  // Method atau Function
  this.sayHello = function (name) {
    console.log(
      `Hallo ${name}, perkenalkan Nama Saya ${this.firstName} ${this.lastName}`
    );
  };
}

let budi = new Person();
budi.firstName = "Aditya";
budi.lastName = "Pratama";
budi.sayHello("Budi");

// Contoh 2
function Mobil() {
  this.warna = "";
  this.harga = "";
  // Method
  this.tipe = function (model) {
    return `Mobil dengan warna ${this.warna} dan model ${model} dengan harga ${this.harga}`;
  };
}

let avanza = new Mobil();
avanza.warna = "Orange";
avanza.harga = "3.5000";
console.log(avanza.tipe("L300"));
