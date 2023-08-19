// FOR OF : Digunakan untuk melakukan iterasi terhadapt Valuenya
// For of tidak bisa digunakan untuk melakukan iterasi value di Object

let names = ["Aditya", "Pratama"];
for (let name of names) {
  console.log(`Iterasi ${name}`);
}

let menggunakanString = "Aditya Pratama";
for (let iterasiString of menggunakanString) {
  console.log(`Iterasi ${iterasiString}`);
}
