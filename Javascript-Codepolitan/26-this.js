const myObject = {
  nama: "Aditya",
  umur: "22",
  sayHello: function (nama) {
    console.log(
      `Hallo saya ${this.nama} dengan Umur : ${this.umur}. Salam Kenal ${nama}`
    );
  },
};
myObject.sayHello("Budi");
