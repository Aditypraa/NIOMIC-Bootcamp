// import mkdir from "mkdir:fs";
const fs = require("fs");
const folderName = process.argv[2] || "project";

// Versi Async
// fs.mkdir("project", (error) => {
//   console.log("Di dalam CALLBACK");
//   if (error) throw err;
// });

try {
  // Versi Syncronus
  fs.mkdirSync("project");
  // Membuat File index.html
  fs.writeFileSync(`${folderName}/index.html`, "");
  fs.writeFileSync(`${folderName}/app.js`, "");
  fs.writeFileSync(`${folderName}/style.css`, "");
  console.log("Berhasil");
} catch (error) {
  console.log("Error");
  console.log(error);
}
