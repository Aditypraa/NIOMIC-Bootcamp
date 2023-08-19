// JIka yang kiri true maka di ambil yang kiri terlebih dahulu
// OR : ||
console.log("Hello" || "");
console.log("" || []);
console.log(0 || "NOL");

// Contoh Penggunaan OPerator logika di non Boolean
let person = {
  firstname: "Aditya",
  lastname: "Pratama",
};

let nama = person.firstname || person.lastname;

// AND : &&
console.log("Hello" && "");
console.log("" && []);
console.log("" && "NOL");
