function main() {
    let humanScore = 0;
    let computerScore = 0;
    let i = 0;

    while (i < 5) {
        console.log(`Round ${i}`);
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

main()