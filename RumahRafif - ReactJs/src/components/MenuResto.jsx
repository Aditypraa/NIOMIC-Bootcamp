import "./MenuResto.css";

export default function MenuResto() {
  const h1Items = {
    backgroundColor: "green",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    margin: "10px",
    marginBottom: "20px",
  };

  // const isMakanan = false;

  const menu = [
    { nama: "nasi goreng", harga: 15000, tipe: "makanan" },
    { nama: "es teh", harga: 5000, tipe: "minuman" },
    { nama: "mie goreng", harga: 12000, tipe: "makanan" },
  ];

  return (
    <>
      <h1 style={h1Items}>MenuResto</h1>
      {menu.map((item, index) => (
        <div className="menu-items" key={index}>
          {/* {isMakanan ? <div>Tipe Minuman</div> : <div>Tipe Makanan</div>} */}
          <div>Nama : {item.nama}</div>
          <div>Harga : {item.harga}</div>
          <div>Tipe Makanan : {item.tipe}</div>
        </div>
      ))}
    </>
  );
}
