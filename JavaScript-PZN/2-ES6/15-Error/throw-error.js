class MathUtill {
  static sum(...numbers) {
    if (numbers.length === 0) {
      // Mentriger sebuah Error
      throw new Error("Total Parameter Harus Lebih dari 0");
    }

    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
}

// JIka KIta tidak memasukan data apapun
console.log(MathUtill.sum()); // MAka Ini akan terjadi error
// Maka Kode dibawahnya tidak akan di eksekusi

let result = MathUtill.sum(1, 1, 1, 1, 1);
console.log(result);
