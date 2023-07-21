function operatorLogika() {
  let a = 10;

  //   jika dua duannya true hasilnya true, jika salah satu false hasilnya false
  console.log(a > 9 && a < 15); //Apakah a lebih besar dari 11 = false and apakah a lebih kecil dari 15 = true

  //   jika salah satu true maka hasilnya true
  console.log(a > 10 || a < 15); // apakah a lebih bedar dari 10 = false or apakah a lebih kecil dari 15 = true

  //   ini adalah kebalikan jika hasilnya true maka false dan jika hasilnya false hasilnya true
  console.log(!true); // Logika Not
}

operatorLogika();
