const stoneColors = ["red", "blue", "green", "yellow", "purple", "orange"];
const infinityStones = ["reality", "space", "time", "mind", "power", "soul"];

$(".btn").hover(function() {
  var randomIndex = Math.floor(Math.random() * 7); // picks a random index of the stoneColors index
  $("#" + this.id).css("background-color", stoneColors[randomIndex]);
  $("#" + infinityStones[randomIndex]).css("background-color", stoneColors[randomIndex]);
  },
  function() { // turns the button & stone gray when removed
    $("#" + this.id).css("background-color", "gray");
    $(".stones").css("background-color", "gray");
  });

$(".stones").hover(function() {
  var indexOfStone = infinityStones.indexOf(this.id);
  $("#" + this.id).css("background-color", stoneColors[indexOfStone]);
  },
  function() {
    $(".stones").css("background-color", "gray");
  });
