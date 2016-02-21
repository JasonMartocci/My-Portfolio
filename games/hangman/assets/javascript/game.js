//variables.
var wordList = ["blaze", "cavespider", "creeper", "enderdragon", "enderman", "ghast", "irongolem", "silverfish", "steve", "skeleton", "slime", "minecraft", "spider", "witch", "wither", "witherskeleton", "wolf", "zombie", "zombiepigman"];  
var word;
var lettersGuessed = "";
var guessesLeft;
var placeholder;
var correct;
var wordLength;
var wordSubstring;
var wins = 0;
var losses = 0;
var audio = new Audio('assets/music/Minecraft-Background_Music_1.mp3');


// Function to start a new game and split the word.
function newGame() {
	placeholder = "";
	guessesLeft = 10;
	lettersGuessed = "";
	audio.play();
	word = wordList[Math.floor(Math.random() * wordList.length)];
	splitWord = word.split("");
	currentWord = 0;
	
	// word = wordList[currentWord];
	wordLength = word.length;
	wordSubstring = word.substring;
	
	//Adding underscores for every character in the phrase.
	for (var i = 0; i<splitWord.length; i++) {
		placeholder = placeholder + "_";
	}

	document.getElementById("placeholder").innerHTML = placeholder;
	document.getElementById("gameStatus").innerHTML = "Push any key to begin.";
}


// Function to transfer keypress to userguess.
document.onkeypress = function(event) {
	var correct = 0;
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	console.log(word);

	var keyPressed = keyPressed || window.event,
	    charCode = keyPressed.keyCode || keyPressed.which,
	    lettersGuessed = String.fromCharCode(charCode);

	    document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
		document.getElementById("guessesLeft").innerHTML = guessesLeft;

	for (var i = 0;i<splitWord.length;i++) {
		//If correct.
		if (userGuess == word.substring(i, i + 1)) {
			correct++;
			placeholder = placeholder.substring(0, i) + userGuess + placeholder.substring(i +1, placeholder.length +1);
			document.getElementById("placeholder").innerHTML = placeholder;
		}
	}
	
	if (correct === 0) {
	  	guessesLeft--;
	}

	if (placeholder.indexOf("_") == -1) {
		//alert("You Win!");
		wins++;
		var userWins = wins;
		document.querySelector("#wins").innerHTML = userWins;

		var correctGuess = " ";
		document.querySelector("#lettersGuessed").innerHTML = correctGuess;
		newGame();
	}
	
	if (guessesLeft === -1) {
		//alert("You Lose!");
		losses++;
		var userLoses = losses;
		document.querySelector("#losses").innerHTML = userLoses;

		var missedGuess = " ";
		document.querySelector("#lettersGuessed").innerHTML = missedGuess;
		alert("The word was " + word);
		newGame();
	}
}



// //Removes the letter after it is clicked or selected
// function removeLetter(i) {
// 	document.getElementById(i).innerHTML= "_";
// 	document.getElementById("guessesLeft").innerHTML = + guessesLeft;
// 	guessesLeft --;

// 	if (guessesLeft === -1) {
// 		alert("You Lose!");
// 	}
// }

// //Replaces the letter with blank after it is clicked or selected
// function replaceLetter(x) {
// 	for (i=0; i<words.length; i++) {
// 		var ul = document.getElementById("wordGuess"),
// 			liArray = ul.getElementsByTagName("li");
// 		if (words[i] == x ) {
// 			liArray[i].innerHTML = x;
// 		 }
// 	}
// }