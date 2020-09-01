/**
 * 1. random form 1 to 6
 * 2. assigned attribute src = "dice"+random
 */

document.addEventListener("DOMContentLoaded", function() {

  var randomDice1 = Math.floor(Math.random() * 6 + 1);
  var randomDice2 = Math.floor(Math.random() * 6 + 1);
  
  var img = document.querySelectorAll("img");

  // Set source src
  var imgSource1 = "images/dice" + randomDice1 + ".png";
  var imgSource2 = "images/dice" + randomDice2 + ".png";
  img[0].setAttribute("src", imgSource1);
  img[1].setAttribute("src", imgSource2);

  // Compare player1 & player2
  if (randomDice1 > randomDice2) {
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1 Wins!";    
  } else if (randomDice1 < randomDice2) {
    document.querySelector("h1").innerText = "Player 2 Wins!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
})