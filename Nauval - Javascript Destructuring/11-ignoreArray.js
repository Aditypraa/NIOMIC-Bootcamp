function fruits() {
  return ["apple", "orange", "mango"];
}

// Destructuring
// Menskip array yang ditengah
const [a, , m] = fruits();

console.log(a, m);
