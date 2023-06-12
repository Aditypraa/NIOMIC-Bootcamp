/* 
RETURN adalah cara mengembalikan function
*/

// TANPA VARIABEL
function ambil() {
  return "Diambil Cuy";
}
console.log(ambil());

// DENGAN VARIABEL
function melempar() {
  var mengambil = "Mengambil Cuy";
  return mengambil;
}
console.log(melempar());

// Menyimpan/Menmpung di sebuah variabel
function menampung() {
  var lempar = "Melempar";
  return lempar;
}
var tampung = menampung();
console.log(tampung);
