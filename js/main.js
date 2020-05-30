/* 
    functionality of the game lives here. first,
    i'll grab all i need from the html


    3rd i'll add event listeners with
    their functions and 


    2nd, i'll create the corresponding functions
*/

let userScore = document.getElementById('user-score');
let compScore = document.getElementById('comp-score');
let resultText = document.querySelector('.result > p');

const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');

function setCompMode() {
	const modes = ['rock', 'paper', 'scissors'];
	let randomizer = Math.floor(Math.random() * 3);

	let mode = modes[randomizer];
	return mode;
}

function setPlayerMode(event) {
	this.event.target === rock
		? (mode = 'rock')
		: this.event.target === paper
		? (mode = 'paper')
		: (mode = 'scissors');

	return mode;
}

function play(player, computer) {
	let playerMode = player();
	let compMode = computer();

	if (parseInt(userScore.innerText) === 5) {
		resultText.innerText =
			'this wave is over and you have won it! click on any icon to restart';

		setTimeout(() => {
			userScore.innerText = 0;
			compScore.innerText = 0;
		}, 3000);
	} else if (parseInt(compScore.innerText) === 5) {
		resultText.innerText =
			'this wave is over and you have lost it! click on any icon to restart';

		setTimeout(() => {
			userScore.innerText = 0;
			compScore.innerText = 0;
		}, 3000);
	} else {
		if (playerMode === compMode) {
			resultText.innerText = "It's a draw";
		} else if (playerMode == 'rock') {
			if (compMode == 'paper') {
				compScore.innerText = parseInt(compScore.innerText) + 1;
				resultText.innerHTML =
					'ouch! you lost this round. paper <sup style="color: red;"> (com)</sup> beats rock <sup style="color: red;"> (you)</sup>';
			} else {
				userScore.innerText = parseInt(userScore.innerText) + 1;
				resultText.innerHTML =
					'yaayy! you won this round. rock <sup style="color: red;"> (you)</sup> beats scissors <sup style="color: red;"> (com)</sup>';
			}
		} else if (playerMode == 'paper') {
			if (compMode == 'scissors') {
				compScore.innerText = parseInt(compScore.innerText) + 1;
				resultText.innerHTML =
					'ouch! you lost this round. scissors <sup style="color: red;"> (com)</sup> beats paper <sup style="color: red;"> (you)</sup>';
			} else {
				userScore.innerText = parseInt(userScore.innerText) + 1;
				resultText.innerHTML =
					'yaayy! you won this round. paper <sup style="color: red;"> (you)</sup> beats rock <sup style="color: red;"> (com)</sup>';
			}
		} else {
			if (compMode == 'rock') {
				compScore.innerText = parseInt(compScore.innerText) + 1;
				resultText.innerHTML =
					'ouch! you lost this round. rock <sup style="color: red;"> (com)</sup> beats scissors <sup style="color: red;"> (you)</sup>';
			} else {
				userScore.innerText = parseInt(userScore.innerText) + 1;
				resultText.innerHTML =
					'yaayy! you won this round.  scissors <sup style="color: red;"> (you)</sup> beats paper <sup style="color: red;"> (com)</sup>';
			}
		}
	}

	console.log(playerMode, compMode);
}

rock.addEventListener('click', () => {
	play(setPlayerMode, setCompMode);
});
paper.addEventListener('click', () => {
	play(setPlayerMode, setCompMode);
});
scissors.addEventListener('click', () => {
	play(setPlayerMode, setCompMode);
});
