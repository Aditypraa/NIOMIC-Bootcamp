const { MongoClient } = require("mongodb");

const uri =
  "mongodb://aditypraa:aditypraa@localhost:27017/?authMechanism=DEFAULT";
const dbName = "wpu";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect((error, client) => {
  if (error) {
    return console.log("Connection Gagal!");
  }

  //   Pilih Database
  const db = client.db(dbName);

  //   Menambah 1 Data ke Collection Mahasiswa
  // db.collection("mahasiswa").insertOne(
  //   {
  //     nama: "Erik",
  //     email: "erik@gmail.com",
  //   },
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Gagal Menambah!");
  //     }

  //     console.log(result);
  //   }
  // );

  // // Menambah lebih dari satu Data
  // db.collection("mahasiswa").insertMany(
  //   [
  //     {
  //       nama: "Yadi",
  //       email: "yadi@gmail.com",
  //     },
  //     {
  //       nama: "Kusuma",
  //       email: "kusuma@gmail.com",
  //     },
  //   ],
  //   (error, result) => {
  //     if (error) {
  //       return console.log("Gagal Ditambahkan");
  //     }

  //     console.log(result);
  //   }
  // );

  // Menampilkan Semua Data Yang ada di tabel Mahasiswa
  // console.log(
  //   db
  //     .collection("mahasiswa")
  //     .find()
  //     .toArray((error, result) => {
  //       console.log(result);
  //     })
  // );

  // Menampilkan Data Berdasarkan Kriteria
  // console.log(
  //   db
  //     .collection("mahasiswa")
  //     .find({ nama: "Erik" })
  //     .toArray((error, result) => {
  //       console.log(result);
  //     })
  // );

  // Mengubah Data Berdasarkan Id
  // const updatePromise = db.collection("mahasiswa").updateOne(
  //   {
  //     nama: "Yadi Purwanto",
  //   },
  //   {
  //     $set: {
  //       email: "yadipurwan@gmail.com",
  //     },
  //   }
  // );
  // updatePromise
  //   .then((result) => {
  //     console.log(result);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  // Menghapus 1 Data
  db.collection("mahasiswa")
    .deleteOne({
      nama: "Yadi Purwanto",
    })
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
