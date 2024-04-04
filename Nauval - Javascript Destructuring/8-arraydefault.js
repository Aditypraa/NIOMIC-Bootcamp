const lang = ["php", "js"];

// convensional
console.log(lang[1]);

// destructuring
const [one, two, three = "Kosong"] = lang;
console.log(one);
console.log(two);
console.log(three);
