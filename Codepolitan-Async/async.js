let hello = async () => {
  //   return " Hello Dunia";
  throw " Hello Dunia";
};

hello()
  .then((res) => {
    console.log(`Response: ${res}`);
  })
  .catch((err) => {
    console.log(`Error: ${err}`);
  });
