let person = {
  name: "John",
  age: 30,
};

// In hanya Mengecek APakah Property DI dalam Object Ada Atau Tidak In tidak Akan Mengecek Valuenya
if ("name" in person) {
  console.log(`Hello ${person.name}`);
} else {
  console.log(`Hello`);
}
