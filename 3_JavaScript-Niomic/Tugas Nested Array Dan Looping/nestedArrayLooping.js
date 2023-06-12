function panggilNestedArray() {
  for (var i = 0; i < nestedArray.length; i++) {
    console.log(nestedArray[0][i], nestedArray[1][i], nestedArray[2][i]);
  }
}
var nestedArray = [
  [1, 2, 3, 4],
  ["Mark Zuckerberg", "Elon Musk", "Bill Gates", "Steve Jobs"],
  ["Facebook", "Tesla", "Microsoft", "Apple"],
];

panggilNestedArray();
