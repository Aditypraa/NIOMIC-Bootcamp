// instanceof : Digunakan Untuk mengecek sebuah object di buat dari class tertentu
// instanceof juga bisa untuk mengecek parent sebuah Object

class Employee {}

class Manager {}

// True
let budi = new Employee();
console.log(budi instanceof Employee);

// True
let jatmiko = new Manager();
console.log(jatmiko instanceof Manager);

// False
let pukis = new Manager();
console.log(pukis instanceof Employee);
