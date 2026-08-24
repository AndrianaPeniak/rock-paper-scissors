function main() {
    let humanScore = 0;
    let computerScore = 0;
    let i = 0;

    while (i < 5) {
        console.log(`Round ${i}`);
        const humanChoice = getHumanChoice();
        console.log(`Your choice: ${humanChoice}`);
        const computerChoice = getComputerChoice();
        console.log(`Computer choice: ${computerChoice}`);
        i++;
    }
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

main()