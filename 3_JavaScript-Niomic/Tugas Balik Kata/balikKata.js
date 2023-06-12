function balikKata(kata) {
  var x = kata.length;

  for (var i = 0; i < kata.length + 1; i++) {
    if (i == 0) {
      var y = kata.slice(x - 1);
    } else if (i == x) {
      return y;
    } else {
      var y = y + kata.slice(x - (i + 1), x - i);
    }
  }
}

console.log(balikKata("Niomic!"));
console.log(balikKata("JavaScript"));
console.log(balikKata("alohahola"));
console.log(balikKata("Jawa_Barat"));
