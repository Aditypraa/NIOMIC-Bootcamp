// AND = &&
let nilaiUjian = 80;
let nilaiAbsen = 50;

let lulusUjian = nilaiUjian > 75;
let lulusAbsen = nilaiAbsen > 60;

let lulus = lulusUjian && lulusAbsen;

console.log(`Anda Dinyatakan Tidak LULUS atau ${lulus}`);

// OR = ||
let nilaiPelajaran = 50;
let nilaiKehadiran = 80;

let lulusPelajaran = nilaiPelajaran > 70;
let lulusKehadiran = nilaiKehadiran > 75;

let nilaiLulus = lulusPelajaran || lulusKehadiran;

console.log(`Anda Dinyatakan Lulus atau ${nilaiLulus}`);

// UNARY ATU KEBALIKAN = !
const sudahMakan = true;
console.log(!sudahMakan); // false

const sudahNgopi = false;
console.log(!sudahNgopi); // true
