import { useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { AiTwotoneEdit } from "react-icons/ai";

export const ProductCard = ({ product, onDeleteProduct }) => {
  const { id, nama, deskripsi, imageURL } = product;

  const [jumlahProduct, setJumalahProduct] = useState(0);

  const kurangProduct = () => {
    setJumalahProduct(jumlahProduct - 1);
  };

  const tambahProduct = () => {
    setJumalahProduct(jumlahProduct + 1);
  };

  const handleDelete = () => {
    onDeleteProduct(id);
  };

  return (
    <div className="card">
      <div className="edit-delete">
        <AiTwotoneEdit className="icon-edit" />
        <MdDeleteForever className="icon-delete" onClick={handleDelete} />
      </div>
      <img
        style={{
          width: "100%",
          height: "200%",
          borderRadius: "10px 10px 0px 0px",
        }}
        src={imageURL}
        alt=""
      ></img>
      <div className="container">
        <h4>
          <b>{deskripsi}</b>
        </h4>
        <p>Mobil Ford adalah Mobil yang sangat bagus</p>
      </div>
      <div
        className={`card-keranjang ${
          jumlahProduct > 0 ? "jumlah-product" : "show-keranjang"
        }`}
      >
        {jumlahProduct > 0 ? (
          <>
            <button onClick={kurangProduct} className="button">
              -
            </button>

            <div>{jumlahProduct}</div>

            <button onClick={tambahProduct} className="button">
              +
            </button>
          </>
        ) : (
          <div className="keranjang" onClick={tambahProduct}>
            + Keranjang
          </div>
        )}
      </div>
    </div>
  );
};
