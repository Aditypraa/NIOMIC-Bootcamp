const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const app = express();

// Error Handler
const ErrorHandler = require("./errorHandler");

// Models
const Product = require("./src/models/product");
const Garment = require("./src/models/garment");

// Connect to mongodb
mongoose
  .connect("mongodb://localhost:27017/shop_db")
  .then(() => {
    console.log("Connected to mongodb");
  })
  .catch((err) => {
    console.log(err);
  });
// end Connect mongodb

// Configurasi
app.set("views", path.join(__dirname, "./src/views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// Route

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/garments", async (req, res, next) => {
  try {
    const garments = await Garment.find({});
    res.render("garment/index", { garments });
  } catch (error) {
    next(new ErrorHandler("Product Not Found", 404));
  }
});

app.get("/garment/create", (req, res) => {
  res.render("garment/create");
});

app.post("/garment", async (req, res, next) => {
  try {
    const garment = new Garment(req.body);
    await garment.save();
    res.redirect("/garments");
  } catch (error) {
    next(new ErrorHandler("Product Not Found", 404));
  }
});

app.get("/garment/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const garment = await Garment.findById(id).populate("products");
    res.render("garment/show", { garment });
  } catch (error) {
    next(new ErrorHandler("Product Not Found", 404));
  }
});

// /garments/:garment_id/product/create
app.get("/garments/:garment_id/product/create", async (req, res) => {
  const { garment_id } = req.params;
  res.render("products/create", { garment_id });
});

// /garments/:garment_id/product/
app.post("/garments/:garment_id/product", async (req, res) => {
  const { garment_id } = req.params;
  const garment = await Garment.findById(garment_id);
  const product = new Product(req.body);
  garment.products.push(product);
  product.garment = garment;
  await garment.save();
  await product.save();
  console.log(garment);
  res.redirect(`/garment/${garment_id}`);
});

app.get("/products", async function (req, res) {
  const { category } = req.query;
  if (category) {
    const products = await Product.find({ category });
    res.render("products/index", { products, category });
  } else {
    const products = await Product.find({});
    res.render("products/index", { products, category: "All" });
  }
});

app.get("/product/create", function (req, res) {
  res.render("products/create");
});

app.get("/product/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).populate("garment");
    res.render("products/show", { product });
    // res.send(product);
  } catch (error) {
    next(new ErrorHandler("Product Not Found", 404));
  }
});

app.post("/product", async function (req, res, next) {
  try {
    const product = new Product(req.body);
    await product.save();
    res.redirect(`/product/${product._id}`);
  } catch (error) {
    next(new ErrorHandler("Gagal Membuat Product", 412));
  }
});

app.get("/product/:id/edit", async function (req, res, next) {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render("products/edit", { product });
  } catch (error) {
    next(new ErrorHandler("Gagal Mencari Product", 412));
  }
});

app.put("/product/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, {
      runValidators: true,
    });
    res.redirect(`/product/${product._id}`);
  } catch (error) {
    next(new ErrorHandler("Gagal Update Product", 412));
  }
});

app.delete("/product/:id", async function (req, res, next) {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect(`/products`);
  } catch (error) {
    next(new ErrorHandler("Gagal Menghapus Product Product", 412));
  }
});

app.use((err, req, res, next) => {
  const { status = 200, message = "Something went wrong" } = err;
  res.status(status).send(message);
});
// End Route

app.listen(8080, () => {
  console.log(`Listening on http://localhost:8080`);
});
