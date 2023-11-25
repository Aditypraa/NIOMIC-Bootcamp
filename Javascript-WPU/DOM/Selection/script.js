// Dom Selection

const judul = document.getElementById("judul");
const h1 = document.getElementsByTagName("h1");
const p1 = document.getElementsByClassName("p1");

const p4 = document.querySelector("#b p");
const li2 = document.querySelector("#b ul li:nth-child(2)");

const p = document.querySelectorAll("p");

//Judul
judul.style.color = "red";
judul.style.backgroundColor = "grey";
judul.innerHTML = "Belajar Javascript DOM";

// p
// p[0].style.backgroundColor = "lightblue";
// p[1].style.backgroundColor = "lightblue";
// p[2].style.backgroundColor = "lightblue";
// p[3].style.backgroundColor = "lightblue";
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "lightblue";
}

// h1
h1[0].style.fontSize = "40px";

// p4
p4.style.color = "green";
p4.style.fontSize = "40px";

// li2
li2.style.backgroundColor = "orange";

// p
// p[2].style.backgroundColor = "yellow";
for (let i = 0; i < p.length; i++) {
  p[i].style.backgroundColor = "yellow";
}
