// MAP : Map adalah nilai baru dari array sebelumnya
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbersList = numbers.map((number) => {
  return number * 2;
});
console.log(numbersList);

const animes = [
  { title: "Naruto", rating: 50 },
  { title: "Boruto", rating: 10 },
  { title: "Upin", rating: 60 },
  { title: "Boboy", rating: 70 },
  { title: "Hunter", rating: 80 },
  { title: "Shadow", rating: 90 },
];
const animesList = animes.map((anime) => {
  return anime.title.toUpperCase();
});
console.log(animesList);
