// Syncronous

const getUserSync = (id) => {
  const nama = id === 1 ? "Aditya" : "Pratama";
  return { nama, id };
};

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const userTiga = "Hallo Dek";
console.log(userTiga);
