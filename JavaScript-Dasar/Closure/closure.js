// Closure : Kita bisa mengeluarkan function di local scope menjadi global Scope

function createAdder(value) {
  let owner = "Aditya";
  function add(param) {
    console.log(owner);
    return value + param;
  }
  return add;
}

let addTwo = createAdder(2);
console.log(addTwo(4));
console.log(addTwo(2));

let addTen = createAdder(10);
console.log(addTen(5));
console.log(addTen(3));
