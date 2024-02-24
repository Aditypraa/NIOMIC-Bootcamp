let password = "okebangmantap";

if (password.length >= 6) {
  if (password.indexOf(" ") === -1) {
    console.log("Password Valid");
  } else {
    console.log("Password Tidak Boleh ada spasi");
  }
} else {
  console.log("Password Minimal 6 Karakter");
}
