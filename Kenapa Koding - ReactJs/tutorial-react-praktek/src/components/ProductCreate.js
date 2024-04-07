import React, { useState } from "react";

function ProductCreate({ onCreateProduct }) {
  const initialState = {
    nama: "",
    deskripsi: "",
    imageURL: "",
  };
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState(initialState);

  const { nama, deskripsi, imageURL } = formData;

  const handleShow = () => {
    setShowForm(!showForm);
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreateProduct(formData);
    setFormData(initialState);
    // setShowForm(!showForm);
  };

  return (
    <div className="product-create">
      <div className="toggle-add">
        <button onClick={handleShow} className="edit-input-submit add-toggle">
          {showForm ? "Clode Form" : "Add Product"}
        </button>
      </div>

      {showForm && (
        <form onSubmit={handleSubmit} className="form">
          <div className="form-add-title">Add Product</div>
          <div className="form-group">
            <input
              className="add-input-text"
              placeholder="Nama Product"
              type="text"
              name="nama"
              value={nama}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="add-input-text"
              placeholder="Deskripsi"
              type="text"
              name="deskripsi"
              value={deskripsi}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <input
              className="add-input-text"
              placeholder="ImageURL"
              type="text"
              name="imageURL"
              value={imageURL}
              onChange={handleChange}
            />
          </div>
          <button className="edit-input-submit add" type="submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default ProductCreate;
