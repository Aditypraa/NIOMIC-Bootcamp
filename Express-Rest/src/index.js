import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/order", (req, res) => {
  res.send("Get Order Response");
});
app.post("/order", (req, res) => {
  const { item, qty } = req.body;
  res.send(`Item ${item} : Qty ${qty}`);
});

app.listen(8000, () => {
  console.log(" Listen on http://localhost:8000");
});
