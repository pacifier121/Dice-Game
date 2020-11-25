var dice = 6;
var player1 = Math.floor(Math.random() * dice) + 1;
var player2 = Math.floor(Math.random() * dice) + 1;
console.log(player1 + " " + player2);

var imgSource1 = "images/dice" + player1 + ".png";
image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", imgSource1);

var imgSource2 = "images/dice" + player2 + ".png";
image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", imgSource2);

var title = document.querySelector("h1");
if (player1 > player2){
  title.textContent = "🏆Player 1 Won!";
}
if (player1 < player2){
  title.textContent = "Player 2 Won!🏆";
}
if (player1 == player2){
  title.textContent = "It's a draw!";
}
