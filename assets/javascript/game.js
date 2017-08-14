
var computerChoices = ["w","a","s","d"];

var computerGuess = null;

var wins = 0;

var loss = 0;

var guessesLeft = 3;

var yourGuessesSoFar = 0;

//Tell user guesses and guesses so far without key pressing 

  document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("yourGuessesSoFar").innerHTML = yourGuessesSoFar;


//Key pressing function 

document.body.onkeyup = function(event) {

  var Userguess = event.key;
  document.getElementById("Userguess").innerHTML = String.fromCharCode(event.keyCode);
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  
  
  if (computerGuess === Userguess) {
    wins++;

    document.getElementById("wins").innerHTML = wins;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("yourGuessesSoFar").innerHTML = yourGuessesSoFar;

    document.getElementById("computerGuess").innerHTML = computerGuess;
}

  if (computerGuess !== Userguess) {
    yourGuessesSoFar++, guessesLeft--;

    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("yourGuessesSoFar").innerHTML = yourGuessesSoFar;
    document.getElementById("computerGuess").innerHTML = computerGuess;
}

   if (guessesLeft <= 0) {
    loss++;
    guessesLeft = 3;

  document.getElementById("loss").innerHTML = loss;


}

//Restart

  if (loss >= 3) {

    loss = 0;
    guessesLeft = 3; 

    wins = 0;

    loss = 0;

    yourGuessesSoFar = 0;


    alert("Game Over!");

    document.getElementById("wins").innerHTML = wins;
  document.getElementById("loss").innerHTML = loss;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("yourGuessesSoFar").innerHTML = yourGuessesSoFar;


    }

  

  if (wins >= 3) {

    alert("You Won!");

    loss = 0;
    guessesLeft = 3; 

    wins = 0;

    loss = 0;

    yourGuessesSoFar = 0;

    document.getElementById("wins").innerHTML = wins;
  document.getElementById("loss").innerHTML = loss;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    document.getElementById("yourGuessesSoFar").innerHTML = yourGuessesSoFar;

  }
}


