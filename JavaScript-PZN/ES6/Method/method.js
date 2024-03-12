// Pembuatan Class
class Car {
  // Pembuatan Construkto
  constructor(merek, warna, harga) {
    this.merek = merek;
    this.warna = warna;
    this.harga = harga;
  }

  // Method
  start(speed) {
    return `Mobil ${this.merek} dengan warna ${this.warna} Melaju dengan Kecepatan ${speed}. Harga Mobil Tersebut Senilai ${this.harga} `;
  }
}

let avanza = new Car("Avanza", "Biru", "1.500");
console.log(avanza.start("1.5 KHM"));
