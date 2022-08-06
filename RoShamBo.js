const test = "hello World!";
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const computerOptions = ["Rock" , "Paper" , "Scissors"];
    let randomNumber = (Math.floor(Math.random()*3));
    let finalChoice = computerOptions[randomNumber];
    return finalChoice;
}