//Setting variable to 0
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesFar = [];
var letterToGuess = "";

//Array of the alphabet
var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split(''); 
console.log(alphabet);


//Sets a random letter from the computer
function randomLetter () {
    letterToGuess = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(letterToGuess);
}

//Signals how many guesses the user has left
function upDateGuessesLeft () {
    document.getElementById("guessesLeft").innerHTML="Guesses left:"+guessesLeft;
}

//Signals all the letter the user has guessed
function guessesMade () {
    document.getElementById("guessesSoFar").innerHTML="Guesses so far:"+guessesFar;
}

//Counts how many guesses the user has left and restarts the game once it's more than 9
var restart = function () {
    guessesLeft = 9;
    console.log(guessesFar) = [];
}

document.onkeyup = function(event) {

    var playerGuess = event.key.toLowerCase();
    console.log(playerGuess);
	console.log(guessesLeft);
	
	guessesFar.push(playerGuess);
	randomLetter();
	upDateGuessesLeft();

	if (playerGuess === randomLetter){
		wins++;
		document.querySelector("#wins").innerHTML = "Wins: " + wins;
		restart();
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#lose").innerHTML = "Loses: " + losses;
		restart();
	}
  };