/* 
 !! Static class Field : Jika Kita tambahkan static dalam Class Field , maka Field tersebut bukan lagi milik instance Object melainkan Milik Classnya Itu sendiri
 */

class Employee {
  // static
  static nama = "Aditya";
  static alamat = "Indonesia";

  // public field / property
  nomor = 81235635324;
}

let budi = new Employee();

// Budi hanya memiliki field atau property nomor saja
console.log(budi);

// jika kita ingin mengakses property nama dan alamat
console.log(Employee.nama);
console.log(Employee.alamat);
