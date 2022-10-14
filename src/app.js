/* eslint-disable */
import "bootstrap";
import "./style.css";

//write your code here

// function magic() {
window.onload = function() {
  document.querySelector("#topSuit").innerHTML = magic();
  document.querySelector("#bottomSuit").innerHTML = magic();
  document.querySelector("#luckyNumbers").innerHTML = randomNumbers();
};
//   document.getElementById("#passButton").addEventListener("click", magic);
// }

let randomNumbers = function() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "LOL"
  ];
  let theseNumb = Math.floor(Math.random() * numbers.length);
  return numbers[theseNumb];
};

let randomSuit = function() {
  // let suit = ["♥", "♦", "♠", "♣"]; these are in order displayed below
  let suit = ["&#9829;", "&#9830;", "&#9824;", "&#9827"];
  let theseSuit = Math.floor(Math.random() * suit.length);
  return suit[theseSuit];
};

let magic = randomSuit;

// document.getElementById("passButton").addEventListener("click", clicked);
