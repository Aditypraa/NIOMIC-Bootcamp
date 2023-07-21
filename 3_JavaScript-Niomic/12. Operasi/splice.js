let buah = ["Anggur", "Salak", "Rambutan", "Blimbing"];

// Delete = hanya menghapus isi dari index ke 1 yaitu Salak tetapi tidak menghapus Tempatnya
delete buah[1];
console.log(buah);

let buah2 = ["Anggur", "Salak", "Rambutan", "Blimbing"];
// Splice = 2 adalah index keduah yaitu Rambutan kemudian 1 adalah jumlah yang akan dihapus
// Menggunakan splice akan menghapus index beserta Tempatnya
buah2.splice(2, 1);

// Kita JUga bisa mmenghapus sekaligus menysisipkan data seperti ini

/*
 buah2.splice(2,1, 'Nangka', 'Semangka')
*/
console.log(buah2);
