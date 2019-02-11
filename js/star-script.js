const stars1 = document.getElementById("stars-1");
const stars2 = document.getElementById("stars-2");

setInterval(() => {
  stars1.classList.toggle("star-bg-1-show");
  stars2.classList.toggle("star-bg-2-show");
}, 2000);