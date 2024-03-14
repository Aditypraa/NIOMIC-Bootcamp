// Rest Parameter
function sum(name, ...data) {
  let total = 0;
  for (let item of data) {
    // total = total + item;
    total += item;
  }
  console.log(`Jumlah ${name} adalah = ${total}`);
}
sum(`Anggur`, 4, 4, 2);
sum("Buah Naga", 2, 5, 6);

// Spread Syntax
let spread = [10, 10, 20];
sum("Banana", ...spread);
