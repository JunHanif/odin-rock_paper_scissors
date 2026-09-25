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

function printScore(humanScore, computerScore) {
    scoreDiv.textContent = "You: " + humanScore + " | " + "computer: " + computerScore;
}



function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log("draw, " + humanChoice + " = " + computerChoice)
        resultDiv.textContent = "draw, " + humanChoice + " = " + computerChoice

    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        console.log("you win, " + humanChoice + " beats " + computerChoice);
        resultDiv.textContent = "you win, " + humanChoice + " beats " + computerChoice
        humanScore++;
    } else {
        console.log("You lose, " + computerChoice + " beats " + humanChoice)
        resultDiv.textContent = "you lose, " + computerChoice + " beats " + humanChoice
        computerScore++;
    }
}


let humanScore = 0;
let computerScore = 0;

const container = document.querySelector(".container")

const buttonGroup =document.createElement("div")
buttonGroup.classList.add("btn-group")

const rockBtn = document.createElement("button");
rockBtn.textContent = "ROCK";

const paperBtn = document.createElement("button");
paperBtn.textContent = "PAPER"

const scissorBtn = document.createElement("button");
scissorBtn.textContent = "SCISSOR";

const scoreDiv = document.createElement("div");
scoreDiv.classList.add("score");

const resultDiv = document.createElement("div");
resultDiv.classList.add("result");

const winnerDiv = document.createElement("div");
winnerDiv.classList.add("winner")

const resetBtn = document.createElement("button");
resetBtn.textContent = "PLAY AGAIN";

buttonGroup.appendChild(rockBtn);
buttonGroup.appendChild(paperBtn);
buttonGroup.appendChild(scissorBtn);

container.appendChild(buttonGroup)

container.appendChild(resultDiv);
container.appendChild(scoreDiv);
container.appendChild(winnerDiv);

container.appendChild(resetBtn)

function checkWinner() {

    if (humanScore === 5) {
        winnerDiv.textContent = "you won"
    }

    else if (computerScore === 5) {
        winnerDiv.textContent = "you lose"
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    resultDiv.textContent = "";
    winnerDiv.textContent = "";
    printScore(humanScore, computerScore);
}

rockBtn.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
    printScore(humanScore, computerScore);
    checkWinner();
});
paperBtn.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
    printScore(humanScore, computerScore);
    checkWinner();
});
scissorBtn.addEventListener("click", () => {
    playRound("scissor", getComputerChoice());
    printScore(humanScore, computerScore);
    checkWinner();

});

resetBtn.addEventListener("click", resetGame)

printScore(humanScore, computerScore);