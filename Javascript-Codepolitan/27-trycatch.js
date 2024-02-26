function teriak(msg) {
  try {
    console.log(msg.toUpperCase());
  } catch (error) {
    console.log(error);
    console.log("Yang anda masukan Bukan String");
  }
}
// teriak(1);
teriak("Berhasil");
