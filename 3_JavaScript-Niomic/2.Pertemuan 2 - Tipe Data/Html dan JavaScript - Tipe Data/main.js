// Number
let number = 10;
document.writeln(`${number} adalah Tipe data ${typeof number} <br/>`);

// String
let string = "Aditya";
document.writeln(`${string} adalah Tipe data ${typeof string} <br/>`);

// Boolean
let benar = true;
let salah = false;

let cekHasil =
  salah == true
    ? document.writeln(`Ini adalah ${benar} <br/>`)
    : document.writeln(`Ini adalah ${salah} <br/>`);

let tinggi = 100;
let cekTinggi =
  tinggi >= 150
    ? document.writeln(`100 lebih kecil dari 150 = ${true} <br/>`)
    : document.writeln(`100 lebih besar dari 150 = ${false} <br/>`);

// Type Data Array
let typeDataArray = [1, 2, 3, 4, 5, 6];
document.writeln(`Ini adalah Type Data Array = ${typeDataArray}`);

// Tipe data NULL
let typeDataNull = null;
document.writeln(`Ini adalah Tipe data = ${typeData} <br/>`);

// Tipe Data Undifined
let typeDataUndefined;
document.writeln(`Ini adalah Type Data = ${typeDataUndefined}`);
