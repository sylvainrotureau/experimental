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
        return result, player1, player2;
    } else if (player1 === "rock") {
        if (player2 === "paper") {
            result = "Le joueur 2 gagne";
            return result, player1, player2;
        } else {
            result = "Le joueur 1 gagne";
            return result, player1, player2;
        }
    } else if (player1 === "paper") {
        if (player2 === "rock") {
            result = "Le joueur 1 gagne";
            return result, player1, player2;
        } else {
            result = "Le joueur 2 gagne";
            return result, player1, player2;
        }
    } else if (player1 === "scissors") {
        if (player2 === "paper") {
            result = "Le joueur 1 gagne";
            return result, player1, player2;
        } else {
            result = "Le joueur 2 gagne";
            return result, player1, player2;
        }
    };
};

function launch1000Game() {
    let nbWinPlayer1 = "";
    let nbWinPlayer2 = "";
    let nbDraw = "";
    let nbRock = "";
    let nbPaper = "";
    let nbScissors = "";

    for (let i = 0; i < 1000000000; i++) {

        let message = getWinner();

        // incrémentation des variables 
        if (player1 === "rock") {
            nbRock++;
        } else if (player2 === "rock") {
            nbRock++;
        } else if (player1 === "paper") {
            nbPaper++;
        } else if (player2 === "paper") {
            nbPaper++;
        } else if (player1 === "scissors") {
            nbScissors++;
        } else if (player2 === "scissors") {
            nbScissors++;
        } 

        // incrémentation des variables 
        if (result === "Les joueurs sont à égalité") {
            nbDraw++;
        } else if (result === "Le joueur 1 gagne") {
            nbWinPlayer1++;
        } else {
            nbWinPlayer2++;
        }
    }

    let div1 = document.getElementById('nbWinPlayer1');
    div1.innerHTML = nbWinPlayer1;

    let div2 = document.getElementById('nbWinPlayer2');
    div2.innerHTML = nbWinPlayer2;

    let div3 = document.getElementById('nbDraw');
    div3.innerHTML = nbDraw;

    let div4 = document.getElementById('nbRock');
    div4.innerHTML = nbRock;

    let div5 = document.getElementById('nbPaper');
    div5.innerHTML = nbPaper;

    let div6 = document.getElementById('nbScissors');
    div6.innerHTML = nbScissors;
    return message;
};

// When button is click, launch launch1000Game()
let button = document.querySelector('.button1000');
button.addEventListener('click', launch1000Game);