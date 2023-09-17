// Menggunakan Format .js

// Tidak Bisa Seperti Ini
/*
function samplePromise() {
  return Promise.resolve("Adit");
}

const name = await samplePromise();
console.info(name);
*/

// JIka Tetap Memaksa Maka Harus Seperti Ini
function samplePromise() {
  return Promise.resolve("Adit");
}

async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();
