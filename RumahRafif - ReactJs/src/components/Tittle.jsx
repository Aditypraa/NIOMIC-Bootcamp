import { useState } from "react";

function Tittle() {
  const [tittle, setTittle] = useState("Belajar React Hoocks");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const changeName = (e) => {
    setName(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <h1>{tittle}</h1>
      <input
        type="text"
        value={name}
        placeholder="Masukan Nama"
        name="name"
        onChange={changeName}
      />
      <input
        type="password"
        value={password}
        placeholder="Masukan Password"
        name="password"
        onChange={changePassword}
      />
    </>
  );
}

export default Tittle;
