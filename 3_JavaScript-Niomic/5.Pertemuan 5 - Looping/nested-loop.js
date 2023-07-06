function nestedLoop() {
  for (let i = 0; i < 5; i++) {
    console.log("i ke ", i);
    for (let x = 0; x < 2; x++) {
      console.log("x ke ", x);
    }
  }
  console.log(" ");
}

nestedLoop();
