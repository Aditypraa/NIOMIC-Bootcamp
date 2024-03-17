class Karyawan {
  sayHello(name) {
    return `Saya ${name} saya Seorang Karyawan, dan Manager saya Bernama ${this.name}`;
  }
}

// MANAGER mewarisi Method dari class Karyawan
class Manager extends Karyawan {
  // sayHello(name) {
  //   return `Hallo saya ${name} seorang karyawan, Saya Mempunyai Manaer Yang Bernama ${this.name}`;
  // }
}

let orang1 = new Karyawan();
orang1.name = "Aditya";
console.log(orang1.sayHello("Budi"));

let orang2 = new Manager();
orang2.name = "Aditya";
console.log(orang2.sayHello("Budi"));
