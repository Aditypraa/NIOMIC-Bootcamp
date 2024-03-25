// Variabel
let nama = "Aditya Pratama";

// Function
function sum(first, second) {
  return first + second;
}

// Class
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello(name) {
    return `Hallo ${name}, Perkenalkan Nama saya ${this.firstName} ${this.lastName}`;
  }
}

// Multiple Export
export { nama, sum, Person };
