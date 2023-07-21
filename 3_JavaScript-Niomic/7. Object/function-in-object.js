function createFunctionObject() {
  let person = {
    namaDepan: "Aditya",
    namaBelakang: namaBelakang(),
  };
  console.log(person);

  function namaBelakang() {
    return "Pratama";
  }
}

createFunctionObject();
