// Cara Membuat Callback
const pesan = function () {
  console.log("Pesan ini akan muncul setelah 3 detik.");
};

setTimeout(pesan, 3000);

// Anonymouse Fungsion
setTimeout(function () {
  console.log("Pesan ini akan muncul setelah 3 detik.");
}, 3000);

// Arrow Fungsion
setTimeout(() => {
  console.log("Pesan ini akan muncul setelah 3 detik.");
}, 3000);
