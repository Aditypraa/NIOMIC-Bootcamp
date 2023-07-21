let username = prompt("Username:");
let paswword = prompt("Paswword:");

if (username == "admin") {
  if (paswword == "12345") {
    document.writeln("Selamat anda Berhasil Login");
  } else {
    document.writeln("Password yang anda masukan salah");
  }
} else {
  document.writeln("Akun Anda Belum Terdaftar");
}
