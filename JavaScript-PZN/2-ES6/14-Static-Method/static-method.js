/*
! Static method sama dengan static class field, Jadi Hasil methodnya bukan lagi milik instance Object melainkan milik class nya itu sendiri
*/
class MathUtill {
  static sum(...numbers) {
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
}

let result = MathUtill.sum(1, 1, 1, 1, 1);
console.log(result);
