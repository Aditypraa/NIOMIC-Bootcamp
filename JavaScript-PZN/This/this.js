let person = {
  name: "Aditya",

  sayHello: function (name) {
    console.log(`Hallo ${name} Nama Saya ${this.name}`);
  },
};

person.sayHello("Yanto");
