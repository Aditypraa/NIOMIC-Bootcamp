import express from "express";

const app = express();
const port = 3000;

// app.use((req, res) => {
//   console.log("We Got Request");
//   res.send("<h1>Hello World</h1>");
// });

app.get("/", (req, res) => {
  res.send("This is HomePage");
});
app.get("/cats", (req, res) => {
  res.send("This Is Cats Path");
});
app.post("/cats", (req, res) => {
  res.send("This Is cats Path POST");
});
app.get("/abouts", (req, res) => {
  res.send("This is about Path");
});
app.get("/blog/:judul", (req, res) => {
  const { judul } = req.params;
  res.send(`Ini Halaman blog dengan judul ${judul}`);
});
app.get("/blog/:categori/:penulis/:penerbit", (req, res) => {
  const { categori, penulis, penerbit } = req.params;
  res.send(
    `Ini Halaman blog dengan kategori:${categori} penulis:${penulis} penerbit:${penerbit}`
  );
});
app.get("/search", (req, res) => {
  const { q } = req.query;
  // res.send(`Anda menampilkan : ${q}`);
  if (!q) {
    res.send(`<h1>Tida ada data yang dicari</h1>`);
  }
  res.send(`<h1>Search Keywoard : ${q}</h1>`);
});

// PATH Ini ditaruh di paling bawah
app.get("*", (req, res) => {
  res.send("Halaman Tidak ditemukan");
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port} ❤️`);
});
