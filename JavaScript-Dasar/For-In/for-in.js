// For In : merupakan perulangan for yang digunakan untuk mengiterasi selutuh data property dan index
// For In tidak direkomendasikan untuk ARRAY

let person = {
  firstName: "Aditya",
  lastName: "Pratama",
};

// In digunakan Untuk Mengakses property Bukan Value
for (let property in person) {
  console.log(`daftar nama property ${property} : ${person[property]}`);
}

let names = ["Aditya", "Pratama"];
for (let index in names) {
  console.log(`Index Array ${index} : ${names[index]}`);
}
