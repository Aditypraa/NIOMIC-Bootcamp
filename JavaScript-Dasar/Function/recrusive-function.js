// Menggunakan Factorial Perulangan
function factorial(value) {
  let result = 1;
  for (let i = 1; i <= value; i++) {
    result *= i;
  }
  return result;
}
console.log(factorial(7));
console.log(1 * 2 * 3 * 4 * 5 * 6 * 7);

// Menggunakan Recrusive Function
function factorialRecrusive(value) {
  // if (value === 1) {
  //   return 1;
  // } else {
  //   return value * factorialRecrusive(value - 1);
  // }

  return value === 1 ? 1 : value * factorialRecrusive(value - 1);

  //   Contoh Ternary 2
  //   let hasil = value === 1 ? 1 : value * factorialRecrusive(value - 1);
  //   return hasil;
}
console.log(factorialRecrusive(7));
