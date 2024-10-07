// button elements
const buttons = document.querySelectorAll("button")

// result search and score display
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");
const finalScore = document.getElementById("fiR")


// Initializing scores
let playerScore = 0
let computerScore = 0

// for player selection
for(btn of buttons) {
    btn.addEventListener("click", () => {
        const result = playGame(btn.id, computerS())
        resultEl.textContent = result
    });
}

// for computer selection
function computerS() {
    const choices = ["rock", "paper", "scissors"]
    const randomChoice = Math.floor(Math.random() * choices.length)
    return choices[randomChoice]
}

// main function
function playGame(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie, Go again!"
    }
    else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++
        playerScoreEl.textContent = playerScore

        if (playerScore > computerScore) {
            finalScore.textContent = "You are winning... :D"
        }

        if (playerScore == computerScore) {
            finalScore.textContent = "TIE situation"
        }

        return "You win! " + playerSelection + " beats " + computerSelection;
    }

    else {
        computerScore++;
        computerScoreEl.textContent = computerScore;

        if (computerScore > playerScore) {
            finalScore.textContent = "You are losing to a computer lol"
        }

        if (playerScore == computerScore) {
            finalScore.textContent = "TIE situation"
        }

        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}


