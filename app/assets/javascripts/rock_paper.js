$(document).ready(function(){

  $('#paper, #rock, #scissors').click(function(){
    var array = ['rock', 'paper', 'scissors'];
    var arr = array[Math.floor (Math.random() * array.length)]; 
    $('#comp_choice').html('Computer chose ' + arr)
    var playerClick = $(this);
    var playerChoice = playerClick[0].className;
  // });

  

// (function game(playerChoice, arr){
  var msg = '';
  if(playerChoice == arr) {
    msg = "Looks like a tie B****";
  } else if(playerChoice == "rock" && arr == "scissors"){
    msg = "Player wins";
  } else if(playerChoice == "paper" && arr == "rock"){
    msg = "Player wins";
  }  else if (playerChoice == "scissors" && arr == "paper"){
    msg = "Player wins";
  }  else {
    msg = "Computer wins";
  }
  $('#winner').html("<p>" + msg + "</p>")
 });

});





