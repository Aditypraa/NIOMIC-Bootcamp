function forIn() {
  let makanan = {
    soto: "Lamongan",
    pecel: "Madiun",
    nasi_goreng: "Bandung",
    ketoprak: ["Jawa Barat", "Bali"],
  };

  for (let menu in makanan) {
    console.log(`Makanan Ini Berasal Dari ${makanan[menu]}`);
  }
}

forIn();
