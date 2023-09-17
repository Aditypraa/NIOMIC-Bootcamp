// Asyncronus

const getUserAsync = (id, callback) => {
  const time = id === 1 ? 3000 : 2000;

  setTimeout(() => {
    const nama = id === 1 ? "Aditya" : "Pratama";
    callback({ id, nama });
  }, time);
};

const userSatu = getUserAsync(1, (result) => {
  console.log(result);
});

const userDua = getUserAsync(2, (result) => {
  console.log(result);
});

const userTiga = "Password Wifinya Apa Bang ?";
console.log("1 sampai 8");
