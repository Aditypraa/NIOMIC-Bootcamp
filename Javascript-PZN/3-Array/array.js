// ========================= ARRAY LOOP ==================================
const testArray = ["Rizal", "Kurniawan", "Khanedy"];
testArray.forEach((value, index) => {
  console.log(`${value} : ${index}`);
});

// =========================== ARRAY QUEUE : FIFO (First in First out) =====================================
const queue = [];
queue.push("Aditya");
queue.push("Pratama");
queue.push("Purnama");
console.log(queue);

console.log(queue.shift());
console.log(queue.shift());
console.log(queue.shift());

// ============================== Array STACK : LIFO (Last In Last Out) ==============================================
const stack = [];
stack.push("Aditya");
stack.push("Pratama");
stack.push("Purnama");
console.log(stack);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

// ================================ARRAY SEARCH ================================
const source = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
console.log(source.find((value) => value > 3));
console.log(source.findIndex((value) => value > 3));
console.log(source.includes(7));
console.log(source.indexOf(5));
console.log(source.lastIndexOf(5));

// ================================ ARRAU FILTER =================================================
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const ganjil = numbers.filter((value) => value % 2 === 1);
const genap = numbers.filter((value) => value % 2 === 0);
console.log(ganjil);
console.log(genap);

// ============================ ARRAU TRANSFORM ====================================
const names = ["Aditya", "Pratama", "Adi", "Santoso"];
const namesUpper = names.map((value) => value.toUpperCase());
console.log(namesUpper);

const namesReduce = names.reduce((before, value) => before + " " + value);
console.log(namesReduce);

const namesRight = names.reduceRight((before, value) => before + " " + value);
console.log(namesRight);

// contoh lagi
const nomor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const total = nomor.reduce((before, value) => before + value);
console.log(total);
