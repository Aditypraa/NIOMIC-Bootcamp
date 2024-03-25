const person = {
  firstName: "John",
  middleName: "Baku",
  lastName: "hantam",
  address: {
    country: "United States",
    city: "Washington",
  },
  hobbies: ["coding", "design", "Volly"],
};

const json = JSON.stringify(person);
console.log(json);

const jsonObject = JSON.parse(json);
console.log(jsonObject);
