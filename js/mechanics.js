var phase = $("header h1").text();
var choices = []; // this will have a max of two choices
var tries = 0;

var phaseI = ["<img src='images/black_widow.jpg' alt='bw'>", "<img src='images/black_widow.jpg' alt='bw'>",
              "<img src='images/captain_america.jpg' alt='capt'>", "<img src='images/captain_america.jpg' alt='capt'>",
              "<img src='images/hawkeye.jpg' alt='hawk'>", "<img src='images/hawkeye.jpg' alt='hawk'>",
              "<img src='images/hulk.jpeg' alt='hulk'>", "<img src='images/hulk.jpeg' alt='hulk'>",
              "<img src='images/iron_man.jpg' alt='tony'>", "<img src='images/iron_man.jpg' alt='tony'>",
              "<img src='images/thor.jpg' alt='thor'>","<img src='images/thor.jpg' alt='thor'>"];
// var phaseII = phaseI + [];



switch(phase) {
  case "Phase I":
    var totalCharacters = 6 * 2; // 6 characters in Phase I
    var timeLimit = 3000; // 3000 milliseconds = 3 seconds
    var phaseLevel = shuffle(phaseI);
    break;
  case "Phase II":
    var totalCharacters = 12 * 2; // 12 total characters in Phase II
    var timeLimit = 2000; // 2000 milliseconds = 2 seconds;
    break;
  case "Phase III":
    var totalCharacters = 16 * 2; // 32 total characters in Phase III
    var timeLimit = 1000; // 1000 milliseconds = 1 second
    break;
};

var charactersStart = totalCharacters; // this will keep track of how many characters are left
// this inserts the randomly assorted images into the elements
for(let i = 1; i <= totalCharacters; i++) {
  $("#s" + i + " .back").html(phaseLevel[i - 1]);
}


$(".character").click(function() {
  $("header h2").text("Tries: " + tries);
  // var characterSelect = $(this).children().children().attr('alt'); // character --> back --> img --> img.alt
  var choiceOneID = this.id; // to make sure that they don't select the same element
  if((!$(this).attr('class').includes("flip")) && (choices[0] != this.id)) {
    choices.push(choiceOneID);
  }
  checkID(choices);
  win(charactersStart, tries);
});

// implements Fisher-Yates shuffle
function shuffle(characterList) {
  var placeHolder = "";
  var randomIndex = 0;
  for(let i = characterList.length - 1; i > 0; i--) {
    randomIndex = Math.floor(Math.random() * (i + 1));
    placeHolder = characterList[i];
    characterList[i] = characterList[randomIndex];
    characterList[randomIndex] = placeHolder;
  };
  return characterList;
}

// checks if two choices are a match
function checkID(characterList) {
  if(characterList.length === 2) {
    tries += 1;
    $("header h2").text("Tries: " + tries);
    var choiceOne = $("#" + characterList[0] + " .back").children().attr('alt'); // they are the same image
    var choiceTwo = $("#" + characterList[1] + " .back").children().attr('alt');
    if(choiceOne == choiceTwo) { // if they match
      $("#" + characterList[0]).addClass("flip"); // so they can't click twice on it
      $("#" + characterList[1]).addClass("flip");
      charactersStart -= 2;
      choices = [];
    } else { // if they don't
      $("#" + characterList[0]).toggleClass("flip");
      $("#" + characterList[1]).toggleClass("flip");
      setTimeout(function() {
        $("#" + characterList[0]).toggleClass("flip");
        $("#" + characterList[1]).toggleClass("flip");
      }, timeLimit);
      choices = []
    }
  } else if(characterList.length > 2) { // in the case that someone enters more choices
    // haven't figured out how to take only two at a time
    choice = [];
  }
}

// endgame
function win(charactersLeft, score) {
  if(charactersLeft == 0) {
    if(score == (totalCharacters) / 2) {
      $("header h2").text("Perfect Score! Excelisor!");
    } else {
      $("header h2").text("Great job! You win!");
    }
  $("header").append("<h2 class='reset'>Press any key to play again!</h2>");
  // reset
  $(document).keypress(function() {
    $(".reset").remove();
    $("header h2").text("Click Any Spot to Start");
    charactersStart = totalCharacters;
    tries = 0;
    for(let i = 0; i <= totalCharacters; i++) {
      $("#s" + i + " .back").children().remove();
      $("#s" + i).removeClass("flip");
    };
    phaseLevel = shuffle(phaseLevel);
    for(let i = 1; i <= totalCharacters; i++) {
      $("#s" + i + " .back").html(phaseLevel[i - 1]);
    }
  });
  }
}
