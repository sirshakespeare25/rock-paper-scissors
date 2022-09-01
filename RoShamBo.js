let score = 0;
const test = "hello World!";



function getComputerChoice() {
    const computerOptions = ["Rock" , "Paper" , "Scissors"];
    let randomNumber = (Math.floor(Math.random()*3));
    return computerOptions[randomNumber];   
};

function getPlayerChoice(playerResponse) {
    let playerChoice = correctString(playerResponse);
    if (playerChoice === "Rock" || playerChoice === "Paper" || playerChoice === "Scissors") {
        return playerChoice;
     }

     else {
        getPlayerChoice(playerResponse = prompt("Thats not an Option, Try Again!"));
        return playerResponse;
     }
};

function correctString(word) {
    let a = (word.slice(0,1));
        b = (word.slice(1));
        finalWord = (a.toUpperCase()+b.toLowerCase());
    return finalWord;
};


function playRound(input) {
    const computerChoice = getComputerChoice();
    const playerChoice = getPlayerChoice(input);
    if (playerChoice == computerChoice) {
        alert(playerChoice + ' is the same as ' + computerChoice);
        playRound();
}

    else if ((playerChoice === "Rock" && computerChoice === 'Scissors') || (playerChoice === 'Paper' && computerChoice === 'Rock') || (playerChoice === 'Scissors' && computerChoice === 'Paper')) {
        alert("You win! " + (playerChoice) + " beats " + (computerChoice) + "!");
        return true;
}

    else {
        alert("You lose! " + (computerChoice) + " beats " + (playerChoice) + "!");
        return false;
}
};

function playGame() {
    for (i = 0; i < 5; i++) {
        if (playRound() === true) {
            score++
        }
        else {
            score--
        }
    };
    
    scoreBoard(score);
};

function scoreBoard(finalScore) {
    if (Number(finalScore) > 0) {
        alert("You won this Time!")
    }

    else {
        alert("Better luck next Time!")
    }
};

function testRun() {
    console.log(button.id);
};

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
     playRound(button.id)   
    });
});
