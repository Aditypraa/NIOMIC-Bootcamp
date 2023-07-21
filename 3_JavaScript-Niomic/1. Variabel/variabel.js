var message = "Menggunakan Variabel var";
console.log(message);

let message2 = "Menggunakan Variabel let";
console.log(message2);

// Const atau constanta valuenya tetap tidak bisa dirubah
const message3 = "Menggunakan Variabel const";
console.log(message3);

// Contoh Menggunakan Var dan Let
if (true) {
  var message = "Var Message di atas telah dirubah";

  // Let tidak bisa dirubah di dalam localscope ini
  let message2 = 2;
}

console.log(message);
console.log(message2);

// Jika menulis tanpa variabel.. default dari variabel tersebut adalah Var

tanpaVariabel = "Ini adalah penulisan tanpa Variabel";
console.log(tanpaVariabel);
