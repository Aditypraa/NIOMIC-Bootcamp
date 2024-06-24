function samplePromise() {
  return Promise.resolve("Aditya");
}

async function run() {
  const name = await samplePromise();
  console.log(name);
}

run();
