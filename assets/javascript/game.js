
var runningTotal = 0;
var target = 0;
var crystal = [0,0,0,0];
var add;
var wins = 0;
var losses = 0;





function startGame() {

 target = Math.floor(Math.random() * 120) + 19;

 runningTotal = 0; 

 for(var i=0; i < 4; i++) {

crystal[i] = Math.floor(Math.random() * 12) + 1;
 
console.log(crystal[i]);

$(".your").html("<p>" +runningTotal+ "</p>");
$(".tar").html("<p>" +target+ "</p>");


 }

console.log(target);



}

function addition (i) {

  runningTotal = runningTotal +crystal[i];

  console.log(runningTotal);

  $(".your").html("<p>" +runningTotal+ "</p>");

  if(runningTotal === target) {

    winner()
  }
  
  if(runningTotal > target) {
  
    loser();

  }


}

function winner () {

  $("#console").html("<p> You Win! </p>");

    wins++;
    $("#wins").html("<div>Wins: " +wins+ "</div>");
    startGame();

}

function loser () {

  $("#console").html("<p> You Lose! </p>");

    losses++;
    $("#losses").html("<div>Losses: " +losses+ "</div>");
    startGame();
}



startGame();


$("#c0").on("click", function() {

  addition(0);
});

$("#c1").on("click", function() {

  addition(1);
});

$("#c2").on("click", function() {

  addition(2);
});

$("#c3").on("click", function() {

  addition(3);
});


