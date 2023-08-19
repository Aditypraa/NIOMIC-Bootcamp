// Membuat Function Parameter dan Return Value
function returnValue(firstName, lastName) {
  let data = `Hello ${firstName} ${lastName}`;
  return data;
}
let hasil = returnValue("Aditya", "Pratama");
console.log(`${hasil}`);

// Function Return Value lebih dari satu
function getFinalValue(value) {
  if (value > 90) {
    return "A";
  } else if (value > 80) {
    return "B";
  } else if (value > 70) {
    return "C";
  } else if (value > 60) {
    return "C";
  } else {
    return "E";
  }
}
let finalValue = getFinalValue(81);
console.log(`Hasil Nilai anda ${finalValue}`);

// Menghentikan Eksekusi dengan Return
function mencariNilai(array, searchValue) {
  for (let element of array) {
    console.log(`Iterasi Element ${element}`);
    if (element === searchValue) {
      return true;
    }
  }
  return false;
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Data Array
let search = 5; // Mencari data nilai 10 di array apakah ada atau tidak
let found = mencariNilai(array, search);
console.log(`Maka Hasilnya ${found}`);
