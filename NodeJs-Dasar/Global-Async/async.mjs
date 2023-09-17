// Menggunakan Format .mjs

function samplePromise() {
  return Promise.resolve("Adit");
}

// Maka await bisa dijalankan di luar Function
const name = await samplePromise();
console.info(name);
