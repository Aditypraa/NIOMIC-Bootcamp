class Karyawan {
  sayHello(name) {
    return `Saya ${name} saya Seorang Karyawan, dan Manager saya Bernama ${this.name}`;
  }
}

// MANAGER mewarisi Method dari class Karyawan
class Manager extends Karyawan {
  sayHello(name) {
    return `Hallo saya ${name}, Saya Mempunyai Karyawan Yang Bernama ${this.name}`;
  }
}

let budi = new Karyawan();
budi.name = "Aditya";
console.log(budi.sayHello("Budi"));

let aditya = new Manager();
aditya.name = "Budi";
console.log(aditya.sayHello("Aditya"));
