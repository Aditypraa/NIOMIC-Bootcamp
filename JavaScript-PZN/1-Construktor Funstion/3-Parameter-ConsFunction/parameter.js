// Contoh 1
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    return `Hallo ${name}, My Name ${this.firstName} ${this.lastName}`;
  };
}

let budi = new Person("Aditya", "Pratama");
console.log(budi.sayHello("Yanto"));

// Contoh 2
function Orang(name, age) {
  this.name = name;
  this.age = age;
  this.menyapa = function (nama) {
    return `Hallo ${nama}. Perkenalkan saya ${this.name} dengan Umur ${this.age}`;
  };
}

let budianto = new Orang("Putra", 25);
console.log(budianto.menyapa("budianto"));
