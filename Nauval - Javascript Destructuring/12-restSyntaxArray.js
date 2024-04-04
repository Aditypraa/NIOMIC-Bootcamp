const lang = ["php", "javascript", "java", "golang", "python"];

const [one, two, ...restLang] = lang;

console.log(one);
console.log(two);
console.log(restLang);
