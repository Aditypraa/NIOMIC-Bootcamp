const fs = require("fs");

const readFile = (file, options) => {
  return new Promise((resolve, reject) => {
    fs.readFile(file, options, (err, isiFile) => {
      if (err) return reject(err);
      return resolve(isiFile);
    });
  });
};

readFile("contents.txt", "utf8")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
