// Array
let playlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(playlist);

// ===============================================================================

// Merubah Index Array
playlist[1] = "Padi";
playlist[0] = "Efek Rumah Kaca";
console.log(playlist);

// ============================================================================

// Method Array
let warna = ["hijau", "kuning", "hitam"];
console.log(warna);

// push -> Menambah index/item dari dari paling akhir/belakang
warna.push("pink");
console.log(warna);

// pop -> Menghapus index/item dari paling akhir/belakang
warna.pop();
console.log(warna);

// unshift -> menambha index/item dari awal
warna.unshift("coklat");
console.log(warna);

// shift -> Menghapus index/item dari awal
warna.shift();
console.log(warna);

// ================================================================

// Nested Array
let board = [
  [null, null, "0"],
  ["X", "0", null],
  ["0", null, "X"],
];
console.log(board);
