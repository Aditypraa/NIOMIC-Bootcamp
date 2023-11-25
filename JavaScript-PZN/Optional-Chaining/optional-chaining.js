// Optional Chaning Operator (?) Merupakan operator yang digunakan untuk mengamankan ketika kita ingin mengakses property object dari data Nullish

// Tanpa Optional Chaining : Maka Terjadi Error
/* 
let person = {};

let country = person.address.country;
console.log(`${country}`);
*/

// Menggunakan if
let person = {
  address: {
    country: "Indonesia",
  },
};
let country;
if (person.address != undefined && person.address != null) {
  console.log((country = person.address.country));
}

// Menggunakan Optional Chaining
console.log(person?.address?.country);
