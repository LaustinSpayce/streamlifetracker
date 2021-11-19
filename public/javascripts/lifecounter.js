var socket = io();
var pl = new Object()
pl.playerAName = "PlayerOne";
pl.playerBName = "PlayerTwo";
pl.playerALife = 20;
pl.playerBLife = 20;

var playerAName = document.getElementById("NameA");
var playerBName = document.getElementById("NameB");
var playerALife = document.getElementById("lifeTotalLifeA");
var playerBLife = document.getElementById("lifeTotalLifeB");
var playerAPlus = document.getElementById("buttonPlusLifeA");
var playerAMinus = document.getElementById("buttonMinusLifeA");
var playerBPlus = document.getElementById("buttonPlusLifeB");
var playerBMinus = document.getElementById("buttonMinusLifeB");

// setup
playerAName.value = pl.playerAName
playerBName.value = pl.playerBName
playerALife.textContent = pl.playerALife
playerBLife.textContent = pl.playerBLife

  // if (input.value) {
  //   socket.emit("chat message", input.value);
  //   submitJSON();
  //   input.value = "";
  // }

  // player A
playerAPlus.addEventListener("click", function (e) {
  e.preventDefault();
  pl.playerALife ++
  playerALife.textContent = pl.playerALife
  encodeNames()
  submitJSON()
});

playerAMinus.addEventListener("click", function (e) {
  e.preventDefault();
  pl.playerALife --
  playerALife.textContent = pl.playerALife
  encodeNames()
  submitJSON()
});

// player B
playerBPlus.addEventListener("click", function (e) {
  e.preventDefault();
  pl.playerBLife ++
  playerBLife.textContent = pl.playerBLife
  encodeNames()
  submitJSON()
});

playerBMinus.addEventListener("click", function (e) {
  e.preventDefault();
  pl.playerBLife --
  playerBLife.textContent = pl.playerBLife
  encodeNames()
  submitJSON()
});

playerAName.addEventListener("focusout", function (e) {
  encodeNames()
  submitJSON()
})

playerAName.addEventListener("submit", function(e) {
  e.preventDefault()
  encodeNames()
  submitJSON()
})

playerBName.addEventListener("focusout", function (e) {
  encodeNames()
  submitJSON()
})

playerBName.addEventListener("submit", function(e) {
  e.preventDefault()
  encodeNames()
  submitJSON()
})


function submitJSON () {
  socket.emit("Lifetotals", pl)
}

function encodeNames () {
  pl.playerAName = playerAName.value
  pl.playerBName = playerBName.value
}