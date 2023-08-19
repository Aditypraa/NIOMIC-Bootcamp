// Function di dalam function di sebut inner function

function outer() {
  // Ini adalah InnerFunction
  //   cuman bisa DI akses di dalam function outer
  function innerFunction(nama) {
    console.log(`Saya ${nama}`);
  }
  innerFunction("Aditya");
}
outer();
// innerFunction(); ini Akan error
