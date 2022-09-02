let score = 0;
let playerScore = 0;
let computerScore = 0;
let result = document.getElementById('result');
let computer = document.getElementById('computerScore');
let player = document.getElementById('playerScore')





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

function scoreBoard(finalScore) {
    if (Number(finalScore) > 0) {
        alert("You won this Time!")
    }

    else {
        alert("Better luck next Time!")
    }
};

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
     playRound(button.id)   
    });
});

function endGame (playerScore, computerScore){
if (playerScore >= 5) {
    result.textContent = 'You won the game!';
    computerScore = 0;
    playerScore = 0;
    computer.innerText = (computerScore);
    player.innerText = (playerScore);    
} else if (computerScore >= 5) {
    result.innerText = 'You lost the game!';
    computerScore = 0;
    playerScore = 0;
    computer.innerText = (computerScore);
    player.innerText = (playerScore);
}
};



