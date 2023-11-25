const judul = document.getElementById("judul");
const sectionA = document.querySelector("section#a");
const li = document.querySelectorAll("li")[1];

// InnerHtml
judul.innerHTML = "<em> Aditya Pratama </em>";
sectionA.innerHTML = "<div> <p> Hello World! </p> </div>";

// Element.style
li.style.backgroundColor = "green";

/* ---------------------------------------------------------------------- */

// Buat Element Baru
const pBaru = document.createElement("p");
const textBaru = document.createTextNode("Paragraf Baru");

// simpan Tulisan Kedalam Paragraf
pBaru.appendChild(textBaru);

// simpan pBaru di akhir section a
sectionA.appendChild(textBaru);

/* ---------------------------------------------------------------------- */

// Menyimpan Ditengah-tengah
const liBaru = document.createElement("li");
const textLiBaru = document.createTextNode("Paragraf tengah tengah bang");
liBaru.appendChild(textLiBaru);

const ul = document.querySelector("section#b ul");
const li2 = document.querySelector("section#b ul li:nth-child(2)");

ul.insertBefore(liBaru, li2);
