function callObject() {
  let motor = {
    merek: "yamaha",
    harga: 200,
    tahun: 2002,
  };

  //Mengubah Value dari property
  motor.harga = 50000;
  console.log(motor.harga);

  // Menambah Property Baru di object Motor
  motor.warna = "Biru";

  console.log(motor);
}

callObject();
