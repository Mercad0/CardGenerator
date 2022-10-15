/* eslint-disable */
import "bootstrap";
import "./style.css";

//write your code here

// function magic() {
window.onload = function() {
  const suit = document.querySelector("#topSuit");
  suit.innerHTML = magic();
  document.querySelector("#bottomSuit").innerHTML = suit.innerHTML;
  document.querySelector("#luckyNumbers").innerHTML = randomNumbers();
};

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
  let suit = ["♥", "♦", "♠", "♣"];
  // these are in order displayed below
  // let suit = ["&#10084;&#65039;", "&#128310;", "&#9824;", "&#9827"];
  // check
  let theseSuit = Math.floor(Math.random() * suit.length);
  return suit[theseSuit];
};

let magic = randomSuit;

// document.getElementById("passButton").addEventListener("click", clicked);
