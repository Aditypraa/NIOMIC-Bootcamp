// every : Akan mengembalikan Nilai Boolean
const examScore = [60, 70, 80, 90, 100];
const isGraduate = examScore.every((score) => score >= 75);
console.log(isGraduate);

// Some : Salah satu bernilai Benar atau tidak sama sekali
const animes = [
  { title: "Naruto", rating: 50 },
  { title: "Boruto", rating: 10 },
  { title: "Upin", rating: 60 },
  { title: "Boboy", rating: 70 },
  { title: "Hunter", rating: 80 },
  { title: "Shadow", rating: 90 },
];
const isAnimeListNew = animes.some((anime) => anime.rating > 80);
console.log(isAnimeListNew);
