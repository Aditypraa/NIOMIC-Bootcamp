// Untuk menggunakan for fungsi pemanggilannya langsung memanggil var yang di dalam for
function menggunakanOf() {
  var angkaOf = [1, 2, 3, 4, 5, 6, 7];

  for (var iniOf of angkaOf) {
    console.log(iniOf);
  }
}
menggunakanOf();

// Untuk Array LOOP untuk fungsi pemanggilannya memanggil variabel global scopenya terlebih dahulu baru variabel di dalam perulangan for
function arrayLop() {
  var loop = [10, 11, 12, 13, 14, 15, 16];

  for (var i = 0; i < loop.length; i++) {
    console.log(loop[i]);
  }
}

arrayLop();
