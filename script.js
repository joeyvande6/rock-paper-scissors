
function getComputerChoice(choice1, choice2, choice3) {
    const choices = [choice1, choice2, choice3];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getHumanChoice() {
    let humanChoice = prompt("Kies rock, paper of scissors:");

    if (humanChoice === null) {
        return "";
    }

    return humanChoice.toLowerCase().trim();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            return `Gelijkspel! Jullie kozen allebei ${humanChoice}.`;
        }

        if (humanChoice === "rock") {
            if (computerChoice === "scissors") {
                humanScore++;
                return "Je wint! Rock verslaat scissors.";
            } else {
                computerScore++;
                return "Je verliest! Paper verslaat rock.";
            }
        }

        if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                humanScore++;
                return "Je wint! Paper verslaat rock.";
            } else {
                computerScore++;
                return "Je verliest! Scissors verslaat paper.";
            }
        }

        if (humanChoice === "scissors") {
            if (computerChoice === "paper") {
                humanScore++;
                return "Je wint! Scissors verslaat paper.";
            } else {
                computerScore++;
                return "Je verliest! Rock verslaat scissors.";
            }
        }

        return "Ongeldige keuze!";
    }

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(
            "rock",
            "paper",
            "scissors"
        );

        console.log("Computer koos: " + computerSelection);
        console.log(playRound(humanSelection, computerSelection));
        console.log("Jouw score: " + humanScore);
        console.log("Score computer: " + computerScore);
    }

    if (humanScore > computerScore) {
        console.log("Je hebt het spel gewonnen!");
    } else if (computerScore > humanScore) {
        console.log("De computer heeft het spel gewonnen!");
    } else {
        console.log("Het spel is gelijkspel!");
    }
}

playGame();