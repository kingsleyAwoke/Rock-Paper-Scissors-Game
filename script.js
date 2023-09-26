const initGame = () => {
    const startGame = confirm('Do you want to play Rock, Paper, or Scissors?');
    startGame ? playGame() : alert("Ok, perharps next time");
}

const playGame = () => {
    while (true) {
        let playerChoice = getPlayerchoice();
        playerChoice = formatPlayerchoice(playerChoice);
        if (playerChoice === "") {
            invalidChoice();
            continue;
        }
        if (!playerChoice) {
            decidedNotToPlay();
            break;
        }
        playerChoice = evaliatePlayerChoice(playerChoice);
        if (!playerChoice) {
            invalidChoice();
            continue;
        }
        const computerChoice = getComputerChoice();
        const result = determineWinner(playerChoice, computerChoice);
        displayResult(result);
        if (askToPlayAgain()) {
            continue;
        } else {
            thanksForPlaying();
            break;
        }
    }
}

const getPlayerchoice = () => {
    return prompt("Please enter rock, paper, or scissors");
}

const formatPlayerchoice = playerChoice => {
    if (playerChoice || playerChoice === "") {
        return playerChoice.trim().toLowerCase();
    } else {
        return false;
    }
}
    
const decidedNotToPlay = () => {
    alert("I guess you changed your mind. its fine.");
}

const evaliatePlayerChoice = playerChoice => {
    if (
        playerChoice === "rock" ||
        playerChoice === "paper" ||
        playerChoice === "scissors"
    ) {
        return playerChoice;
    }
}

const invalidChoice = () => {
    alert("You didn't enter rock, paper, or scissors.");
}

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    const rpsArray = ["rock", "paper", "scissors"];
    return rpsArray[randomNumber];
}

const determineWinner = (player, computer) => {
    const winner =
        player === computer
            ? "Tie game!" 
            : player === "rock" && computer === "paper" 
            ? `playerOne: ${player}\nComputer: ${computer}\nComputer wins!` 
            : player === "scissors" && computer === "scissors" 
            ? `player: ${player}\ncomputer: ${computer}\nComputer wins!`
            : player === "scissors" && computer === "rock" 
            ? `player: ${player}\nComputer: ${computer}\nComputer wins!`
            : `player: ${player}\nComputer: ${computer}\nplayer wins!`;
        return winner;
}

const displayResult = result => {
    alert(result)
}

const askToPlayAgain = () => {
    return confirm("play Again?");
}

const thanksForPlaying = () => {
    alert("Ok, thanks for playing.");
}

initGame();
