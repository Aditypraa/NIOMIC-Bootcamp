// Promise Version
const requestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
      if (delay > 4000) {
        reject("Error : Koneksi Timeout");
      } else {
        resolve(`Sukses: ${url} (${delay} ms`);
      }
    }, delay);
  });
};

requestPromise("movie.com")
  .then((result) => {
    console.log(` ${result} Page 1`);
    return requestPromise("movie.com");
  })
  .then((result) => {
    console.log(` ${result} Page 2`);
    return requestPromise("movie.com");
  })
  .then((result) => {
    console.log(` ${result} Page 3`);
    return requestPromise("movie.com");
  })
  .catch((err) => {
    console.log(`${err}`);
  });
