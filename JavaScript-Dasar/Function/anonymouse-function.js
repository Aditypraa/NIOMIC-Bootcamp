// Anonymouse Function adalah function yang tidak memiliki nama
// anonymouse function akan menjadi value dari variabel
// Jika anda telah mempelajari function sebagai value maka ini adalah cara pembuatan function dengan cara menyimpannya langsung ke function

// Contoh
let anonymouseFunction = function (firstName, lastName) {
  console.log(`Hallo Perkenalkan nama saya ${firstName} ${lastName}`);
};
anonymouseFunction("Aditya", "Pratama");

// Memasukan Anonymouse Function ke dalam Parameter
function giveMeName(callback) {
  callback("Budianto");
}
giveMeName(anonymouseFunction);

giveMeName(function (nama) {
  console.log(`Saya ${nama}`);
});
