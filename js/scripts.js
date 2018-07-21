//User Logic
$(document).ready(function(){
  confirm("change browser size to 90% zoom");
  $("form#playerButton").submit(function(event){
    event.preventDefault();


      $('button#Rollbutton').click(function() {
          rollScore(player1, player2);
          totalScore = $(".result").text(score);
        });
        $('button#Holdbutton').click(function() {

         });
       });
  });


//Business Logic
var totalScore
var player = function(name, score) {
  this.name = name;
  this.score = 0;
}
var diceRoller = function() {
  maxNumber = 6;
  for (var i = 1; i <= maxNumber; i++) {
    return (Math.floor(Math.random() * 6) + 1);
  }
}
var score = 0;
function rollScore(user1, user2) {
  var rolled = diceRoller();
  if (rolled !== 1) {
    score += rolled;
  } else if (rolled === 1) {
    score = 0;
  }
}
