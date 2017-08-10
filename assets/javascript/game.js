
  var Userguess = 0;

  var computerChoices = ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","y","x","z"];

  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
  
  var guessesLeft = 3;

  var yourGuessesSoFar = 0;

  var loss=0;

  var wins=0;

  var test=0;

  console.log("computerGuess " + computerGuess);
  console.log("Userguess " + Userguess );
