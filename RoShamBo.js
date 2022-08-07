const test = "hello World!";
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const computerOptions = ["Rock" , "Paper" , "Scissors"];
    let randomNumber = (Math.floor(Math.random()*3));
    let finalChoice = computerOptions[randomNumber];
    return finalChoice;
};

function getPlayerChoice(playerResponse = prompt("Rock, Paper, Scissors! Make your Decision!?")) {
     let playerChoice = correctString(playerResponse);
     if (playerChoice === ("Rock" || "Paper" || "Scissors")) {
        return playerChoice;
     }

     else {
        getPlayerChoice(playerResponse = prompt("Thats not an Option, Try Again!"));
        return playerResponse;
     }
    return playerChoice;
}

function correctString(word) {
    let a = (word.slice(0,1));
        b = (word.slice(1));
        finalWord = (a.toUpperCase()+b.toLowerCase());
    return finalWord;
}


function playRound(getComputerChoice , getPlayerChoice) {

};