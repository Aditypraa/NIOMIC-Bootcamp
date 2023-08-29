function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    return `Hallo ${name}, My Name ${this.firstName} ${this.lastName}`;
  };
}

let budi = new Person("Aditya", "Pratama");
console.log(budi.sayHello("Yanto"));
