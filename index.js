var random = Math.random();
var random2 = Math.random();
var dicy = Math.floor(random * 6 + 1);
var dicy2 = Math.floor(random2 * 6 + 1);

// For 1st dice

if (dicy === 1) {
  document.querySelector(".img1").setAttribute("src", "images/dice1.png");
} else if (dicy === 2) {
  document.querySelector(".img1").setAttribute("src", "images/dice2.png");
} else if (dicy === 3) {
  document.querySelector(".img1").setAttribute("src", "images/dice3.png");
} else if (dicy === 4) {
  document.querySelector(".img1").setAttribute("src", "images/dice4.png");
} else if (dicy === 5) {
  document.querySelector(".img1").setAttribute("src", "images/dice5.png");
} else if (dicy === 6) {
  document.querySelector(".img1").setAttribute("src", "images/dice6.png");
}

// For 2nd dice

if (dicy2 === 1) {
  document.querySelector(".img2").setAttribute("src", "images/dice1.png");
} else if (dicy2 === 2) {
  document.querySelector(".img2").setAttribute("src", "images/dice2.png");
} else if (dicy2 === 3) {
  document.querySelector(".img2").setAttribute("src", "images/dice3.png");
} else if (dicy2 === 4) {
  document.querySelector(".img2").setAttribute("src", "images/dice4.png");
} else if (dicy2 === 5) {
  document.querySelector(".img2").setAttribute("src", "images/dice5.png");
} else if (dicy2 === 6) {
  document.querySelector(".img2").setAttribute("src", "images/dice6.png");
}

if (dicy === dicy2) {
  document.querySelector(".heading").innerHTML = "Draw!!";
} else if (dicy > dicy2) {
  document.querySelector(".heading").innerHTML = "Player 1 Wins!!";
} else if (dicy < dicy2) {
  document.querySelector(".heading").innerHTML = "Player 2 Wins!!";
}
