const mongoose = require("mongoose");

const Product = require("./src/models/product");

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

const seedProduct = [
  {
    name: "Sepatu Lari Pria Nike Revolution 5",
    brand: "Nike",
    price: 350000,
    color: "Hitam",
    category: "Sepatu", // belongs to Sepatu
  },
  {
    name: "Kaos Polos Pria Cotton Combed 30s",
    brand: "Distro A",
    price: 100000,
    color: "Putih",
    category: "Baju", // belongs to Baju
  },
  {
    name: "Tas Ransel Wanita Kulit Sintetis",
    brand: "Brand B",
    price: 250000,
    color: "Coklat",
    category: "Aksesoris", // belongs to Aksesoris
  },
  {
    name: "Smartphone Samsung Galaxy A53 5G",
    brand: "Samsung",
    price: 6000000,
    color: "Biru",
    category: "Elektronik", // belongs to Elektronik
  },
  {
    name: "Jam Tangan Pria Analog Quartz",
    brand: "Casio",
    price: 500000,
    color: "Silver",
    category: "Aksesoris", // belongs to Aksesoris
  },
  {
    name: "Laptop ASUS VivoBook 14 A416",
    brand: "ASUS",
    price: 8000000,
    color: "Hitam",
    category: "Elektronik", // belongs to Elektronik
  },
  {
    name: "Sepatu Wanita Flat Shoes Mika",
    brand: "Brand C",
    price: 200000,
    color: "Cream",
    category: "Sepatu", // belongs to Sepatu
  },
  {
    name: "Nokia",
    brand: "Penerbit D",
    price: 100000,
    color: "black",
    category: "Elektronik", // couldn't assign to existing category
  },
  {
    name: "Kamera DSLR Canon EOS 1200D",
    brand: "Canon",
    price: 5000000,
    color: "Hitam",
    category: "Elektronik", // belongs to Elektronik
  },
  {
    name: "Televisi LED 43 Inch LG 43UQ7200PTA",
    brand: "LG",
    price: 4000000,
    color: "Hitam",
    category: "Elektronik", // belongs to Elektronik
  },
];

Product.insertMany(seedProduct)
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
