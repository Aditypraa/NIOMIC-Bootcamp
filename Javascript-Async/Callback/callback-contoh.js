function hitung(param1, param2, callback) {
  let hasil = 0;
  hasil = callback(param1, param2);
  return hasil;
}

function tambah(param1, param2) {
  return param1 + param2;
}

function kurang(param1, param2) {
  return param1 - param2;
}

console.log(hitung(5, 5, tambah));
