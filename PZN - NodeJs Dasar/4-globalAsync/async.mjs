//* Kalau menggunakan javascript modul behaviornya defaultnya async function

function samplePromise() {
  return Promise.resolve("Aditya");
}

const name = await samplePromise();
console.log(name);
