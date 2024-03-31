const mongoose = require("mongoose");

const garmenSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Nama Tidak Bole Kosong"],
  },
  location: { type: String },
  contact: {
    type: String,
    required: [true, "Kontaj Tidak Bole Kosong"],
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
});

const Garment = mongoose.model("Garment", garmenSchema);

module.exports = Garment;
