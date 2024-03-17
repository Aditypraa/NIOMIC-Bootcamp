class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `My Name ${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    let result = value.split(" ");
    this.firstName = result[0];
    this.lastName = result[1];
  }
}

let budi = new Person("Budi", "Nugraha");
console.log(budi);
console.log(budi.fullName);

// Set
budi.fullName = "Aditya Pratama";
console.log(budi);
console.log(budi.fullName);
