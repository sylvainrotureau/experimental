// ---------------------------------------------------------
// -------------- Exercice 1 --------------
//---------------------------------------------------------

// Partie 8 code academy
console.log("exo-6");

// commenter cette ligne de code.
let joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};

// afficher le nombre de voitures de Joe
document.getElementById("carCount").innerHTML = joeInfo.cars.length;

// changer le nombre de salle de bains de Joe : il n'en possède au'une.
document.getElementById("bathroomCountBefore").innerHTML = joeInfo.bathrooms;
joeInfo.bathrooms
joeInfo.bathrooms = 1;
document.getElementById("bathroomCountAfter").innerHTML = joeInfo.bathrooms;

// Joe vient d'acquérir un garage changer la structure pour le refléter.
document.getElementById("garageInitialStatus").innerHTML = joeInfo.garage;
joeInfo.garage = true;
document.getElementById("garageAfterStatus").innerHTML = joeInfo.garage;

// ---------------------------------------------------------
// -------------- Exercice 2 --------------
//---------------------------------------------------------


let team = {
    _players : [
        {
            firstName: "Pablo",
            lastName: "Sanchez",
            age: 11
        },
    ],
    _games : [
        {
            opponent: "Broncos",
            teamPoints: 42,
            opponentPoints: 27
        },
    ]
}

let firstName = "Paul";
let lastName = "MARTIN";
let age = 40;

let opponent = "Paul";
let teamPoints = 22;
let opponentPoints = 40;

let totalGameSum = 0;
let totalAdvSum = 0;

function addPlayer(firstName, lastName, age) {
    team._players.push({
        firstName: firstName,
        lastName: lastName,
        age: age
    });
}

function addMatch(opponent, teamPoints, opponentPoints) {
    team._games.push({
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
    });
}


function gamePointSum(){
    for (let i=0; i<team._games.length ; i++){
        totalGameSum = totalGameSum + team._games[i].teamPoints;
       
    }
}

function gamePointAdvSum(){
    for (let i=0; i<team._games.length ; i++){
        totalAdvSum = totalAdvSum + team._games[i].opponentPoints;
       
    }
}

function gamePointAdvAvg(){
    let avg = totalAdvSum / team._games.length;
    avg = Math.round(avg);
    return avg;       
    
}


function oldest(){
    let age = 0;
    let firstName = "";
    let lastName = "";
    for (let i=0; i<team._players.length ; i++){
        if (team._players[i].age >= age) {
            age = team._players[i].age;
            firstName = team._players[i].firstName;
            lastName = team._players[i].lastName;
        }
        
    }
    return age, firstName, lastName;
}

for (let i=0;i<10;i++){
    addPlayer(firstName, lastName, age);
    addMatch(opponent, teamPoints, opponentPoints);
}

gamePointSum();
gamePointAdvSum();


console.log(`total des points de notre équipe ${totalGameSum}`);
console.log(`total des points des équipes adverses ${totalAdvSum}`);
console.log(`moyenne des points des équipes adverses ${gamePointAdvAvg()}`);

for (let i=0; i<team._players.length ; i++){
    console.log(`Le joueur ${i} est : ${team._players[i].firstName} ${team._players[i].lastName} ${team._players[i].age}`);
}

console.log(`Le joueur le plus vieux est ${oldest()}`);

// console.log(team._players);
// console.log(team._games);

