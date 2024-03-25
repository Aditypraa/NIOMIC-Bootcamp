// ========================== CREATE REGEXP ======================================
const regex1 = /aditya/;
const regex2 = new RegExp("Aditya");
const regex3 = new RegExp(/Aditya/);

// =========================== REGEXP INSTANCE METHOD =====================================
const names = "putra bungsu jaya permana putra abdi negara";
const regex = /jaya/;

const result = regex.exec(names);
console.log(result);

const test = regex.test(names);
console.log(test);
