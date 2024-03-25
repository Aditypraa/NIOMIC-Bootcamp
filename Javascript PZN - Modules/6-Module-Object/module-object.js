export let firstName = "Budianto";
export let middleName = "Nugroho";
export let lastName = "Jr";

export function hello() {
  return `Hallo guys`;
}

export class Person {
  constructor(nama) {
    this.name = nama;
  }

  sayHello() {
    return `Hallo ${this.name}`;
  }
}
