// Getter : Untuk Mengambil Data Pada sebuah PROPERTY OBJECT
// Setter : Untuk Mengubah Data Pada sebuah PROPERTY OBJECT

// GETTER
let person = {
  firstName: "Aditya",
  lastName: "Pratama",

  // Ini menggunakan Function
  //   fullName: function () {
  //     return `${this.firstName} ${this.lastName}`;
  //   },

  // ini Menggunakan Getter otomatis menjadi property bukan lagi Function
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    let array = value.split(" ");
    this.firstName = array[0];
    this.lastName = array[1];
  },
};

// Ini menggunakan Function
// console.log(person.fullName());

// Pemanggilan Get tidak perlu menggunakan ()
console.log(person.fullName);

person.fullName = "Budianto Nugraha";
console.table(person);

person.fullName = "Yanto Purnomo";
console.table(person);
