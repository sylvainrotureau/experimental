

function removeComa(phrase) {
    let phraseprompt = phrase.join(" ");
    console.log(phraseprompt);
    return phraseprompt;
}

function checkWord(phrase, wordToReplace) {
    let checkWord = phrase.indexOf(wordToReplace);
    if (!checkWord) {
        let errorMessage = "Ce mot n'est pas présent dans la phrase";
    } else {
        let wordToWrite = prompt(`Par quel mot voulez-vous le remplacer ?`);
        return wordToWrite;
    }
};

function replaceWord(phrase, wordToWrite, wordToReplace) {
    let numeroIndex = phrase.indexOf(wordToReplace);
    phrase[numeroIndex] = wordToWrite;
};

let phrase = ["bonjour","ca","va"];
let wordToReplace = prompt(`Quel mot de cette phrase voulez-vous remplacer ? ${removeComa(phrase)}`);

checkWord(phrase, wordToReplace);
replaceWord(phrase, wordToWrite, wordToReplace);
