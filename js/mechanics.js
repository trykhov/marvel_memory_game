var phase = $("header h1").text();
var choices = []; // this will have a max of two choices
var tries = 0;



var phaseI = ["<img src='images/black_widow.jpg' alt='bw'>", "<img src='images/black_widow.jpg' alt='bw'>",
              "<img src='images/captain_america.jpg' alt='capt'>", "<img src='images/captain_america.jpg' alt='capt'>",
              "<img src='images/hawkeye.jpg' alt='hawk'>", "<img src='images/hawkeye.jpg' alt='hawk'>",
              "<img src='images/hulk.jpeg' alt='hulk'>", "<img src='images/hulk.jpeg' alt='hulk'>",
              "<img src='images/iron_man.jpg' alt='tony'>", "<img src='images/iron_man.jpg' alt='tony'>",
              "<img src='images/thor.jpg' alt='thor'>","<img src='images/thor.jpg' alt='thor'>"];
var phaseII = phaseI.concat(["<img src='images/falcon.jpg' alt='falcon'>", "<img src='images/falcon.jpg' alt='falcon'>",
                             "<img src='images/wanda.jpg' alt='wanda'>", "<img src='images/wanda.jpg' alt='wanda'>",
                             "<img src='images/quicksilver.jpg' alt='quick'>", "<img src='images/quicksilver.jpg' alt='quick'>",
                             "<img src='images/vision.jpeg' alt='vision'>", "<img src='images/vision.jpeg' alt='vision'>",
                             "<img src='images/groot.jpg' alt='groot'>", "<img src='images/groot.jpg' alt='groot'>",
                             "<img src='images/rocket.jpg' alt='rocket'>", "<img src='images/rocket.jpg' alt='rocket'>",
                             "<img src='images/starlord.jpg' alt='starlord'>", "<img src='images/starlord.jpg' alt='starlord'>",
                             "<img src='images/gamora.jpg' alt='gamora'>", "<img src='images/gamora.jpg' alt='gamora'>",
                             "<img src='images/drax.jpg' alt='drax'>", "<img src='images/drax.jpg' alt='drax'>",
                             "<img src='images/antman.jpg' alt='ant'>", "<img src='images/antman.jpg' alt='ant'>"]);
var phaseIII = phaseII.concat(["<img src='images/doctor_strange.jpg' alt='strange'>", "<img src='images/doctor_strange.jpg' alt='strange'>",
                               "<img src='images/captain_marvel.jpg' alt='marvel'>", "<img src='images/captain_marvel.jpg' alt='marvel'>",
                               "<img src='images/spiderman.jpg' alt='spiderman'>", "<img src='images/spiderman.jpg' alt='spiderman'>",
                               "<img src='images/black_panther.jpg' alt='tchalla'>", "<img src='images/black_panther.jpg' alt='tchalla'>",
                               "<img src='images/wasp.jpg' alt='wasp'>", "<img src='images/wasp.jpg' alt='wasp'>",
                               "<img src='images/bucky.jpg' alt='bucky'>", "<img src='images/bucky.jpg' alt='bucky'>",
                               "<img src='images/mantis.jpg' alt='mantis'>", "<img src='images/mantis.jpg' alt='mantis'>",
                               "<img src='images/war_machine.jpg' alt='war'>", "<img src='images/war_machine.jpg' alt='war'>"]);
switch(phase) {
  case "Phase I":
    // default color is blue for Loki
    var totalCharacters = 6 * 2; // 6 characters in Phase I
    var timeLimit = 500; // 3000 milliseconds = 3 seconds
    var phaseLevel = shuffle(phaseI);
    break;
  case "Phase II":
    $("body").css("background-color", "#831212"); // red for Ultron
    var totalCharacters = 12 + (10 * 2); // 32 total characters in Phase II
    var timeLimit = 800; // 2000 milliseconds = 2 seconds;
    var phaseLevel = shuffle(phaseII);
    break;
  case "Phase III":
    $("body").css("background-color", "#553c8b"); // purple for Thanos
    var totalCharacters = 32 + (8 * 2); // 32 total characters in Phase III
    var timeLimit = 1000; // 1000 milliseconds = 1 second
    var phaseLevel = shuffle(phaseIII);
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
  if(choices.length == 0 && !$(this).attr('class').includes("flip")) {
    $("#" + choiceOneID).toggleClass('flip');
    choices.push(choiceOneID);
  } else if(choices.length == 1 && choices[0] != this.id) {
    choices.push(choiceOneID);
  }
  if(choices.length == 2) {
    checkID(choices);
    win(charactersStart, tries);
  }
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
      // $("#" + characterList[0]).addClass("flip"); // so they can't click twice on it
      $("#" + characterList[1]).addClass("flip");
      charactersStart -= 2;
      choices = [];
    } else { // if they don't
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
  // prevents the issue with the key being pressed again after winning
  $(document).one("keypress", function(event) {
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
