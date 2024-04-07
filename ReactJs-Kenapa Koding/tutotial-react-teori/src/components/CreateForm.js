import { useState } from "react";

export function CreateForm({ onCreate }) {
  const initialState = {
    nama: "",
    hobby: "",
    agama: "",
  };
  const [data, setData] = useState(initialState);

  const { nama, hobby, agama } = data;

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(data);
    setData(initialState);
  };

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">Nama</label>
        <input type="text" onChange={handleChange} value={nama} name="nama" />
        <label htmlFor="">Hobby</label>
        <input type="text" onChange={handleChange} value={hobby} name="hobby" />
        <label htmlFor="">Agama</label>
        <input type="text" onChange={handleChange} value={agama} name="agama" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
