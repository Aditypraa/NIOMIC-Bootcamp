const user = {
  umur: 70,
  country: "Indonesia",
};

// Conventional
let nama = user.nama;
let umur = user.umur;
console.log(nama);
console.log(umur);

// Destructuring
let {
  nama: namaUser = "Guest",
  umur: umurUser,
  country,
  alamat = "Kosong",
} = user;
console.log(namaUser);
console.log(umurUser);
console.log(country);
console.log(alamat);
