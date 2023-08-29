// Untuk Membuat class sendiri secara manual kita bisa membuat class Turunan dari class Error
// *Dan jangan Lupa tambahkan parameter message

class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field; // Menambahkan property baru untuk menampung nama field yang salah
  }
}

class MathUtill {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new ValidationError(
        "Total Paramater harus lebih dari 0",
        "numbers"
      );
    }

    let total = 0;
    for (let number of numbers) {
      total += number;
    }
    return total;
  }
}

try {
  console.log(MathUtill.sum());
  console.log("Aditya");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log(
      `Terjadi Error di field ${error.field} dengan error ${error.message}`
    );
  } else {
    console.log(`Terjadi Error : ${error.message}`);
  }
} finally {
  console.log(`Program Telah selesai`);
}
