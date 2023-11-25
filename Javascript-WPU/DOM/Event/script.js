const p2 = document.querySelector(".p2");
const p3 = document.querySelector(".p3");
const p4 = document.querySelector("section#b p");

function ubahWarna2() {
  p2.style.backgroundColor = "red";
}
p2.onclick = ubahWarna2;

function ubahWarna3() {
  p3.style.backgroundColor = "blue";
}

p4.addEventListener("click", () => {
  const ul = document.querySelector("section#b ul");
  const liBaru = document.createElement("li");
  const textLiBaru = document.createTextNode("Li Baru BAng");

  liBaru.appendChild(textLiBaru);
  ul.appendChild(liBaru);
});
