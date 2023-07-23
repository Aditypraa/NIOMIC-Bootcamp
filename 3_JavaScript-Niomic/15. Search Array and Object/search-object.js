let menu = [
  {
    idmenu: 1,
    namaMenu: "Tahu",
  },
  {
    idmenu: 2,
    namaMenu: "Tempe",
  },
  {
    idmenu: 3,
    namaMenu: "Gorengan",
  },
];

// Find digunakan untuk mencari dibagian dari Object

// Cara 1
// let data = menu.find(function (item) {
//   if (item.namaMenu == "Tempe") {
//     return item;
//   }
// });

// Cara 2
let find = menu.find((item) => item.idmenu < 3);
console.log(find.idmenu);

// Filter
let filter = menu.filter((item) => item.idmenu < 3);
console.log(filter[1].namaMenu);
