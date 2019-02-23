const infinityStones = ["red", "blue", "green", "yellow", "purple", "orange"];
var hoverColor = randomColor(); // picks a color when button is hovered over

$(".btn").hover(function() {
  $("#" + this.id).css("background-color", randomColor());},
  function() {
    $("#" + this.id).css("background-color", "gray");
  });

// pick a random color from the infinityStones list
function randomColor() {
  var randomIndex = Math.floor(Math.random() * 7); // this will pick
  return infinityStones[randomIndex];
}
