/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
};

document.getElementById("GenerateCard").addEventListener("click", () => {
  let palos = ["♦", "♥", "♠", "♣"];
  let numeros = [
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
    "K"
  ];

  let elem = document.querySelectorAll(".palo");
  //random of infex from 0 to 3 to select the "palo" of deck
  let palo = palos[Math.floor(Math.random() * (4 - 0) + 0)];

  for (let index = 0; index < elem.length; index++) {
    // if "palo" is hearts, the style of palo is red
    if (palo === palos[1]) {
      elem[index].style.color = "red";
      elem[index].innerHTML = palo;
    } else {
      elem[index].innerHTML = palo;
    }
  }

  //random of infex from 0 to 12 to select the number of the card
  let numero = numeros[Math.floor(Math.random() * (13 - 0) + 0)];
  document.querySelector(".numero").innerHTML = numero;
});
