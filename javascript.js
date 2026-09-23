function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3) + 1;

    switch (computerChoice) {
        case 1: {
            return "rock"
        }
        case 2: {
            return "paper"
        }
        case 3: {
            return "scissor"
        }
    }
}


function getHumanChoice() {
    const humanChoice = prompt("Enter your choice: (rock, paper, scissor)");
    return humanChoice ? humanChoice.toLowerCase() : "";
}

function printScore(humanScore, computerScore) {
    console.log("score: ");
    console.log("human score: " + humanScore);
    console.log("computer score: " + computerScore);
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("draw, " + humanChoice + " = " + computerChoice)
        return 0;
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        console.log("you win, " + humanChoice + " beats " + computerChoice);
        return 1
    } else {
        console.log("You lose, " + computerChoice + " beats " + humanChoice)
        return -1
    }
}

function playGame() {

    let humanScore = 0;
    let computerScore = 0;

    for (let i = 1; i <= 5; i++) {
        let score = playRound(getHumanChoice(), getComputerChoice());
        switch (score) {
            case 1: humanScore++; break;
            case -1: computerScore++; break
        }
        printScore(humanScore, computerScore)
    }
}



playGame()