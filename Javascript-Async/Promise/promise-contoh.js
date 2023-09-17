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

let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    let hasil = hitung(5, 5, tambah);
    resolve(hasil);
  }, 1000);
});

// Berikut Ini Disebut Promise Chaining
p.then((result) => {
  console.log(`Hasil : ${result}`);
  return result;
})
  .then((res) => {
    res = tambah(res, 5);
    console.log(`Hasil : ${res}`);
    return res;
  })
  .then((res2) => {
    res2 = tambah(res2, 10);
    console.log(`Hasil : ${res2}`);
  });
