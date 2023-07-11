function callArray() {
  let data = [
    ["A", "B", "C", "D", "E"],
    ["F", "G", "H", "I", "J"],
    ["K", "L", "M", "N", "O"],
  ];

  //   index ke 0
  console.log(data[0]);
  console.log("");

  //   Mencetak index ke 1 dan mencetak index ke 1 di dalam nested array ke 1
  console.log(data[1][1]);
  console.log("");

  //   Mencetak index ke 2 dan mencetak index ke 3 di dalam  nested array ke 2
  console.log(data[2][3]);
  return data;
}

console.log(callArray());
