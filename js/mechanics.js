var phase = $("header h1").text();
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

var characterID = ""; // this is so we can implement "this" in setTimeout

$(".character").click(function() {
  characterID = "#" + this.id;
  $(characterID).toggleClass("flip");
  setTimeout(function() {
    $(characterID).toggleClass("flip");
  }, 3000);
});


function shuffle(characterList) {
  var placeHolder = "";
  var randomIndex = 0;
  for(let i = 0; i < characterList.length; i++) {
    randomIndex = Math.floor(Math.random() * characterList.length);
    placeHolder = characterList[i];
    characterList[i] = characterList[randomIndex];
    characterList[randomIndex] = placeHolder;
  };
  return characterList;
}
