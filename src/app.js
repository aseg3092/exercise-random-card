window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");

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
  let palo = palos[Math.floor(Math.random() * (4 - 0) + 0)];
  for (let index = 0; index < elem.length; index++) {
    elem[index].innerHTML = palo;
  }

  let numero = numeros[Math.floor(Math.random() * (13 - 0) + 0)];

  document.querySelector(".numero").innerHTML = numero;
};
