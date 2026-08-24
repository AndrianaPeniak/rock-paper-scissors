function main() {
    let i = 0;
    let humanScore = 0;
    let computerScore = 0;

    while (i < 5) {
        console.log(`Round ${i+1}`);
        let scores = playRound(humanScore, computerScore);
        humanScore = scores.human;
        computerScore = scores.computer;
        console.log(`Score\nYou: ${humanScore}, Computer: ${computerScore}`);
        i++;
    }
    getWinner(humanScore, computerScore);
}

function getComputerChoice(){
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(choices.length * Math.random())];
    return computerChoice;
}

function getHumanChoice(){
    let isValid = false;
    while (isValid == false) {
        let answer = prompt("Your choice:");
        answer = answer.toLowerCase();
        if (answer == "rock" || answer == "scissors" || answer == "paper"){
            return answer;
            isValid = true;
        } else {
            console.log("Can't recognise your choice.");
            continue;
        }
    }
}

function playRound(humanScore, computerScore){
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    console.log(`Your choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    if (humanChoice == computerChoice) {
        console.log("tie");
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        console.log("you won this round!");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("you won this round!");
        humanScore++;
    } else if (humanChoice == "paper" && humanChoice == "rock") {
        console.log("you won this round!");
        humanScore++;
    } else if (computerChoice == "rock" && humanChoice == "scissors"){
        console.log("computer won this round!");
        computerScore++;
    } else if (computerChoice == "scissors" && humanChoice == "paper") {
        console.log("computer won this round!");
        computerScore++;
    } else if (computerChoice == "paper" && humanChoice == "rock") {
        console.log("computer won this round!");
        computerScore++;
    } 
    return {
        human: humanScore,
        computer: computerScore
    };
}

function getWinner(humanScore, computerScore) {
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("COmputer won the game!");
    } else {
        console.log("It's a tie!");
    }
}

main()