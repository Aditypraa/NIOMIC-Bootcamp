// Parent
class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHello(name) {
    return `Hello ${name}, Saya ${this.firstName} saya Seorang Karyawan`;
  }
}

// Child
class Manager extends Employee {
  // Jika Ingin membuat construktor di child Wajib Menggunakn keyword Super
  // Super adalah digunakan untuk memanggil construktor di parent dan ini bersifat wajib jika ingin membuat construktor di child
  constructor(firstName, lastName) {
    super(firstName); // Jika Tidak Di panggil maka akan terjadi eror
    this.lastName = lastName;
  }

  sayHello(name) {
    return `Hello ${name}, Saya ${this.firstName} ${this.lastName} Saya Seorang Manager`;
  }
}

let budi = new Employee("Budi");
console.log(budi.sayHello("Aditya"));

let aditya = new Manager("Angga", "Saputra");
console.log(aditya.sayHello("Aditya"));

// ================================================================

// Contoh 2
class Kendaraan {
  constructor(merek, harga) {
    this.merek = merek;
    this.harga = harga;
  }

  jalan(speed) {
    return `Kendaraan dengan Merek ${this.merek} dengan harga ${this.harga} mempunyai kecepatan ${speed}`;
  }
}

class Mobil extends Kendaraan {
  constructor(merek, harga, warna) {
    super(merek, harga);
    this.warna = warna;
  }

  jalan(speed) {
    return `Kendaraan ini ${this.merek} dengan kecepatan ${speed} berwarna ${this.warna} dengan Harga Jual ${this.harga}`;
  }
}

let toyota = new Kendaraan("Toyota", "1.500");
console.log(toyota.jalan("2500 km/jam"));

let avanza = new Mobil("Avanza", "5.5000", "Biru");
console.log(avanza.jalan("4000 km/jam"));
