function person(name) {
  console.log(`Hallo ${name}`);
}

// Tidak Perlu tutup kurung
let functionValue = person; // Menyimpan semua function kedalam variabel
functionValue("Aditya Pratama");

// Function di parameter
function beriSayaNama(callback) {
  callback("Budi Sujatmiko");
}
beriSayaNama(person); // Mengirim function beriSayaName() => function person
// atau
beriSayaNama(functionValue); // Karna saya membuat function sebagai value maka saya kirim function beriSayaName() ke variabel functionValue
