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
    ]

       

}

let firstName = "Paul";
let lastName = "Niort";
let age = "40";

function addPlayer(firstName, lastName, age) {
    team._players.push;
}

console.log(team._players[0])

