let humanScore = 0;
let computerScore = 0;


function getComputerChoice() {
    const computerChoice =  Math.floor(Math.random() * 3) + 1;

    switch (computerChoice) {
        case 1 :{
            return "rock"
            break
        }
        case 2 :{
            return "paper"
            break
        }
        case 3 : {
            return "scissor"
        }
    }
}


function getHumanChoice() {
    const humanChoice = prompt("Enter your choice: (rock, paper, scissor");
    return humanChoice
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("you win")
        humanScore += 1;
        console.log("your score: " + humanScore);
        console.log("computer score: " + computerScoreScore)
    }
}

const humanChoice = getHumanChoice().toLowerCase();
const computerChoice = getComputerChoice();

console.log(humanChoice);
console.log(computerChoice);
playRound(humanChoice, computerChoice);