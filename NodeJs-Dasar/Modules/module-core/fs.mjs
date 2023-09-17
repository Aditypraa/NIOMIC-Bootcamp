import fs from "fs";

// Menulis String ke FIle Secara Syncronus
// try {
//   fs.writeFileSync("./data/tes.txt", "Hello Bang ini tes saja");
// } catch (e) {
//   console.log(e);
// }

// Menulis Secara Syncronus
// fs.writeFile("./data/tes.txt", "Hallo Bang Ini Secara Asyncronus", (err) => {
//   console.log(err);
// });

// Membaca Isi FIle Syncronus
const data = fs.readFileSync("./data/tes.txt", "utf-8");
console.log(data);
