// Nullish value adalah Null dan Undefined
let parameter;
let data = parameter;

// Tanpa Nullish Coalising
if (data === undefined || data == null) {
  data = "Nilai Default";
}
console.log(data);

// Penulisan dengan NULLISH
data = parameter ?? "Nilai Default";
console.log(data);
