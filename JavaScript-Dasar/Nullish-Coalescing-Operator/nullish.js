// Nullish value adalah Null dan Undefined

let parameter;

let data = parameter;
if (data === undefined || data == null) {
  data = "Nilai Default";
}
console.log(data);

// Penulisan dengan NULLISH
let nullish = parameter ?? "Nilai Default";
console.log(nullish);
