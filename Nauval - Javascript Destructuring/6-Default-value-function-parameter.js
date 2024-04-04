// Memberi Default value jika object dari lamongan tidak memiliki properti
function marker({
  nama = "Undifined",
  coords: { lon, lat } = { lon: -321432423434, lat: 412432423 },
}) {
  return `Nama : ${nama} dan lon ${lon}, lat ${lat}`;
}

const lamongan = {
  nama: "Lamongan",
  coords: {
    lon: -321432423434,
    lat: 412432423,
  },
};

console.log(marker(lamongan));
