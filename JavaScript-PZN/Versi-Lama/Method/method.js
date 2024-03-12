function Person() {
  this.firstName = "";
  this.lastName = "";

  // Method atau Function
  this.sayHello = function (name) {
    console.log(
      `Hallo ${name}, perkenalkan Nama Saya ${this.firstName} ${this.lastName}`
    );
  };
}

let budi = new Person();
budi.firstName = "Aditya";
budi.lastName = "Pratama";
budi.sayHello("Budi");
