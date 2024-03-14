let arrayKosong = [];

arrayKosong.push("Tambah1"); // Menambah Data Array
arrayKosong.push("Tambah2", "Tambah3"); //Menambah Data Array Lebih Dari Satu
console.log(arrayKosong.length); // Untuk Mendapatkan Panjang Array
console.log(arrayKosong[1]); // Untuk Mendapatkan Array Dari Index ke 1

arrayKosong[0] = "Ini saya Rubah"; // Merubah Index ke 0
delete arrayKosong[1]; // Menghapus Data Array Index ke 1 tetapi tidak dengan tempatnya
console.log(arrayKosong);

// Penggunaan Array Dengan Index
let arrayNama = ["Aditya", "Pratama"];

// Multidimensional Array
let nama = [
  ["Aditya", "Pratama"],
  ["Belajar", "JavaScript"],
];
nama.push(["PHP", "Dasar"]);
console.log(nama[0][0]);
console.log(nama);
