// ========================= OBJECT FREEZE DAN SEAL ==================================
const person = {
  firstName: "John",
  lastName: "Smith",
};

// Object.freeze(person);
Object.seal(person);

person.firstName = "budi";
delete person.lastName;

console.log(person);

// =========================== OBJECT ASSIGN =====================================
const target = { firstName: "John" };
const source = { lastName: "Smith" };

Object.assign(target, source);
console.log(target);

// ============================ Property Name dan Value ====================================
const orang = {
  firstName: "John",
  lastName: "Smith",
};

console.log(Object.values(person));
console.log(Object.getOwnPropertyNames(person));
