var socket = io();
var pl = new Object();
pl.playerAName = "PlayerOne";
pl.playerBName = "PlayerTwo";
pl.playerALife = 20;
pl.playerBLife = 20;

var playerAName = document.getElementById("NameA");
var playerBName = document.getElementById("NameB");
var playerALife = document.getElementById("lifeTotalA");
var playerBLife = document.getElementById("lifeTotalB");

socket.on("lifetotals", function (msg) {
  pl = msg;
  updateDisplay();
});

function updateDisplay () {
  playerAName.textContent = pl.playerAName
  playerBName.textContent = pl.playerBName
  playerALife.textContent = pl.playerALife
  playerBLife.textContent = pl.playerBLife
}