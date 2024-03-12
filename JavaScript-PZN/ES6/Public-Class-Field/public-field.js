class Person {
  // Public Field
  firstName;
  lastName;
  balance = 0;

  // Kita bisa Ubah value/field dari public field menggunakan construktor
  constructor(firstName, lastName) {
    // [this.firstName] diambil dari public field kemudian firstName di ambil dari parameter construktor
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayHello() {
    return `Hallo Perkenalkan nama saya ${this.firstName} ${this.lastName}. balance : ${this.balance}`;
  }
}

let aditya = new Person("Aditya", "Pratama");
console.log(aditya.sayHello());
