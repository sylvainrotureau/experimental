// ----------------- TEST 2 ------------------
// Declare empty variables
let player1 = "";
let player2 = "";
let result = "";
let message = "";

// Declare the 3 differents Moves
let choices = [
    "rock",
    "paper",
    "scissors"
];

// Function to generate a number between 1 and 3
function generateMove() {
    let randomNumber = choices[Math.floor(Math.random() * 3)];
    return randomNumber;
}

// Generate Moves for player 1 and 2
function getMoves() {
    player1 = generateMove();
    player2 = generateMove();
};

// Function to check the winner
function getWinner() {
    // Launch getMoves()
    getMoves();

    // Check who's the winner and return a message
    if (player1 === player2) {
        result = "Les joueurs sont à égalité";
        return result;
    } else if (player1 === "rock") {
        if (player2 === "paper") {
            result = "Le joueur 2 gagne";
            return result;
        } else {
            result = "Le joueur 1 gagne";
            return result;
        }
    } else if (player1 === "paper") {
        if (player2 === "rock") {
            result = "Le joueur 1 gagne";
            return result;
        } else {
            result = "Le joueur 2 gagne";
            return result;
        }
    } else if (player1 === "scissors") {
        if (player2 === "paper") {
            result = "Le joueur 1 gagne";
            return result;
        } else {
            result = "Le joueur 2 gagne";
            return result;
        }
    };
};

// launch a new game 
function launchGame() {
    let message = getWinner();
    let div1 = document.getElementById('displayResult1');
    div1.innerHTML = player1;

    let div2 = document.getElementById('displayResult2');
    div2.innerHTML = player2;

    let div3 = document.getElementById('displayWinner');
    div3.innerHTML = message;
    return message;
}

// When button is click, launch launchGame()
let button = document.querySelector('.button');
button.addEventListener('click', launchGame);