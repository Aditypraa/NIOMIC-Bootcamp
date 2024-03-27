// Callback Version : callback tidak disarankan
const requestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500;
  setTimeout(() => {
    if (delay > 4000) {
      failure("Error : Koneksi Timeout");
    } else {
      success(`Sukses: ${url} (${delay} ms)`);
    }
  }, delay);
};

// Callback Hell
requestCallback(
  "movie.com",
  function (response) {
    console.log("Berhasil", response);
    requestCallback(
      "movie.com",
      function (response) {
        console.log("Berhasil", response);
      },
      function (error) {
        console.log("Error", error);
      }
    );
    requestCallback(
      "movie.com",
      function (response) {
        console.log("Berhasil", response);
      },
      function (error) {
        console.log("Error", error);
      }
    );
    requestCallback(
      "movie.com",
      function (response) {
        console.log("Berhasil", response);
      },
      function (error) {
        console.log("Error", error);
      }
    );
    requestCallback(
      "movie.com",
      function (response) {
        console.log("Berhasil", response);
      },
      function (error) {
        console.log("Error", error);
      }
    );
  },
  function (error) {
    console.log("Error", error);
  }
);
