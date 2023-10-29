let janji = new Promise((resolve, reject) => {
  //   resolve("Janji berhasil Ditepati");
  reject("Janji Gagal DItepati");
});

janji
  .then(handleResolve, handleReject)
  .catch((err) => {
    console.log(err);
  })
  .finally(console.log(`Promise dijalankan`));

function handleResolve(result) {
  console.log(result);
}
function handleReject(result) {
  console.log(result);
}
