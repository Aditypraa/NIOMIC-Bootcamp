// Super bisa untuk mengakses super method dari class parent

class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }

  sayHello() {
    console.log(`Hello Employee, Saya ${this.firstName}`);
  }
}

class Manager extends Employee {
  // Super Construktor
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }

  // Super Method
  sayHello() {
    super.sayHello(); // Memanggil sayHello() method dari parent class
    console.log(`Hallo Manager, Saya ${this.firstName} ${this.lastName}`);
  }
}

let aditya = new Manager("Aditya", "Pratama");
aditya.sayHello();
