const person = {};

Reflect.set(person, "firstName", "Alice");
Reflect.set(person, "lastName", "Putri");

console.log(person);

console.log(Reflect.get(person, "firstName"));
console.log(Reflect.get(person, "lastName"));
