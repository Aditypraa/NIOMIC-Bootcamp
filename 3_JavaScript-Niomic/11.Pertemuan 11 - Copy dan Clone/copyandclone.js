// Data Primitif
let data1 = "Samsul";

// copy data
let data2 = data1;
data2 = "Yadi";

console.log(`Data 1 = ${data1}`);
console.log(`Data 2 = ${data2}`);

// * Hal ini bisa dilakukan dengan data primitif tetapi tidak dengan data Object

// Object
let data3 = {
  nama: "Mahmud",
};

// * Kalau menggunakan seperti ini maka data 3 akan ikut berubah
// let data4 = data3;
// data4["nama"] = "Sumarno";

// * CLONE
// let data4 = {};
// for (let key in data3) {
//   data4[key] = data3[key];
// }

// * CLONE cara singkat
let data4 = {};
Object.assign(data4, data3);
data4["nama"] = "Sumanto";

console.log(`Data 3 = ${data3["nama"]}`);
console.log(`Data 4 = ${data4["nama"]}`);
