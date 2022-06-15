
function removeComa(phrase) {
    let phraseprompt = phrase.join(" ");
    return phraseprompt;
}

function checkWord(phrase) {
    let checkWord = phrase.indexOf(wordToReplace);
    if (!checkWord) {
        let errorMessage = "Ce mot n'est pas présent dans la phrase";
    } else {
        let wordToWrite = prompt(`Par quel mot voulez-vous le remplacer ?`);
        return wordToWrite;
    }
};

function replaceWord(phrase) {
    let numeroIndex = phrase.indexOf(wordToReplace);
    phrase[numeroIndex] = wordToWrite;
};

let phrase = ["Le", "train", "de", "injures", "roulent", "sur", "les", "rails", "de", "mon", "indifférence", "et", "n'atteindra", "jamais", "la", "gare", "de", "mon", "estime"];
let wordToReplace = prompt(`Quel mot de cette phrase voulez-vous remplacer ? ${phraseprompt}`);


removeComa(phrase);
checkWord(phrase);
replaceWord(phrase);
console.log(phrase.join(" "));