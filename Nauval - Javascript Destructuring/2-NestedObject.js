const user = {
  name: "Aditya Pratama",
  age: 10,
  country: "Indonesia",
  link: {
    fb: "www.facebook.com",
    linkedin: "www.linkedin.com",
  },
};

// Destructuring
const {
  link: { fb, linkedin },
} = user;
console.log(`Link Fb : ${fb}`);
console.log(`Link Linkedin : ${linkedin}`);
