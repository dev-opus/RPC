let computerScore = 0;
let yourScore = 0;
let winner;
// functionality of the computer play

function computerPlay() {
    let decider = Math.random() * 10;
    let playForm;

    playForm =
        decider >= 1 && decider <= 3
            ? 'rock'
            : decider > 3 && decider <= 6
            ? 'paper'
            : 'scissors';
    return playForm;
}

// functionality of the play round

function playRound(playerSelection, computerPlay) {
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerPlay() === 'rock') {
            computerScore = computerScore;
            yourScore = yourScore;
            return "It's a tie!";
        } else if (computerPlay() === 'scissors') {
            yourScore++;
            return 'You win! Rock beats Scissors';
        } else {
            computerScore++;
            return 'You lose! Paper beats Rock';
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerPlay() === 'rock') {
            computerScore++;
            return 'You lose! Rock beats Scissors';
        } else if (computerPlay() === 'scissors') {
            yourScore = yourScore;
            computerScore = computerScore;
            return "It's a tie!";
        } else {
            yourScore++;
            return 'You win! Scissors beats Paper';
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerPlay() === 'rock') {
            yourScore++;
            return 'You win! Paper beats Rock';
        } else if (computerPlay() === 'scissors') {
            computerScore++;
            return 'You lose! Scissors beats Paper';
        } else {
            computerScore = computerScore;
            yourScore = yourScore;
            return "It's a tie!";
        }
    }
}

function gane() {
    let count = 5;
    while (count > 0) {
        let playerSelection = prompt(
            'Choose your mode: Rock, Scissors or Paper',
        );

        if (
            playerSelection.toLowerCase() !== 'rock' &&
            playerSelection.toLowerCase() !== 'scissors' &&
            playerSelection.toLowerCase() !== 'paper'
        ) {
            alert(
                'Invalid selection! Please choose between Rock, Paper or Scissors',
            );
        } else {
            computerPlay();
            console.log(
                '%s',
                `${playRound(playerSelection, computerPlay)}
            AI: ${computerScore}
            You: ${yourScore}`,
            );
            count--;
        }
    }
}

gane();
if (yourScore > computerScore) {
    winner = 'Hurray! You won this wave!';
} else {
    winner = 'Ouch! You lost this wave';
}

console.log(`${winner}\nAI: ${computerScore}\nYou: ${yourScore}`);