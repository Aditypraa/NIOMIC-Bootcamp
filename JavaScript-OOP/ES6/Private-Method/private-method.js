class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  //   Public Method atau Method Defaultnya
  sayHello(nama) {
    return `Hallo ${nama}, Saya ${this.firstName} ${this.lastName}`;
  }

  //   Private Method
  say(name) {
    if (name) {
      this.#sayWithName(name);
    } else {
      this.#sayWithoutName();
    }
  }
  #sayWithoutName() {
    console.log(`Hallo`);
  }
  #sayWithName(nama) {
    console.log(`Hallo ${nama}`);
  }
}

let budi = new Person("Aditya", "Pratama");
budi.say("Budi");
