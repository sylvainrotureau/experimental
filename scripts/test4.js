// Déclaration du message secret
const secretMessage = ["Learning", "isn't", "about", "what", "you", "get", "easily", "the", "first",
    "time,", "it's", "about", "what", "you", "can", "figure", "out.", "-2015,", "Chris", "Pine,",
    "Learn", "JavaScript"];

// Suppression du dernier mot du message
function removeLastWord(messageUpdated) {
    const lastWord = messageUpdated.lastIndexOf(' ');

    if (lastWord === -1) {
        return messageUpdated;
    }

    return messageUpdated.substring(0, lastWord);
}

// Ajouter des mots à la fin d'une phrase
function addWordAtTheEnd(messageUpdated) {
    let str = messageUpdated.concat(' ', 'to', ' ', 'program');
    return str;
}

// Remplace un mot précis dans une phrase
function replaceWord(secretMessage) {
    let oldWord = "easily";
    let str = secretMessage.indexOf(oldWord);
    let newWord = "right";
    secretMessage[str] = newWord;
    return secretMessage;
}

// Supprime le premier mot
function removeFirstWord(secretMessage) {
    let wordToRemove = secretMessage.shift();
    return secretMessage;
}

// ajouter le premier mot
function addFirstWord(secretMessage) {
    let firstWordToAdd = secretMessage.unshift("Programming");
    return secretMessage;
}

// Replace words
function replaceWords(secretMessage) {
    let wordToUse = "know";
    secretMessage.splice(5, 5, wordToUse);
    return secretMessage;
}

// Transforme l'array en phrase sans les virgules
function removeComa(secretMessage) {
    let str = secretMessage.join(" ");
    return str;
}


function execution(secretMessage) {

    // Utiliser une méthode pour enlever le dernier éléments du tableau `secretMessage`.
    let messageUpdated = removeLastWord(secretMessage);
    console.log(`Suppression du dernier mot :${messageUpdated}`);

    //  Utiliser une méthode pour ajouter les mots 'to' and 'program' comme des éléments distincts à la fin du tableau.
    messageUpdated = addWordAtTheEnd(messageUpdated);
    console.log(`Ajout de mots à la fin :${messageUpdated}`);

    // Changer le mot 'easily' par 'right' en accédant au bon index du tableau.
    let str = replaceWord(secretMessage);
    messageUpdated = removeComa(str);
    console.log(`Remplace le mot easily par right :${messageUpdated}`);

    // Utiliser une méthode pour supprimer le premier éléments du tableau.
    messageUpdated = removeFirstWord(secretMessage);
    console.log(`La phrase sans le premier mot :${messageUpdated}`);

    // Utiliser une méthode pour ajouter la chaine "Programming" en début de tableau.
    messageUpdated = addFirstWord(secretMessage);
    console.log(`La phrase avec un nouveau premier mot :${messageUpdated}`);

    // Utiliser une méthode pour remplacer les mots 'get', 'right', 'the', 'first', 'time' par 'know'.
    messageUpdated = replaceWords(secretMessage);
    console.log(`La phrase avec de nouveaux mots :${messageUpdated}`);

    // Utiliser la méthode `.join` pour afficher le message secret à la console.
    messageUpdated = removeComa(secretMessage);
    console.log(`La phrase initiale est : ${messageUpdated}`);
};

// Lancement de la fonction
execution(secretMessage);