function callObject() {
  let laptop = {
    //Property
    merek: "asus",
    warna: "merah",
    harga: 15000,
    ram: "2GB",
    ssd: "500GB",
    version: [2001, 2002, 2003, 2004, 2005],

    // Method
    buttonStart: function () {
      return "Button Menyalakan atau Start";
    },
  };

  // Mengakses Property
  console.log(laptop); // Menampilkan Properti : key dan value dari object Laptop
  console.log(laptop.merek); // Mengakses Property dari object laptop dengan key : Merek dan menampilan value dari key merek

  // Mengakses Array di dalam Object
  console.log(laptop.version[3]);

  // Mengakses Method
  console.log(laptop.buttonStart());
}

callObject();
