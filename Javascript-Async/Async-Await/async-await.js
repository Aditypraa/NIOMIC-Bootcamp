let fs = require("fs");

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

async function mergeContent() {
  try {
    const result = await Promise.all([
      readFile("contents1.txt", "utf8"),
      readFile("contents2.txt", "utf8"),
      readFile("contents3.txt", "utf8"),
    ]);
    console.log(result);
    await writeFile("result.txt", result.join(" "));
  } catch (err) {
    throw err;
  }
  return readFile("result.txt");
}

mergeContent();
