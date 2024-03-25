// ===================== ENCODE URI DAN DECODE URI ==============================
const uri = "http://contohsaja.com/?name=contoh saja";
console.log(uri);

const encode = encodeURI(uri);
console.log(encode);

const decode = decodeURI(encode);
console.log(decode);
