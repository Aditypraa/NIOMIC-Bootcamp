import { useState } from "react";
import { CreateForm } from "./components/CreateForm";

function App() {
  const [nama, setNama] = useState("");

  const onCreate = (data) => {
    console.log(`Console dari Parrent Component`, data);
    setNama(data.nama);
  };

  return (
    <>
      <div>Hi, {nama}</div>
      <CreateForm onCreate={onCreate} />
    </>
  );
}

export default App;
