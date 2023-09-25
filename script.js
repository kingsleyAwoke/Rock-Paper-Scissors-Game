let playGame = confirm('Do you want to play Rock, Paper, or Scissors?');
if (playGame) {
    while (playGame) {
        const playerChoice = prompt('please enter rock, paper, scissors.');
        if (playerChoice || playerChoice === "") {
            const playerOne = playerChoice.trim().toLowerCase();
            if ( playerOne === "rock" || playerOne === "paper" || playerOne === "scissors") {
                const computerChoice = Math.floor( Math.random() * 3);
                const rpsArray = ["rock", "paper", "scissors"];
                const computer = rpsArray[computerChoice];
    
    
                const result = playerOne === computer 
                ? "Tie game!" 
                : playerOne === "rock" && computer === "paper" 
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!` 
                : playerOne === "scissors" && computer === "scissors" 
                ? `playerOne: ${playerOne}\ncomputer: ${computer}\nComputer wins!`
                : playerOne === "scissors" && computer === "rock" 
                ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
                : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
                alert(result);
                playGame = confirm("Do you want to play Again?");
                if (!playGame) alert("Ok, thanks for playing.");
                continue;
            } else {
                alert("You didn't enter rock, paper, or scissors");
                continue;
            }
        } else {
            alert("");
            break;
        }
    }
} else {
    alert("Okay, maybe next time");
}

