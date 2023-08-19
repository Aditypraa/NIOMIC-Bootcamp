let person = {
  firstName: "Aditya",
  lastName: "Pratama",
};

// Contoh Tanpa With Statment
console.log(person.firstName);
console.log(person.lastName);

//Dengan WITH STATMENT
with (person) {
  console.log(`Nama Depan saya ${firstName}`);
  console.log(`Nama Belakang saya ${lastName}`);
}
