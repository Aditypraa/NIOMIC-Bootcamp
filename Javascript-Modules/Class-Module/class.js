export class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  sayHello(nama) {
    console.info(
      `Hallo ${nama}, Perkenalkan saya ${this.firstName} ${this.lastName}`
    );
  }
}
