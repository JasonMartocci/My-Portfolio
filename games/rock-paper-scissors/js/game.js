var computerChoices = ['r', 'p', 's'];
var wins = 0;
var losses = 0;
var ties = 0;

document.onkeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    if ((userGuess == 'r') || (userGuess == 'p') || (userGuess == 's')){

        if ((userGuess == 'r') && (computerGuess == 's')){
            wins++;
        }else if ((userGuess == 'r') && (computerGuess == 'p')){
            losses++;
        }else if ((userGuess == 's') && (computerGuess == 'r')){
            losses++;
        }else if ((userGuess == 's') && (computerGuess == 'p')){
            wins++;
        }else if ((userGuess == 'p') && (computerGuess == 'r')){
            wins++;
        }else if ((userGuess == 'p') && (computerGuess == 's')){
            losses++;
        }else if (userGuess == computerGuess){
            ties++;
        }  
        var displayWins = wins;
        document.querySelector('#wins').innerHTML = displayWins;

        var displayLosses = losses;
        document.querySelector('#losses').innerHTML = displayLosses;

        var displayTies = ties;
        document.querySelector('#ties').innerHTML = displayTies;

        var displayUserGuess = userGuess;
        document.querySelector('#userGuess').innerHTML = displayUserGuess;

        var displayComputerGuess = computerGuess;
        document.querySelector('#computerGuess').innerHTML = displayComputerGuess;

        // var html = "<p>" + "You guessed: " + userGuess + "<br>" + "Computer guessed: " + computerGuess + "</p>";

        document.querySelector('#game').innerHTML = html;
    }
}
