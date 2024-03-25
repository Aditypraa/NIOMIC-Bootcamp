const original = "aditya&Pratama=saja";
console.log(original);

const encoded = btoa(original);
console.log(encoded);

const decoded = atob(encoded);
console.log(decoded);
