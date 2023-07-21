// parameter c dengan penulisan ...c adalah rest : rest difungsikan sebagai array

function createRest(a, b, ...c) {
  let jumlah;
  jumlah = a + b;

  for (let item of c) {
    jumlah += item;
  }
  return jumlah;
}

console.log(createRest(5, 5, 10));
