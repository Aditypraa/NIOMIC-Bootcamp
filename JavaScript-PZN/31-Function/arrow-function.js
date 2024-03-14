let sayHello = (name) => {
  let nama = `Hallo Nama Saya ${name}`;
  console.log(nama);
};
sayHello("Aditya Pratama");

// Arrow function tanpa Block
let sayGoodbye = (fisrtName) => console.log(`Hallo Saya ${fisrtName}`);
sayGoodbye("Aditya");

// Return Value
let sum = (first, last) => first + last;
console.log(sum(1, 2));
