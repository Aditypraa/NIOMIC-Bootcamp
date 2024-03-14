function* generator() {
  yield "Aditya";
  yield "Pratama";
}

let names = generator();
for (let name of names) {
  console.log(name);
}
