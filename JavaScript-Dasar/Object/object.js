// let object = {
//   property: value,
// };

let objectKosong = {};
objectKosong["negara"] = "Indonesia";
objectKosong["provinsi"] = "Jawa Timur";
console.log(`Mengakses Negara ${objectKosong.negara}`);
console.log(`Mengakses Provinsi ${objectKosong.provinsi}`);
delete objectKosong["negara"];
console.log(objectKosong); // Mengakses Semua Property dan Value Object Kosong

let objectDenganIsi = {
  namaDepan: "Aditya",
  namaBelakang: "Pratama",
  umur: 88,
};
console.log(`Mengakses Nama Depan : ${objectDenganIsi.namaDepan}`);
console.log(`Mengakses Nama Belakang : ${objectDenganIsi.namaBelakang}`);
console.log(objectDenganIsi);
