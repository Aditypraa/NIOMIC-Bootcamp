// Break : Mengentikan total
// continue : Menghentikan Perulangan saat ini dan Melanjutkan perulangan selanjutnya

// Break
let counter = 1;
while (true) {
  console.log(`Perulangan Ke ${counter}`);
  counter++;

  if (counter > 10) {
    break;
  }
}
