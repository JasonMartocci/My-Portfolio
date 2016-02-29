// character list, started with an array changed to variables.
var Peashooter = {
	name: 'Peashooter',
	health: 180,
	attackPower: 20,
	attackPowerConstant: 20,
	counterAttack: 25
}

var CherryBomb = {
	name: 'CherryBomb',
	health: 100,
	attackPower: 10,
	attackPowerConstant: 10,
	counterAttack: 5
}

var Chomper = {
	name: 'Chomper',
	health: 150,
	attackPower: 15,
	attackPowerConstant: 15,
	counterAttack: 20
}

var KernelPult = {
	name: 'KernelPult',
	health: 120,
	attackPower: 8,
	attackPowerConstant: 8,
	counterAttack: 10
}

// onclick functions to pick the characters to play the game once the document is ready.
$(document).ready(function() {

	$('.choose-hero').on('click', pickHero);
	$('.choose-hero').click(function(){
        $('.choose-hero').unbind('click', pickHero);
     });
	$('.enemies').on('click', pickVillain);
	$('.enemies').click(function(){
    	$('.enemies').unbind('click', pickVillain);
    });

	$('.btn-attack').click(changeHealth);

});

// pick hero and append it to class choose-hero
function pickHero() {
	$('.enemies').append($(".choose-hero"));
	$('.your-char').append(this);
}


// pick villain and append it to class defender
function pickVillain(e){
	$('.attack-report').empty();
	$('.counter-report').empty();
    $('.defender').append(e.target);
}

// function to change health of characters as the game progresses 
function changeHealth() {
	var hero = $('.your-char div').attr('id');
	if(hero == 'Peashooter') {
		hero = Peashooter
	};
	if(hero == 'CherryBomb') {
		hero = CherryBomb
	};
	if(hero == 'Chomper') {
		hero = Chomper
	};
	if(hero == 'KernelPult') {
		hero = KernelPult
	};

	var villain = $('.defender div').attr('id');
	if(villain == 'Peashooter') {
		villain = Peashooter
	};
	if(villain == 'CherryBomb') {
		villain = CherryBomb
	};
	if(villain == 'Chomper') {
		villain = Chomper
	};
	if(villain == 'KernelPult') {
		villain = KernelPult
	};

	$('.defender .health').html(villain.health -= hero.attackPower);
	$('.your-char .health').html(hero.health -= villain.counterAttack);
	
	$('.attack-report').html("You attacked " + villain.name + " for " + hero.attackPower + " damage.");

	$('.counter-report').html(villain.name + " attacked you back for " + villain.counterAttack + " damage.");

	hero.attackPower += hero.attackPowerConstant;

	// status update of players depending on if you win or lose.
	if(hero.health <= 0 || villain.health <= 0) {
		if(hero.health <= 0) {
			$('.result').html("YOU LOSE.");
			$('.btn-attack').remove();
			$('.fight-section').append('<button class="restart btn btn-danger">Restart Game</button>');
			$('.restart').click(restart);
		} else {
			$('.attack-report').html("You defeated " + villain.name + "!");
			$('.counter-report').html("Please choose your next opponent.");
			$('.defender div').remove();
			$('.enemies').on('click', pickVillain);
			$('.enemies').click(function(){
    			$('.enemies').unbind('click', pickVillain);
    		});
		}
		if($('.enemies div').length == 0) {
			$('.result').html("YOU WIN!");
			$('.btn-attack').remove();
			$('.fight-section').append('<button class="restart btn btn-danger">Restart Game</button>');
			$('.restart').click(restart);
		}
	}
}

// restart function if game is over.
function restart() {
	location.reload();
}