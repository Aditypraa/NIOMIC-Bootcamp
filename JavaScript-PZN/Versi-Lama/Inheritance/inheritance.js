function Karyawan(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    return `Hallo ${name}, My Name ${this.firstName} ${this.lastName}`;
  };
}

function Manager(firstName, lastName, jabatan) {
  Karyawan.call(this, firstName, lastName); // menggunakan call
  this.jabatan = jabatan;
}

let budi = new Manager("Aditya", "Pratama", "Manager");
console.log(budi);
