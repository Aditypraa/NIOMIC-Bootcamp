const user = {
  name: "Aditya Pratama",
  age: 10,
  country: "Indonesia",
  link: [
    {
      fb: "www.facebook.com",
      linkedin: "www.linkedin.com",
    },
    {
      youtube: "http://www.youtube.com",
      instagram: "http://instagram.com",
    },
  ],
};

// Destructuring.
const {
  link: [{ fb, linkedin }, { youtube, instagram }],
} = user;

console.log(fb);
console.log(linkedin);
console.log(youtube);
console.log(instagram);
