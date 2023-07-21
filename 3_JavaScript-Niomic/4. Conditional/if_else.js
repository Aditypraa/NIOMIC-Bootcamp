function comparison() {
  let nilai = 10;

  // Kondisional Standar
  if (nilai === "10") {
    console.log("Salah");
  } else if (nilai === 10) {
    console.log("Benar");
  } else {
    console.log("Tidak Benar dan Tidak Salah");
  }

  // Ternary Operator
  let hasil = nilai === 10 ? "Hasilnya Benar" : "Hasilnya Salah";
  return hasil;
}

console.log(comparison());
