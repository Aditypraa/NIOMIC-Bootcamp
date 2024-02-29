// Foreach : menggunakan callback dapat memanggil jumlah element yang dimiliki array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Foreach : Digunakan Untuk array atau Method dari array
numbers.forEach(function (number) {
  console.log(number);
});

const animes = [
  { title: "Naruto", rating: 50 },
  { title: "Boruto", rating: 10 },
  { title: "Upin", rating: 60 },
  { title: "Boboy", rating: 70 },
  { title: "Hunter", rating: 80 },
  { title: "Shadow", rating: 90 },
];
animes.forEach((anime) => {
  console.log(`${anime.title} - ${anime.rating}/100`);
});
