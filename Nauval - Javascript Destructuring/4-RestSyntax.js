const user = {
  name: "Aditya Pratama",
  age: 10,
  country: "Indonesia",
  link: {
    fb: "www.facebook.com",
    linkedin: "www.linkedin.com",
  },
};

const { name, age, ...restUser } = user;
console.log(`Hallo Nama Saya : ${name} dengan Umur : ${age}`);
console.log(restUser);
