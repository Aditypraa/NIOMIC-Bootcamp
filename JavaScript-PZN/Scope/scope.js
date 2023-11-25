// Global Scope
let counter = 0;

// Global Scope
function hitMe() {
  // local Scope
  counter++;
}
hitMe();

console.log(counter);
