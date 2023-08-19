// Di arrow function di object tidak bisa mengakses kata kunci This

// contoh
let person = {
  name: "Aditya",
  sayHello: (name) => {
    console.log(`Hello ${name} perkenalkan saya ${this.name}`); // This INi tidak bisa di arrow Function
  },
};

person.sayHello("Budi");
