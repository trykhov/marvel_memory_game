var phase = $("header h1").text();
var choices = []; // this will have a max of two choices
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


// this inserts the randomly assorted images into the elements
for(let i = 1; i <= totalCharacters; i++) {
  $("#s" + i + " .back").html(phaseLevel[i - 1]);
}




$(".character").click(function() {
  // var characterSelect = $(this).children().children().attr('alt'); // character --> back --> img --> img.alt
  var choiceOneID = this.id; // to make sure that they don't select the same element
  // console.log(choiceOneID);
  choices.push(choiceOneID);
  checkID(choices);
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

function checkID(characterList) {
  if(characterList.length === 2) {
    if(characterList[0] === characterList[1]) {
      $("#" + characterList[0]).toggleClass("flip");
      $("#" + characterList[1]).toggleClass("flip");
      choices = [];
    } else {
      $("#" + characterList[0]).toggleClass("flip");
      $("#" + characterList[1]).toggleClass("flip");
      setTimeout(function() {
        $("#" + characterList[0]).toggleClass("flip");
        $("#" + characterList[1]).toggleClass("flip");
      }, timeLimit);
      choices = []
    }
  } else if(characterList.length > 2) {
    choice = [];
  }
}
