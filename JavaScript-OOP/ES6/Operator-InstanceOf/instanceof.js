// instanceof : Digunakan Untuk mengecek sebuah object di buat dari class tertentu
// instanceof juga bisa untuk mengecek parent sebuah Object

class Employee {}

class Manager {}

let budi = new Employee();
console.log(budi instanceof Employee);

let jatmiko = new Manager();
console.log(jatmiko instanceof Manager);
