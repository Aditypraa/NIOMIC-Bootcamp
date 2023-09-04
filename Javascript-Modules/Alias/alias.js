let age = 21;

function hello(nama) {
  return `Hallo ${nama}`;
}

class Car {
  constructor(merek, cc) {
    this.merek = merek;
    this.cc = cc;
  }
  start() {
    return `${this.merek} Melaju Dengan kecepatan ${this.cc}`;
  }
}

export { age, hello, Car };
