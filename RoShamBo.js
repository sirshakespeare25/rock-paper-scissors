let score = 0;
let result = document.getElementById('result');
let computer = document.getElementById('computerScore');
let player = document.getElementById('playerScore')
let playerTotal = computer.innerText;
let computerTotal = player.innerText;





function getComputerChoice() {
    const computerOptions = ["Rock" , "Paper" , "Scissors"];
    let randomNumber = (Math.floor(Math.random()*3));
    return computerOptions[randomNumber];   
};

function getPlayerChoice(playerResponse) {
    let playerChoice = playerResponse;
    if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors") {
        return playerChoice;
     }
};

function playRound(input) {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice(input);
    computerScore = computer.innerText;
    playerScore = player.innerText
    if (playerChoice == computerChoice) {
        result.textContent = 'You Tied!';
        return;
}

    else if ((playerChoice === "Rock" && computerChoice === 'Scissors') || (playerChoice === 'Paper' && computerChoice === 'Rock') || (playerChoice === 'Scissors' && computerChoice === 'Paper')) {
        result.textContent = 'You Win!';
        playerScore++;
        player.innerText = (playerScore);
        endGame(playerScore, computerScore);

}

    else {
        result.textContent = 'You Lose!';
        computerScore++;
        computer.innerText = (computerScore);
        endGame(playerScore, computerScore);
}}; 

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
     playRound(button.id)   
    });
});

function endGame (playerScore, computerScore){
if (playerScore >= 5) {
    result.textContent = 'You won the game!';
    computer.innerText = ('0');
    player.innerText = ('0');    
} else if (computerScore >= 5) {
    result.innerText = 'You lost the game!';
    computerScore = 0;
    playerScore = 0;
    computer.innerText = ('0');
    player.innerText = ('0');
}
};



