const infinityStones = ["red", "blue", "green", "yellow", "purple", "orange"];

$(".btn").hover(function() {
  var stoneColor = randomColor();
  $("#" + this.id).css("background-color", stoneColor);
  switch(stoneColor) {
    case "red":
      $("#reality").css("background-color", stoneColor);
      break;
    case "blue":
      $("#space").css("background-color", stoneColor);
      break;
    case "green":
      $("#time").css("background-color", stoneColor);
      break;
    case "yellow":
      $("#mind").css("background-color", stoneColor);
      break;
    case "purple":
      $("#power").css("background-color", stoneColor);
      break;
    case "orange":
      $("#soul").css("background-color", stoneColor);
      break;
    default:

    }
  },
  function() {
    $("#" + this.id).css("background-color", "gray");
    $(".stones").css("background-color", "gray");
  });

// pick a random color from the infinityStones list
function randomColor() {
  var randomIndex = Math.floor(Math.random() * 7); // this will pick
  return infinityStones[randomIndex];
}
