// Parent
class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHello(name) {
    return `Hello ${name}, Saya Seorang Karyawan ${this.firstName}`;
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
    return `Hello ${name}, Saya Manager ${this.firstName} ${this.lastName}`;
  }
}

let budi = new Employee("Budi");
console.log(budi.sayHello("Aditya"));

let aditya = new Manager("Angga", "Saputra");
console.log(aditya.sayHello("Aditya"));
