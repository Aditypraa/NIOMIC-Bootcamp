const fs = require("fs");

const readFile = (file, options) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, options, (err, isiFile) => {
      if (err) return reject(err);
      return resolve(isiFile);
    });
  });
};

const writeFile = (file, content) => {
  return new Promise((resolve, reject) => {
    fs.writeFile(file, content, (err) => {
      if (err) return reject(err);
      return resolve();
    });
  });
};

// let resutl = "";

// readFile("contents1.txt", "utf8")
//   .then((content1) => {
//     resutl += content1;
//     return readFile("contents2.txt", "utf8");
//   })
//   .then((content2) => {
//     resutl += content2;
//     return readFile("contents3.txt", "utf8");
//   })
//   .then((content3) => {
//     resutl += content3;
//     return writeFile("results.txt", resutl);
//   })
//   .then(() => {
//     console.log("Proses Selesai");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// Promise ALl
let result = Promise.all([
  readFile("contents1.txt", "utf8"),
  readFile("contents2.txt", "utf8"),
  readFile("contents3.txt", "utf8"),
]);

result.then((res) => {
  writeFile("results.txt", res.join(""));
  console.log("Selesai");
});
