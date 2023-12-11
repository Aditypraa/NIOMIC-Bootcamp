// Belajar Tipe Data

let nama = "Aditya Pratama"; //String value
let usia = 30; // Number
let tinggiBadan = 175.5; // Double atau Float
let boolean = true; // True False
let beratBadan;
let iphone = null;

beratBadan = 60;

if (iphone == null) {
  iphone = "Belum Punya";
} else {
  iphone = "Sudah Punya";
}

// switch (iphone) {
//   case 1:
//     iphone = "Punya 1";
//     break;
//   case 2:
//     iphone = "Punya 2";
//     break;
//   default:
//     iphone = "Lebih dari 2";
//     break;
// }

alert(
  `Nama Saya : ${nama} dengan usisa : ${usia}, tinggi badan saya : ${tinggiBadan} dan berat badan saya : ${beratBadan}Kg, iphone : ${iphone}`
);
