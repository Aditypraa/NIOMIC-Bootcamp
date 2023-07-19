/*
1. Tukar Nilai dari Variabel yang Tersedia
* Buatlah supaya variabel x nilainya menjadi nilai dari variabel y dan variabel y nilainya menjadi variabel x
* Dengan syarat tanpa menambah variabel baru
*/

function merubahNilai() {
  let x = 1;
  let y = 2;

  console.log(`x nilai awal adalah ${x}`);
  console.log(`y nilai awal adalah ${y}`);

  x -= y; // x = x - y | x = 1 - y = 2 maka nilai x = -1
  y += x; // y = y + x | y = 2 + x = -1 maka nilai y = 1

  x = y - x; // Nilai x = y Maka Nilai x sekarang adalah 1 lalu dikurangi nilai x yang mana nilai variabel x yaitu -1
  // Jadi 1 - -1 = 2

  // Kesimpulannya "1-(-1)" maka hasilnya menjadi : 1+1 = 2

  console.log(`Nilai Final x adalah ${x}`);
  console.log(`Nilai Final y adalah ${y}`);
}

merubahNilai();
