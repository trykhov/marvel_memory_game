var phase = $("header h1").text();
var choices = [] // this will have a max of two choices
switch(phase) {
  case "Phase I":
    var totalCharacters = 6 * 2; // 6 characters in Phase I
    break;
  case "Phase II":
    var totalCharacters = 12 * 2; // 12 total characters in Phase II
    break;
  case "Phase III":
    var totalCharacters = 16 * 2; // 32 total characters in Phase III
    break;
};

// gets the id of all the character elements
var idList = [];
for(let i = 1; i <= totalCharacters; i++) {
  idList.push("#s" + i);
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
      console.log("correct");
      choices = [];
    } else {
      $("#" + characterList[0]).toggleClass("flip");
      $("#" + characterList[1]).toggleClass("flip");
      console.log("wrong");
      setTimeout(function() {
        $("#" + characterList[0]).toggleClass("flip");
        $("#" + characterList[1]).toggleClass("flip");
      }, 3000);
      choices = []
    }
  } else if(characterList.length > 2) {
    choice = [];
  }
}
