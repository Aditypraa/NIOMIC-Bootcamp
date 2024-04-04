const user = {
  name: "Aditya Pratama",
  age: 10,
  country: "Indonesia",
  link: {
    fb: "www.facebook.com",
    linkedin: "www.linkedin.com",
  },
};

// Convesional
function greeting(user) {
  return `Welcome ${user.name}`;
}
console.log(greeting(user));

// Destructuring
function greeting({ name }) {
  return `Welcome ${name}`;
}
console.log(greeting(user));
