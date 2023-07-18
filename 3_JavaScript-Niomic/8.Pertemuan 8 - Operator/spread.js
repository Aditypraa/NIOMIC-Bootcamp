function operatorSpread() {
  let a = [1, 2, 3, 4, 5];
  let b = [6, 7, 8, 9, 10];

  let spread = [...a, ...b, 11, 12, 13, 14];

  console.log(a);
  console.log(b);
  console.log(
    `Penggabungan anatara a dan b dan ditambah 11,12,13,14 adalah seperti ini ${spread}`
  );
}

operatorSpread();
