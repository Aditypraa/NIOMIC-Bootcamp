// Constructor Function / Class
function Person() {
  // Property
  this.namaDepan = "";
  this.namaBelakang = "";

  // Method / Function di dalam class
  this.sayHello = (name) => {
    console.log(
      `Hallo ${name}, Perkenalkan Nama saya adalah ${this.namaDepan} ${this.namaBelakang}`
    );
  };
}

// Object
let orang1 = new Person();

// Mengubah Value property
orang1.namaDepan = "Aditya";
orang1.namaBelakang = "Pratama";
orang1.sayHello("Anton");
console.log(orang1);

// Object
let orang2 = new Person();

// Mengubah Value Property
orang2.namaDepan = "Budi";
orang2.namaBelakang = "Santoso";
orang2.sayHello("Cici");
console.log(orang2);
