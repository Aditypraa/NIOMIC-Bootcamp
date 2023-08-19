// Method atau Function di dalam Object

let person = {
  firstName: "Aditya",
  lastName: "Pratama",

  // Method
  sayHello: function (firstName, lastName) {
    console.log(`Hallo Saya ${firstName} ${lastName}`);
  },
};

console.log(person.firstName);
console.log(person.lastName);
person.sayHello("Aditya", "Pratama");
