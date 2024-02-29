// Filter
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const angkaBaru = numbers.filter((n) => {
  return n < 5;
});
console.log(angkaBaru);

// ================================================================

const animes = [
  { title: "Naruto", rating: 50 },
  { title: "Boruto", rating: 10 },
  { title: "Upin", rating: 60 },
  { title: "Boboy", rating: 70 },
  { title: "Hunter", rating: 80 },
  { title: "Shadow", rating: 90 },
];

// Memfilter anime yang ratingnya lebih dari 70
const daftarAnime = animes.filter((anime) => {
  return anime.rating > 70;
});
console.log(daftarAnime);
