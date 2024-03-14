// Null : data yang kosong atau sudah didefinikan tetapi Null

let firstName = null;
if (firstName === undefined) {
  console.log("Data Undefined");
} else if (firstName === null) {
  console.log("Data Null");
} else {
  console.log(firstName);
}
