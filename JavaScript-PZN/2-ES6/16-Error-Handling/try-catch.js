class MathUtill {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error("Total Parameter harus lebih dari 0");
    }
    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
}

try {
  // Bila try tidak terjadi error maka catch tidak akan di eksekusi
  console.log(MathUtill.sum());
  console.log("Tes");
} catch (error) {
  // Catch hanya di eksekusi apabilah terjadi error bila tidak terjadi error maka tidak akan di eksekusi
  console.log(`Terjadi Erro : ${error.message}`);
}

console.log("Tes Diluar Try Catch");
