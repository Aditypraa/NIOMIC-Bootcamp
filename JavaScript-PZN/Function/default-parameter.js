function register(name, gender = "Tidak Diketahui") {
  console.log(`${name}`);
  console.log(`${gender}`);
}

register("Aditya"); // saya hanya mengambil parameter name dan otomatis gender nilai defaultnya adalah "Tidak Diketahui"
register("Aditya", "Laki-Laki");
