function nestedObject() {
  let mahasiswa = {
    nama: "Aditya P",
    fakultas: "teknik",
    prodi: "Informatika",
    ipk: {
      semester1: 1.1,
      semester2: 2.2,
      semester3: 3.3,
      semester4: 4.4,
      semester5: 5.5,
    },
  };

  console.log(mahasiswa);

  //   Mengakses Nested Object
  console.log(mahasiswa.ipk.semester3);
}

nestedObject();
