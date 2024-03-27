let angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function hapusData(callback) {
  setTimeout(() => {
    angka.pop();
    callback();
  }, 500);
}

function tampilData() {
  setTimeout(function () {
    // tampilkan value dari array data
    console.log(angka);
  }, 300);
}

hapusData(tampilData);
