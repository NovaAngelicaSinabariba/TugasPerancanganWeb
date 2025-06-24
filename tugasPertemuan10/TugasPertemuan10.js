document.getElementById("register").addEventListener("click", function () {
  alert("Website Dalam Perbaikan");
});

document.getElementById("login").addEventListener("click", function () {
  alert("Website Dalam Perbaikan");
});

const genres = ["HORROR", "ACTION", "ROMANCE", "COMEDY"];
let index = 0;

setInterval(() => {
  document.getElementById("genre").textContent = genres[index];
  index = (index + 1) % genres.length;
}, 4000);