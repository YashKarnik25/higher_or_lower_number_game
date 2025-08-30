//BEGIN
"use strict";

const btnHigh = document.querySelector(".btnhigh");
const btnEqual = document.querySelector(".btneq");
const btnLow = document.querySelector(".btnlow");
const btnRes = document.querySelector(".btnres");
const numEl = document.querySelector(".number");
const player0 = document.querySelector(".player0");
const player1 = document.querySelector(".player1");
const opt0El = document.querySelector(".opt0");
const opt1El = document.querySelector(".opt1");
const score0 = document.querySelector(".score0");
const score1 = document.querySelector(".score1");
const winnerText = document.querySelector(".winner");
let name0El = document.querySelector(".name0");
let name1El = document.querySelector(".name1");
let n;
let activePlayer = 0;
let score = [0, 0];
let winner;

// Initializing Game

const init = function () {
  numEl.textContent = 50;
  score = [0, 0];
  score0.textContent = 0;
  score1.textContent = 0;
  activePlayer = 0;
  btnHigh.classList.remove("hidden");
  btnEqual.classList.remove("hidden");
  btnLow.classList.remove("hidden");
  btnRes.classList.add("hidden");
  winnerText.classList.add("hidden");
};

// Display Score

const setScore = function () {
  activePlayer === 0
    ? (score0.textContent = score[activePlayer])
    : (score1.textContent = score[activePlayer]);
};

// Generate Random Number B/W 1 & 100

const generateNumber = function () {
  n = Math.trunc(Math.random() * 100) + 1;
  numEl.textContent = n;
  return n;
};

// To Find The Winner

const isWinner = function () {
  if (activePlayer === 1 && score[activePlayer] > score[0]) {
    winner = `⚔️ ${name1El.textContent} wins 🏆 ⚔️`;
  } else if (activePlayer === 1 && score[1] === score[0]) {
    winner = "⚔️ Draw 🟰 ⚔️";
  } else {
    winner = `⚔️ ${name0El.textContent} wins 🏆 ⚔️`;
  }

  player0.classList.add("active");
  player1.classList.remove("active");

  return winner;
};

// Change Player

const changePlayer = function () {
  if (activePlayer === 0) {
    activePlayer = 1;
    numEl.textContent = 50;

    player0.classList.remove("active");
    player1.classList.add("active");
  } else {
    winnerText.classList.remove("hidden");
    winnerText.textContent = isWinner();
    btnHigh.classList.add("hidden");
    btnLow.classList.add("hidden");
    btnEqual.classList.add("hidden");
    btnRes.classList.remove("hidden");
  }
};

//Higher Button

btnHigh.addEventListener("click", function () {
  const currentNum = Number(numEl.textContent);
  const num = generateNumber();
  //console.log(num);

  if (num > currentNum) {
    score[activePlayer] = score[activePlayer] + 10;

    setScore();
  } else {
    setTimeout(changePlayer, 500);
  }
});

// Equal Button

btnEqual.addEventListener("click", function () {
  const currentNum = Number(numEl.textContent);
  const num = generateNumber();
  // console.log(num);

  if (num === currentNum) {
    score[activePlayer] = score[activePlayer] + 50;

    setScore();
  } else {
    setTimeout(changePlayer, 500);
  }
});

// Lower Button

btnLow.addEventListener("click", function () {
  const currentNum = Number(numEl.textContent);
  const num = generateNumber();
  // console.log(num);

  if (num < currentNum) {
    score[activePlayer] = score[activePlayer] + 10;

    setScore();
  } else {
    setTimeout(changePlayer, 500);
  }
});

// Refreshing Game

btnRes.addEventListener("click", init);

//THE END ＼(((￣(￣(￣▽￣)￣)￣)))／

// const abc = document.querySelector('.abc');

// const qwe = function () {
//     setTimeout(() => {
//         console.log("hello");
//     }, 5000);
// }

// abc.addEventListener("click", qwe);
